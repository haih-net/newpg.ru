import {
  installLayoutCleanup,
  type LegacyContainerLifecycle,
} from './compatibility'

export interface LegacyExt {
  Container: { prototype: LegacyContainerLifecycle }
  BLANK_IMAGE_URL: string
  onReady: (callback: () => void) => void
  Msg: { minWidth: number; hide: () => void; getDialog: () => LegacyComponent }
  WindowMgr: {
    hideAll: () => void
    each: (callback: (component: LegacyComponent) => void) => void
  }
}

export type LessonExample = 'hello1' | 'hello2' | 'hello3' | 'hello4' | 'hello5'

export type LegacyWindow = Window &
  Partial<Record<LessonExample, () => void>> & {
    Ext?: LegacyExt
    prettyPrint?: () => void
  }

const loadedScripts = new Map<string, Promise<void>>()

export const loadLegacyScript = (src: string): Promise<void> => {
  const existing = loadedScripts.get(src)
  if (existing) {
    return existing
  }
  const promise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    script.onload = () => resolve()
    script.onerror = () => {
      script.remove()
      loadedScripts.delete(src)
      reject(new Error(`Не удалось загрузить ${src}`))
    }
    document.head.append(script)
  })
  loadedScripts.set(src, promise)
  return promise
}

export const runLessonExample = (example: LessonExample): void => {
  const legacy = window as LegacyWindow
  legacy[example]?.()
}

export type DocumentationExample =
  | 'showWindow'
  | 'showFeedbackWin'
  | 'WINDOW.showToolbar'
  | 'WINDOW.showAllBars'
  | 'WINDOW.showResizable'
  | 'WINDOW.showWithTools'
  | 'Grid.showGrid'

interface LegacyComponent {
  id: string
  destroy: () => void
}

interface WindowExamples {
  win?: LegacyComponent | false
  toolbar: { items: { icon: string }[] }
  showToolbar: () => void
  showAllBars: () => void
  showResizable: () => void
  showWithTools: () => void
}

export type DocumentationWindow = LegacyWindow & {
  showWindow?: () => void
  showFeedbackWin?: () => void
  WINDOW?: WindowExamples
  Grid?: {
    win?: LegacyComponent | false
    store?: { destroy: () => void }
    showGrid: () => void
  }
}

export const prepareDocumentationExamples = (): void => {
  const legacy = window as DocumentationWindow
  if (legacy.Ext) {
    installLayoutCleanup(legacy.Ext.Container.prototype)
  }
  const items = legacy.WINDOW?.toolbar.items
  if (items) {
    items[0].icon = '/ExtJS/examples/shared/icons/fam/add.png'
    items[1].icon = '/ExtJS/examples/shared/icons/fam/delete.gif'
  }
}

export const runDocumentationExample = (action: DocumentationExample): void => {
  const legacy = window as DocumentationWindow
  switch (action) {
    case 'showWindow':
      legacy.showWindow?.()
      break
    case 'showFeedbackWin':
      legacy.showFeedbackWin?.()
      break
    case 'WINDOW.showToolbar':
      legacy.WINDOW?.showToolbar()
      break
    case 'WINDOW.showAllBars':
      legacy.WINDOW?.showAllBars()
      break
    case 'WINDOW.showResizable':
      legacy.WINDOW?.showResizable()
      break
    case 'WINDOW.showWithTools':
      legacy.WINDOW?.showWithTools()
      break
    case 'Grid.showGrid':
      legacy.Grid?.showGrid()
      break
  }
}

export const disposeDocumentationExamples = (): void => {
  const legacy = window as DocumentationWindow
  legacy.Ext?.Msg.hide()
  const messageId = legacy.Ext?.Msg.getDialog().id
  const windows: LegacyComponent[] = []
  legacy.Ext?.WindowMgr.each((component) => {
    if (component.id !== messageId) {
      windows.push(component)
    }
  })
  windows.forEach((component) => component.destroy())
  if (legacy.WINDOW) {
    legacy.WINDOW.win = false
  }
  if (legacy.Grid) {
    legacy.Grid.win = false
    legacy.Grid.store?.destroy()
    delete legacy.Grid.store
  }
}
