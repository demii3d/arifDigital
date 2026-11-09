/**
 * Central site configuration. Replace every value marked PLACEHOLDER
 * before launch; nothing here is wired to a backend.
 */
export const site = {
  name: 'ARIF Digital Solutions',
  shortName: 'ARIF',
  tagline: 'Software & digital product development',
  description:
    'ARIF Digital Solutions designs, builds and delivers software, web applications and digital products with a collaborative network of independent specialists.',
  // PLACEHOLDER: replace with the production domain
  url: 'https://www.example.com',
  contact: {
    // PLACEHOLDER values
    email: 'hello@your-domain.com',
    phone: '+00 000 000 0000',
    location: 'Location to be confirmed',
    hours: 'Mon – Fri, 09:00 – 17:00',
  },
  // PLACEHOLDER: point these at real profiles
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'X', href: 'https://x.com/' },
  ],
} as const

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
] as const
