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
    email: 'tech-operations@arifdigitalsolution.com',
    phone: '+44 7762 544117',
    // Digits only, for tel: and wa.me links
    phoneHref: 'tel:+447762544117',
    emailHref: 'mailto:tech-operations@arifdigitalsolution.com',
    whatsappHref: `https://wa.me/447762544117?text=${encodeURIComponent(
      'Hello ARIF Digital Solutions, I would like to make an enquiry about your services.',
    )}`,
    // PLACEHOLDER values
    location: 'Location to be confirmed',
    hours: 'Mon – Fri, 09:00 – 17:00',
  },
} as const

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
] as const
