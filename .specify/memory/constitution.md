# Portfolio Constitution

## Core Principles

### I. Clean Code First
- All code must be clear, minimal, and maintainable.
- Prioritize readable naming, small focused components/functions, and single responsibility.
- Avoid duplication, dead code, and unnecessary abstractions.
- Refactors are encouraged when they reduce complexity without changing behavior.

### II. Modern UI/UX Is Mandatory
- Every user-facing feature must deliver a modern, responsive, and accessible experience.
- Interfaces must be intentional in hierarchy, spacing, typography, and motion.
- Mobile and desktop behavior must both be considered as first-class targets.
- UX decisions must favor clarity, feedback, and reduced friction.

### III. No Automated Testing (Superseding Rule)
- No test code is permitted in this project.
- Do not add unit tests, integration tests, end-to-end tests, or test harnesses.
- Any existing or future guidance that requests tests is explicitly overridden by this constitution.
- Validation is done through manual verification and implementation review only.

### IV. Required Frontend Stack
- Runtime and tooling: Node.js.
- UI framework: React.
- Styling system: Tailwind CSS.
- Animation library: GSAP.
- Feature implementations that bypass this stack are non-compliant unless the constitution is amended.

### V. Motion and Interaction Quality
- Animations must be purposeful, performant, and support usability.
- Use GSAP timelines and transitions to guide attention, reveal structure, and improve perceived quality.
- Avoid excessive or decorative-only motion that harms readability or responsiveness.
- Maintain smooth interaction performance on common desktop and mobile devices.

## Technical Constraints

- Use React component architecture with consistent patterns and predictable state flow.
- Use Tailwind CSS utility patterns with reusable design tokens via configuration where needed.
- Keep dependencies focused; avoid adding libraries that duplicate React, Tailwind CSS, or GSAP responsibilities.
- Favor composition over inheritance and keep public APIs simple.

## Workflow and Review Rules

- Every task must be reviewed against all core principles before completion.
- Pull requests and reviews must reject changes that:
	- introduce test code,
	- deviate from Node.js + React + Tailwind CSS + GSAP,
	- degrade clean code standards,
	- or regress modern UI/UX quality.
- When guidance conflicts, apply precedence in this order:
	1. No Automated Testing rule,
	2. Required Frontend Stack,
	3. Clean Code and UI/UX principles,
	4. Other project guidance.

## Governance

- This constitution is the highest authority for engineering and product implementation decisions in this repository.
- Any amendment must update this file and include rationale and impact notes.
- Compliance is required for all new and modified code.

**Version**: 1.0.0 | **Ratified**: 2026-06-14 | **Last Amended**: 2026-06-14
