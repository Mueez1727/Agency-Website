import { cn } from '../../lib/cn'

type TestimonialCardProps = {
  quote: string
  attribution?: string
  placeholder?: boolean
  className?: string
}

export function TestimonialCard({
  quote,
  attribution = 'Client testimonial',
  placeholder = true,
  className,
}: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        'flex h-full flex-col justify-between rounded-3xl border border-dashed border-line bg-paper p-6',
        className,
      )}
    >
      {placeholder ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Placeholder
        </p>
      ) : null}
      <blockquote className="text-lg leading-relaxed text-ink/80">“{quote}”</blockquote>
      <figcaption className="mt-6 text-sm font-medium text-muted">{attribution}</figcaption>
    </figure>
  )
}
