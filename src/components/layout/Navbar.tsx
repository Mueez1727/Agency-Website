import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { navLinks } from '../../data/nav'
import { useScrolled } from '../../hooks/useScrolled'
import { cn } from '../../lib/cn'
import { Button } from '../ui/Button'
import { Logo } from './Logo'

export function Navbar() {
  const scrolled = useScrolled(18)
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const onHome = location.pathname === '/'
  const transparent = onHome && !scrolled && !open
  const light = transparent

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash, location.search])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        transparent ? 'bg-transparent' : 'border-b border-line/80 bg-white/90 backdrop-blur-xl',
        scrolled || !onHome ? 'py-2.5' : 'py-4',
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo light={light} compact={scrolled || !onHome} />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-full px-3 py-2 text-sm font-medium transition',
                light ? 'text-white/75 hover:text-white' : 'text-ink/70 hover:bg-paper hover:text-ink',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/#contact" variant={light ? 'light' : 'primary'} size="sm">
            Start a Project
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden',
            light ? 'text-white' : 'text-ink',
          )}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn(
          'overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden',
          open ? 'max-h-[100dvh] opacity-100' : 'max-h-0 opacity-0',
          'border-line bg-white',
        )}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-xl px-3 py-3 text-base font-medium',
                light ? 'text-white' : 'text-ink',
              )}
            >
              {link.label}
            </a>
          ))}
          <Button href="/#contact" className="mt-2 w-full" variant={light ? 'light' : 'primary'}>
            Start a Project
          </Button>
        </nav>
      </div>
    </header>
  )
}
