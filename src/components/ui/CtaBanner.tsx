import { Button } from './Button'
import { Reveal } from './Reveal'

interface Props {
  title?: string
  text?: string
}

/** Light, high-contrast closing section used across pages. */
export function CtaBanner({
  title = 'Have a project in mind?',
  text = 'Tell us what you are trying to build. We will come back with honest thoughts on scope, approach and next steps.',
}: Props) {
  return (
    <section aria-labelledby="cta-title" className="bg-paper text-ink">
      <div className="wrap grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <Reveal>
          <p className="eyebrow !text-ink/60">Next step</p>
          <h2 id="cta-title" className="display mt-5 text-[2.5rem] sm:text-6xl lg:text-7xl">
            {title.replace(/\.?\?$/, '')}
            <span className="serif-i text-accent-deep">?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">{text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" variant="dark">Start a Project</Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
