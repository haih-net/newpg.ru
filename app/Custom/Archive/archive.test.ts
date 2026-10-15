import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import { describe, expect, test } from 'vitest'
import { getArchivePage } from './content.server'
import { pages } from './pages'
import { snapshots } from './snapshots'
import { inventory } from './inventory'

describe('Восстановление исторических URL', () => {
  test.each(Object.keys(pages))(
    'сохранённый адрес %s доступен без переименования',
    (path) => {
      const result = getArchivePage(path)
      expect(result.statusCode).toBe(200)
      expect(snapshots[path].html.length).toBeGreaterThan(100)
      expect(result.page?.archiveUrl).toContain('web.archive.org/web/')
    },
  )
  test('не выдаёт сетевой отказ архива за отсутствие страницы', () => {
    const unavailable = inventory.find((entry) => entry.status === 'unverified')
    expect(unavailable).toBeDefined()
    expect(getArchivePage(unavailable?.path ?? '').statusCode).toBe(503)
  })
  test.each(['/not-found.html', '/__proto__', '/constructor', '/blog'])(
    'неизвестный адрес %s возвращает 404',
    (path) => {
      expect(getArchivePage(path).statusCode).toBe(404)
      expect(getArchivePage(path).page).toBeNull()
    },
  )
  test('оба исторических адреса статьи сохранены', () => {
    const first = getArchivePage(
      '/services/poddergka-prodvigenie/kak-samomu-obnovliat-site.html',
    )
    const second = getArchivePage(
      '/services/poddergka-prodvigenie/kak-obnovlyat-sait-samomu.html',
    )
    expect(first.page).toEqual(second.page)
  })
  test('разметка не исполняет старые скрипты и не обращается за ресурсами в архив', () => {
    for (const page of Object.values(snapshots)) {
      expect(page.html).not.toMatch(/<script\b|<iframe\b|<[^>]+\son[a-z]+=/i)
      expect(page.html).not.toMatch(
        /(?:src|href)=["']https?:\/\/(?:www\.)?newpg\.ru\//i,
      )
      expect(page.html).not.toMatch(/(?:src|srcset)=["']https?:\/\//i)
    }
  })
})

describe('Даты и заглушки из sitemap владельца', () => {
  test.each(inventory.filter((entry) => entry.publicationDate !== null))(
    '$path сохраняет дату sitemap даже без HTML',
    (entry) => {
      const result = getArchivePage(entry.path)
      expect(result.publicationDate).toBe(entry.publicationDate)
      expect(result.statusCode).toBe(entry.status === 'restored' ? 200 : 503)
    },
  )
  test('index.html использует сохранённую главную с той же датой', () => {
    expect(getArchivePage('/index.html').page).toEqual(getArchivePage('/').page)
    expect(getArchivePage('/index.html').publicationDate).toBe('2011-04-16')
    expect(getArchivePage('/').publicationDate).toBe('2011-04-16')
  })
  test('похожий URL не подменяет отсутствующий документ', () => {
    expect(getArchivePage('/stati/primer-audita-sayta.html').page).toBeNull()
    expect(
      getArchivePage('/stati/primer-audita-sayta.html').publicationDate,
    ).toBe('2011-04-18')
  })
  test('адресу вне sitemap не придумывается дата', () => {
    expect(
      getArchivePage(
        '/nashi-proekty/filmografiya.tv/optimizatsiya-bazy-dannyh.html',
      ).publicationDate,
    ).toBeNull()
  })
})

// Текущий текст добавлен на главную после восстановления архивного содержимого.
const mainPageIntroduction: string = [
  'Создаём корпоративные сайты, порталы, каталоги и интернет-магазины. Начинаем с задач Вашего бизнеса: определяем, кому адресован сайт, какую информацию ищут посетители и как помочь им выбрать товар или услугу. На этой основе продумываем структуру, дизайн и функциональность будущего сайта.',
  'Разрабатываем удобную навигацию, адаптируем страницы для компьютеров и мобильных устройств, подключаем Систему Управления Контентом для самостоятельного обновления материалов. Перед запуском проверяем работу страниц и форм, помогаем с размещением сайта. После запуска Вы можете обратиться к нам за поддержкой, обновлением и дальнейшим развитием проекта.',
  'Создадим сайт для решения задач Вашего бизнеса!',
].join(' ')

// Compare the actual React output with the archived source, not with another registry.
describe('Страницы сохраняют архивное содержимое и актуальные дополнения', () => {
  test.each(Object.entries(pages))(
    '%s содержит ожидаемые тексты, ссылки и признак наполненности',
    (path, page) => {
      const rendered = renderToStaticMarkup(
        createElement(MemoryRouter, null, createElement(page.Component)),
      )
      let expectedText: string = visibleText(snapshots[path].html)
      if (path === '/' || path === '/index.html') {
        const introductionBoundary = 'многое другое... Поисковое продвижение'
        expect(expectedText).toContain(introductionBoundary)
        expectedText = expectedText.replace(
          introductionBoundary,
          `многое другое... ${mainPageIntroduction} Поисковое продвижение`,
        )
      }
      if (path === '/contacts.html') {
        expectedText = expectedText
          .replace(
            'Наш адрес: 119019, г. Москва, ул. Новый Арбат 21, оф. 2307 ',
            '',
          )
          .replace('Телефон: +7 (495) 774-67-02 ', '')
          .replace(' Просмотреть увеличенную карту', '')
      }
      const renderedText: string = visibleText(rendered)
      expect(renderedText).toBe(expectedText)
      const isFilled: boolean = !renderedText.includes(
        'Информация готовится к публикации!',
      )
      expect(page.isFilled).toBe(isFilled)
      expect(getArchivePage(path).page?.isFilled).toBe(isFilled)
      expect(links(rendered)).toEqual(
        links(snapshots[path].html).filter(
          (href) =>
            path !== '/contacts.html' ||
            !href.startsWith('http://maps.google.ru/'),
        ),
      )
      expect(rendered).not.toMatch(/<script\b|<iframe\b|<[^>]+\son[a-z]+=/i)
      expect(getArchivePage(path).page).not.toHaveProperty('Component')
      expect(getArchivePage(path).page).not.toHaveProperty('html')
    },
  )
})

const decode = (value: string): string =>
  value.replace(
    /&(?:amp|quot|apos|lt|gt|nbsp|raquo|#\d+|#x[\da-f]+);/gi,
    (entity) => {
      if (entity.startsWith('&#')) {
        return String.fromCodePoint(
          entity[2].toLowerCase() === 'x'
            ? parseInt(entity.slice(3, -1), 16)
            : parseInt(entity.slice(2, -1), 10),
        )
      }
      const entities: Record<string, string> = {
        '&amp;': '&',
        '&quot;': '"',
        '&apos;': "'",
        '&lt;': '<',
        '&gt;': '>',
        '&nbsp;': ' ',
        '&raquo;': '»',
      }
      return entities[entity]
    },
  )

const visibleText = (markup: string): string =>
  decode(
    withoutPortfolio(markup)
      .replace(/<img\b[^>]*\balt="([^"]*)"[^>]*>/g, '$1')
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(
        /<\/?(?:div|p|ul|ol|li|table|tbody|tr|td|h[1-6]|figure|figcaption|br|hr)\b[^>]*>/g,
        ' ',
      )
      .replace(/<[^>]+>/g, ''),
  )
    .replace(/\s+/g, ' ')
    .trim()

const links = (markup: string): string[] =>
  Array.from(
    withoutPortfolio(markup)
      .replace(/<!--[\s\S]*?-->/g, '')
      .matchAll(/<a\b[^>]*\bhref="([^"]*)"/g),
    (match) => decode(match[1]),
  )

// Карусель показывает проверенные актуальные сайты, остальные тексты сверяем с архивом.
const withoutPortfolio = (markup: string): string => {
  const start = markup.search(/<div\b[^>]*\bid="galery_1"/)
  if (start < 0) {
    return markup
  }
  const tags = /<\/?div\b[^>]*>/g
  tags.lastIndex = start
  let depth = 0
  let match: RegExpExecArray | null
  while ((match = tags.exec(markup))) {
    depth += match[0].startsWith('</') ? -1 : 1
    if (depth === 0) {
      return markup.slice(0, start) + markup.slice(tags.lastIndex)
    }
  }
  return markup
}
