import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import { ArchiveShell } from './styles'

export const ArchiveLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const location = useLocation()

  useEffect(() => {
    document
      .querySelector<HTMLElement>('main h1')
      ?.focus({ preventScroll: true })
  }, [location.pathname])

  return (
    <ArchiveShell>
      <div className="body">
        <div>
          <Header />
        </div>
        <main id="main-content">{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </ArchiveShell>
  )
}
