import type { TechnologyItem } from '../data/technologies'

interface TechnologiesProps {
  items: TechnologyItem[]
}

export function Technologies({ items }: TechnologiesProps) {
  return (
    <section
      id="technologies"
      data-animate-section
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-24"
    >
      <p data-section-label className="font-body text-xs uppercase tracking-[0.24em] text-textAccent">
        Technologies
      </p>
      <h2
        data-section-title
        className="mt-2 font-display text-5xl uppercase leading-none tracking-[0.04em] text-textPrimary sm:text-6xl"
      >
        Tools I Work With
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.name}
            data-tech-item
            className="flex items-center gap-4 rounded-xl border border-textAccent/20 bg-card/65 px-5 py-4 shadow-card"
          >
            <img
              className="h-14 w-14 rounded-lg border border-textAccent/15 bg-bg/40 object-contain p-2"
              src={item.logoUrl}
              alt={`${item.name} logo`}
            />
            <div>
              <p className="font-body text-xs uppercase tracking-[0.16em] text-textAccent">{item.category}</p>
              <p className="mt-1 font-body text-xl font-semibold text-textPrimary">{item.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
