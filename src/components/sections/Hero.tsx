import { ArrowRight } from 'lucide-react'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { HeroVisual } from '../visuals/HeroVisual'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-28 sm:px-6 sm:pb-24 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28 lg:pt-36">
        <div>
          <div className="reveal">
            <Badge tone="dark">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Web • Mobile • Business Systems
            </Badge>
          </div>
          <h1 className="reveal reveal-delay-1 mt-6 max-w-xl text-balance text-[2.15rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            We Build Digital Solutions That Grow Your Business.
          </h1>
          <p className="reveal reveal-delay-2 mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/68 sm:text-lg">
            ITechDev helps businesses turn ideas into high-quality websites, mobile apps, landing
            pages, and custom business systems.
          </p>
          <div className="reveal reveal-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact" size="lg">
              Start a Project
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="/#services" variant="secondary" size="lg">
              View Our Services
            </Button>
          </div>
          <p className="reveal reveal-delay-4 mt-8 text-sm text-white/45">
            Independent software development studio. Built around your actual business needs.
          </p>
        </div>

        <div className="reveal reveal-delay-2 pb-8 lg:pb-0">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
