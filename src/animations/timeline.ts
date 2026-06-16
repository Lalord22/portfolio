import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { RefObject } from 'react'

gsap.registerPlugin(ScrollTrigger)

interface AnimationRefs {
  root: RefObject<HTMLElement | null>
  hero: RefObject<HTMLElement | null>
  technologies: RefObject<HTMLElement | null>
  projects: RefObject<HTMLElement | null>
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const initPageAnimations = ({ root, hero, technologies, projects }: AnimationRefs) => {
  if (prefersReducedMotion()) {
    return () => undefined
  }

  const context = gsap.context(() => {
    if (hero.current) {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('[data-hero-kicker]', { y: 28, autoAlpha: 0, duration: 0.55 })
        .from('[data-hero-title]', { y: 36, autoAlpha: 0, duration: 0.7 }, '-=0.3')
        .from('[data-hero-body]', { y: 24, autoAlpha: 0, duration: 0.55 }, '-=0.3')
        .from('[data-hero-cta]', { y: 20, autoAlpha: 0, duration: 0.45 }, '-=0.25')
        .from('[data-hero-visual]', { scale: 0.96, autoAlpha: 0, duration: 0.7 }, '-=0.45')
    }

    gsap.utils.toArray<HTMLElement>('[data-animate-section]').forEach((section) => {
      const sectionLabel = section.querySelector('[data-section-label]')
      const sectionTitle = section.querySelector('[data-section-title]')
      const sectionBody = section.querySelector('[data-section-body]')

      if (!sectionLabel && !sectionTitle && !sectionBody) {
        return
      }

      const sectionTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
        defaults: { ease: 'power2.out' },
      })

      if (sectionLabel) {
        sectionTimeline.from(sectionLabel, { y: 16, autoAlpha: 0, duration: 0.35 })
      }

      if (sectionTitle) {
        sectionTimeline.from(sectionTitle, { y: 24, autoAlpha: 0, duration: 0.5 }, '-=0.15')
      }

      if (sectionBody) {
        sectionTimeline.from(sectionBody, { y: 18, autoAlpha: 0, duration: 0.4 }, '-=0.2')
      }
    })

    if (technologies.current) {
      gsap.from('[data-tech-item]', {
        y: 22,
        autoAlpha: 0,
        duration: 0.45,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: technologies.current,
          start: 'top 80%',
          once: true,
        },
      })
    }

    if (projects.current) {
      gsap.from('[data-project-card]', {
        y: 26,
        autoAlpha: 0,
        duration: 0.48,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projects.current,
          start: 'top 78%',
          once: true,
        },
      })
    }
  }, root)

  return () => context.revert()
}
