import Image from "next/image";

export function PortfolioHero({ portfolio }) {
  return (
    <section className="hero-block">
      <div className="hero-cover">
        <Image
          src={portfolio.cover}
          alt={`${portfolio.name} background`}
          fill
          priority
          sizes="100vw"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="avatar">
          <Image
            src={portfolio.image}
            alt={portfolio.name}
            width={360}
            height={440}
            sizes="(max-width: 870px) 220px, 180px"
          />
        </div>
        <div className="hero-text">
          <p className="eyebrow">{portfolio.location}</p>
          <h1>{portfolio.name}</h1>
          <p>{portfolio.intro}</p>
          <div className="hero-actions">
            <a href="#services">Services</a>
            <a href="#about">About</a>
          </div>
        </div>
      </div>
    </section>
  );
}
