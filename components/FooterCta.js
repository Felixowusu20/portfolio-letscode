export function FooterCta({ portfolio }) {
  return (
    <section className="section-block footer-cta">
      <p className="eyebrow">Connect</p>
      <h2>Let us build something useful together.</h2>
      <p>
        This page is generated from a shared Next.js component system and a
        dedicated profile data object for {portfolio.name}. You can now adjust
        wording, skills, and services from one data source.
      </p>
      <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
        Visit LinkedIn
      </a>
    </section>
  );
}
