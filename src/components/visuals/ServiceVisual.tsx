import type { ServiceVisualKind } from '../../data/services'

const A = 'var(--color-accent)'

function Art({ kind }: { kind: ServiceVisualKind }) {
  switch (kind) {
    case 'code':
      return (<>
        <rect x="30" y="30" width="260" height="160" rx="6" />
        <path d="M30 56h260" />
        <path d="m72 100-22 20 22 20M248 100l22 20-22 20" stroke={A} />
        <path d="m172 92-24 56" />
      </>)
    case 'app':
      return (<>
        <rect x="26" y="28" width="268" height="164" rx="6" />
        <path d="M26 54h268M92 54v138" />
        <path d="M44 76h30M44 96h24M44 116h30" />
        <path d="M112 170V138M142 170V112M172 170V124M202 170V90M232 170V104" />
        <path d="M202 170V90" stroke={A} strokeWidth="3" />
        <rect x="112" y="68" width="50" height="14" rx="3" />
        <rect x="174" y="68" width="50" height="14" rx="3" />
      </>)
    case 'site':
      return (<>
        <rect x="26" y="28" width="268" height="164" rx="6" />
        <path d="M26 54h268" />
        <circle cx="42" cy="41" r="3" /><circle cx="54" cy="41" r="3" />
        <path d="M52 94h120M52 114h84" strokeWidth="3" />
        <rect x="52" y="140" width="58" height="22" rx="11" stroke={A} />
        <rect x="196" y="76" width="78" height="96" rx="3" />
        <path d="m196 150 28-26 22 18 28-30" stroke={A} />
      </>)
    case 'product':
      return (<>
        <path d="M30 170h60V130h60V90h60V50h50" stroke={A} strokeWidth="3" />
        <circle cx="30" cy="170" r="6" /><circle cx="90" cy="130" r="6" /><circle cx="150" cy="90" r="6" />
        <circle cx="210" cy="50" r="6" /><circle cx="260" cy="50" r="6" fill={A} stroke={A} />
        <path d="M30 190h260" strokeDasharray="3 6" />
      </>)
    case 'design':
      return (<>
        <rect x="40" y="36" width="90" height="148" rx="6" />
        <path d="M54 58h40M54 76h62M54 94h30" />
        <rect x="54" y="120" width="62" height="36" rx="3" />
        <rect x="150" y="36" width="130" height="64" rx="6" />
        <rect x="150" y="120" width="130" height="64" rx="6" />
        <circle cx="180" cy="68" r="14" stroke={A} />
        <path d="M206 60h52M206 76h34M170 152h90" />
        <path d="m266 150 14 14-6 2 4 10-4 2-4-10-5 5z" fill={A} stroke={A} strokeWidth="1" />
      </>)
    case 'custom':
      return (<>
        <rect x="36" y="76" width="64" height="64" rx="6" />
        <rect x="220" y="36" width="64" height="48" rx="6" />
        <rect x="220" y="136" width="64" height="48" rx="6" />
        <path d="M100 108h50M150 108V60h70M150 108v52h70" stroke={A} />
        <circle cx="150" cy="108" r="6" fill={A} stroke={A} />
        <path d="M52 100h32M52 116h20" />
      </>)
    case 'consult':
      return (<>
        <circle cx="130" cy="106" r="52" />
        <path d="m168 144 44 44" strokeWidth="4" />
        <path d="M104 106l18 18 30-36" stroke={A} strokeWidth="3" />
        <path d="M232 52h46M232 72h30M232 92h40" />
        <circle cx="222" cy="52" r="2" fill="currentColor" /><circle cx="222" cy="72" r="2" fill="currentColor" /><circle cx="222" cy="92" r="2" fill="currentColor" />
      </>)
  }
}

export function ServiceVisual({ kind, label }: { kind: ServiceVisualKind; label: string }) {
  return (
    <div className="relative flex aspect-[16/11] items-center justify-center overflow-hidden rounded-lg border border-line bg-surface text-line-strong">
      <div aria-hidden className="grid-lines absolute inset-0 opacity-50" />
      <svg
        viewBox="0 0 320 220"
        role="img"
        aria-label={`Illustration representing ${label}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="relative h-full w-full p-4 text-mute/80"
      >
        <Art kind={kind} />
      </svg>
    </div>
  )
}
