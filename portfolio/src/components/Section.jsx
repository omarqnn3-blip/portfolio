// Section, consistent vertical rhythm + optional mono eyebrow label.

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-16 sm:px-6 md:py-20 ${className}`}>
      {(eyebrow || title) && (
        <header className="mb-8">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          {title && (
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {title}
            </h2>
          )}
        </header>
      )}
      {children}
    </section>
  )
}
