import type * as React from 'react'

export interface PageMetadata {
  /** Есть содержимое страницы, а не только заглушка о подготовке публикации. */
  readonly isFilled: boolean
  readonly title: string
  readonly description: string
  readonly archiveUrl: string
}

export interface SitePage extends PageMetadata {
  readonly Component: React.FC
}

export type PageRegistry = Readonly<Record<string, SitePage>>

export interface ArchiveSnapshot extends PageMetadata {
  readonly html: string
}

export type ArchiveSnapshots = Readonly<Record<string, ArchiveSnapshot>>

export interface ArchiveInventoryEntry {
  readonly path: string
  readonly title: string
  readonly discoveredOn: readonly string[]
  readonly status: 'restored' | 'unverified' | '404'
  readonly archiveUrl: string
  readonly httpStatus: string
  readonly publicationDate: string | null
  readonly dateSource: 'sitemap:lastmod' | null
}

export interface ArchiveResult {
  readonly path: string
  readonly page: PageMetadata | null
  readonly publicationDate: string | null
  readonly statusCode: 200 | 404 | 503
}
