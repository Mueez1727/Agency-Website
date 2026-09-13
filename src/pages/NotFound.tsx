import { useEffect } from 'react'
import { Button } from '../components/ui/Button'
import { setPageMeta } from '../lib/seo'

export function NotFound() {
  useEffect(() => {
    setPageMeta({
      title: 'Page not found | ITechDev',
      description: 'The page you are looking for is not available.',
    })
  }, [])

  return (
    <section className="flex min-h-[70dvh] items-center bg-white pt-24">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">This page is not available.</h1>
        <p className="mt-4 text-muted">The link may be outdated. Head back to the homepage or start a project conversation.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Back home</Button>
          <Button href="/#contact" variant="outline">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  )
}
