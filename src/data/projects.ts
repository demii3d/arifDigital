export type ProjectCategory =
  | 'Web Applications' | 'Websites' | 'Digital Products' | 'UI/UX Design' | 'Custom Software'

export type ProjectVisualKind = 'dashboard' | 'mobile' | 'site' | 'calendar' | 'system' | 'table'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  summary: string
  overview: string
  challenge: string
  solution: string
  deliverables: string[]
  stack: string[]
  visual: ProjectVisualKind
  /** Set to false once this entry describes a real, delivered project. */
  placeholder: boolean
}

/**
 * SAMPLE CONTENT. These are illustrative concept projects used to demonstrate
 * the layout. They are not real clients or delivered engagements. Replace
 * each entry (and set `placeholder: false`) with actual work.
 */
export const projects: Project[] = [
  {
    slug: 'ledgerline-finance-dashboard',
    title: 'Ledgerline',
    category: 'Web Applications',
    summary: 'A finance operations dashboard concept for reconciling invoices and tracking cash flow.',
    overview: 'A concept for a web dashboard that brings invoicing, payments and reporting into a single, readable workspace for small finance teams.',
    challenge: 'Finance teams often juggle spreadsheets and several tools, making it slow to see what is overdue, what is reconciled and what needs attention.',
    solution: 'A focused dashboard with a clear status model, saved filters and exportable views, designed so the most important items surface first.',
    deliverables: ['Interface design', 'Component library', 'Responsive web application', 'Accessibility review'],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
    visual: 'dashboard',
    placeholder: true,
  },
  {
    slug: 'fieldnote-service-app',
    title: 'Fieldnote',
    category: 'Digital Products',
    summary: 'A mobile-first product concept for field teams to log jobs, photos and sign-offs on site.',
    overview: 'A concept for a mobile-first product helping field service crews capture work as it happens, even with unreliable connectivity.',
    challenge: 'Paper forms and delayed reporting cause missing details and slow invoicing after jobs complete.',
    solution: 'A lightweight, offline-tolerant flow with large touch targets, guided checklists and instant job summaries.',
    deliverables: ['Product scoping', 'Mobile-first UX', 'Progressive web app', 'Release roadmap'],
    stack: ['React', 'PWA', 'TypeScript', 'IndexedDB'],
    visual: 'mobile',
    placeholder: true,
  },
  {
    slug: 'northgate-studio-website',
    title: 'Northgate Studio',
    category: 'Websites',
    summary: 'An editorial portfolio website concept for an architecture and interiors practice.',
    overview: 'A concept for a quiet, image-led website where typography and whitespace let the work speak.',
    challenge: 'The studio needed a site that felt as considered as its projects, while remaining quick to load and easy to update.',
    solution: 'A restrained editorial layout, structured project pages and a content model ready for a headless CMS.',
    deliverables: ['Brand-aligned design', 'Responsive build', 'SEO structure', 'Content model'],
    stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    visual: 'site',
    placeholder: true,
  },
  {
    slug: 'orbit-booking-platform',
    title: 'Orbit Booking',
    category: 'Digital Products',
    summary: 'A scheduling product concept for independent practitioners and small clinics.',
    overview: 'A concept for a booking experience that lets clients self-schedule while giving practitioners control over availability.',
    challenge: 'Back-and-forth messages to arrange appointments consume time and cause double bookings.',
    solution: 'A calendar-first interface with clear availability rules, reminders and a simple client booking flow.',
    deliverables: ['Product strategy', 'UX flows', 'Interactive prototype', 'MVP front end'],
    stack: ['React', 'TypeScript', 'Date handling', 'Tailwind CSS'],
    visual: 'calendar',
    placeholder: true,
  },
  {
    slug: 'meridian-design-system',
    title: 'Meridian',
    category: 'UI/UX Design',
    summary: 'A design system concept: tokens, components and documentation for a growing product team.',
    overview: 'A concept for a scalable design system that keeps product interfaces consistent as more people contribute.',
    challenge: 'Inconsistent patterns across screens slowed delivery and weakened the product’s identity.',
    solution: 'A token-driven component library with usage guidance, accessibility baselines and a clear contribution process.',
    deliverables: ['Design tokens', 'Component specifications', 'Documentation', 'Developer handoff'],
    stack: ['Design tokens', 'React', 'Storybook', 'TypeScript'],
    visual: 'system',
    placeholder: true,
  },
  {
    slug: 'atlas-inventory-system',
    title: 'Atlas Inventory',
    category: 'Custom Software',
    summary: 'A custom internal tool concept replacing spreadsheet-based stock tracking.',
    overview: 'A concept for an internal system that gives a small distributor a trustworthy, shared view of stock and orders.',
    challenge: 'Stock levels lived across several spreadsheets, leading to errors and duplicated effort.',
    solution: 'A structured inventory workspace with role-based views, audit trails and bulk import to ease migration.',
    deliverables: ['Process mapping', 'Admin interface', 'Data import tooling', 'Handover documentation'],
    stack: ['React', 'TypeScript', 'Data tables', 'CSV import'],
    visual: 'table',
    placeholder: true,
  },
]

export const projectCategories: ProjectCategory[] = [
  'Web Applications', 'Websites', 'Digital Products', 'UI/UX Design', 'Custom Software',
]
