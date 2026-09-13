import { useState } from 'react'
import { cn } from '../../lib/cn'

type AvatarProps = {
  name: string
  src: string
  className?: string
}

export function Avatar({ name, src, className }: AvatarProps) {
  const [failed, setFailed] = useState(false)
  const initials = name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

  if (failed) {
    return (
      <div
        className={cn(
          'flex items-center justify-center bg-gradient-to-br from-ink-3 to-ink text-lg font-semibold text-white',
          className,
        )}
        aria-hidden="true"
      >
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={`${name}, co-founder of ITechDev`}
      width={320}
      height={320}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
    />
  )
}
