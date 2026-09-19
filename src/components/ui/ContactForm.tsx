import { useEffect, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import { projectRequestMessage, whatsappUrl } from '../../config'
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

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function fieldClass() {
  return 'mt-1.5 w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20'
}

export function ContactForm() {
  const [params] = useSearchParams()
  const [form, setForm] = useState<FormState>(initialState)
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

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('')

    if (!form.name.trim() || !form.businessName.trim() || !form.service || !form.description.trim()) {
      setError('Please fill in the required fields.')
      return
    }

    if (form.email.trim() && !emailPattern.test(form.email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    if (form.phone.trim() && form.phone.replace(/\D/g, '').length < 7) {
      setError('Please enter a valid phone or WhatsApp number.')
      return
    }

    const url = whatsappUrl(projectRequestMessage(form))
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-line bg-white p-5 shadow-[var(--shadow-card)] sm:p-8" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Name <span className="text-accent">*</span>
          <input className={fieldClass()} name="name" autoComplete="name" value={form.name} onChange={update('name')} required />
        </label>
        <label className="block text-sm font-medium text-ink">
          Business name <span className="text-accent">*</span>
          <input className={fieldClass()} name="businessName" value={form.businessName} onChange={update('businessName')} required />
        </label>
        <label className="block text-sm font-medium text-ink">
          Email
          <input className={fieldClass()} type="email" name="email" autoComplete="email" value={form.email} onChange={update('email')} />
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
        <Button type="submit" className="w-full sm:w-auto">
          Send Project Request
        </Button>
        <p className="text-xs leading-relaxed text-muted">
          Your request opens in WhatsApp so we can continue the conversation directly.
        </p>
      </div>
    </form>
  )
}
