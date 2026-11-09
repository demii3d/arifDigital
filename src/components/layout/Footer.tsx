import { Link } from 'react-router-dom'
import { navLinks, site } from '../../data/site'
import { services } from '../../data/services'
import { Logo } from '../ui/Logo'

const year = new Date().getFullYear()
const col = 'text-sm text-mute transition-colors hover:text-bone'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1.2fr] lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mute">
            Software and digital product development, delivered with a collaborative network of independent specialists.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer noopener" className={col}>{s.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow">Navigate</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to} className={col}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h2 className="eyebrow">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services#${s.slug}`} className={col}>{s.title}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow">Contact</h2>
          <ul className="mt-5 space-y-3 text-sm text-mute">
            <li>{site.contact.email}</li>
            <li>{site.contact.phone}</li>
            <li>{site.contact.location}</li>
            <li>{site.contact.hours}</li>
          </ul>
          <p className="mt-4 text-xs text-mute/70">Contact details are placeholders.</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Sole proprietorship · Collaborative delivery model</p>
        </div>
      </div>
    </footer>
  )
}
