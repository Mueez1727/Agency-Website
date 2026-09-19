import { useEffect } from 'react'
import { setPageMeta } from '../lib/seo'

export function Terms() {
  useEffect(() => {
    setPageMeta({
      title: 'Terms | ITechDev',
      description: 'Website terms for ITechDev.',
    })
  }, [])

  return (
    <article className="bg-white pt-28">
      <div className="mx-auto max-w-3xl px-4 pb-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Legal</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Terms</h1>
        <p className="mt-4 text-sm text-muted">Last updated: September 2026. Replace this placeholder with your final terms before launch.</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/80">
          <section>
            <h2 className="text-xl font-semibold text-ink">The website</h2>
            <p className="mt-3">
              This website describes ITechDev services and shows concept or demo work to explain our approach. Concept projects are labeled as such and are not presented as completed client engagements.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">Project work</h2>
            <p className="mt-3">
              Sending a project request does not create a contract. Scope, timeline, and pricing are confirmed in writing before development begins.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-3">
              Questions about these terms can be sent to mueezahmad1727@gmail.com.
            </p>
          </section>
        </div>
      </div>
    </article>
  )
}
