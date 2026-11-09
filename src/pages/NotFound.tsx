import { PageHero } from '../components/ui/PageHero'
import { Button } from '../components/ui/Button'
import { useSeo } from '../hooks/useSeo'

export default function NotFound() {
  useSeo({ title: 'Page not found', description: 'The page you are looking for does not exist.', path: '/404' })
  return (
    <PageHero
      eyebrow="Error 404"
      title={<>This page has <span className="serif-i text-accent">gone missing.</span></>}
      text="The address may be mistyped or the page may have moved."
    >
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Button to="/">Back to home</Button>
        <Button to="/projects" variant="secondary" arrow={false}>View projects</Button>
      </div>
    </PageHero>
  )
}
