import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { ProjectMockup } from '../components/visuals/ProjectMockup'
import { getProject } from '../data/projects'
import { setPageMeta } from '../lib/seo'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  useEffect(() => {
    if (!project) return
    setPageMeta({
      title: `${project.name} — ${project.label} | ITechDev`,
      description: project.summary,
    })
  }, [project])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <article className="bg-white pt-24 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24">
        <Link to="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to work
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <Badge tone="accent">{project.label}</Badge>
          <Badge tone="soft">{project.category}</Badge>
          <Badge tone="soft">{project.type}</Badge>
        </div>

        <h1 className="mt-5 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">{project.name}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-10 overflow-hidden rounded-[2rem] border border-line shadow-[var(--shadow-card)]">
          <ProjectMockup project={project} className="min-h-[320px] sm:min-h-[420px]" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-ink">The Challenge</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.challenge}</p>
          </section>
          <section className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
            <h2 className="text-xl font-semibold tracking-tight text-ink">The Solution</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{project.solution}</p>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Key features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="rounded-2xl border border-line bg-white px-4 py-3 text-sm text-ink">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Technology</h2>
          <p className="mt-2 text-sm text-muted">Selected for this concept. Actual client projects use the stack that fits the work.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technology.map((item) => (
              <Badge key={item} tone="soft" className="px-3 py-1.5 text-sm font-semibold text-ink">
                {item}
              </Badge>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-ink">Responsive preview</h2>
          <p className="mt-2 text-sm text-muted">A desktop-first view and a compact mobile-style frame of the same concept.</p>
          <div className="mt-6 grid items-start gap-5 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="overflow-hidden rounded-[1.6rem] border border-line">
              <ProjectMockup project={project} className="min-h-[280px]" />
            </div>
            <div className="mx-auto w-full max-w-[220px] overflow-hidden rounded-[1.8rem] border border-line p-2">
              <ProjectMockup project={project} compact className="min-h-[360px] rounded-[1.4rem]" />
            </div>
          </div>
        </section>

        <section className="mt-14 rounded-[2rem] bg-ink p-8 text-white sm:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Want something like this for your business?</h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/65">
            This is a concept project, not a live client case study. If you need a similar website, app, or system, we can design it around your business.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact">
              Start a Project
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="/#work" variant="secondary">
              View Our Work
            </Button>
          </div>
        </section>
      </div>
    </article>
  )
}
