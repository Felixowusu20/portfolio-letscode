import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { portfolioBySlug, portfolioList } from "@/data/portfolios";

const serviceIcons = [
  "bi-briefcase",
  "bi-bar-chart",
  "bi-code-slash",
  "bi-layers",
  "bi-lightbulb",
  "bi-people",
];

function skillPercent(index) {
  return Math.max(65, 95 - index * 6);
}

export function generateStaticParams() {
  return portfolioList.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const portfolio = portfolioBySlug[slug];

  if (!portfolio) {
    return {
      title: "Portfolio Not Found | LetsCode",
      description: "Requested portfolio was not found.",
    };
  }

  return {
    title: `${portfolio.name} | LetsCode Portfolio`,
    description: portfolio.intro,
  };
}

export default async function PortfolioPage({ params }) {
  const { slug } = await params;
  const portfolio = portfolioBySlug[slug];

  if (!portfolio) {
    notFound();
  }

  const year = new Date().getFullYear();

  return (
    <>
      {/* ── Header ── */}
      <header
        id="header"
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="text-xl font-heading font-bold text-white tracking-tight"
          >
            LetsCode
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <a href="#hero" className="navlink active">Home</a>
            <a href="#about" className="navlink">About</a>
            <a href="#services" className="navlink">Services</a>
            <a href="#portfolio" className="navlink">Portfolio</a>
            <div className="relative">
              <button className="navlink flex items-center gap-1 dropdown-trigger">
                Switch Profile
                <i className="bi bi-chevron-down text-[10px] opacity-60"></i>
              </button>
              <ul className="nav-dropdown-list">
                {portfolioList.map((person) => (
                  <li key={person.slug}>
                    <Link
                      href={`/${person.slug}`}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        person.slug === portfolio.slug
                          ? "text-violet-400 bg-violet-500/10"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {person.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="navlink">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={portfolio.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex btn-primary text-xs"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <button
              className="lg:hidden text-white p-2 mobile-nav-toggle"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Nav ── */}
      <div id="mobile-nav" className="lg:hidden">
        <div className="flex justify-between items-center p-6">
          <span className="text-lg font-heading font-bold text-white">
            LetsCode
          </span>
          <button id="mobile-nav-close" className="text-white p-2" aria-label="Close">
            <i className="bi bi-x text-3xl"></i>
          </button>
        </div>
        <nav className="flex flex-col items-center gap-4 pt-8">
          <a href="#hero" className="text-lg text-slate-300 hover:text-white transition-colors py-2">Home</a>
          <a href="#about" className="text-lg text-slate-300 hover:text-white transition-colors py-2">About</a>
          <a href="#services" className="text-lg text-slate-300 hover:text-white transition-colors py-2">Services</a>
          <a href="#portfolio" className="text-lg text-slate-300 hover:text-white transition-colors py-2">Portfolio</a>
          <div className="text-center">
            <button className="text-lg text-slate-300 hover:text-white flex items-center gap-2 py-2 mobile-dropdown-trigger">
              Switch Profile
              <i className="bi bi-chevron-down text-xs chevron-icon transition-transform duration-200"></i>
            </button>
            <div className="hidden mt-3 space-y-2">
              {portfolioList.map((person) => (
                <Link
                  key={person.slug}
                  href={`/${person.slug}`}
                  className={`block py-1 transition-colors ${
                    person.slug === portfolio.slug
                      ? "text-violet-400"
                      : "text-slate-400 hover:text-violet-400"
                  }`}
                >
                  {person.name}
                </Link>
              ))}
            </div>
          </div>
          <a href="#contact" className="text-lg text-slate-300 hover:text-white transition-colors py-2">Contact</a>
        </nav>
      </div>

      <main>
        {/* ── Hero ── */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <Image
            src={portfolio.cover}
            alt={portfolio.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
          <div className="absolute inset-0 hero-glow" />

          <div
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              {portfolio.name}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400">
              I am a{" "}
              <span
                className="typed text-violet-300 font-medium"
                data-typed-items={portfolio.skills.join(", ")}
              ></span>
              <span className="typed-cursor" aria-hidden="true"></span>
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <a
                href={portfolio.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-violet-600 flex items-center justify-center text-white transition-all duration-200"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <Link
                href="/"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-violet-600 flex items-center justify-center text-white transition-all duration-200"
              >
                <i className="bi bi-house"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-20 lg:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="section-badge">About</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
                About
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
                {portfolio.headline}
              </p>
            </div>

            <div className="grid lg:grid-cols-[360px_1fr] gap-8 items-start">
              {/* Profile card */}
              <div
                className="glass-card p-6 text-center"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden ring-2 ring-violet-500/30 ring-offset-2 ring-offset-slate-950">
                  <Image
                    src={portfolio.image}
                    fill
                    className="object-cover"
                    alt={portfolio.name}
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white">
                  {portfolio.name}
                </h3>
                <p className="text-violet-400 text-sm mt-1">
                  {portfolio.headline}
                </p>

                <div className="grid grid-cols-3 gap-4 my-6 py-5 border-y border-white/[0.06]">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {portfolio.projects.length}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">Projects</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {portfolio.services.length}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">Services</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {portfolio.skills.length}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">Skills</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={portfolio.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary flex-1"
                  >
                    <i className="bi bi-linkedin"></i> LinkedIn
                  </a>
                  <a href="#contact" className="btn-secondary flex-1">
                    <i className="bi bi-envelope"></i> Contact
                  </a>
                </div>
              </div>

              {/* Bio + details + skills */}
              <div className="space-y-8" data-aos="fade-left" data-aos-delay="150">
                {/* Bio */}
                <div className="glass-card p-6 lg:p-8">
                  <span className="section-badge text-[10px]">Profile Bio</span>
                  <h3 className="mt-4 text-xl md:text-2xl font-heading font-semibold text-white">
                    Professional Summary
                  </h3>
                  {portfolio.about.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-3 text-slate-400 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Detail grid */}
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-violet-500/20 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <i className="bi bi-geo-alt text-violet-400"></i>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase tracking-wider">
                        Based In
                      </span>
                      <strong className="block text-sm text-white font-semibold mt-0.5">
                        {portfolio.location}
                      </strong>
                    </div>
                  </div>
                  {portfolio.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-violet-500/20 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                        <i className="bi bi-check-circle text-violet-400"></i>
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 uppercase tracking-wider">
                          {item.label}
                        </span>
                        <strong className="block text-sm text-white font-semibold mt-0.5">
                          {item.value}
                        </strong>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Skills */}
                <div
                  className="glass-card p-6 lg:p-8"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-skills-animate
                >
                  <span className="section-badge text-[10px]">Core Skills</span>
                  <h3 className="mt-4 text-xl font-heading font-semibold text-white mb-6">
                    Technical Proficiency
                  </h3>
                  <div className="space-y-5">
                    {portfolio.skills.map((skill, index) => (
                      <div key={skill}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-slate-300 font-medium">
                            {skill}
                          </span>
                          <span className="text-sm text-violet-400 font-semibold">
                            {skillPercent(index)}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                          <div
                            className="skill-progress-bar"
                            role="progressbar"
                            aria-valuenow={skillPercent(index)}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="py-20 lg:py-28 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="section-badge">Services</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
                Services
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
                {portfolio.intro}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {portfolio.services.map((service, index) => (
                <div
                  key={service.title}
                  className={`relative glass-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/25 group ${
                    index === 1
                      ? "ring-1 ring-violet-500/30 bg-violet-500/[0.04]"
                      : ""
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay={100 + index * 80}
                >
                  {index === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-violet-600 text-white text-[10px] font-semibold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-colors">
                    <i
                      className={`bi ${serviceIcons[index % serviceIcons.length]} text-xl text-violet-400`}
                    ></i>
                  </div>
                  <h4 className="text-base font-heading font-semibold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio / Projects ── */}
        <section id="portfolio" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="section-badge">Portfolio</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
                Portfolio
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
                Selected concepts and feature ideas for this profile.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {portfolio.projects.map((project, index) => (
                <div
                  key={project.title}
                  className="glass-card overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/25"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/assets/img/portfolio/portfolio-${(index % 6) + 1}.webp`}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h4 className="text-base font-heading font-semibold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-20 lg:py-28 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="section-badge">Contact</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
                Contact
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
                Use the details below to connect directly.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4" data-aos="fade-right">
                {[
                  { icon: "bi-geo-alt", title: "Address", value: portfolio.location },
                  { icon: "bi-linkedin", title: "LinkedIn", value: portfolio.name },
                  { icon: "bi-house", title: "Hub", value: "Back to LetsCode Home", href: "/" },
                ].map((info) => (
                  <div
                    key={info.title}
                    className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.04]"
                  >
                    <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <i className={`bi ${info.icon} text-violet-400 text-lg`}></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <Link
                          href={info.href}
                          className="text-sm text-violet-400 hover:text-violet-300 transition-colors mt-0.5 block"
                        >
                          {info.value}
                        </Link>
                      ) : (
                        <p className="text-sm text-slate-400 mt-0.5">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="glass-card p-6 lg:p-8 flex flex-col items-center justify-center text-center"
                data-aos="fade-left"
              >
                <i className="bi bi-linkedin text-4xl text-violet-400 mb-4"></i>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Open the official profile link for full details.
                </p>
                <a
                  href={portfolio.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  Visit LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/[0.05] py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          © {year}{" "}
          <strong className="text-slate-300 font-semibold">LetsCode</strong> All
          Rights Reserved
        </div>
      </footer>

      {/* ── Scroll to top ── */}
      <button id="scroll-top" aria-label="Scroll to top">
        <i className="bi bi-arrow-up-short text-xl"></i>
      </button>

      {/* ── Preloader ── */}
      <div id="preloader">
        <div className="w-8 h-8 border-2 border-violet-500/30 border-t-violet-500 rounded-full animate-spin"></div>
      </div>
    </>
  );
}
