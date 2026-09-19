import { trustItems } from '../../data/trust'
import { Reveal } from '../ui/Reveal'

export function TrustStrip() {
  return (
    <section className="border-y border-line bg-paper" aria-labelledby="trust-heading">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <p id="trust-heading" className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          Built for real businesses
        </p>
        <div className="mt-6 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustItems.map((item, index) => (
            <Reveal key={item.title} delay={Math.min(index, 4) as 0 | 1 | 2 | 3 | 4} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-4">
                <h3 className="text-sm font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
