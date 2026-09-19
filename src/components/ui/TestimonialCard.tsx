import { cn } from '../../lib/cn'
import type { Testimonial } from '../../data/testimonials'

type TestimonialCardProps = {
  testimonial: Testimonial
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        'flex h-full min-h-[22rem] flex-col rounded-3xl border border-line bg-paper p-6 sm:p-7',
        className,
      )}
    >
      {testimonial.isDemo ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Sample testimonial
        </p>
      ) : null}
      <blockquote className="flex-1 text-base leading-relaxed text-ink/80 sm:text-lg">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-8">
        <p className="font-semibold tracking-tight text-ink">{testimonial.name}</p>
        <p className="mt-1 text-sm text-muted">{testimonial.business}</p>
        <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-accent">{testimonial.category}</p>
      </figcaption>
    </figure>
  )
}
