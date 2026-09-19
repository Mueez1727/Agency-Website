import { mailtoUrl, site, whatsappDefaultMessage, whatsappUrl } from '../../config'
import { footerServices, navLinks } from '../../data/nav'
import { Logo } from './Logo'

const footerNav = navLinks.map((link) =>
  link.label === 'Work' ? { ...link, label: 'What We Build' } : link,
)

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">{site.tagline}</p>
        </div>

        <FooterColumn title="Navigation" links={footerNav} />
        <FooterColumn title="Services" links={footerServices} />

        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={whatsappUrl(whatsappDefaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 transition hover:text-white"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={mailtoUrl()} className="text-sm text-white/60 transition hover:text-white">
                {site.email}
              </a>
            </li>
          </ul>
        </div>
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
