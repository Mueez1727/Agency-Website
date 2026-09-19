import { ArrowRight } from 'lucide-react'
import { customSolutions } from '../../data/customSolutions'
import { Button } from '../ui/Button'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function CustomSolutions() {
  return (
    <section className="bg-ink py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <SectionHeading
            light
            eyebrow="Custom systems"
            title="Have a Bigger Idea?"
            subtitle="We can build more than websites. ITechDev can create complete custom systems around the way your business already works."
          />
          <div className="mt-8">
            <Button href="/?service=custom#contact" size="lg">
              Discuss Your Idea
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
        <Reveal delay={2}>
          <div className="grid grid-cols-2 gap-3">
            {customSolutions.map((item) => (
              <div key={item} className="flex min-h-[52px] items-center rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
