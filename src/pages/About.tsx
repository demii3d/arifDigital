import { CtaBanner } from '../components/ui/CtaBanner'
import { PageHero } from '../components/ui/PageHero'
import { Reveal } from '../components/ui/Reveal'
import { SectionHeading } from '../components/ui/SectionHeading'
import { evolution, principles, teamModel } from '../data/content'
import { useSeo } from '../hooks/useSeo'

export default function About() {
  useSeo({
    title: 'About Us',
    description: 'The story of ARIF Digital Solutions: an independent software practice that grew into an agency-level business delivering projects with a network of skilled specialists.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        eyebrow="About us"
        title={<>Built on craft, grown through <span className="serif-i text-accent">collaboration.</span></>}
        text="ARIF Digital Solutions is a sole proprietorship specialising in software and product development, delivering complete digital projects with a trusted network of independent specialists."
      />

      <section aria-labelledby="story-title" className="border-b border-line py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <SectionHeading eyebrow="Our story" title={<span id="story-title">From independent work to <span className="serif-i text-accent">agency-level delivery.</span></span>} />
          <div className="space-y-8 text-base leading-relaxed text-mute sm:text-lg">
            <Reveal><p>The business started the way many good ones do: one person, building software for clients directly. Reliability and quality of work earned repeat engagements, and the projects steadily grew in ambition.</p></Reveal>
            <Reveal><p>As scope increased, so did the range of skills required. Rather than stretch a single practice too thin, ARIF Digital Solutions grew by collaborating with skilled freelancers, each a specialist in their discipline, working alongside us on every engagement.</p></Reveal>
            <Reveal><p>The result is an agency-level way of working without the overhead of a large organisation. ARIF Digital Solutions remains a sole proprietorship, with specialists engaged project by project, and it takes full responsibility for what is delivered.</p></Reveal>
          </div>
        </div>
        <ol className="wrap mt-20 grid gap-px overflow-hidden md:grid-cols-3">
          {evolution.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.08}>
              <li className="h-full border-t border-line-strong pr-8 pt-6 md:pb-4">
                <span className="serif-i text-3xl text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{e.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{e.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section aria-label="Mission and vision" className="border-b border-line bg-surface">
        <div className="wrap grid divide-y divide-line lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {[
            { k: 'Mission', t: 'To help organisations turn ideas into dependable software and digital products, through clear thinking, careful craft and honest collaboration.' },
            { k: 'Vision', t: 'To be a trusted technology partner known for thoughtful work, a flexible collaborative model and long-term client relationships.' },
          ].map((m, i) => (
            <Reveal key={m.k} delay={i * 0.1} className={`py-16 sm:py-24 ${i === 1 ? 'lg:pl-16' : 'lg:pr-16'}`}>
              <p className="eyebrow flex items-center gap-3"><span aria-hidden className="h-px w-8 bg-accent" />{m.k}</p>
              <p className="mt-6 font-serif text-3xl leading-tight sm:text-4xl">{m.t}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section aria-labelledby="philosophy-title" className="border-b border-line py-24 sm:py-32">
        <div className="wrap">
          <SectionHeading eyebrow="Working philosophy" title={<span id="philosophy-title">Principles that shape <span className="serif-i text-accent">every project.</span></span>} />
          <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 0.08}>
                <div className="border-t border-line-strong pt-6">
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 max-w-md text-mute">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="model-title" className="border-b border-line bg-surface py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-24">
          <SectionHeading
            eyebrow="The agency model"
            title={<span id="model-title">A lead you know, <span className="serif-i text-accent">a team that fits.</span></span>}
            description="Every engagement is led by ARIF Digital Solutions. Where a project calls for additional design, engineering or testing depth, we bring in independent specialists we trust and manage the work as one team."
          />
          <Reveal delay={0.1}>
            <ul className="divide-y divide-line border-y border-line">
              {teamModel.map((t) => (
                <li key={t.role} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between">
                  <span className="font-semibold">{t.role}</span>
                  <span className="text-sm text-mute">{t.who}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-mute">Specialists are engaged per project as independent contractors.</p>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="commit-title" className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading eyebrow="Innovation & quality" title={<span id="commit-title">Modern tools, <span className="serif-i text-accent">sound judgement.</span></span>} />
            <Reveal delay={0.1}><p className="mt-8 max-w-lg text-mute sm:text-lg">We adopt new technology where it improves the outcome and avoid it where it does not. Quality is checked through design reviews, testing and accessibility checks before anything ships.</p></Reveal>
          </div>
          <div>
            <SectionHeading eyebrow="Client relationships" title={<>Partners, <span className="serif-i text-accent">not vendors.</span></>} />
            <Reveal delay={0.1}><p className="mt-8 max-w-lg text-mute sm:text-lg">You will always know who is working on your project and where it stands. We communicate plainly, flag risks early and aim for relationships that continue well beyond launch.</p></Reveal>
          </div>
        </div>
      </section>

      <CtaBanner title="Let’s build something together?" />
    </>
  )
}
