# Implementation Plan: Initial Portfolio Landing Page

**Branch**: `001-initial-page-setup` | **Date**: 2026-06-14 | **Spec**: `specs/001-initial-page-setup/spec.md`

**Input**: Feature specification from `specs/001-initial-page-setup/spec.md`

## Summary

Build a personal portfolio single-page app for GitHub Pages using Node.js + React with Tailwind CSS for styling and GSAP for section and card animations. The page will include a navbar (Technologies, Projects, Contact, GitHub), hero section with primary CTA to Contact, technologies segment, and project cards with required metadata and right-edge image placement. Figma is the visual source of truth for component sizing, spacing, typography, and interaction behavior.

GSAP motion will follow a clear section-by-section pattern: an entrance sequence for hero kicker, title, body, and CTA; scroll-triggered reveals for section headings and content blocks; and staggered card/item animations for technologies and projects. The animation system should stay lightweight, rely on opacity and translate/scale transforms, and preserve readable content when reduced-motion is enabled.

## Technical Context

**Language/Version**: TypeScript 5.x on Node.js 22 LTS

**Primary Dependencies**: React 18, Vite 5, Tailwind CSS 3, GSAP 3, PostCSS, Autoprefixer

**Storage**: N/A (static content for v1)

**Testing**: No automated testing by constitution; manual smoke verification only

**Target Platform**: Modern desktop and mobile browsers; GitHub Pages static hosting

**Project Type**: Frontend web application (single-page portfolio)

**Performance Goals**:
- Initial content visible in under 2.5s on a standard broadband profile
- Smooth animations targeting 60fps on modern devices
- No layout shifts that obscure core section content

**Constraints**:
- Must use Tailwind CSS for styling and GSAP for animations
- Must preserve readability and accessibility in high-contrast dark palette
- Must support GitHub Pages project-site base path
- Must not include unit/integration/e2e tests

**Scale/Scope**:
- 1 page
- 4 main sections (Navbar, Hero, Technologies, Projects) plus Contact target section
- Initial content set includes at least 3 project cards

## Design Inputs

Figma prototype is authoritative for:
- Component layout, spacing, and visual hierarchy
- Typography scale and section composition
- Animation intent and interaction timing

Tailwind design tokens to implement from user-provided palette:
- Background: #00050F
- Text primary: #E5F4FF
- Text accent: #75BCEA
- Card surface: #004666
- Button surface: #75BCEA
- Button text: #E5F4FF

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Clean Code First: PASS
  - Plan uses small composable components and explicit section boundaries.
- Modern UI/UX Mandatory: PASS
  - Plan includes bold editorial direction, responsive behavior, and meaningful motion.
- No Automated Testing Superseding Rule: PASS
  - Plan explicitly excludes test frameworks and test tasks.
- Required Stack (Node.js + React + Tailwind CSS + GSAP): PASS
  - All implementation choices align with required technologies.
- Motion Quality: PASS
  - GSAP plan is purposeful and restrained to preserve clarity/performance.

## Project Structure

### Documentation (this feature)

```text
specs/001-initial-page-setup/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Source Code (repository root)

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── public/
│   └── assets/
│       └── projects/
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles/
    │   └── globals.css
    ├── data/
    │   ├── technologies.ts
    │   └── projects.ts
    ├── components/
    │   ├── Navbar.tsx
    │   ├── Hero.tsx
    │   ├── Technologies.tsx
    │   ├── Projects.tsx
    │   ├── ProjectCard.tsx
    │   └── Contact.tsx
    └── animations/
        └── timeline.ts
```

**Structure Decision**: Use a single React frontend project at repository root with section-based components, static data modules for v1, and centralized GSAP timeline orchestration in `src/animations/timeline.ts`.

## Implementation Phases

### Phase 0: Setup and Tooling

1. Initialize React + TypeScript app with Vite in current repository.
2. Install and configure Tailwind CSS, PostCSS, and Autoprefixer.
3. Install GSAP and create base animation utility module.
4. Configure Vite base path for GitHub Pages project site.

### Phase 1: Design System and Layout Foundation

1. Add Tailwind theme extension for custom colors from palette.
2. Configure base styles in `src/styles/globals.css` for background/text defaults.
3. Implement semantic page scaffolding for section anchors.
4. Align spacing/typography scale with Figma measurements.

### Phase 2: Section Implementation

