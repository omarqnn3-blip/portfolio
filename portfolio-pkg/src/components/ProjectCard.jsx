import { Link } from 'react-router-dom'

// ProjectCard — large clickable card used on the homepage.
// Reads a single project object from projects.js.

const accentBar = {
  accent: 'bg-accent',
  risk: 'bg-risk',
  caution: 'bg-caution',
}

export default function ProjectCard({ project }) {
  const bar = accentBar[project.accent] || 'bg-accent'

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="card group relative flex h-full flex-col overflow-hidden p-6
        transition-shadow duration-200 hover:shadow-lift
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent
        focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      {/* role-coded accent edge */}
      <span className={`absolute inset-x-0 top-0 h-1 ${bar}`} aria-hidden />

      <div className="flex items-center justify-between">
        <span className="font-mono text-sm font-medium text-muted">
          {project.index}
        </span>
        <span className="eyebrow">Case study</span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-ink">
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.focus.map((f) => (
          <span
            key={f}
            className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-ink/80"
          >
            {f}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-accent">
          View case study
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <span className="font-mono text-xs text-muted">
          {project.tools.join(' · ')}
        </span>
      </div>
    </Link>
  )
}
