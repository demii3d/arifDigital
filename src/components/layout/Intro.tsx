import { animate, motion, useMotionValue, useTransform } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

const DURATION = 2.2
const MARK =
  'M16 4 4.5 28h6l2-4.8h7L21.5 28h6L16 4Zm0 10-2.5 5.8h5L16 14Z'

interface Props {
  /** Fired as the curtain starts lifting, so the page can begin its own entrance. */
  onReveal: () => void
  /** Fired once the curtain has fully left the screen. */
  onDone: () => void
}

/** First-visit splash: logo draws itself, wordmark reveals, curtain lifts. Click, tap or press a key to skip. */
export function Intro({ onReveal, onDone }: Props) {
  const [exiting, setExiting] = useState(false)
  const exitingRef = useRef(false)
  const progress = useMotionValue(0)
  const percent = useTransform(progress, (v) => String(Math.round(v * 100)).padStart(3, '0'))

  const reveal = useCallback(() => {
    if (exitingRef.current) return
    exitingRef.current = true
    setExiting(true)
    onReveal()
  }, [onReveal])

  useEffect(() => {
    const controls = animate(progress, 1, { duration: DURATION, ease: [0.65, 0, 0.35, 1], onComplete: reveal })
    return () => controls.stop()
  }, [progress, reveal])

  // Lock scroll while the splash is up; any key skips it.
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = () => reveal()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [reveal])

  // Interactive: the mark leans gently toward the pointer.
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rx = useTransform(py, [-1, 1], [10, -10])
  const ry = useTransform(px, [-1, 1], [-10, 10])
  const onMove = (e: React.PointerEvent) => {
    px.set((e.clientX / window.innerWidth) * 2 - 1)
    py.set((e.clientY / window.innerHeight) * 2 - 1)
  }

  return (
    <motion.div
      role="presentation"
      onPointerMove={onMove}
      onClick={reveal}
      animate={{ y: exiting ? '-100%' : '0%' }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => exitingRef.current && onDone()}
      className="grid-lines fixed inset-0 z-[100] flex cursor-pointer select-none flex-col items-center justify-center bg-ink"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_40%_at_50%_45%,rgb(255_106_61/0.12),transparent_70%)]" />

      <div className="relative flex flex-col items-center" style={{ perspective: 700 }}>
        <motion.svg
          viewBox="0 0 32 32"
          aria-hidden
          style={{ rotateX: rx, rotateY: ry }}
          className="size-24 sm:size-32"
        >
          <motion.path
            d={MARK}
            fillRule="evenodd"
            stroke="var(--color-accent)"
            strokeWidth="0.5"
            strokeLinejoin="round"
            initial={{ pathLength: 0, fill: 'rgb(255 106 61 / 0)' }}
            animate={{ pathLength: 1, fill: 'rgb(255 106 61 / 1)' }}
            transition={{
              pathLength: { duration: 1.1, ease: [0.65, 0, 0.35, 1] },
              fill: { duration: 0.6, delay: 0.9 },
            }}
          />
        </motion.svg>

        <p className="sr-only">ARIF Digital Solutions</p>
        <div aria-hidden className="mt-8 overflow-hidden">
          <motion.p
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-4xl font-extrabold tracking-[0.3em] pl-[0.3em] sm:text-5xl"
          >
            ARIF
          </motion.p>
        </div>
        <div aria-hidden className="mt-2 overflow-hidden">
          <motion.p
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center text-[0.65rem] font-medium uppercase tracking-[0.45em] pl-[0.45em] text-mute sm:text-xs"
          >
            Digital Solutions
          </motion.p>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 wrap pb-8 sm:pb-10">
        <div className="flex items-end justify-between text-xs text-mute">
          <motion.span aria-hidden className="tabular-nums">{percent}</motion.span>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); reveal() }}
            className="inline-flex min-h-11 items-center px-2 font-semibold uppercase tracking-widest transition-colors hover:text-bone"
          >
            Skip intro
          </button>
        </div>
        <div aria-hidden className="mt-2 h-px w-full bg-line">
          <motion.div style={{ scaleX: progress }} className="h-full origin-left bg-accent" />
        </div>
      </div>
    </motion.div>
  )
}
