/* eslint-disable */
import fs from 'node:fs'
import path from 'node:path'
import { parse, serializeOuter } from 'parse5'

const sourceDir = 'app/Custom/Archive/source/documentation'
const records = JSON.parse(
  fs.readFileSync(`${sourceDir}/requests.json`, 'utf8'),
).filter((row) => row.status === 200)
records.push({
  path: '/documentation/extjs/extjs_lessons/lesson2.html',
  file: 'lesson2.html',
  url: 'https://web.archive.org/web/20101207063310id_/http://newpg.ru/documentation/extjs/extjs_lessons/lesson2.html',
})
const nodes = (node) => [node, ...(node.childNodes ?? []).flatMap(nodes)]
const attr = (node, name) => node.attrs?.find((a) => a.name === name)?.value
const set = (node, name, value) => {
  const a = node.attrs.find((a) => a.name === name)
  if (a) a.value = value
  else node.attrs.push({ name, value })
}
const text = (node) =>
  node.nodeName === '#text'
    ? node.value
    : (node.childNodes ?? []).map(text).join('')
const q = (value) => JSON.stringify(value)
const voids = new Set(['input', 'img', 'br', 'hr', 'col'])
const imports = [],
  entries = [],
  snapshots = {},
  discovered = new Map(),
  missing = new Set()
