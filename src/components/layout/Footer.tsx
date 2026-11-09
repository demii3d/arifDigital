import { Link } from 'react-router-dom'
import { navLinks, site } from '../../data/site'
import { services } from '../../data/services'
import { Logo } from '../ui/Logo'
import { WhatsAppIcon } from '../ui/WhatsApp'

const year = new Date().getFullYear()
const col = 'text-sm text-mute transition-colors hover:text-bone'

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="wrap grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1.2fr_1.7fr] lg:py-20">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mute">
            Software and digital product development, delivered with a collaborative network of independent specialists.
          </p>
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
            <li><a href={site.contact.emailHref} className={col}>{site.contact.email}</a></li>
            <li className="flex items-center gap-3">
              <a href={site.contact.phoneHref} className={col}>{site.contact.phone}</a>
              <a
                href={site.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp (opens in a new tab)"
                className="inline-grid size-9 place-items-center rounded-full border border-line text-mute transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <WhatsAppIcon className="size-[18px]" />
              </a>
            </li>
            <li>{site.contact.location}</li>
            <li>{site.contact.hours}</li>
          </ul>
          <p className="mt-4 text-xs text-mute/70">Location and hours are placeholders.</p>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-6 pb-24 text-xs sm:pb-6 text-mute sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Sole proprietorship · Collaborative delivery model</p>
        </div>
      </div>
    </footer>
  )
}
