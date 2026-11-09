import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks, site } from '../../data/site'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

export function Header() {
  const [openPath, setOpenPath] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  // Menu is open only for the route it was opened on, so navigation closes it.
  const open = openPath === pathname
  const setOpen = (v: boolean | ((o: boolean) => boolean)) =>
    setOpenPath((cur) => ((typeof v === 'function' ? v(cur === pathname) : v) ? pathname : null))

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll + Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenPath(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500 ${
          scrolled || open ? 'border-b border-line bg-ink/85 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <div className="wrap flex h-[4.5rem] items-center justify-between">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {navLinks.filter((l) => l.to !== '/contact').map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `group relative py-2 text-sm font-medium transition-colors ${isActive ? 'text-bone' : 'text-mute hover:text-bone'}`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      aria-hidden
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-500 ease-out-expo ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block"><Button to="/contact" className="!min-h-11 !px-5">Start a Project</Button></div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="-mr-2 inline-flex size-12 items-center justify-center rounded-full text-bone transition-colors hover:text-accent lg:hidden"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink pt-[4.5rem] lg:hidden"
          >
            <nav aria-label="Mobile" className="wrap flex flex-1 flex-col justify-between pb-10 pt-8">
              <ul>
                {navLinks.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="border-b border-line"
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === '/'}
                      className={({ isActive }) =>
                        `flex min-h-16 items-center justify-between py-3 text-3xl font-medium tracking-tight ${isActive ? 'text-accent' : 'text-bone'}`
                      }
                    >
                      {l.label}
                      <span className="text-xs font-semibold tabular-nums text-mute">0{i + 1}</span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-10 space-y-6">
                <Button to="/contact" className="w-full">Start a Project</Button>
                <p className="space-y-2 text-sm text-mute">
                  <a href={site.contact.phoneHref} className="block min-h-8 underline-offset-4 hover:text-bone hover:underline">{site.contact.phone}</a>
                  <a href={site.contact.emailHref} className="block min-h-8 break-all underline-offset-4 hover:text-bone hover:underline">{site.contact.email}</a>
                </p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