const jsx = (node) => {
  if (node.nodeName === '#text') return `{${q(node.value)}}`
  if (node.nodeName === '#comment')
    return `{/*${node.data.replaceAll('*/', '* /')}*/}`
  const tag = node.tagName
  if (!tag) return (node.childNodes ?? []).map(jsx).join('')
  const link =
    tag === 'a' &&
    attr(node, 'href')?.startsWith('/') &&
    !attr(node, 'target') &&
    !attr(node, 'href').startsWith('/ExtJS/')
  const outputTag = link ? 'Link' : tag
  const attributes = node.attrs.flatMap(({ name, value }) => {
    if (tag === 'tr' && name === 'height') return []
    if (name === 'data-example')
      return [`onClick={examples[${q(value)}]}`, 'disabled={!ready}']
    if (name === 'style') {
      const styles = Object.fromEntries(
        value
          .split(';')
          .filter((x) => x.includes(':'))
          .map((x) => {
            const i = x.indexOf(':')
            return [
              x
                .slice(0, i)
                .trim()
                .replace(/-([a-z])/g, (_, c) => c.toUpperCase()),
              x.slice(i + 1).trim(),
            ]
          }),
      )
      return [`style={${q(styles)} as React.CSSProperties}`]
    }
    const key =
      {
        class: 'className',
        href: link ? 'to' : 'href',
        colspan: 'colSpan',
        rowspan: 'rowSpan',
        cellpadding: 'cellPadding',
        cellspacing: 'cellSpacing',
        tabindex: 'tabIndex',
        valign: 'vAlign',
        readonly: 'readOnly',
      }[name] ?? name
    if (
      [
        'border',
        'width',
        'height',
        'colSpan',
        'rowSpan',
        'tabIndex',
        'span',
      ].includes(key) &&
      /^-?\d+$/.test(value)
    )
      return [`${key}={${value}}`]
    return [`${key}=${q(value)}`]
  })
  return `<${outputTag} ${attributes.join(' ')}${voids.has(tag) ? ' />' : `>${(node.childNodes ?? []).map(jsx).join('')}</${outputTag}>`}`
}
for (const record of records) {
  const doc = parse(fs.readFileSync(`${sourceDir}/${record.file}`, 'utf8'))
  const all = nodes(doc)
  const center = all.find((n) => attr(n, 'class') === 'center_block')
  if (!center) throw Error('Не найден текст ' + record.path)
  const left = all.find((n) => attr(n, 'class') === 'left_block')
  const menu =
    left &&
    nodes(left).find(
      (n) =>
        attr(n, 'class') === 'menu' &&
        nodes(n).some(
          (child) => child.tagName === 'ul' && attr(child, 'class') === 'menu',
        ),
    )
  const wrapper = parse(
    '<div class="middle"><div class="left_block"></div></div>',
  )
  const middle = nodes(wrapper).find((n) => attr(n, 'class') === 'middle')
  if (menu) middle.childNodes[0].childNodes = [menu]
  middle.childNodes.push(
    center,
    nodes(parse('<div class="clear"></div>')).find(
      (n) => attr(n, 'class') === 'clear',
    ),
  )
  const actions = []
  for (const node of nodes(middle)) {
    if (!node.tagName) continue
    if (['script', 'iframe'].includes(node.tagName))
      throw Error('Нужно разобрать встроенный скрипт ' + record.path)
    for (const name of ['href', 'src']) {
      let value = attr(node, name)
      if (!value) continue
      const url = new URL(value, 'http://newpg.ru/')
      if (url.hostname === 'newpg.ru') {
        value = url.pathname + url.search + url.hash
        if (value === '/ExtJS/docs' || value === '/ExtJS/examples')
          value += '/index.html'
        set(node, name, value)
        if (value.startsWith('/documentation/') && value.endsWith('.html'))
          discovered.set(value, text(node))
      }
    }
    if (node.tagName === 'a' && attr(node, 'target') === '_blank')
      set(node, 'rel', 'noopener noreferrer')
    if (node.tagName === 'h1') set(node, 'tabindex', '-1')
    if (
      node.tagName === 'img' &&
      !fs.existsSync('public' + attr(node, 'src'))
    ) {
      const src = attr(node, 'src')
      missing.add(src)
      const label =
        attr(node, 'title') || attr(node, 'alt') || path.basename(src)
      node.tagName = 'span'
      node.nodeName = 'span'
      node.attrs = [
        { name: 'class', value: 'image-placeholder' },
        { name: 'data-source', value: src },
      ]
      node.childNodes = [
        {
          nodeName: '#text',
          value: label + ' — изображение пока не получено из архива',
          parentNode: node,
        },
      ]
    }
    const handler = attr(node, 'onclick')
    if (handler) {
      if (!/^[\w.]+\(\);$/.test(handler))
        throw Error('Неизвестный обработчик ' + handler)
      const action = handler.slice(0, -3)
      actions.push(action)
      node.attrs = node.attrs.filter((a) => a.name !== 'onclick')
      set(node, 'data-example', action)
    }
  }
  const lesson = record.path.match(/lesson(\d)\.html$/)?.[1]
  const names = {
    'modx.html': 'ModxPage',
    'modx-revolution.html': 'ModxRevolutionPage',
    'modx-revolution-optimizatsiya-kesh.html': 'ModxCachePage',
    'modx-revolution-po-shagam.html': 'ModxStepsPage',
    'modx-revolution-ustanovka.html': 'ModxInstallationPage',
    'modx-revolution-fajlovaya-model.html': 'ModxFilesPage',
    'ustanovka-dopolnitelnyh-paketov-na-modx-revolution.html':
      'ModxPackagesPage',
    'modx-revolution-nastrojki-bezopasnosti.html': 'ModxSecurityPage',
    'xpdo.html': 'XpdoPage',
    'xpdo-urok-1.-getobject.html': 'XpdoLesson1Page',
    'xpdo-urok-2.-getcollection.html': 'XpdoLesson2Page',
    'xpdo-urok-3.-newquery.html': 'XpdoLesson3Page',
    'xpdo-urok-4.-select.html': 'XpdoLesson4Page',
    'extjs_lessons.html': 'ExtJsLessonsPage',
  }
  const name = lesson
    ? 'ExtJsLesson' + lesson + 'Page'
    : names[path.basename(record.path)]
  if (!name) throw Error('Нужно назначить компонент для ' + record.path)

  const script =
    lesson && lesson !== '6'
      ? `/js/ExtJS/lessons/lesson${lesson === '4' ? '3' : lesson}.js`
      : null
  const dir = 'app/Custom/pages/' + name
  fs.mkdirSync(dir, { recursive: true })
  const code = `import type * as React from 'react'
import { Link } from 'react-router'
import { DocumentationLayout${actions.length ? ', DocumentationReady' : ''} } from '../../DocumentationLayout'
${actions.length ? `import { useContext } from 'react'\nimport { runDocumentationExample, type DocumentationExample } from '../../DocumentationLayout/runtime'\nconst examples: Partial<Record<DocumentationExample, () => void>> = {${actions.map((a) => `${q(a)}: () => runDocumentationExample(${q(a)})`).join(',')}}` : ''}
const scripts: readonly string[] = ${q(script ? [script] : [])}
const Content: React.FC = () => {${actions.length ? 'const ready = useContext(DocumentationReady)' : ''}
return (${jsx(middle)})}
export const ${name}: React.FC = () => <DocumentationLayout scripts={scripts}><Content /></DocumentationLayout>
`
  fs.writeFileSync(dir + '/index.tsx', code)
  const title = text(all.find((n) => n.tagName === 'title')).trim()
  const description = all.find(
    (n) =>
      n.tagName === 'meta' && attr(n, 'name')?.toLowerCase() === 'description',
  )
  const meta = {
    isFilled: true,
    title,
    description: attr(description, 'content') || title,
    archiveUrl: record.url,
  }
  const clean = structuredClone(middle)
  for (const n of nodes(clean))
    if (n.attrs) n.attrs = n.attrs.filter((a) => a.name !== 'data-example')
  snapshots[record.path] = { ...meta, html: serializeOuter(clean) }
  imports.push(`import { ${name} } from '../pages/${name}'`)
  entries.push(`${q(record.path)}: {...${q(meta)}, Component: ${name}}`)
}
fs.writeFileSync(
  'app/Custom/Archive/documentation.ts',
  `import type { PageRegistry } from './interfaces'\n${imports.join('\n')}\nexport const documentationPages: PageRegistry = {${entries.join(',\n')}}\n`,
)
fs.writeFileSync(
  'app/Custom/Archive/documentation-snapshots.json',
  JSON.stringify(snapshots, null, 2) + '\n',
)
fs.writeFileSync(
  sourceDir + '/discovered.json',
  JSON.stringify(
    [...discovered].map(([path, title]) => ({ path, title })),
    null,
    2,
  ) + '\n',
)
fs.writeFileSync(
  sourceDir + '/missing-images.json',
  JSON.stringify([...missing], null, 2) + '\n',
)
console.log(
  'Восстановлено страниц:',
  records.length,
  'Недостающих изображений:',
  missing.size,
)
