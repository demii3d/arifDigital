import { ArrowUpRight } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'dark'

const base =
  'group relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-full px-6 text-sm font-semibold transition-colors duration-300 ease-out-expo'

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-ink hover:bg-bone',
  secondary: 'border border-line-strong text-bone hover:border-bone hover:bg-bone hover:text-ink',
  dark: 'bg-ink text-bone hover:bg-accent hover:text-ink',
}

interface Props extends Omit<ComponentProps<typeof Link>, 'className'> {
  variant?: Variant
  arrow?: boolean
  className?: string
  children: ReactNode
}

export function Button({ variant = 'primary', arrow = true, className = '', children, ...rest }: Props) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...rest}>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden
          size={16}
          className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  )
}
