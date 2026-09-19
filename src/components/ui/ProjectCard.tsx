import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { ProjectMockup } from '../visuals/ProjectMockup'
import { Badge } from './Badge'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-3xl border border-line bg-white shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <Link to={`/work/${project.slug}`} className="flex h-full flex-col" aria-label={`View ${project.name} project`}>
        <div className="relative h-52 shrink-0 overflow-hidden bg-paper sm:h-56">
          <ProjectMockup project={project} compact className="h-full rounded-none" />
        </div>
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="accent">{project.label}</Badge>
            <Badge tone="soft">{project.category}</Badge>
          </div>
          <div className="mt-4 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-ink">{project.name}</h3>
              <p className="mt-1 text-sm text-muted">{project.type}</p>
            </div>
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-paper text-ink transition group-hover:bg-accent group-hover:text-white">
              <ArrowUpRight size={16} aria-hidden="true" />
            </span>
          </div>
          <p className="mt-3 line-clamp-2 min-h-[2.75rem] text-sm leading-relaxed text-muted">{project.summary}</p>
          <div className="mt-4 flex min-h-[3.25rem] flex-wrap content-start gap-2">
            {project.features.slice(0, 4).map((feature) => (
              <span key={feature} className="rounded-full bg-paper px-2.5 py-1 text-xs text-ink/70">
                {feature}
              </span>
            ))}
          </div>
          <p className="mt-auto pt-5 text-sm font-semibold text-accent">View Project</p>
        </div>
      </Link>
    </article>
  )
}
