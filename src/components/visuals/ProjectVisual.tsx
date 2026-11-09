import type { ProjectVisualKind } from '../../data/projects'

const bar = 'rounded-full bg-line-strong'

function Dashboard() {
  const heights = [38, 56, 44, 72, 52, 84, 62, 48, 70]
  return (
    <div className="flex h-full gap-3 p-4 sm:p-5">
      <div className="hidden w-[18%] space-y-2.5 sm:block">
        <div className="mb-4 size-5 rounded-md bg-accent" />
        {[70, 55, 62, 48].map((w, i) => <div key={i} className={`h-2 ${bar}`} style={{ width: `${w}%` }} />)}
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded-md border border-line bg-surface p-2.5">
              <div className={`h-1.5 w-1/2 ${bar}`} />
              <div className={`mt-2.5 h-3 w-3/4 rounded ${i === 0 ? 'bg-accent' : 'bg-bone/70'}`} />
            </div>
          ))}
        </div>
        <div className="flex flex-1 items-end gap-2 rounded-md border border-line bg-surface p-3">
          {heights.map((h, i) => (
            <div key={i} className={`flex-1 rounded-sm ${i === 5 ? 'bg-accent' : 'bg-line-strong'}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function Mobile() {
  return (
    <div className="grid h-full place-items-center p-5">
      <div className="flex h-full max-h-[22rem] aspect-[9/17] flex-col rounded-[1.6rem] border border-line-strong bg-surface p-3">
        <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-line-strong" />
        <div className={`h-2 w-1/2 ${bar}`} />
        <div className="mt-3 space-y-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg border border-line p-2">
              <span className={`size-5 shrink-0 rounded-md ${i === 0 ? 'bg-accent' : 'bg-line-strong'}`} />
              <span className="flex-1 space-y-1.5">
                <span className={`block h-1.5 w-4/5 ${bar}`} />
                <span className="block h-1.5 w-1/2 rounded-full bg-line" />
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto h-7 rounded-full bg-accent" />
      </div>
    </div>
  )
}

function Site() {
  return (
    <div className="flex h-full flex-col gap-3 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <span className="font-serif text-lg italic text-bone">Northgate</span>
        <span className="flex gap-3"><i className={`h-1.5 w-6 ${bar}`} /><i className={`h-1.5 w-6 ${bar}`} /><i className={`h-1.5 w-6 ${bar}`} /></span>
      </div>
      <div className="grid flex-1 grid-cols-5 gap-3">
        <div className="col-span-3 rounded-sm bg-gradient-to-br from-line-strong via-raised to-surface" />
        <div className="col-span-2 flex flex-col gap-3">
          <div className="flex-1 rounded-sm bg-gradient-to-tr from-accent-deep/70 to-raised" />
          <div className="space-y-2"><i className={`block h-1.5 w-full ${bar}`} /><i className="block h-1.5 w-2/3 rounded-full bg-line" /></div>
        </div>
      </div>
    </div>
  )
}

function Calendar() {
  const active = new Set([9, 10, 16, 17, 22, 23])
  return (
    <div className="grid h-full grid-cols-[2fr_1fr] gap-3 p-4 sm:p-5">
      <div className="grid grid-cols-7 grid-rows-5 gap-1.5">
        {Array.from({ length: 35 }, (_, i) => (
          <div key={i} className={`rounded-sm border ${i === 16 ? 'border-accent bg-accent' : active.has(i) ? 'border-line-strong bg-raised' : 'border-line bg-surface'}`} />
        ))}
      </div>
      <div className="space-y-2">
        <div className={`h-2 w-2/3 ${bar}`} />
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-6 rounded-md border ${i === 2 ? 'border-accent bg-accent/15' : 'border-line bg-surface'}`} />
        ))}
      </div>
    </div>
  )
}

function System() {
  return (
    <div className="grid h-full grid-cols-2 gap-3 p-4 sm:p-5">
      <div className="flex flex-col justify-between rounded-md border border-line bg-surface p-3">
        <span className="font-serif text-4xl italic leading-none text-bone sm:text-5xl">Aa</span>
        <div className="flex gap-1.5">
          {['bg-accent', 'bg-bone', 'bg-mute', 'bg-line-strong', 'bg-line'].map((c) => <i key={c} className={`size-5 rounded-full ${c}`} />)}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 rounded-md border border-line bg-surface p-3">
        <div className="h-7 rounded-full bg-accent" />
        <div className="h-7 rounded-full border border-line-strong" />
        <div className="flex items-center justify-between"><i className={`h-1.5 w-1/2 ${bar}`} /><i className="h-4 w-8 rounded-full bg-accent p-0.5"><b className="ml-auto block size-3 rounded-full bg-ink" /></i></div>
      </div>
    </div>
  )
}

function Table() {
  return (
    <div className="flex h-full flex-col gap-2 p-4 sm:p-5">
      <div className="grid grid-cols-[2fr_1fr_1fr] gap-3 border-b border-line pb-2">
        {[0, 1, 2].map((i) => <i key={i} className={`h-1.5 w-2/3 ${bar}`} />)}
      </div>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="grid grid-cols-[2fr_1fr_1fr] items-center gap-3 border-b border-line/60 pb-2">
          <i className={`h-1.5 ${bar}`} style={{ width: `${55 + ((i * 17) % 35)}%` }} />
          <i className="h-1.5 w-1/2 rounded-full bg-line" />
          <i className={`h-3.5 w-3/4 rounded-full ${i === 1 || i === 4 ? 'bg-accent/80' : 'bg-line-strong'}`} />
        </div>
      ))}
    </div>
  )
}

const views: Record<ProjectVisualKind, () => React.JSX.Element> = {
  dashboard: Dashboard, mobile: Mobile, site: Site, calendar: Calendar, system: System, table: Table,
}

interface Props {
  kind: ProjectVisualKind
  label: string
  className?: string
}

/** Abstract UI composition used as a placeholder preview. Replace with real screenshots. */
export function ProjectVisual({ kind, label, className = '' }: Props) {
  const View = views[kind]
  return (
    <div
      role="img"
      aria-label={`Illustrative interface preview for ${label}`}
      className={`relative aspect-[4/3] overflow-hidden bg-raised ${className}`}
    >
      <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />
      <div aria-hidden className="relative h-full origin-center transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]">
        <View />
      </div>
    </div>
  )
}