1. Build Navbar with links to Technologies, Projects, Contact, and external GitHub.
2. Build Hero section with identity/value statement and CTA to Contact anchor.
3. Build Technologies section from structured data source.
4. Build Projects section with reusable ProjectCard component.
5. Ensure project cards include required fields and right-aligned image placement.
6. Build Contact section target for CTA and navbar navigation.

### Phase 3: GSAP Motion Implementation

1. Add a hero entrance timeline that animates the kicker, title, supporting text, and CTA in sequence, using the same title/text reveal pattern shown in the example.
2. Add scroll-triggered reveals for section headings, technology tiles, and project cards so content animates as it enters the viewport.
3. Add staggered reveal behavior for grouped items, especially technology cards and project cards, with subtle transform/opacity motion only.
4. Keep animation triggers scoped to the relevant section containers or data attributes so the timeline remains maintainable as the page grows.
5. Respect reduced-motion preferences by skipping non-essential motion and leaving all content visible.

### GSAP Animation Map

This feature will use a small set of reusable motion patterns rather than one-off animations:

1. Hero copy reveal
  - Animate the kicker, heading, description, and CTA in order.
  - Use short vertical translation plus fade-in for a clean editorial entrance.
  - Keep the sequence tight so the first screen feels polished without delaying usability.
2. Section header reveal
  - Animate section labels and headings when the section reaches the viewport.
  - Use a single trigger per section and a short delay between label and heading.
3. Grid/item reveal
  - Animate technology items and project cards with a stagger.
  - Prefer opacity and y movement, with a small scale change only if it adds emphasis.
4. Emphasis motion
  - Reserve stronger motion for key moments only, such as the hero CTA or project card entrance.
  - Avoid complex transforms that could distract from reading.
5. Reduced motion
  - If reduced motion is preferred, render the page statically and skip scroll triggers.

### Implementation Notes

- The current app structure already exposes clear animation anchors through section wrappers and data attributes, so the animation layer can stay centralized in `src/animations/timeline.ts`.
- Existing selectors should remain stable and descriptive, such as hero kicker/title/body/CTA markers and item-level markers for technologies and projects.
- The motion system should be resilient: if animation setup fails, the page content must still render and remain fully usable.

### Phase 4: Manual Validation and Deployment Readiness

1. Manual responsiveness pass on mobile and desktop breakpoints.
2. Manual validation of anchor navigation and external GitHub link behavior.
3. Manual review against Figma visual intent and color token accuracy.
4. Prepare GitHub Pages deployment settings and route/base verification.

### Next Step Plan: Responsive Hardening (Navbar + Contact CTA)

Objective: Close the remaining responsive gaps so no primary interactive element overflows its container or viewport on common device widths.

Scope:
- Navbar horizontal behavior from 320px up to desktop widths.
- Contact email CTA sizing/wrapping behavior for long email text.

Implementation actions:
1. Refactor navbar layout to support wrap/stack behavior at small breakpoints while preserving desktop alignment.
2. Add width guards (`max-w-full`, `min-w-0`, controlled gap/spacing) to all navbar interactive elements.
3. Update contact CTA styles so the email button stays within its parent card and viewport using `w-full`, `max-w-full`, and text wrapping/break utilities.
4. Add explicit overflow protection to container elements (`overflow-x-hidden` only where appropriate, avoid masking real layout bugs).
5. Run manual viewport pass at 320, 375, 390, 414, 768, 1024, and 1440 widths.

Acceptance checks:
1. No horizontal scrollbar appears in default browsing state across target widths.
2. Navbar links remain visible and operable without clipping at 320px width.
3. Contact email CTA never exceeds the contact card width and remains tappable/readable on small screens.
4. Desktop presentation remains visually consistent with Figma intent.

Primary file touchpoints:
- `src/components/Navbar.tsx`
- `src/components/Contact.tsx`
- `src/styles/globals.css`
- `specs/001-initial-page-setup/quickstart.md`

## Risks and Mitigations

- Risk: GitHub Pages asset paths break due to project-site routing.
  - Mitigation: Configure Vite base early and verify asset URLs in production build.
- Risk: GSAP animations affect performance on low-power devices.
  - Mitigation: Use lightweight transforms/opacity and short durations.
- Risk: Figma details may be interpreted inconsistently.
  - Mitigation: Treat Figma spacing/type scales as hard references and document any intentional deviation.

## Complexity Tracking

No constitution violations identified; complexity tracking table not required.
