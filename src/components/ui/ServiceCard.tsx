import { ArrowUpRight, Globe, LayoutTemplate, MonitorSmartphone, Smartphone } from 'lucide-react'
import type { Service } from '../../data/services'
import { Button } from './Button'

const icons = {
  layout: LayoutTemplate,
  globe: Globe,
  smartphone: Smartphone,
  monitor: MonitorSmartphone,
}

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = icons[service.icon]

  return (
    <article className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)] sm:p-7">
      <div className="mb-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-ink">{service.title}</h3>
      <p className="mt-2 line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-muted">{service.description}</p>
      <ul className="mt-5 flex min-h-0 flex-1 flex-col gap-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-ink/80">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <Button to={`/?service=${service.id}#contact`} variant="outline" className="w-full">
          {service.cta}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Button>
      </div>
    </article>
  )
}
