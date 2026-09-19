import { useEffect } from 'react'
import { setPageMeta } from '../lib/seo'

export function Privacy() {
  useEffect(() => {
    setPageMeta({
      title: 'Privacy Policy | ITechDev',
      description: 'How ITechDev handles information submitted through the website.',
    })
  }, [])

  return (
    <article className="bg-white pt-28">
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted">Last updated: September 2026. Replace this placeholder policy with your final legal text before launch.</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80">
          <section>
            <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
            <p className="mt-3">
              If you submit the project request form, ITechDev may receive your name, business name, email, phone or WhatsApp number, and the project details you choose to share. We do not ask for payment details, passwords, or other sensitive information through this website.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">How we use it</h2>
            <p className="mt-3">
              Submitted information is used only to respond to project inquiries and discuss potential work. It is not sold or used for unrelated marketing lists.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3">
              For privacy questions, email mueezahmad1727@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
