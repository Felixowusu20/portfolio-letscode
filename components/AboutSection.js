export function AboutSection({ portfolio }) {
  return (
    <section className="template-panel mb-4 p-6 md:p-7" id="about">
      <p className="template-subtitle">About</p>
      <h2 className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
        {portfolio.headline}
      </h2>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.45fr,1fr]">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="grid gap-3">
          {portfolio.highlights.map((item) => (
            <article
              className="rounded-xl border border-border/80 bg-background/35 p-4"
              key={item.label}
            >
              <p className="text-xs uppercase tracking-[0.12em] text-primary">{item.label}</p>
              <strong className="mt-2 block font-heading text-base font-semibold text-white md:text-lg">
                {item.value}
              </strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
