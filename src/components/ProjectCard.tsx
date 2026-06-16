import type { ProjectItem } from '../data/projects'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      data-project-card
      className="project-card relative overflow-hidden rounded-2xl border border-textAccent/20 bg-card px-5 py-6 shadow-card sm:min-h-[260px] sm:px-6 sm:py-7"
    >
      <div className="pr-0 sm:max-w-[72%] sm:pr-4">
        <h3 className="font-body text-2xl font-bold text-textPrimary">{project.title}</h3>
        <p className="mt-3 max-w-prose font-body leading-relaxed text-textPrimary/90">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-textAccent/45 px-3 py-1 font-body text-xs uppercase tracking-[0.08em] text-textAccent"
            >
              {tag}
            </li>
          ))}
        </ul>

        <a
          className="mt-6 inline-flex rounded-md bg-button px-4 py-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-textPrimary transition hover:brightness-110"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          View Repository
        </a>
      </div>

      <img
        className="mt-6 h-40 w-full rounded-lg border border-textAccent/20 object-cover sm:absolute sm:bottom-[10px] sm:right-[10px] sm:top-[10px] sm:mt-0 sm:h-[calc(100%-20px)] sm:w-[calc(25%-10px)]"
        src={project.imageUrl}
        alt={`${project.title} preview`}
      />
    </article>
  )
}
