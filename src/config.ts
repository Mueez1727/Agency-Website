// Replace these placeholders before launch.
export const site = {
  name: 'ITechDev',
  tagline: 'We build digital solutions for growing businesses.',
  url: 'https://itechdev.com',
  email: 'hello@itechdev.com',
  phoneDisplay: '+1 (000) 000-0000',
  whatsapp: '10000000000',
  linkedin: 'https://linkedin.com/company/itechdev',
  github: 'https://github.com/itechdev',
  instagram: 'https://instagram.com/itechdev',
  formEndpoint: '',
} as const

export const seo = {
  title: 'ITechDev — Digital Solutions for Growing Businesses',
  description:
    'ITechDev builds modern websites, landing pages, mobile apps, POS systems, and custom digital solutions for businesses.',
} as const

export function whatsappUrl(message?: string) {
  const base = `https://wa.me/${site.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function mailtoUrl(subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  const query = params.toString()
  return `mailto:${site.email}${query ? `?${query}` : ''}`
}
