import type { ReactNode } from 'react'
import { Mail, MessageCircle } from 'lucide-react'
import { mailtoUrl, site, whatsappUrl } from '../../config'
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
                href={whatsappUrl('Hi ITechDev, I would like to discuss a project.')}
                note="Message the studio directly for a faster conversation."
              />
              <ContactMethod
                icon={<Mail size={18} />}
                label="Email"
                value={site.email}
                href={mailtoUrl('Project inquiry')}
                note="Send a brief note about the business and what you want to build."
              />
              <ContactMethod
                icon={<LinkedInIcon size={18} />}
                label="LinkedIn"
                value="ITechDev"
                href={site.linkedin}
                note="A public profile for updates and professional contact."
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
  href,
  note,
}: {
  icon: ReactNode
  label: string
  value: string
  href: string
  note: string
}) {
  return (
    <a
      href={href}
      className="block rounded-3xl border border-line bg-paper p-5 transition hover:border-ink/10 hover:bg-white"
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer noopener' : undefined}
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
      <p className="mt-3 text-xs text-muted">{note}</p>
    </a>
  )
}
