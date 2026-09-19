import { ArrowUpRight } from 'lucide-react'
import { founders } from '../../data/founders'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="Meet the People Behind ITechDev"
            subtitle="ITechDev is a small software development studio founded by Mueez Ahmad and M. Haris. We work directly with businesses to design and build modern digital products that solve real business problems."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2">
          {founders.map((founder, index) => (
            <Reveal key={founder.name} delay={index === 0 ? 1 : 2} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-paper p-6 sm:p-8">
                <div className="h-1 w-10 rounded-full bg-accent" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">{founder.name}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{founder.role}</p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{founder.bio}</p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-ink/75 transition hover:text-ink"
                >
                  LinkedIn
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
