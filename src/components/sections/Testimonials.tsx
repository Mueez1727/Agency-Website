import { testimonials } from '../../data/testimonials'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Client experience"
            title="What Our Clients Will Experience"
            subtitle="Clear communication, practical delivery, and a product that fits the way the business actually works."
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={Math.min(index + 1, 3) as 1 | 2 | 3} className="h-full">
              <TestimonialCard testimonial={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
