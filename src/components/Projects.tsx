import type { ProjectItem } from '../data/projects'
import { ProjectCard } from './ProjectCard'

interface ProjectsProps {
  items: ProjectItem[]
}

export function Projects({ items }: ProjectsProps) {
  return (
    <section id="projects" data-animate-section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24">
      <p data-section-label className="font-body text-xs uppercase tracking-[0.24em] text-textAccent">
        Projects
      </p>
      <h2
        data-section-title
        className="mt-2 font-display text-5xl uppercase leading-none tracking-[0.04em] text-textPrimary sm:text-6xl"
      >
        Latest Projects
      </h2>

      {items.length === 0 ? (
        <p data-section-body className="mt-8 font-body text-textPrimary/85">
          Projects are coming soon.
        </p>
      ) : (
        <div className="mt-10 space-y-5">
          {items.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      )}
    </section>
  )
}
