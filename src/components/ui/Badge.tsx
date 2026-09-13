import type { ReactNode } from 'react'
import { cn } from '../../lib/cn'

type BadgeProps = {
  children: ReactNode
  className?: string
  tone?: 'dark' | 'light' | 'accent' | 'soft'
}

const tones = {
  dark: 'bg-white/8 text-white/85 ring-1 ring-white/12',
  light: 'bg-paper text-ink/75 ring-1 ring-line',
  accent: 'bg-accent-soft text-accent-2 ring-1 ring-accent/15',
  soft: 'bg-white text-muted ring-1 ring-line',
}

export function Badge({ children, className, tone = 'light' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
