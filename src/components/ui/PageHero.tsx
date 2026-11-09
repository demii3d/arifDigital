import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  eyebrow: string
  title: ReactNode
  text?: ReactNode
  children?: ReactNode
}

/** Shared intro block for inner pages. */
export function PageHero({ eyebrow, title, text, children }: Props) {
  return (
    <header className="grid-lines relative border-b border-line pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-ink/60 to-ink" aria-hidden />
      <div className="wrap relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow flex items-center gap-3"
        >
          <span aria-hidden className="h-px w-8 bg-accent" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-6 max-w-5xl text-[2.6rem] sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-mute sm:text-lg"
          >
            {text}
          </motion.p>
        )}
        {children}
      </div>
    </header>
  )
}
