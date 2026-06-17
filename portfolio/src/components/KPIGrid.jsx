// KPIGrid, renders dashboard-style metric tiles.
// Each KPI is { value, label, tone } where tone ∈ 'positive' | 'caution' | 'risk' | 'neutral'.
// Numbers use the mono face + tabular figures so they align like a real dashboard.

const toneStyles = {
  positive: { dot: 'bg-positive', value: 'text-positive' },
  caution: { dot: 'bg-caution', value: 'text-caution' },
  risk: { dot: 'bg-risk', value: 'text-risk' },
  neutral: { dot: 'bg-muted', value: 'text-ink' },
}

export default function KPIGrid({ kpis = [], columns = 4 }) {
  const colClass =
    {
      2: 'sm:grid-cols-2',
      3: 'sm:grid-cols-3',
      4: 'sm:grid-cols-2 lg:grid-cols-4',
    }[columns] || 'sm:grid-cols-2 lg:grid-cols-4'

  return (
    <div className={`grid grid-cols-1 gap-3 ${colClass}`}>
      {kpis.map((kpi, i) => {
        const tone = toneStyles[kpi.tone] || toneStyles.neutral
        return (
          <div key={i} className="card p-4">
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} aria-hidden />
              <span className="eyebrow">{kpi.label}</span>
            </div>
            <p
              className={`mt-3 font-mono text-3xl font-semibold tabular tracking-tight ${tone.value}`}
            >
              {kpi.value}
            </p>
          </div>
        )
      })}
    </div>
  )
}
