export type Service = {
  id: string
  title: string
  description: string
  features: string[]
  cta: string
  icon: 'layout' | 'globe' | 'smartphone' | 'monitor'
}

export const services: Service[] = [
  {
    id: 'landing',
    title: 'Landing Pages',
    description:
      'High-converting landing pages designed to turn visitors into leads, customers, or inquiries.',
    features: [
      'Modern responsive design',
      'Conversion-focused layouts',
      'Contact/lead forms',
      'WhatsApp integration',
      'Mobile optimization',
      'Analytics-ready',
      'Fast loading',
    ],
    cta: 'Build a Landing Page',
    icon: 'layout',
  },
  {
    id: 'website',
    title: 'Website Development',
    description:
      'Professional websites designed around your brand, customers, and business goals.',
    features: [
      'Business websites',
      'Restaurant websites',
      'Gym websites',
      'Hotel websites',
      'Portfolio websites',
      'Booking systems',
      'Custom functionality',
      'CMS/admin functionality',
    ],
    cta: 'Build a Website',
    icon: 'globe',
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    description:
      'Custom mobile applications designed to give your customers and team a better digital experience.',
    features: [
      'Customer apps',
      'Business apps',
      'Booking apps',
      'Management apps',
      'Authentication',
      'Notifications',
      'API integrations',
      'Custom dashboards',
    ],
    cta: 'Build a Mobile App',
    icon: 'smartphone',
  },
  {
    id: 'pos',
    title: 'POS Systems',
    description:
      'Custom point-of-sale systems that help businesses manage sales, products, inventory, customers, and daily operations.',
    features: [
      'Sales management',
      'Product management',
      'Inventory',
      'Receipts',
      'Customer management',
      'Staff accounts',
      'Reports',
      'Dashboard',
    ],
    cta: 'Build a POS System',
    icon: 'monitor',
  },
]
