import type { ReactNode } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { mailtoUrl, site, whatsappDefaultMessage, whatsappUrl } from '../../config'
import { LinkedInIcon } from '../visuals/SocialIcons'
import { ContactForm } from '../ui/ContactForm'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Something For Your Business"
            subtitle="Tell us what you're trying to build. We'll help you figure out the right solution."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="space-y-4">
              <ContactMethod
                icon={<MessageCircle size={18} />}
                label="WhatsApp"
                value={site.phoneDisplay}
                action="Chat on WhatsApp"
                href={whatsappUrl(whatsappDefaultMessage)}
              />
              <ContactMethod
                icon={<Mail size={18} />}
                label="Email"
                value={site.email}
                action="Send us an email"
                href={mailtoUrl('Project inquiry')}
              />
              <ContactMethod
                icon={<LinkedInIcon size={18} />}
                label="LinkedIn"
                value="Mueez Ahmad"
                action="View LinkedIn Profile"
                href={site.linkedin}
              />
            </div>
          </Reveal>
          <Reveal delay={2}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ContactMethod({
  icon,
  label,
  value,
  action,
  href,
}: {
  icon: ReactNode
  label: string
  value: string
  action: string
  href: string
}) {
  const external = href.startsWith('http')

  return (
    <a
      href={href}
      className="block rounded-3xl border border-line bg-paper p-5 transition hover:border-ink/10 hover:bg-white"
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-accent">
          {icon}
        </span>
        <div>
          <p className="text-sm font-semibold text-ink">{label}</p>
          <p className="text-sm text-muted">{value}</p>
        </div>
      </div>
      <p className="mt-3 text-sm font-semibold text-accent">{action}</p>
    </a>
  )
}
