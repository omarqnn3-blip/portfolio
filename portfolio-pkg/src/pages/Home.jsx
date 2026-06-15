import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home() {
  return (
    <>
      <Hero />
      <Section
        id="projects"
        eyebrow="Selected work · 03"
        title="Projects"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
      <Skills />
    </>
  )
}
