import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

function Layer({ index, label, offset, delay, children }: {
  index: string; label: string; offset: string; delay: number; children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
      className={offset}
    >
      <div className="rounded-lg border border-line-strong bg-surface/90 p-4 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="eyebrow !text-[0.65rem]">{index} · {label}</span>
          <span className="flex gap-1" aria-hidden>
            <i className="size-1.5 rounded-full bg-line-strong" />
            <i className="size-1.5 rounded-full bg-line-strong" />
            <i className="size-1.5 rounded-full bg-accent" />
          </span>
        </div>
        {children}
      </div>
    </motion.div>
  )
}

const Connector = () => (
  <div className="ml-10 flex h-8 justify-start sm:ml-14 sm:h-10" aria-hidden>
    <div className="flow-v h-full" />
  </div>
)

export function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="Layered diagram of a software product: interface, services and data connected in sequence"
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div aria-hidden className="absolute -right-6 -top-10 size-56 rounded-full border border-line sm:size-72" />
      <div aria-hidden className="absolute -bottom-8 -left-8 size-40 rounded-full border border-accent/30" />

      <div className="relative" aria-hidden>
        <Layer index="01" label="Interface" offset="mr-6 sm:mr-12" delay={0.35}>
          <div className="grid grid-cols-[1fr_2fr] gap-3">
            <div className="space-y-2">
              <div className="h-2 w-3/4 rounded-full bg-line-strong" />
              <div className="h-2 w-1/2 rounded-full bg-line" />
              <div className="h-2 w-2/3 rounded-full bg-line" />
            </div>
            <div className="space-y-2">
              <div className="h-14 rounded-md bg-gradient-to-br from-raised to-line sm:h-16" />
              <div className="flex gap-2">
                <div className="h-2 flex-1 rounded-full bg-line-strong" />
                <div className="h-2 w-10 rounded-full bg-accent" />
              </div>
            </div>
          </div>
        </Layer>

        <Connector />

        <Layer index="02" label="Services & APIs" offset="ml-6 sm:ml-12" delay={0.5}>
          <div className="flex items-center justify-between">
            {[0, 1, 2, 3].map((n) => (
              <div key={n} className="flex flex-1 items-center last:flex-none">
                <span className={`grid size-9 place-items-center rounded-md border sm:size-10 ${n === 1 ? 'border-accent bg-accent/10' : 'border-line-strong'}`}>
                  <span className={`size-2 rounded-sm ${n === 1 ? 'bg-accent' : 'bg-line-strong'}`} />
                </span>
                {n < 3 && <span className="mx-2 h-px flex-1 bg-line-strong" />}
              </div>
            ))}
          </div>
        </Layer>

        <Connector />

        <Layer index="03" label="Data & infrastructure" offset="mr-2 sm:mr-4" delay={0.65}>
          <div className="space-y-2">
            {[88, 64, 76].map((w, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="h-2 w-6 rounded-full bg-line-strong" />
                <span className="h-2 rounded-full bg-line" style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>
        </Layer>
      </div>
    </div>
  )
}
