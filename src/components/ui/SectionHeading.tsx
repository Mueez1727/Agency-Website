import { cn } from '../../lib/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  id?: string
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  light = false,
  id,
  as = 'h2',
}: SectionHeadingProps) {
  const Heading = as

  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-xs font-semibold uppercase tracking-[0.18em]',
            light ? 'text-white/55' : 'text-accent',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className={cn(
          'text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-tight',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </Heading>
      {subtitle ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-pretty text-base leading-relaxed sm:text-lg',
            align === 'center' && 'mx-auto',
            light ? 'text-white/68' : 'text-muted',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
