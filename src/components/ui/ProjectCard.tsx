import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import { ProjectVisual } from '../visuals/ProjectVisual'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block h-full rounded-lg focus-visible:outline-offset-4"
      aria-label={`${project.title}: ${project.category}${project.placeholder ? ' (sample project)' : ''}`}
    >
      <div className="relative overflow-hidden rounded-lg border border-line transition-colors duration-500 group-hover:border-line-strong">
        <ProjectVisual kind={project.visual} label={project.title} />
        {project.placeholder && (
          <span className="absolute left-3 top-3 rounded-full border border-line-strong bg-ink/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-mute backdrop-blur">
            Sample project
          </span>
        )}
        <span className="absolute bottom-3 right-3 grid size-11 translate-y-2 place-items-center rounded-full bg-accent text-ink opacity-0 transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 max-lg:translate-y-0 max-lg:opacity-100">
          <ArrowUpRight size={18} aria-hidden />
        </span>
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-mute">{project.summary}</p>
        </div>
        <span className="eyebrow mt-1.5 hidden shrink-0 sm:block">{project.category}</span>
      </div>
      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
        <li className="eyebrow mr-1 self-center sm:hidden">{project.category}</li>
        {project.stack.map((t) => (
          <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</li>
        ))}
      </ul>
    </Link>
  )
}
