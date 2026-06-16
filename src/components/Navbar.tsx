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
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-display text-3xl tracking-[0.08em] text-textPrimary">
          Portfolio
        </a>

        <ul className="flex items-center gap-5 text-sm font-medium uppercase tracking-[0.12em] text-textAccent">
          {navItems.map((item) => (
            <li key={item.label}>
              <a className="transition hover:text-textPrimary" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="rounded-md border border-textAccent/40 px-3 py-1.5 transition hover:border-textPrimary hover:text-textPrimary"
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
