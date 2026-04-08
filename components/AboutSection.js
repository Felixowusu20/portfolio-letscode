export function AboutSection({ portfolio }) {
  return (
    <section className="section-block" id="about">
      <p className="eyebrow">About</p>
      <h2>{portfolio.headline}</h2>
      <div className="about-grid">
        <div className="about-copy">
          {portfolio.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="highlight-list">
          {portfolio.highlights.map((item) => (
            <article className="highlight-item" key={item.label}>
              <p>{item.label}</p>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
