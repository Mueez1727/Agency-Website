export const site = {
  name: 'ITechDev',
  tagline: 'We build digital solutions for growing businesses.',
  url: 'https://itechdev.com',
  email: 'mueezahmad1727@gmail.com',
  phoneDisplay: '+92 336 6211911',
  whatsapp: '923366211911',
  linkedin: 'https://www.linkedin.com/in/mueez-ahmad-devi17/',
  linkedinHaris: 'https://www.linkedin.com/in/devharis/',
} as const

export const seo = {
  title: 'ITechDev — Digital Solutions for Growing Businesses',
  description:
    'ITechDev builds modern websites, landing pages, mobile apps, POS systems, and custom digital solutions for businesses.',
} as const

export const whatsappDefaultMessage =
  'Assalam o Alaikum, I would like to discuss a project with ITechDev.'

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

export function projectRequestMessage(fields: {
  name: string
  businessName: string
  email: string
  phone: string
  businessType: string
  service: string
  description: string
  budget: string
  timeline: string
}) {
  return [
    'Hello ITechDev,',
    '',
    'I would like to discuss a project.',
    '',
    `Name: ${fields.name}`,
    `Business: ${fields.businessName || '—'}`,
    `Email: ${fields.email || '—'}`,
    `Phone/WhatsApp: ${fields.phone || '—'}`,
    `Business Type: ${fields.businessType || '—'}`,
    `Service Needed: ${fields.service}`,
    `Budget: ${fields.budget || '—'}`,
    `Timeline: ${fields.timeline || '—'}`,
    '',
    'Project Details:',
    fields.description,
  ].join('\n')
}
