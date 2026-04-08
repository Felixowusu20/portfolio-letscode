import Link from "next/link";
import { notFound } from "next/navigation";
import { AboutSection } from "@/components/AboutSection";
import { FooterCta } from "@/components/FooterCta";
import { PortfolioHero } from "@/components/PortfolioHero";
import { ServicesSection } from "@/components/ServicesSection";
import { portfolioBySlug, portfolioList } from "@/data/portfolios";

export function generateStaticParams() {
  return portfolioList.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const portfolio = portfolioBySlug[params.slug];

  if (!portfolio) {
    return {
      title: "Profile Not Found"
    };
  }

  return {
    title: `${portfolio.name} | Portfolio`,
    description: portfolio.intro
  };
}

export default function PortfolioPage({ params }) {
  const portfolio = portfolioBySlug[params.slug];

  if (!portfolio) {
    notFound();
  }

  return (
    <main className="container py-6 md:py-9">
      <header className="template-panel mb-4 flex flex-wrap items-center justify-between gap-3 p-3 md:p-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-semibold text-white transition hover:bg-secondary/70"
        >
          All Portfolios
        </Link>
        <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
          <span className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
            LinkedIn Profile
          </span>
        </a>
      </header>

      <PortfolioHero portfolio={portfolio} />
      <AboutSection portfolio={portfolio} />
      <ServicesSection portfolio={portfolio} />
      <FooterCta portfolio={portfolio} />
    </main>
  );
}
