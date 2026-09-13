import { Link } from 'react-router-dom'
import { cn } from '../../lib/cn'

type LogoProps = {
  light?: boolean
  compact?: boolean
}

export function Logo({ light = false, compact = false }: LogoProps) {
  return (
    <Link to="/" className="inline-flex items-baseline gap-0 tracking-tight" aria-label="ITechDev home">
      <span className={cn('font-extrabold', compact ? 'text-lg' : 'text-xl', light ? 'text-accent' : 'text-accent')}>
        I
      </span>
      <span className={cn('font-extrabold', compact ? 'text-lg' : 'text-xl', light ? 'text-white' : 'text-ink')}>
        TechDev
      </span>
    </Link>
  )
}
