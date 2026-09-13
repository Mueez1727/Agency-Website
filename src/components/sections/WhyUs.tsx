import { Building2, MessagesSquare, MonitorSmartphone, Rocket, ShieldCheck, Workflow } from 'lucide-react'
import { whyUs } from '../../data/whyUs'
import { FeatureCard } from '../ui/FeatureCard'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

const icons = [Building2, MonitorSmartphone, MessagesSquare, ShieldCheck, Workflow, Rocket]

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why ITechDev"
            title="Why Businesses Choose ITechDev"
            subtitle="The work is designed to be clear, practical, and easy to grow with. You stay close to the people building the product."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal key={item.title} delay={Math.min(index, 3) as 0 | 1 | 2 | 3}>
                <FeatureCard
                  title={item.title}
                  description={item.description}
                  icon={<Icon size={20} aria-hidden="true" />}
                />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
