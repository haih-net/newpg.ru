import { pages } from './pages'
import { inventory } from './inventory'
import type { ArchiveResult } from './interfaces'

export const getArchivePage = (requestedPath: string): ArchiveResult => {
  const path = requestedPath.replace(/\/+$/, '') || '/'
  const page = Object.hasOwn(pages, path) ? pages[path] : null
  const known = inventory.find((entry) => entry.path === path)

  return {
    path,
    page: page
      ? {
          isFilled: page.isFilled,
          title: page.title,
          description: page.description,
          archiveUrl: page.archiveUrl,
        }
      : null,
    publicationDate: known?.publicationDate ?? null,
    statusCode: page ? 200 : known && known.status !== '404' ? 503 : 404,
  }
}
