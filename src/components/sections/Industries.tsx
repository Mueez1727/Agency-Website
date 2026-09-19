import { ArrowUpRight } from 'lucide-react'
import { industries } from '../../data/industries'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 bg-paper py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title="Technology Built Around Your Business"
            subtitle="ITechDev works with different types of businesses. The product starts from how you operate, not from a generic template."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.id} delay={Math.min(index, 3) as 0 | 1 | 2 | 3} className="h-full">
              <article className="flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
                <h3 className="text-lg font-semibold tracking-tight text-ink">{industry.title}</h3>
                <ul className="mt-4 flex flex-1 flex-col gap-2">
                  {industry.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
          <Reveal delay={3} className="h-full">
            <a
              href="/#contact"
              className="group flex h-full min-h-52 flex-col justify-between rounded-3xl bg-ink p-6 text-white transition duration-300 hover:-translate-y-1"
            >
              <div>
                <h3 className="text-lg font-semibold tracking-tight">Have a different business?</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  Tell us what you need and we will help you figure out the right digital solution.
                </p>
              </div>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white">
                Tell us what you need
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
