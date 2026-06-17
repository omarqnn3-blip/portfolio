import Section from './Section'
import { skillGroups } from '../data/projects'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Capabilities" title="Skills & tools">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="card p-5">
            <p className="eyebrow">{group.label}</p>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-ink">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
