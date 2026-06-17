import { profile } from '../data/projects'

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* faint spreadsheet/chart grid, the analyst's worksheet motif */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-cell opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-24">
        <div className="animate-rise max-w-3xl">
          <p className="eyebrow">{profile.positioning}</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href={`mailto:${profile.email}`} className="btn-ghost">
              Get in touch
            </a>
            <a href={profile.resumeUrl} download className="btn-ghost">
              Download CV
            </a>
          </div>

          {/* target roles as a mono index strip */}
          <div className="mt-10">
            <p className="eyebrow">Target roles</p>
            <p className="mt-3 font-mono text-sm leading-relaxed text-ink/70">
              {profile.targetRoles.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
