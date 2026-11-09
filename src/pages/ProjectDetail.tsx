import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { CtaBanner } from '../components/ui/CtaBanner'
import { Reveal } from '../components/ui/Reveal'
import { ProjectVisual } from '../components/visuals/ProjectVisual'
import { projects } from '../data/projects'
import { useSeo } from '../hooks/useSeo'
import NotFound from './NotFound'

export default function ProjectDetail() {
  const { slug } = useParams()
  const index = projects.findIndex((p) => p.slug === slug)
  const project = projects[index]

  useSeo({
    title: project ? project.title : 'Project not found',
    description: project ? project.overview : 'The requested project could not be found.',
    path: project ? `/projects/${project.slug}` : '/projects',
  })

  if (!project) return <NotFound />
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <header className="grid-lines border-b border-line pb-14 pt-32 sm:pt-40">
        <div className="wrap">
          <Link to="/projects" className="group inline-flex min-h-11 items-center gap-2 text-sm text-mute transition-colors hover:text-bone">
            <ArrowLeft size={16} aria-hidden className="transition-transform group-hover:-translate-x-1" /> All projects
          </Link>
          <p className="eyebrow mt-8">{project.category}{project.placeholder && ' · Sample project'}</p>
          <h1 className="display mt-4 text-5xl sm:text-7xl lg:text-8xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-xl">{project.summary}</p>
        </div>
      </header>

      <div className="wrap -mt-px">
        <div className="group overflow-hidden rounded-b-lg border-x border-b border-line">
          <ProjectVisual kind={project.visual} label={project.title} className="aspect-[4/3] sm:aspect-[16/9]" />
        </div>
      </div>

      <section aria-label="Project details" className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_2fr] lg:gap-24">
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <div><h2 className="eyebrow">Category</h2><p className="mt-2">{project.category}</p></div>
            <div>
              <h2 className="eyebrow">Technology</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((t) => <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow">Deliverables</h2>
              <ul className="mt-3 space-y-2 text-sm text-mute">
                {project.deliverables.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
          </aside>

          <div className="space-y-14">
            {[
              ['Overview', project.overview],
              ['The challenge', project.challenge],
              ['Our approach', project.solution],
            ].map(([h, t]) => (
              <Reveal key={h}>
                <h2 className="serif-i text-3xl text-accent sm:text-4xl">{h}</h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">{t}</p>
              </Reveal>
            ))}
            {project.placeholder && (
              <p className="max-w-2xl rounded-md border border-line-strong bg-surface p-4 text-sm text-mute">
                This is a sample concept used to demonstrate the project layout. It does not describe a real client engagement or results.
              </p>
            )}
            <Button to="/contact" variant="secondary">Discuss a similar project</Button>
          </div>
        </div>
      </section>

      <section aria-label="Next project" className="border-t border-line">
        <Link to={`/projects/${next.slug}`} className="group wrap flex items-center justify-between gap-6 py-14 sm:py-20">
          <div>
            <p className="eyebrow">Next project</p>
            <p className="display mt-3 text-3xl transition-transform duration-500 ease-out-expo group-hover:translate-x-2 sm:text-6xl">{next.title}</p>
          </div>
          <ArrowRight aria-hidden className="size-8 shrink-0 text-mute transition-all group-hover:translate-x-1 group-hover:text-accent sm:size-12" />
        </Link>
      </section>

      <CtaBanner />
    </>
  )
}
