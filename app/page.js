import Image from "next/image";
import Link from "next/link";
import { portfolioList } from "@/data/portfolios";

export default function HomePage() {
  return (
    <main className="hub-page">
      <section className="hub-hero">
        <p className="eyebrow">LetsCode Collective</p>
        <h1>Portfolio Hub</h1>
        <p>
          One shared design system. Seven personal portfolio experiences. Pick a
          profile to preview their dedicated portfolio page.
        </p>
      </section>

      <section className="grid-wrap" aria-label="Available portfolios">
        {portfolioList.map((portfolio) => (
          <article className="profile-card" key={portfolio.slug}>
            <div className="cover-frame">
              <Image
                src={portfolio.image}
                alt={portfolio.name}
                width={640}
                height={720}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            <div className="card-content">
              <h2>{portfolio.name}</h2>
              <p>{portfolio.headline}</p>
              <div className="card-meta">
                <span>{portfolio.location}</span>
                <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <Link className="card-cta" href={`/${portfolio.slug}`}>
                Open Portfolio
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
