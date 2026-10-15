import { createContext, useEffect, useState } from 'react'
import type * as React from 'react'
import {
  loadLegacyScript,
  prepareDocumentationExamples,
  disposeDocumentationExamples,
  type LegacyWindow,
} from './runtime'
import { DocumentationWrapper } from './styles'

export const DocumentationReady = createContext<boolean>(false)

const stylesheets: readonly string[] = [
  '/ExtJS/resources/css/ext-all.css',
  '/css/jsLessons.css',
  '/js/google/prettify/prettify.css',
]
const libraryScripts: readonly string[] = [
  '/ExtJS/adapter/ext/ext-base.js',
  '/ExtJS/ext-all.js',
  '/ExtJS/bugFix/fix.js',
  '/js/google/prettify/prettify.js',
]

interface DocumentationLayoutProps extends React.PropsWithChildren {
  readonly scripts: readonly string[]
}

export const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({
  children,
  scripts,
}) => {
  const [ready, setReady] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true
    const links: HTMLLinkElement[] = []
    const css = stylesheets.map(
      (href) =>
        new Promise<void>((resolve, reject) => {
          const link = document.createElement('link')
          link.rel = 'stylesheet'
          link.dataset.documentation = ''
          link.href = href
          link.onload = () => resolve()
          link.onerror = () => reject(new Error(`Не удалось загрузить ${href}`))
          links.push(link)
          document.head.append(link)
        }),
    )
    const initialize = async (): Promise<void> => {
      await Promise.all(css)
      for (const src of [...libraryScripts, ...scripts]) {
        if (!active) {
          return
        }
        await loadLegacyScript(src)
      }
      const legacy = window as LegacyWindow
      if (!active || !legacy.Ext) {
        return
      }
      legacy.Ext.BLANK_IMAGE_URL = '/ExtJS/resources/images/default/s.gif'
      await new Promise<void>((resolve) => legacy.Ext?.onReady(resolve))
      if (!active) {
        return
      }
      legacy.Ext.Msg.minWidth = 100
      prepareDocumentationExamples()
      legacy.prettyPrint?.()
      setReady(true)
    }
    void initialize().catch((reason: unknown) => {
      if (active) {
        setError(reason instanceof Error ? reason.message : String(reason))
      }
    })
    return () => {
      active = false
      disposeDocumentationExamples()
      links.forEach((link) => link.remove())
    }
  }, [scripts])

  return (
    <DocumentationWrapper>
      {error && (
        <p role="alert">
          Примеры не загрузились: {error}. Перезагрузите страницу.
        </p>
      )}
      <DocumentationReady.Provider value={ready}>
        {children}
      </DocumentationReady.Provider>
    </DocumentationWrapper>
  )
}
