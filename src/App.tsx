import { MotionConfig, useReducedMotion } from 'framer-motion'
import { lazy, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Intro } from './components/layout/Intro'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Services = lazy(() => import('./pages/Services'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const SEEN_KEY = 'arif-intro-seen'

function hasSeenIntro() {
  try { return sessionStorage.getItem(SEEN_KEY) === '1' } catch { return false }
}

export default function App() {
  const reduce = useReducedMotion()
  // Plays once per browser session; skipped for reduced-motion visitors.
  const [showIntro, setShowIntro] = useState(() => !hasSeenIntro())
  const [ready, setReady] = useState(() => hasSeenIntro())
  const skip = reduce === true

  const reveal = () => {
    setReady(true)
    try { sessionStorage.setItem(SEEN_KEY, '1') } catch { /* storage unavailable */ }
  }

  return (
    <MotionConfig reducedMotion="user">
      {showIntro && !skip && <Intro onReveal={reveal} onDone={() => setShowIntro(false)} />}
      {(ready || skip) && (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<ProjectDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
      )}
    </MotionConfig>
  )
}
