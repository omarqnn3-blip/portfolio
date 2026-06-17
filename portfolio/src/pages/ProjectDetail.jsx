import { Link, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import KPIGrid from '../components/KPIGrid'
import DashboardPlaceholder from '../components/DashboardPlaceholder'

const accentText = {
  accent: 'text-accent',
  risk: 'text-risk',
  caution: 'text-caution',
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) {
    return (
      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-6">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
          Project not found
        </h1>
        <Link to="/" className="btn-primary mt-6">
          Back to home
        </Link>
      </div>
    )
  }

  const accent = accentText[project.accent] || 'text-accent'

  return (
    <article className="animate-rise">
      {/* Header */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 font-mono text-xs font-medium text-muted hover:text-ink"
          >
            <span aria-hidden>←</span> All projects
          </Link>

          <div className="mt-6 flex items-baseline gap-3">
            <span className={`font-mono text-sm font-semibold ${accent}`}>
              {project.index}
            </span>
            <span className="eyebrow">Case study</span>
          </div>

          <h1 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>

          {project.disclaimer && (
            <p className="mt-5 max-w-2xl rounded-md border border-line bg-bg px-4 py-3 text-xs leading-relaxed text-muted">
              {project.disclaimer}
            </p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <GitHubIcon /> GitHub repo
            </a>
            <a href={project.summaryUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              Executive summary
            </a>
            {project.extraLinks?.map((link) => (
              <a
                key={link.label}
                href={link.href}
                download
                className="btn-ghost"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 md:py-16">
        {/* Problem + Objective */}
        <div className="grid gap-8 md:grid-cols-2">
          <Block eyebrow="Business problem" body={project.problem} />
          <Block eyebrow="Objective" body={project.objective} />
        </div>

        {/* Tools */}
        <div className="mt-10">
          <p className="eyebrow">Tools used</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <span
                key={tool}
                className="rounded-md border border-line bg-surface px-3 py-1.5 font-mono text-sm font-medium text-ink"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Process / Approach */}
        {project.process?.length > 0 && (
          <div className="mt-12">
            <p className="eyebrow">Process</p>
            <ol className="mt-4 space-y-4">
              {project.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mt-0.5 font-mono text-sm font-semibold text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm leading-relaxed text-ink/90">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {/* KPIs */}
        <div className="mt-12">
          <p className="eyebrow">Key metrics</p>
          <div className="mt-4">
            <KPIGrid kpis={project.kpis} columns={4} />
          </div>
        </div>

        {/* Dashboard — real screenshots when available, placeholder otherwise */}
        <div className="mt-12">
          <p className="eyebrow">Dashboard</p>
          {project.images?.length ? (
            <div className="mt-4 space-y-8">
              {project.images.map((img, i) => (
                <figure key={i} className="card overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption || `${project.title} dashboard ${i + 1}`}
                    className="w-full"
                    loading="lazy"
                  />
                  {img.caption && (
                    <figcaption className="border-t border-line px-4 py-3 font-mono text-xs text-muted">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          ) : (
            <div className="mt-4">
              <DashboardPlaceholder label={`${project.title} · dashboard`} />
            </div>
          )}
        </div>

        {/* Insights + Recommendations */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <ListBlock eyebrow="Key insights" items={project.insights} marker="bg-ink" />
          <ListBlock
            eyebrow="Business recommendations"
            items={project.recommendations}
            marker="bg-accent"
          />
        </div>

        {/* Learnings */}
        {project.learnings?.length > 0 && (
          <div className="mt-12">
            <ListBlock
              eyebrow="What I'd do differently"
              items={project.learnings}
              marker="bg-caution"
            />
          </div>
        )}

        {/* Target roles */}
        <div className="mt-12 border-t border-line pt-8">
          <p className="eyebrow">Relevant for</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.targetRoles.map((role) => (
              <span
                key={role}
                className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink/80"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

function Block({ eyebrow, body }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <p className="mt-3 leading-relaxed text-ink/90">{body}</p>
    </div>
  )
}

function ListBlock({ eyebrow, items, marker }) {
  return (
    <div>
      <p className="eyebrow">{eyebrow}</p>
      <ul className="mt-4 space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/90">
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${marker}`} aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  )
}
