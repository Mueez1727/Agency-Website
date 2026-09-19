export type Testimonial = {
  name: string
  business: string
  category: string
  quote: string
  isDemo: boolean
}

export const testimonials: Testimonial[] = [
  {
    name: 'Ahmed Khan',
    business: 'FitZone Gym',
    category: 'Gym',
    quote:
      'The website concept made it much easier for us to present our membership plans, facilities and contact information in one place.',
    isDemo: true,
  },
  {
    name: 'Usman Ali',
    business: 'Urban Spice Restaurant',
    category: 'Restaurant',
    quote:
      'The new digital experience gives customers an easier way to explore our menu, location and contact details.',
    isDemo: true,
  },
  {
    name: 'Hamza Malik',
    business: 'Royal Stay Hotel',
    category: 'Hotel',
    quote:
      'The website provides a much cleaner way for guests to explore our rooms, facilities and booking information.',
    isDemo: true,
  },
]
