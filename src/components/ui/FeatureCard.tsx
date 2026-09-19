import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type FeatureCardProps = {
  title: string
  description: string
  icon?: ReactNode
  className?: string
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition duration-300',
        'hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]',
        className,
      )}
    >
      {icon ? (
        <div className="mb-4 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
          {icon}
        </div>
      ) : null}
      <h3 className="min-h-14 text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  )
}
