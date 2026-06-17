interface NavbarProps {
  githubUrl: string
}

const navItems = [
  { label: 'Technologies', href: '#technologies' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar({ githubUrl }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-textAccent/25 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl flex-col items-start gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-4">
        <a href="#hero" className="shrink-0 font-display text-2xl leading-none tracking-[0.08em] text-textPrimary sm:text-3xl">
          Portfolio
        </a>

        <ul className="flex w-full min-w-0 flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-[0.12em] text-textAccent sm:w-auto sm:justify-end sm:gap-x-5 sm:text-sm">
          {navItems.map((item) => (
            <li key={item.label} className="shrink-0">
              <a className="inline-flex max-w-full transition hover:text-textPrimary" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="min-w-0 shrink-0">
            <a
              className="inline-flex max-w-full rounded-md border border-textAccent/40 px-3 py-1.5 transition hover:border-textPrimary hover:text-textPrimary"
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
