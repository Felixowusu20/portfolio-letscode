export function FooterCta({ portfolio }) {
  return (
    <section className="template-panel mb-1 p-6 text-center md:p-8">
      <p className="template-subtitle">Connect</p>
      <h2 className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
        Let us build something useful together.
      </h2>
      <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
        This page is generated from a shared Next.js component system and a
        dedicated profile data object for {portfolio.name}. You can now adjust
        wording, skills, and services from one data source.
      </p>

      <a
        href={portfolio.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center rounded-full border border-border bg-background/40 px-4 py-2 text-sm font-semibold text-primary transition hover:border-primary/55 hover:text-white"
      >
        Visit LinkedIn
      </a>
    </section>
  );
}
