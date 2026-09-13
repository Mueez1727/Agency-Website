import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { TestimonialCard } from '../ui/TestimonialCard'

const placeholders = [
  {
    quote: 'Add your real client testimonial here.',
    attribution: 'Client name, business name',
  },
  {
    quote: 'Replace this placeholder with feedback from a completed project.',
    attribution: 'Client name, business name',
  },
  {
    quote: 'A short note about communication, delivery, or the finished product can go here.',
    attribution: 'Client name, business name',
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Client experience"
            title="What Our Clients Will Experience"
            subtitle="Real testimonials will be added here as projects go live. Until then, these cards are clearly marked placeholders so nothing is invented."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {placeholders.map((item, index) => (
            <Reveal key={item.quote} delay={Math.min(index + 1, 3) as 1 | 2 | 3}>
              <TestimonialCard quote={item.quote} attribution={item.attribution} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
