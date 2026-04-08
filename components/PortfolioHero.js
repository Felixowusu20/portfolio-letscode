import Image from "next/image";

export function PortfolioHero({ portfolio }) {
  return (
    <section className="template-panel relative mb-4 min-h-[24rem] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={portfolio.cover}
          alt={`${portfolio.name} background`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 grid min-h-[24rem] gap-5 p-6 md:grid-cols-[180px,1fr] md:items-end md:p-8">
        <div className="overflow-hidden rounded-2xl border border-white/30 shadow-2xl shadow-black/55">
          <Image
            src={portfolio.image}
            alt={portfolio.name}
            width={360}
            height={440}
            sizes="(max-width: 870px) 220px, 180px"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-4">
          <p className="template-subtitle text-primary/90">{portfolio.location}</p>
          <h1 className="font-heading text-3xl font-semibold text-white md:text-5xl">
            {portfolio.name}
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-200 md:text-base">
            {portfolio.intro}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#services"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Services
            </a>
            <a
              href="#about"
              className="inline-flex items-center rounded-md border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
