import type { ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { cn } from '../../lib/cn'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const reduced = usePrefersReducedMotion()

  return (
    <div
      ref={ref}
      className={cn(
        inView && !reduced && 'reveal',
        inView && !reduced && delay > 0 && `reveal-delay-${delay}`,
        !inView && !reduced && 'opacity-0 translate-y-4',
        className,
      )}
    >
      {children}
    </div>
  )
}
