export type ServiceVisualKind =
  | 'code' | 'app' | 'site' | 'product' | 'design' | 'custom' | 'consult'

export interface Service {
  slug: string
  title: string
  short: string
  description: string
  capabilities: string[]
  value: string
  visual: ServiceVisualKind
}

export const services: Service[] = [
  {
    slug: 'software-development',
    title: 'Software Development',
    short: 'Dependable, maintainable software engineered around how your business actually works.',
    description:
      'End-to-end engineering for software that has to last. We translate requirements into clean architecture, well-tested code and documentation your team can build on long after launch.',
    capabilities: ['Architecture & technical design', 'API design & system integration', 'Automated testing & code review', 'Documentation & handover'],
    value: 'Software that stays reliable as your needs grow, with fewer surprises and lower long-term cost of change.',
    visual: 'code',
  },
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    short: 'Fast, accessible web applications for dashboards, portals, platforms and internal tools.',
    description:
      'Modern, browser-based applications that feel as responsive as native software. From customer portals to operational dashboards, we focus on performance, clarity and maintainable front-end architecture.',
    capabilities: ['Single-page & progressive web apps', 'Dashboards & data interfaces', 'Component libraries & design systems', 'Performance & accessibility tuning'],
    value: 'Give users a polished, dependable experience and give your team an application that is simple to extend.',
    visual: 'app',
  },
  {
    slug: 'website-design-development',
    title: 'Website Design & Development',
    short: 'Considered, high-performing websites that present your organisation with confidence.',
    description:
      'Marketing sites and brand experiences designed with a strong editorial point of view and built for speed, search visibility and easy content updates.',
    capabilities: ['Responsive design & build', 'SEO-ready semantic structure', 'Content structure & CMS-ready builds', 'Motion & interaction design'],
    value: 'A website that communicates credibility at first glance and turns attention into enquiries.',
    visual: 'site',
  },
  {
    slug: 'digital-product-development',
    title: 'Digital Product Development',
    short: 'From first concept to a launched product, shaped with you at every stage.',
    description:
      'We help founders and teams turn an idea into a real product: validating scope, defining a sensible first release and building it iteratively so you learn quickly and spend carefully.',
    capabilities: ['Product scoping & roadmapping', 'MVP definition & delivery', 'Iterative release planning', 'Post-launch iteration'],
    value: 'Reach a usable product sooner, with decisions grounded in what users and the market actually tell you.',
    visual: 'product',
  },
  {
    slug: 'ui-ux-product-design',
    title: 'UI/UX & Product Design',
    short: 'Research-informed interface design that makes complex products feel simple.',
    description:
      'User flows, wireframes, interactive prototypes and polished interface design. We design with real constraints in mind, so what is drawn can be built well.',
    capabilities: ['User flows & information architecture', 'Wireframes & clickable prototypes', 'Visual & interface design', 'Design systems & handoff'],
    value: 'Reduce friction, build trust and avoid costly rework by resolving design questions before development.',
    visual: 'design',
  },
  {
    slug: 'custom-software-solutions',
    title: 'Custom Software Solutions',
    short: 'Bespoke tools that replace spreadsheets, workarounds and off-the-shelf compromises.',
    description:
      'When standard tools do not fit, we design focused systems around your processes: workflow tools, internal platforms and integrations that remove manual effort.',
    capabilities: ['Workflow & process automation', 'Internal tools & admin systems', 'Third-party integrations', 'Migration from legacy tools'],
    value: 'Software shaped to your operation, so teams spend time on the work rather than on the workaround.',
    visual: 'custom',
  },
  {
    slug: 'technical-consultation',
    title: 'Technical Consultation',
    short: 'Clear, independent technical advice before you commit budget.',
    description:
      'Short, focused engagements to review an existing build, shape a technical approach or pressure-test a plan. You leave with a clear recommendation and defined next steps.',
    capabilities: ['Technical discovery & feasibility', 'Architecture & stack recommendations', 'Codebase and delivery reviews', 'Estimation & delivery planning'],
    value: 'Make confident technology decisions early, when changing direction is still inexpensive.',
    visual: 'consult',
  },
]
