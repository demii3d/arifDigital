import { Check } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { CtaBanner } from '../components/ui/CtaBanner'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { ServiceVisual } from '../components/visuals/ServiceVisual'
import { services } from '../data/services'
import { useSeo } from '../hooks/useSeo'

export default function Services() {
  useSeo({
    title: 'Services',
    description: 'Software development, web applications, website design, digital product development, UI/UX design, custom software and technical consultation from ARIF Digital Solutions.',
    path: '/services',
  })

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything needed to take a product <span className="serif-i text-accent">from idea to reality.</span></>}
        text="Seven focused disciplines, delivered together or individually, depending on where you are and what you need."
      >
        <nav aria-label="Services on this page" className="mt-12 flex flex-wrap gap-2">
          {services.map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="inline-flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-mute transition-colors hover:border-bone hover:text-bone">
              {s.title}
            </a>
          ))}
        </nav>
      </PageHero>

      {services.map((s, i) => (
        <section key={s.slug} id={s.slug} aria-labelledby={`${s.slug}-title`} className={`scroll-mt-20 border-b border-line py-20 sm:py-28 ${i % 2 ? 'bg-surface' : ''}`}>
          <div className="wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-24">
            <Reveal className={i % 2 ? 'lg:order-2' : ''}>
              <ServiceVisual kind={s.visual} label={s.title} />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow">0{i + 1} / 0{services.length}</p>
              <h2 id={`${s.slug}-title`} className="display mt-4 text-3xl sm:text-5xl">{s.title}</h2>
              <p className="mt-6 text-base leading-relaxed text-mute sm:text-lg">{s.description}</p>

              <h3 className="eyebrow mt-8">Key capabilities</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {s.capabilities.map((c) => (
                  <li key={c} className="flex gap-3 text-sm leading-snug">
                    <Check size={16} aria-hidden className="mt-0.5 shrink-0 text-accent" />{c}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-l-2 border-accent pl-5">
                <h3 className="eyebrow">Business value</h3>
                <p className="mt-2 text-sm leading-relaxed sm:text-base">{s.value}</p>
              </div>

              <Button to="/contact" className="mt-10" variant="secondary">Discuss this service</Button>
            </Reveal>
          </div>
        </section>
      ))}

      <CtaBanner title="Not sure which service fits?" text="That is a perfectly good place to start. Describe what you are trying to achieve and we will suggest a sensible route." />
    </>
  )
}
