import { services } from '../../data/services'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { ServiceCard } from '../ui/ServiceCard'

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Our Services"
            subtitle="From a simple landing page to a complete business system, we build technology around your actual business needs."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={Math.min(index, 3) as 0 | 1 | 2 | 3} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
