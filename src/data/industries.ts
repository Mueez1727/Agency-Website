export type Industry = {
  id: string
  title: string
  items: string[]
  cta?: string
}

export const industries: Industry[] = [
  {
    id: 'gyms',
    title: 'Gyms & Fitness',
    items: ['Memberships', 'Registration', 'Attendance', 'Plans', 'Facilities', 'Management systems'],
  },
  {
    id: 'restaurants',
    title: 'Restaurants & Cafés',
    items: ['Digital menus', 'Ordering', 'Reservations', 'POS', 'Customer management'],
  },
  {
    id: 'hotels',
    title: 'Hotels',
    items: ['Room showcases', 'Booking', 'Reservations', 'Availability', 'Guest inquiries'],
  },
  {
    id: 'retail',
    title: 'Retail Businesses',
    items: ['POS', 'Inventory', 'Products', 'Sales', 'Customer management'],
  },
  {
    id: 'salons',
    title: 'Salons & Beauty',
    items: ['Services', 'Appointments', 'Customer management', 'Staff scheduling'],
  },
  {
    id: 'other',
    title: 'Other Local Businesses',
    items: ['Custom websites', 'Booking systems', 'Business dashboards', 'Custom applications'],
  },
]
