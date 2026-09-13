import { useEffect, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { mailtoUrl, site } from '../../config'
import { Button } from './Button'

const services = [
  'Landing Page',
  'Website',
  'Mobile App',
  'POS System',
  'Custom Business System',
  'Not Sure Yet',
] as const

const budgets = ['Not sure yet', 'Small project', 'Medium project', 'Large project'] as const

const serviceParamMap: Record<string, (typeof services)[number]> = {
  landing: 'Landing Page',
  website: 'Website',
  mobile: 'Mobile App',
  pos: 'POS System',
  custom: 'Custom Business System',
}

type FormState = {
  name: string
  businessName: string
  email: string
  phone: string
  businessType: string
  service: string
  description: string
  budget: string
  timeline: string
}

const initialState: FormState = {
  name: '',
  businessName: '',
  email: '',
  phone: '',
  businessType: '',
  service: '',
  description: '',
  budget: '',
  timeline: '',
}

function fieldClass() {
  return 'mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20'
}

export function ContactForm() {
  const [params] = useSearchParams()
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  useEffect(() => {
    const service = serviceParamMap[params.get('service') ?? '']
    if (service) {
      setForm((current) => ({ ...current, service }))
    }
  }, [params])

  const update = (key: keyof FormState) => (event: { target: { value: string } }) => {
    setForm((current) => ({ ...current, [key]: event.target.value }))
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!form.name || !form.email || !form.service || !form.description) {
      setError('Please complete the required fields so we can understand the project.')
      return
    }

    setStatus('submitting')

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
    }

    try {
      if (site.formEndpoint) {
        const response = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!response.ok) throw new Error('Request failed')
      }
      setStatus('success')
    } catch {
      setStatus('error')
      setError('The request could not be sent. Please email or message us on WhatsApp instead.')
    }
  }

  if (status === 'success') {
    const emailBody = [
      `Name: ${form.name}`,
      `Business: ${form.businessName || '—'}`,
      `Email: ${form.email}`,
      `Phone / WhatsApp: ${form.phone || '—'}`,
      `Business type: ${form.businessType || '—'}`,
      `Service: ${form.service}`,
      `Budget: ${form.budget || '—'}`,
      `Timeline: ${form.timeline || '—'}`,
      '',
      form.description,
    ].join('\n')

    return (
      <div className="rounded-3xl border border-line bg-paper p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Request ready</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink">Thanks — we received the details.</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          You can send the same details by email or WhatsApp so the team can review the project.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href={mailtoUrl(`Project request from ${form.name}`, emailBody)}>Open email draft</Button>
          <Button
            variant="outline"
            onClick={() => {
              setStatus('idle')
              setForm(initialState)
            }}
          >
            Send another request
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-card)] sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name <span className="text-accent">*</span>
          <input className={fieldClass()} name="name" autoComplete="name" value={form.name} onChange={update('name')} required />
        </label>
        <label className="block text-sm font-medium text-ink">
          Business name
          <input className={fieldClass()} name="businessName" value={form.businessName} onChange={update('businessName')} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email <span className="text-accent">*</span>
          <input className={fieldClass()} type="email" name="email" autoComplete="email" value={form.email} onChange={update('email')} required />
        </label>
        <label className="block text-sm font-medium text-ink">
          Phone / WhatsApp
          <input className={fieldClass()} type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={update('phone')} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Business type
          <input className={fieldClass()} name="businessType" placeholder="Gym, restaurant, hotel, retail..." value={form.businessType} onChange={update('businessType')} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Service needed <span className="text-accent">*</span>
          <select className={fieldClass()} name="service" value={form.service} onChange={update('service')} required>
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink sm:col-span-2">
          Project description <span className="text-accent">*</span>
          <textarea
            className={`${fieldClass()} min-h-32 resize-y`}
            name="description"
            value={form.description}
            onChange={update('description')}
            placeholder="Tell us what you want to build and any must-have features."
            required
          />
        </label>
        <label className="block text-sm font-medium text-ink">
          Budget range
          <select className={fieldClass()} name="budget" value={form.budget} onChange={update('budget')}>
            <option value="">Select a range</option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink">
          Preferred timeline
          <input className={fieldClass()} name="timeline" placeholder="As soon as possible, this month..." value={form.timeline} onChange={update('timeline')} />
        </label>
      </div>

      {error ? (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === 'submitting'} className="w-full sm:w-auto">
          {status === 'submitting' ? 'Sending...' : 'Send Project Request'}
        </Button>
        <p className="text-xs leading-relaxed text-muted">
          No sensitive information required. We only use these details to understand the project.
        </p>
      </div>
    </form>
  )
}
