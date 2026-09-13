import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'light'
type Size = 'sm' | 'md' | 'lg'

type Common = {
  children: ReactNode
  className?: string
  variant?: Variant
  size?: Size
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>['onClick']
}

type ButtonAsButton = Common &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    to?: undefined
  }

type ButtonAsAnchor = Common & {
  href: string
  to?: undefined
  type?: never
  disabled?: boolean
}

type ButtonAsLink = Common & {
  to: string
  href?: undefined
  type?: never
  disabled?: boolean
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsLink

const variants: Record<Variant, string> = {
  primary:
    'bg-accent text-white shadow-[0_8px_24px_rgba(61,116,245,0.28)] hover:bg-accent-2 hover:-translate-y-0.5',
  secondary:
    'bg-white/8 text-white ring-1 ring-white/15 hover:bg-white/12 hover:ring-white/25',
  ghost: 'bg-transparent text-ink hover:bg-paper',
  outline: 'bg-white text-ink ring-1 ring-line hover:bg-paper hover:ring-ink/15',
  light: 'bg-white text-ink hover:bg-paper shadow-sm',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-[15px]',
}

export function Button(props: ButtonProps) {
  const { children, className, variant = 'primary', size = 'md' } = props
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200',
    'disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0',
    variants[variant],
    sizes[size],
    className,
  )

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    )
  }

  if ('href' in props && props.href) {
    const external = props.href.startsWith('http') || props.href.startsWith('mailto:') || props.href.startsWith('tel:')
    return (
      <a
        href={props.href}
        className={classes}
        {...(external ? { target: props.href.startsWith('http') ? '_blank' : undefined, rel: props.href.startsWith('http') ? 'noreferrer noopener' : undefined } : {})}
      >
        {children}
      </a>
    )
  }

  const { type = 'button', disabled, onClick } = props
  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
