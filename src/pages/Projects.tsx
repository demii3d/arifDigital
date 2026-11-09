import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CtaBanner } from '../components/ui/CtaBanner'
import { PageHero } from '../components/ui/PageHero'
import { ProjectCard } from '../components/ui/ProjectCard'
import { projectCategories, projects } from '../data/projects'
import type { ProjectCategory } from '../data/projects'
import { useSeo } from '../hooks/useSeo'

type Filter = 'All' | ProjectCategory

export default function Projects() {
  useSeo({
    title: 'Projects',
    description: 'Selected sample projects from ARIF Digital Solutions across web applications, websites, digital products, UI/UX design and custom software.',
    path: '/projects',
  })
  const [params, setParams] = useSearchParams()
  const initial = params.get('category') as Filter | null
  const [filter, setFilter] = useState<Filter>(
    initial && (projectCategories as string[]).includes(initial) ? initial : 'All',
  )

  const choose = (f: Filter) => {
    setFilter(f)
    setParams(f === 'All' ? {} : { category: f }, { replace: true, preventScrollReset: true })
  }

  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)
  const filters: Filter[] = ['All', ...projectCategories.filter((c) => projects.some((p) => p.category === c))]

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={<>Selected work, <span className="serif-i text-accent">thoughtfully made.</span></>}
        text="A set of illustrative concept projects showing how we approach design and engineering across disciplines."
      >
        <p className="mt-8 inline-block rounded-md border border-line-strong bg-surface px-4 py-3 text-sm text-mute">
          <strong className="font-semibold text-bone">Sample content.</strong> These projects are placeholders and do not represent real client engagements. They are editable in <code className="text-bone">src/data/projects.ts</code>.
        </p>
      </PageHero>

      <section aria-label="Project list" className="py-16 sm:py-24">
        <div className="wrap">
          <div role="group" aria-label="Filter projects by category" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => choose(f)}
                className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition-colors ${
                  filter === f ? 'border-accent bg-accent text-ink' : 'border-line text-mute hover:border-bone hover:text-bone'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <p className="sr-only" role="status" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
          </p>

          {visible.length === 0 ? (
            <div className="mt-16 rounded-lg border border-dashed border-line-strong p-12 text-center text-mute">
              No projects in this category yet.
            </div>
          ) : (
            <ul className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {visible.map((p) => (
                  <motion.li
                    key={p.slug}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <ProjectCard project={p} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}
        </div>
      </section>

      <CtaBanner title="Have something to build?" />
    </>
  )
}
