import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, ShieldCheck, Sparkles, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioList } from "@/data/portfolios";

const categoryTabs = [
  { value: "all", label: "All" },
  { value: "technology", label: "Technology" },
  { value: "health", label: "Health" },
  { value: "operations", label: "Operations" },
  { value: "science", label: "Science" },
  { value: "creative", label: "Creative" }
];

const categoryLabels = {
  technology: "Technology",
  health: "Health",
  operations: "Operations",
  science: "Science",
  creative: "Creative"
};

const importantItems = [
  {
    title: "Template-Matched Visual Language",
    description:
      "The dark contrast palette, typography rhythm, and section layering are intentionally aligned with the original HTML style.",
    icon: Layers
  },
  {
    title: "Single Data Source",
    description:
      "Every profile is powered from one central data file so updating content never means editing multiple pages manually.",
    icon: ShieldCheck
  },
  {
    title: "Team-Friendly Scaling",
    description:
      "The architecture supports more people, faster content updates, and cleaner handoffs without duplicating template files.",
    icon: Users
  }
];

const workflow = [
  "Collect person details and image assets once.",
  "Update content in one profile data object.",
  "Preview immediately through a dedicated route."
];

function getProfilesByCategory(category) {
  if (category === "all") {
    return portfolioList;
  }

  return portfolioList.filter((portfolio) => portfolio.category === category);
}

function PortfolioGrid({ category }) {
  const profiles = getProfilesByCategory(category);

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {profiles.map((portfolio) => (
        <Card
          className="group flex h-full flex-col overflow-hidden border-border/80 bg-card/80 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-[0_20px_48px_-28px_rgba(255,77,79,0.6)]"
          key={portfolio.slug}
        >
          <div className="relative aspect-[4/3] overflow-hidden border-b border-border/80">
            <Image
              src={portfolio.image}
              alt={portfolio.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <Badge variant="outline" className="border-primary/50 text-primary">
                {categoryLabels[portfolio.category]}
              </Badge>
              <span className="text-xs text-muted-foreground">{portfolio.location}</span>
            </div>
            <CardTitle className="font-heading text-xl text-white">{portfolio.name}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {portfolio.headline}
            </CardDescription>
          </CardHeader>
          <CardContent className="mt-auto flex items-center justify-between gap-3 pt-0">
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground transition hover:text-white"
            >
              LinkedIn
            </a>
            <Link
              className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              href={`/${portfolio.slug}`}
            >
              Open Portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="relative">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between gap-4">
          <Link href="/" className="font-heading text-xl text-white md:text-2xl">
            Craftivo Collective
          </Link>

          <nav className="hidden items-center gap-6 font-nav text-sm text-muted-foreground md:flex">
            <Link href="#home" className="transition hover:text-white">
              Home
            </Link>
            <Link href="#highlights" className="transition hover:text-white">
              Highlights
            </Link>
            <Link href="#portfolios" className="transition hover:text-white">
              Portfolios
            </Link>
          </nav>

          <Link
            href="#portfolios"
            className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Browse
          </Link>
        </div>
      </header>

      <section className="container py-10 md:py-14" id="home">
        <div className="template-panel relative overflow-hidden p-6 md:p-10">
          <div className="grid-mask pointer-events-none absolute inset-0 bg-grid-fade opacity-20" />

          <div className="relative z-10 grid gap-7 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
            <div className="space-y-5">
              <p className="template-subtitle">LetsCode Portfolio System</p>
              <h1 className="font-heading text-4xl font-semibold leading-tight text-white md:text-5xl">
                Same template spirit, modern Next.js workflow.
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                This home page now introduces the project first with context and
                key strengths, then provides a dedicated tabbed section to explore
                each individual portfolio.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                  href="#portfolios"
                >
                  View Profiles
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm font-semibold text-white transition hover:bg-secondary/70"
                  href="#highlights"
                >
                  Important Details
                </Link>
              </div>

              <div className="grid max-w-xl grid-cols-3 gap-3 pt-1 text-center">
                <div className="rounded-lg border border-border/80 bg-background/40 px-3 py-3">
                  <p className="font-heading text-xl text-white">7</p>
                  <p className="text-xs text-muted-foreground">Live Profiles</p>
                </div>
                <div className="rounded-lg border border-border/80 bg-background/40 px-3 py-3">
                  <p className="font-heading text-xl text-white">1</p>
                  <p className="text-xs text-muted-foreground">Shared System</p>
                </div>
                <div className="rounded-lg border border-border/80 bg-background/40 px-3 py-3">
                  <p className="font-heading text-xl text-white">100%</p>
                  <p className="text-xs text-muted-foreground">Reusable</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-border/80">
                <Image
                  src="/images/covers/cover-7.webp"
                  alt="Portfolio showcase"
                  width={900}
                  height={560}
                  className="h-[280px] w-full object-cover"
                  priority
                />
                <div className="hero-overlay absolute inset-0" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <Badge variant="secondary" className="bg-black/55 text-white">
                    Template-inspired dark UI
                  </Badge>
                </div>
              </div>

              <div className="rounded-2xl border border-border/80 bg-background/45 p-4">
                <p className="font-nav text-xs uppercase tracking-[0.18em] text-primary">
                  Focus Tracks
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Technology, Health, Operations, Science, and Creative profiles
                  are all organized with one consistent presentation standard.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-4" id="highlights">
        <div className="mb-5 space-y-2">
          <p className="template-subtitle">Important Things</p>
          <h2 className="template-title">What Comes Before Portfolio Browsing</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Visitors first understand your direction, system quality, and delivery
            approach, then move into a dedicated tab to inspect each profile.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {importantItems.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="border-border/80 bg-card/80">
                <CardHeader>
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="font-heading text-lg text-white">{item.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="template-panel mt-5 p-5 md:p-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="font-heading text-xl text-white">Delivery Workflow</h3>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {workflow.map((step) => (
              <div
                key={step}
                className="rounded-lg border border-border/80 bg-background/35 px-4 py-3 text-sm text-muted-foreground"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-9 md:py-12" id="portfolios">
        <div className="mb-5 space-y-2">
          <p className="template-subtitle">Portfolio Directory</p>
          <h2 className="template-title">Browse The Various Portfolios</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Switch tabs to view profile groups, then open any person&apos;s dedicated
            portfolio page.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-1 rounded-xl border border-border/80 bg-card/75 p-2">
            {categoryTabs.map((tab) => (
              <TabsTrigger
                className="rounded-md px-4 py-2 font-nav text-xs uppercase tracking-[0.14em]"
                key={tab.value}
                value={tab.value}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categoryTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="mt-5">
              <PortfolioGrid category={tab.value} />
            </TabsContent>
          ))}
        </Tabs>
      </section>
    </main>
  );
}
