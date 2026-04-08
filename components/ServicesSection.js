export function ServicesSection({ portfolio }) {
  return (
    <section className="section-block" id="services">
      <p className="eyebrow">Services</p>
      <h2>What {portfolio.name.split(" ")[0]} Offers</h2>

      <div className="services-grid">
        {portfolio.services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>

      <div className="skills-wrap" aria-label="Core skills">
        {portfolio.skills.map((skill) => (
          <span className="skill-chip" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <h2 style={{ marginTop: "1.2rem" }}>Portfolio Feature Ideas</h2>
      <div className="project-grid">
        {portfolio.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
