import { Link } from 'react-router-dom'

export function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden>
      <path d="M16 4 4.5 28h6l2-4.8h7L21.500 28h6L16 4Zm0 10-2.500 5.800h5L16 14Z" fill="var(--color-accent)" />
    </svg>
  )
}

export function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link to="/" onClick={onClick} aria-label="ARIF Digital Solutions, home" className="group inline-flex items-center gap-3">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className="text-[1.05rem] font-extrabold tracking-[0.14em]">ARIF</span>
        <span className="mt-1 whitespace-nowrap text-[0.6rem] font-medium uppercase tracking-[0.28em] text-mute">Digital Solutions</span>
      </span>
    </Link>
  )
}
