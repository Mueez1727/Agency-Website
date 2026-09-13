import { technologies } from '../../data/tech'
import { Badge } from '../ui/Badge'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Technology() {
  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Technology"
            title="Built With Modern Technology"
            subtitle="We choose the technology based on what the project actually needs."
          />
        </Reveal>
        <Reveal delay={2}>
          <div className="mt-10 flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <Badge key={tech} tone="soft" className="px-4 py-2 text-sm font-semibold text-ink">
                {tech}
              </Badge>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
