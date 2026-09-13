import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'

export function FinalCTA() {
  return (
    <section className="bg-paper pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-white sm:px-10 sm:py-16">
            <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative max-w-2xl">
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                Your Business Deserves Better Technology.
              </h2>
              <p className="mt-4 text-pretty text-base leading-relaxed text-white/65 sm:text-lg">
                Whether you need a simple website or a complete digital system, let's build something
                that works for your business.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/#contact" size="lg">
                  Start a Project
                </Button>
                <Button href="/#services" variant="secondary" size="lg">
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
