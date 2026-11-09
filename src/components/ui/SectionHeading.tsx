import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface Props {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  light?: boolean
  className?: string
}

export function SectionHeading({ eyebrow, title, description, light, className = '' }: Props) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      <p className={`eyebrow flex items-center gap-3 ${light ? '!text-ink/60' : ''}`}>
        <span aria-hidden className="h-px w-8 bg-accent" />
        {eyebrow}
      </p>
      <h2 className="display mt-5 text-[2.25rem] sm:text-5xl lg:text-[3.5rem]">{title}</h2>
      {description && (
        <p className={`mt-6 max-w-2xl text-base leading-relaxed sm:text-lg ${light ? 'text-ink/70' : 'text-mute'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
