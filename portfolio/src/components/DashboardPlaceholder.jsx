// DashboardPlaceholder, a tasteful stand-in until a real dashboard screenshot
// is dropped in. Replace by rendering an <img> instead of this component.

export default function DashboardPlaceholder({ label = 'Power BI dashboard' }) {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-line bg-bg px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-2 font-mono text-xs text-muted">{label}</span>
      </div>
      <div className="relative grid h-64 place-items-center bg-grid bg-cell sm:h-80">
        <div className="text-center">
          <div className="mx-auto grid h-12 w-12 place-items-center rounded-lg border border-line bg-surface">
            <svg className="h-6 w-6 text-muted" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 20V10M10 20V4M16 20v-7M22 20H2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="mt-3 font-mono text-xs text-muted">
            Dashboard screenshot, add yours here
          </p>
        </div>
      </div>
    </div>
  )
}
