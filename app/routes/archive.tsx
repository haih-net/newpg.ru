import type * as React from 'react'
import {
  data,
  Link,
  useLoaderData,
  type LoaderFunctionArgs,
  type MetaFunction,
} from 'react-router'
import { createSeoMeta } from '../components/seo/SeoHeaders'
import { getArchivePage } from '../Custom/Archive/content.server'
import { pages } from '../Custom/Archive/pages'

export const loader = ({ params }: LoaderFunctionArgs) => {
  const result = getArchivePage(params['*'] ? '/' + params['*'] : '/')
  return data(result, { status: result.statusCode })
}

export const meta: MetaFunction<typeof loader> = ({ loaderData: result }) =>
  createSeoMeta({
    title:
      result?.page?.title ??
      (result?.statusCode === 503
        ? 'Страница ещё не восстановлена — Новая Парадигма'
        : '404 — Страница не найдена — Новая Парадигма'),
    description:
      result?.page?.description ??
      'Восстановление исторического сайта веб-студии «Новая Парадигма».',
    path: result?.path,
    publicationDate: result?.publicationDate ?? undefined,
    noindex: !result?.page,
  })

const ArchivePage: React.FC = () => {
  const result = useLoaderData<typeof loader>()
  const Component = Object.hasOwn(pages, result.path)
    ? pages[result.path].Component
    : null

  if (result.page && Component) {
    return (
      <>
        <Component />
      </>
    )
  }

  return (
    <section className="archive-unavailable">
      <h1 tabIndex={-1}>
        {result.statusCode === 503
          ? 'Страница ещё не восстановлена'
          : '404 — Страница не найдена'}
      </h1>
      <p>
        <code>{result.path}</code>
      </p>
      <p>
        {result.statusCode === 503
          ? 'Адрес известен из старого сайта или sitemap. Это заглушка: локального документа пока нет, загрузка из архива приостановлена. Это не подтверждённый 404 архива.'
          : 'Для этого адреса нет восстановленной страницы.'}
      </p>
      <Link to="/">На главную</Link>
    </section>
  )
}

export default ArchivePage
