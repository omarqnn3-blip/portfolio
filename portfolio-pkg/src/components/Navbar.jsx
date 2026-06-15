import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/projects'

export default function Navbar() {
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  // On the home page, links scroll to sections; elsewhere they route home first.
  const sectionLink = (hash) => (onHome ? hash : `/${hash}`)

  return (
    <header className="sticky top-0 z-30 border-b border-line/80 bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 font-display text-base font-semibold text-ink"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md bg-ink font-mono text-sm font-semibold text-white">
            OQ
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <a
            href={sectionLink('#projects')}
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink sm:inline-block"
          >
            Projects
          </a>
          <a
            href={sectionLink('#skills')}
            className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink sm:inline-block"
          >
            Skills
          </a>
          <a href={`mailto:${profile.email}`} className="btn-primary">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
