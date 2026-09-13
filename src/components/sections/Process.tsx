import { processSteps } from '../../data/process'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How We Work"
            subtitle="A clear path from the first conversation to launch. You stay informed throughout the process."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4}>
              <article className="relative h-full rounded-3xl border border-line bg-paper p-5">
                <p className="text-sm font-semibold text-accent">{step.number}</p>
                <h3 className="mt-3 text-lg font-semibold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm font-medium text-ink/70">You stay informed throughout the process.</p>
      </div>
    </section>
  )
}
