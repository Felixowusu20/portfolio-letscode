export function ServicesSection({ portfolio }) {
  return (
    <section className="template-panel mb-4 p-6 md:p-7" id="services">
      <p className="template-subtitle">Services</p>
      <h2 className="mt-2 font-heading text-2xl font-semibold text-white md:text-3xl">
        What {portfolio.name.split(" ")[0]} Offers
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.services.map((service) => (
          <article
            className="rounded-xl border border-border/80 bg-background/35 p-4 transition hover:border-primary/45"
            key={service.title}
          >
            <h3 className="font-heading text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-2" aria-label="Core skills">
        {portfolio.skills.map((skill) => (
          <span
            className="rounded-full border border-primary/45 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
            key={skill}
          >
            {skill}
          </span>
        ))}
      </div>

      <h3 className="mt-8 font-heading text-xl font-semibold text-white md:text-2xl">
        Portfolio Feature Ideas
      </h3>

      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portfolio.projects.map((project) => (
          <article
            className="rounded-xl border border-border/80 bg-background/35 p-4 transition hover:border-primary/45"
            key={project.title}
          >
            <h3 className="font-heading text-lg font-semibold text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
