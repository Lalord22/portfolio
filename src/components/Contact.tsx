export function Contact() {
  return (
    <section id="contact" data-animate-section className="mx-auto w-full max-w-6xl px-6 pb-24 pt-20 sm:pb-28 sm:pt-24">
      <div className="rounded-2xl border border-textAccent/30 bg-card/70 px-6 py-8 sm:px-8 sm:py-10">
        <p data-section-label className="font-body text-xs uppercase tracking-[0.24em] text-textAccent">
          Contact
        </p>
        <h2
          data-section-title
          className="mt-2 font-display text-5xl uppercase leading-none tracking-[0.04em] text-textPrimary sm:text-6xl"
        >
          Let's Build Together
        </h2>
        <p data-section-body className="mt-4 max-w-2xl font-body text-textPrimary/90">
          Available for freelance projects and product collaborations. Reach out and I will reply with availability and next steps.
        </p>

        <a
          href="mailto:gerardo.salazar.vargas@est.una.ac.cr"
          className="mt-8 inline-flex rounded-md bg-button px-6 py-3 font-body text-sm font-bold uppercase tracking-[0.14em] text-textPrimary transition hover:brightness-110"
        >
          gerardo.salazar.vargas@est.una.ac.cr
        </a>
      </div>
    </section>
  )
}
