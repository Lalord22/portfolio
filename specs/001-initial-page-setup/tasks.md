# Tasks: Initial Portfolio Landing Page

**Input**: Design documents from `specs/001-initial-page-setup/`

**Prerequisites**: plan.md (required), spec.md (required)

**Tests**: No automated tests are allowed by constitution. Validation tasks below are manual-only.

**Organization**: Tasks are grouped by user story so each story can be implemented and validated independently.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (US1, US2, US3)
- Include exact file paths in task descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Initialize project and required toolchain for React + Tailwind + GSAP

- [ ] T001 Initialize Vite React TypeScript app in `package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`
- [ ] T002 Install and configure Tailwind CSS + PostCSS in `tailwind.config.js`, `postcss.config.js`, `src/styles/globals.css`
- [ ] T003 [P] Install GSAP dependency and create animation module scaffold in `src/animations/timeline.ts`
- [ ] T004 [P] Configure GitHub Pages project-site base path in `vite.config.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Shared design system and page skeleton required before story implementation

**CRITICAL**: No user story work starts before this phase is complete

- [ ] T005 Add portfolio color tokens to Tailwind theme (`#00050F`, `#E5F4FF`, `#75BCEA`, `#004666`) in `tailwind.config.js`
- [ ] T006 Set global base styles for background and typography defaults in `src/styles/globals.css`
- [ ] T007 Create base section scaffolding and anchor layout in `src/App.tsx`
- [ ] T008 [P] Create static data models for technologies and projects in `src/data/technologies.ts` and `src/data/projects.ts`
- [ ] T009 Define reusable section container and spacing conventions matching Figma in `src/styles/globals.css`

**Checkpoint**: Foundation complete, user story implementation can begin

---

## Phase 3: User Story 1 - Understand who I am quickly (Priority: P1) MVP

**Goal**: Deliver navbar + hero first impression with CTA to Contact

**Independent Validation**: Manually verify navbar visibility and hero CTA behavior on desktop and mobile

### Implementation for User Story 1

- [ ] T010 [P] [US1] Implement `Navbar` component with links (Technologies, Projects, Contact, GitHub) in `src/components/Navbar.tsx`
- [ ] T011 [P] [US1] Implement `Hero` component with identity/value proposition and CTA in `src/components/Hero.tsx`
- [ ] T012 [US1] Implement `Contact` anchor section target in `src/components/Contact.tsx`
- [ ] T013 [US1] Compose `Navbar`, `Hero`, and `Contact` into page in `src/App.tsx`
- [ ] T014 [US1] Add hero entrance GSAP timeline in `src/animations/timeline.ts` and hook it from `src/components/Hero.tsx`
- [ ] T015 [US1] Apply bold editorial visual treatment from Figma to navbar and hero in `src/styles/globals.css`
- [ ] T016 [US1] Manual validation: navbar links and hero CTA scroll to Contact (record notes in `specs/001-initial-page-setup/quickstart.md`)

**Checkpoint**: User Story 1 should be independently functional

---

## Phase 4: User Story 2 - See technical profile at a glance (Priority: P2)

**Goal**: Deliver technologies segment with clear technical profile

**Independent Validation**: Manually verify technologies section readability and responsive wrapping

### Implementation for User Story 2

- [ ] T017 [P] [US2] Implement `Technologies` component bound to `src/data/technologies.ts` in `src/components/Technologies.tsx`
- [ ] T018 [US2] Add technologies section anchor/id and integrate into `src/App.tsx`
- [ ] T019 [US2] Style technology items/cards according to palette and Figma spacing in `src/styles/globals.css`
- [ ] T020 [US2] Add GSAP reveal animation for technologies section in `src/animations/timeline.ts`
- [ ] T021 [US2] Manual validation: technology list renders correctly across viewport sizes (record notes in `specs/001-initial-page-setup/quickstart.md`)

**Checkpoint**: User Stories 1 and 2 should both work independently

---

## Phase 5: User Story 3 - Browse projects efficiently (Priority: P3)

**Goal**: Deliver project cards with required metadata and right-edge images

**Independent Validation**: Manually verify each card has required fields and layout consistency

### Implementation for User Story 3

- [ ] T022 [P] [US3] Implement reusable `ProjectCard` component with title, short description, tags, GitHub link, and right-edge image in `src/components/ProjectCard.tsx`
- [ ] T023 [P] [US3] Implement `Projects` section rendering cards from `src/data/projects.ts` in `src/components/Projects.tsx`
- [ ] T024 [US3] Integrate Projects section into `src/App.tsx` with proper section anchor
- [ ] T025 [US3] Add project card layout/styling and right-edge image behavior in `src/styles/globals.css`
- [ ] T026 [US3] Add GSAP stagger reveal animation for project cards in `src/animations/timeline.ts`
- [ ] T027 [US3] Implement empty-state message for zero projects in `src/components/Projects.tsx`
- [ ] T028 [US3] Manual validation: cards render required fields and remain readable without overlap on mobile/desktop (record notes in `specs/001-initial-page-setup/quickstart.md`)

**Checkpoint**: All user stories are independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final consistency, performance, and deployment readiness

- [ ] T029 [P] Add reduced-motion fallback handling for GSAP animations in `src/animations/timeline.ts`
- [ ] T030 [P] Refine global typography/spacing to match Figma components precisely in `src/styles/globals.css`
- [ ] T031 Verify final color usage against design tokens in `src/styles/globals.css` and `tailwind.config.js`
- [ ] T032 Configure GitHub Pages deployment workflow in `.github/workflows/deploy.yml`
- [ ] T033 Build and manual smoke-check production output locally with GitHub Pages base path
- [ ] T034 Update usage/run/deploy instructions in `specs/001-initial-page-setup/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- Setup (Phase 1): no dependencies
- Foundational (Phase 2): depends on Setup; blocks all user stories
- User Stories (Phases 3-5): depend on Foundational completion
- Polish (Phase 6): depends on completion of all targeted user stories

### User Story Dependencies

- US1 (P1): starts after Foundational; independent MVP
- US2 (P2): starts after Foundational; can run after or parallel with US1 if staffed
- US3 (P3): starts after Foundational; can run after or parallel with US2 if staffed

### Parallel Opportunities

- Phase 1: T003 and T004 can run in parallel after T001
- Phase 2: T008 and T009 can run in parallel after T005-T007
- US1: T010 and T011 can run in parallel
- US3: T022 and T023 can run in parallel
- Phase 6: T029 and T030 can run in parallel

---

## Implementation Strategy

### MVP First (US1)

1. Complete Phases 1 and 2
2. Complete US1 tasks (Phase 3)
3. Validate navbar and hero CTA behavior manually
4. Demonstrate MVP before moving to next stories

### Incremental Delivery

1. Deliver US1 (navigation + hero + contact CTA)
2. Deliver US2 (technologies profile)
3. Deliver US3 (project cards)
4. Finalize polish and deployment

### Manual Validation Rule

- No automated tests are to be introduced.
- Each story is validated manually against acceptance scenarios in `spec.md`.