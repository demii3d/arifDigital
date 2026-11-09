import { motion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CtaBanner } from '../components/ui/CtaBanner'
import { Button } from '../components/ui/Button'
import { ProjectCard } from '../components/ui/ProjectCard'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { HeroVisual } from '../components/visuals/HeroVisual'
import { evolution, process, teamModel, whyUs } from '../data/content'
import { projects } from '../data/projects'
import { services } from '../data/services'
import { useSeo } from '../hooks/useSeo'

const ease = [0.22, 1, 0.36, 1] as const

function Hero() {
  const ref = useRef<HTMLElement>(null)
  // Cursor spotlight via CSS variables: no React re-renders on mouse move.
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === 'touch' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <section ref={ref} onPointerMove={onMove} aria-labelledby="hero-title" className="group grid-lines relative overflow-hidden border-b border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 motion-reduce:hidden bg-[radial-gradient(420px_circle_at_var(--mx,50%)_var(--my,50%),rgb(255_106_61/0.10),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_30%,rgb(255_106_61/0.10),transparent_70%)]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink" />
      <div className="wrap relative grid items-center gap-16 pb-20 pt-32 sm:pt-40 lg:min-h-[100svh] lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:pb-24">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="eyebrow flex items-center gap-3"
          >
            <span aria-hidden className="h-px w-8 bg-accent" />
            Software & digital product development
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.08, ease }}
            className="display mt-7 text-[2.75rem] sm:text-6xl lg:text-[4.6rem]"
          >
            Turning ideas into{' '}
            <span className="serif-i text-accent">digital solutions</span>{' '}
            that move businesses forward.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease }}
            className="mt-8 max-w-xl text-base leading-relaxed text-mute sm:text-lg"
          >
            We partner with businesses, founders, and ambitious teams to design, develop, and deliver innovative software and digital products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.34, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/contact">Start a Project</Button>
            <Button to="/services" variant="secondary" arrow={false}>Explore Our Services</Button>
          </motion.div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section aria-labelledby="intro-title" className="border-b border-line py-24 sm:py-32">
      <div className="wrap grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Who we are"
            title={<span id="intro-title">An independent practice that grew into <span className="serif-i text-accent">an agency.</span></span>}
          />
          <Reveal delay={0.1} className="mt-8 max-w-xl space-y-5 text-base leading-relaxed text-mute sm:text-lg">
            <p>
              ARIF Digital Solutions is a sole proprietorship specialising in software and product development. What began as independent freelance work has grown into an agency-level business.
            </p>
            <p>
              We now collaborate with a network of skilled freelancers who work alongside us, so every project is delivered by the right specialists under one accountable lead.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8">
            <Link to="/about" className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-bone">
              <span className="border-b border-accent pb-0.5">Read our story</span>
              <ArrowRight size={16} aria-hidden className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-10">
          {evolution.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.08}>
              <li className="relative">
                <span aria-hidden className={`absolute -left-[2.55rem] top-1.5 size-3 rounded-full border-2 sm:-left-[3.05rem] ${i === 2 ? 'border-accent bg-accent' : 'border-line-strong bg-ink'}`} />
                <p className="eyebrow">Stage 0{i + 1}</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight">{e.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute sm:text-base">{e.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ServicesOverview() {
  return (
    <section aria-labelledby="services-title" className="border-b border-line bg-surface py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="What we do"
            title={<span id="services-title">Capabilities across the <span className="serif-i text-accent">product lifecycle.</span></span>}
          />
          <Reveal><Button to="/services" variant="secondary" arrow={false}>View all services</Button></Reveal>
        </div>
        <ul className="mt-14 border-t border-line">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-line">
              <Link
                to={`/services#${s.slug}`}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-6 transition-colors sm:grid-cols-[4rem_1fr_1.2fr_auto] sm:gap-x-6 sm:py-8"
              >
                <span className="text-sm font-semibold tabular-nums text-mute transition-colors group-hover:text-accent">0{i + 1}</span>
                <h3 className="text-lg font-semibold tracking-tight transition-transform duration-500 ease-out-expo group-hover:translate-x-2 sm:text-2xl">{s.title}</h3>
                <p className="col-start-2 row-start-2 mt-2 max-w-md text-sm leading-relaxed text-mute sm:col-start-3 sm:row-start-1 sm:mt-0">{s.short}</p>
                <ArrowRight size={20} aria-hidden className="col-start-3 row-start-1 text-mute transition-all duration-500 group-hover:translate-x-1 group-hover:text-accent sm:col-start-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function WhyUs() {
  return (
    <section aria-labelledby="why-title" className="border-b border-line py-24 sm:py-32">
      <div className="wrap">
        <SectionHeading
          eyebrow="Why ARIF"
          title={<span id="why-title">A considered way of <span className="serif-i text-accent">working together.</span></span>}
        />
        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.07}>
              <div className="border-t border-line-strong pt-6">
                <span className="text-sm font-semibold tabular-nums text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section aria-labelledby="approach-title" className="border-b border-line bg-surface py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Our approach"
            title={<span id="approach-title">A structured path from <span className="serif-i text-accent">idea to launch.</span></span>}
            description="A clear, repeatable methodology keeps projects predictable, and flexible enough to adapt as you learn."
          />
        </div>
        <ol>
          {process.map((p, i) => (
            <Reveal key={p.title}>
              <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 sm:grid-cols-[4.5rem_1fr]">
                <span className="serif-i text-4xl text-accent sm:text-5xl">{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-mute sm:text-base">{p.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}

function SelectedProjects() {
  const featured = projects.slice(0, 3)
  return (
    <section aria-labelledby="projects-title" className="border-b border-line py-24 sm:py-32">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Selected projects"
            title={<span id="projects-title">Work that shows <span className="serif-i text-accent">how we think.</span></span>}
            description="The projects below are illustrative sample concepts that demonstrate our approach. They are not delivered client work."
          />
          <Reveal><Button to="/projects" variant="secondary" arrow={false}>All projects</Button></Reveal>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}><ProjectCard project={p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Collaboration() {
  return (
    <section aria-labelledby="collab-title" className="border-b border-line bg-surface py-24 sm:py-32">
      <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Collaboration model"
            title={<span id="collab-title">One accountable lead. <span className="serif-i text-accent">The right specialists.</span></span>}
            description="We bring together independent designers, engineers and other specialists, selecting the skills each project needs and coordinating them as a single team."
          />
          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-4 text-sm leading-relaxed text-mute sm:text-base">
              <li className="flex gap-3"><span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-accent" />A single point of contact and clear accountability from kickoff to handover.</li>
              <li className="flex gap-3"><span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-accent" />Team shape scales up or down with scope, so you pay for the skills you need.</li>
              <li className="flex gap-3"><span aria-hidden className="mt-2.5 h-px w-5 shrink-0 bg-accent" />Specialists are independent freelancers, not permanent employees of ARIF Digital Solutions.</li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-lg border border-line bg-ink">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <p className="eyebrow">A typical project team</p>
              <p className="text-xs text-mute">Assembled per project</p>
            </div>
            <ul>
              {teamModel.map((t, i) => (
                <li key={t.role} className="flex items-start gap-4 border-b border-line px-5 py-4 last:border-b-0">
                  <span aria-hidden className={`mt-1.5 size-2 shrink-0 rounded-full ${i === 0 ? 'bg-accent' : 'bg-line-strong'}`} />
                  <div className="min-w-0">
                    <p className="font-semibold">{t.role}</p>
                    <p className="mt-0.5 text-sm text-mute">{t.who} · {t.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function Home() {
  useSeo({
    title: 'ARIF Digital Solutions — Software & Digital Product Development',
    description: 'ARIF Digital Solutions partners with businesses, founders and ambitious teams to design, develop and deliver software, web applications and digital products.',
    path: '/',
  })
  return (
    <>
      <Hero />
      <Intro />
      <ServicesOverview />
      <WhyUs />
      <Approach />
      <SelectedProjects />
      <Collaboration />
      <CtaBanner title="Ready to discuss your next project?" />
    </>
  )
}
