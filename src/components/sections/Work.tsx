import { projects } from '../../data/projects'
import { ProjectCard } from '../ui/ProjectCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Examples"
            title="What We Build"
            subtitle="From business websites to complete digital systems, we build solutions around your goals."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={Math.min(index, 3) as 0 | 1 | 2 | 3} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
