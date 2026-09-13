export type Project = {
  slug: string
  name: string
  type: string
  category: string
  label: 'Concept Project' | 'Demo Project'
  summary: string
  features: string[]
  challenge: string
  solution: string
  technology: string[]
  theme: 'fitness' | 'restaurant' | 'hotel' | 'retail'
}

export const projects: Project[] = [
  {
    slug: 'fitzone',
    name: 'FitZone',
    type: 'Gym Website Concept',
    category: 'Website Development',
    label: 'Concept Project',
    summary:
      'A conversion-focused gym website concept for memberships, facilities, trainers, and easy contact.',
    features: [
      'Membership plans',
      'Registration',
      'Facilities',
      'Equipment',
      'Trainers',
      'Google Maps',
      'WhatsApp contact',
    ],
    challenge:
      'A fitness business needed a clearer way for potential members to understand the gym, compare plans, and get in touch without relying on phone calls or walk-ins.',
    solution:
      'A responsive website with membership information, facility and trainer sections, location, and WhatsApp-ready contact so visitors can inquire immediately.',
    technology: ['React', 'TypeScript', 'Tailwind CSS'],
    theme: 'fitness',
  },
  {
    slug: 'bella-table',
    name: 'Bella Table',
    type: 'Restaurant Website Concept',
    category: 'Website Development',
    label: 'Concept Project',
    summary:
      'A restaurant website concept with a digital menu, reservation inquiry, gallery, and location.',
    features: ['Digital menu', 'Reservations', 'Location', 'Gallery', 'Contact', 'Offers'],
    challenge:
      'A restaurant needed a professional online presence so guests could browse the menu, see the space, and request a table without friction.',
    solution:
      'A warm, conversion-focused website with a digital menu, reservation inquiry, gallery, offers, and location details designed for mobile diners.',
    technology: ['React', 'JavaScript', 'REST APIs'],
    theme: 'restaurant',
  },
  {
    slug: 'staynest',
    name: 'StayNest',
    type: 'Hotel Booking Concept',
    category: 'Web Application',
    label: 'Concept Project',
    summary:
      'A hotel booking concept that showcases rooms, amenities, and availability inquiries.',
    features: ['Rooms', 'Amenities', 'Booking inquiries', 'Gallery', 'Location'],
    challenge:
      'A hotel needed a better way for guests to explore rooms, understand amenities, and inquire about availability before arriving.',
    solution:
      'A booking-oriented web application with room showcases, amenity details, gallery, location, and a structured inquiry flow.',
    technology: ['React', 'TypeScript', 'Node.js'],
    theme: 'hotel',
  },
  {
    slug: 'retailflow',
    name: 'RetailFlow',
    type: 'POS System Concept',
    category: 'POS System',
    label: 'Concept Project',
    summary:
      'A point-of-sale concept for products, inventory, sales, customers, reports, and daily operations.',
    features: ['Products', 'Inventory', 'Sales', 'Customers', 'Reports', 'Dashboard'],
    challenge:
      'A retail business needed one place to manage products, inventory, sales, and customers instead of spreading daily operations across notes and spreadsheets.',
    solution:
      'A custom POS concept with a dashboard, product and inventory tools, sales flow, customer records, and reporting for day-to-day operations.',
    technology: ['React', 'TypeScript', 'PostgreSQL', 'REST APIs'],
    theme: 'retail',
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
