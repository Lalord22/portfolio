import { useEffect, useRef } from 'react'
import { initPageAnimations } from './animations/timeline'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'
import { projects } from './data/projects'
import { technologies } from './data/technologies'

const GITHUB_PROFILE_URL = 'https://github.com/Lalord22'

function App() {
  const rootRef = useRef<HTMLElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)
  const technologiesRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cleanup = initPageAnimations({
      root: rootRef,
      hero: heroRef,
      technologies: technologiesRef,
      projects: projectsRef,
    })

    return cleanup
  }, [])

  return (
    <main ref={rootRef}>
      <Navbar githubUrl={GITHUB_PROFILE_URL} />

      <div ref={heroRef}>
        <Hero />
      </div>

      <div className="section-divider" />

      <div ref={technologiesRef}>
        <Technologies items={technologies} />
      </div>

      <div className="section-divider" />

      <div ref={projectsRef}>
        <Projects items={projects} />
      </div>

      <Contact />
    </main>
  )
}

export default App
