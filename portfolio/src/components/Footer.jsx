import { profile } from '../data/projects'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:px-6 md:flex-row md:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.positioning}</p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a className="font-medium text-muted hover:text-ink" href={`mailto:${profile.email}`}>
            Email
          </a>
          <a
            className="font-medium text-muted hover:text-ink"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-medium text-muted hover:text-ink"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-4 font-mono text-xs text-muted sm:px-6">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind.
        </p>
      </div>
    </footer>
  )
}
