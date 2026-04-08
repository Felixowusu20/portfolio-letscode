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
    <main className="portfolio-page">
      <header className="top-bar">
        <Link href="/">All Portfolios</Link>
        <a href={portfolio.linkedin} target="_blank" rel="noreferrer">
          LinkedIn Profile
        </a>
      </header>
      <PortfolioHero portfolio={portfolio} />
      <AboutSection portfolio={portfolio} />
      <ServicesSection portfolio={portfolio} />
      <FooterCta portfolio={portfolio} />
    </main>
  );
}
