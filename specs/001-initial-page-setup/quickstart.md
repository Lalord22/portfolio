# Quickstart - Initial Portfolio Landing Page

## Run Locally

1. Install dependencies:
   - `npm install`
2. Start development server:
   - `npm run dev`
3. Build production output:
   - `npm run build`
4. Preview production output:
   - `npm run preview`

## Manual Validation Checklist

- [ ] Navbar shows Technologies, Projects, Contact, and GitHub links.
- [ ] Hero section is visible on first viewport and CTA scrolls to Contact.
- [ ] Technologies section renders all items without overflow on mobile/desktop.
- [ ] Projects section renders cards with title, description, tags, GitHub link, and right-edge image.
- [ ] Contact section is reachable through navbar and hero CTA.
- [ ] Color usage matches design tokens:
  - Background `#00050F`
  - Primary text `#E5F4FF`
  - Accent text/button `#75BCEA`
  - Card surface `#004666`
- [ ] Animations play smoothly and remain usable with reduced-motion preference.
- [ ] Production build works with GitHub Pages project-site base path.

## Deployment

- Workflow file: `.github/workflows/deploy.yml`
- Target: GitHub Pages (project site)
