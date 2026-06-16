export function Hero() {
  return (
    <section id="hero" className="relative mx-auto grid min-h-[74vh] w-full max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <p data-hero-kicker className="font-body text-sm uppercase tracking-[0.28em] text-textAccent">
          Software Developer
        </p>

        <h1
          data-hero-title
          className="mt-3 max-w-5xl font-display text-5xl leading-[1] tracking-[0.01em] text-textPrimary sm:text-6xl md:text-7xl"
        >
          Gerardo Salazar Vargas
        </h1>

        <p data-hero-body className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-textPrimary/90 sm:text-xl">
          I design and build modern web experiences using React, Tailwind CSS, and GSAP, translating ideas into high-impact products.
        </p>

        <div data-hero-cta className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-button px-6 py-3 font-body text-sm font-bold uppercase tracking-[0.14em] text-textPrimary transition hover:brightness-110"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
        <div className="absolute inset-0 rounded-[2rem] bg-textAccent/20 blur-3xl" />
        <img
          data-hero-visual
          className="relative aspect-[4/5] w-full rounded-[2rem] border border-textAccent/25 object-cover shadow-card"
          src="/assets/images/heroImage.jpeg"
          alt="Portrait for the portfolio hero section"
        />
      </div>
    </section>
  )
}
