import type { ReactNode } from 'react'
import { site } from '../../config'
import { footerCompany, footerServices, navLinks } from '../../data/nav'
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '../visuals/SocialIcons'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{site.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            <Social href={site.linkedin} label="ITechDev on LinkedIn">
              <LinkedInIcon />
            </Social>
            <Social href={site.github} label="ITechDev on GitHub">
              <GitHubIcon />
            </Social>
            <Social href={site.instagram} label="ITechDev on Instagram">
              <InstagramIcon />
            </Social>
          </div>
        </div>

        <FooterColumn title="Navigation" links={navLinks} />
        <FooterColumn title="Services" links={footerServices} />
        <FooterColumn title="Company" links={footerCompany} />
      </div>
      <div className="border-t border-white/8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© 2026 ITechDev. All rights reserved.</p>
          <p>Independent software development studio.</p>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: readonly { label: string; href: string }[]
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <a href={link.href} className="text-sm text-white/60 transition hover:text-white">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Social({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-white/25 hover:text-white"
    >
      {children}
    </a>
  )
}
