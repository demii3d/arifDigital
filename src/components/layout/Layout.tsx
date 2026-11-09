import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollProgress } from './ScrollProgress'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const t = window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 450)
      return () => window.clearTimeout(t)
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname, hash])
  return null
}

function Loading() {
  return (
    <div role="status" aria-live="polite" className="grid min-h-[60vh] place-items-center">
      <span className="size-6 animate-spin rounded-full border-2 border-line-strong border-t-accent" />
      <span className="sr-only">Loading page</span>
    </div>
  )
}

export function Layout() {
  const { pathname } = useLocation()
  // useOutlet freezes the exiting route's element so it can animate out cleanly.
  const outlet = useOutlet()

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[70] -translate-y-24 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink focus:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <ScrollManager />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          id="main"
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          <Suspense fallback={<Loading />}>{outlet}</Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
