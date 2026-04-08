import Link from "next/link";
import Image from "next/image";
import { portfolioList } from "@/data/portfolios";

const services = [
  {
    icon: "bi-palette",
    title: "UI Consistency",
    description:
      "One polished template style across every personal portfolio profile.",
  },
  {
    icon: "bi-layout-text-window-reverse",
    title: "Content System",
    description:
      "Profile content is centralized and easy to update for each person.",
    featured: true,
  },
  {
    icon: "bi-code-slash",
    title: "Modern Implementation",
    description:
      "Built with Next.js while preserving the exact Craftivo visual language.",
  },
  {
    icon: "bi-diagram-3",
    title: "Scalable Workflow",
    description:
      "Add more people without duplicating template files across the project.",
  },
];

const categoryCount = new Set(
  portfolioList.map((p) => p.category)
).size;

export default function HomePage() {
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

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <a href="#hero" className="navlink active">Home</a>
            <a href="#about" className="navlink">About</a>
            <a href="#services" className="navlink">Approach</a>
            <a href="#portfolio-tabs" className="navlink">Portfolios</a>
            <div className="relative">
              <button className="navlink flex items-center gap-1 dropdown-trigger">
                Profiles
                <i className="bi bi-chevron-down text-[10px] opacity-60"></i>
              </button>
              <ul className="nav-dropdown-list">
                {portfolioList.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/${p.slug}`}
                      className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {p.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="navlink">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#portfolio-tabs"
              className="hidden md:inline-flex btn-primary text-xs"
            >
              View Portfolios
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

      {/* ── Mobile Nav Overlay ── */}
      <div id="mobile-nav" className="lg:hidden">
        <div className="flex justify-between items-center p-6">
          <span className="text-lg font-heading font-bold text-white">
            LetsCode
          </span>
          <button
            id="mobile-nav-close"
            className="text-white p-2"
            aria-label="Close navigation"
          >
            <i className="bi bi-x text-3xl"></i>
          </button>
        </div>
        <nav className="flex flex-col items-center gap-4 pt-8">
          <a href="#hero" className="text-lg text-slate-300 hover:text-white transition-colors py-2">Home</a>
          <a href="#about" className="text-lg text-slate-300 hover:text-white transition-colors py-2">About</a>
          <a href="#services" className="text-lg text-slate-300 hover:text-white transition-colors py-2">Approach</a>
          <a href="#portfolio-tabs" className="text-lg text-slate-300 hover:text-white transition-colors py-2">Portfolios</a>
          <div className="text-center">
            <button className="text-lg text-slate-300 hover:text-white flex items-center gap-2 py-2 mobile-dropdown-trigger">
              Profiles
              <i className="bi bi-chevron-down text-xs chevron-icon transition-transform duration-200"></i>
            </button>
            <div className="hidden mt-3 space-y-2">
              {portfolioList.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="block text-slate-400 hover:text-violet-400 transition-colors py-1"
                >
                  {p.name}
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
            src="/assets/img/profile/profile-bg-5.webp"
            alt="LetsCode background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
          <div className="absolute inset-0 hero-glow" />
          <div className="absolute inset-0 bg-grid opacity-40" />

          <div
            className="relative z-10 text-center px-4 max-w-4xl mx-auto"
            data-aos="fade-up"
          >
            <span className="section-badge mb-6">
              <i className="bi bi-stars"></i>
              LetsCode Collective
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              We Build Scalable
              <br />
              <span className="gradient-text">Portfolio Experiences</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-400">
              We are a team of{" "}
              <span
                className="typed text-violet-300 font-medium"
                data-typed-items="Designers, Developers, Mentors, Collaborators"
              ></span>
              <span className="typed-cursor" aria-hidden="true"></span>
            </p>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="py-20 lg:py-28 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="section-badge">About LetsCode</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
                About LetsCode
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
                A unique homepage that explains LetsCode first, then routes
                visitors into each person&apos;s portfolio through tabs and profile
                links.
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
                    src="/assets/img/profile/profile-square-3.webp"
                    fill
                    className="object-cover"
                    alt="LetsCode Team"
                    sizes="96px"
                  />
                </div>
                <div className="relative inline-block">
                  <div className="status-dot absolute -top-0.5 -right-0.5"></div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mt-2">
                  LetsCode Team
                </h3>
                <p className="text-violet-400 text-sm mt-1">
                  Portfolio Experience Studio
                </p>

                <div className="grid grid-cols-3 gap-4 my-6 py-5 border-y border-white/[0.06]">
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {portfolioList.length}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">Profiles</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">
                      {categoryCount}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">Tracks</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white">1</h4>
                    <p className="text-xs text-slate-500 mt-1">Unified UI</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#portfolio-tabs" className="btn-primary flex-1">
                    <i className="bi bi-grid"></i> Open Tabs
                  </a>
                  <a href="#contact" className="btn-secondary flex-1">
                    <i className="bi bi-envelope"></i> Contact
                  </a>
                </div>
              </div>

              {/* Bio + details */}
              <div className="space-y-8" data-aos="fade-left" data-aos-delay="150">
                <div className="glass-card p-6 lg:p-8">
                  <span className="section-badge text-[10px]">Landing Context</span>
                  <h3 className="mt-4 text-xl md:text-2xl font-heading font-semibold text-white">
                    Craftivo Style, LetsCode Story
                  </h3>
                  <p className="mt-4 text-slate-400 leading-relaxed">
                    The animations, colors, typography, and spacing follow the
                    original static template files.
                  </p>
                  <p className="mt-3 text-slate-400 leading-relaxed">
                    Navbar tabs now include direct portfolio access for each
                    person while preserving the same UI language.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: "bi-briefcase", label: "System", value: "Next.js Multi-Portfolio" },
                    { icon: "bi-palette", label: "Design", value: "Template Matched" },
                    { icon: "bi-people", label: "People", value: `${portfolioList.length} Profiles` },
                    { icon: "bi-phone", label: "Layout", value: "Responsive Ready" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-violet-500/20 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                        <i className={`bi ${item.icon} text-violet-400`}></i>
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
              </div>
            </div>
          </div>
        </section>

        {/* ── Services / Approach ── */}
        <section id="services" className="py-20 lg:py-28 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="section-badge">Approach</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
                LetsCode Approach
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
                Reusable system with the same static template visual direction
                and behavior.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className={`relative glass-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/25 group ${
                    service.featured
                      ? "ring-1 ring-violet-500/30 bg-violet-500/[0.04]"
                      : ""
                  }`}
                  data-aos="zoom-in"
                  data-aos-delay={100 + index * 80}
                >
                  {service.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-violet-600 text-white text-[10px] font-semibold uppercase tracking-wider">
                      Featured
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-colors">
                    <i
                      className={`bi ${service.icon} text-xl text-violet-400`}
                    ></i>
                  </div>
                  <h4 className="text-base font-heading font-semibold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                  <a
                    href="#portfolio-tabs"
                    className="inline-flex items-center gap-1.5 mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors font-medium"
                  >
                    Explore
                    <i className="bi bi-arrow-right text-xs"></i>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Portfolio Tabs ── */}
        <section id="portfolio-tabs" className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14" data-aos="fade-up">
              <span className="section-badge">Portfolio Tabs</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-white">
                Open Each Person&apos;s Portfolio
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-relaxed">
                Use these tabs or the navbar dropdown to open each dedicated
                profile page.
              </p>
            </div>

            {/* Tabs bar */}
            <div
              className="flex flex-wrap justify-center gap-2 mb-10"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {portfolioList.map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    i === 0
                      ? "bg-violet-600 text-white shadow-lg shadow-violet-600/25"
                      : "bg-white/[0.04] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                  }`}
                >
                  {p.name}
                </Link>
              ))}
            </div>

            {/* Person cards */}
            <div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {portfolioList.map((p) => (
                <div key={p.slug} className="person-tab-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 font-bold text-sm">
                        {p.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="text-base font-heading font-semibold text-white">
                      {p.name}
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {p.headline}
                  </p>
                  <Link
                    href={`/${p.slug}`}
                    className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 font-semibold transition-colors"
                  >
                    View Portfolio
                    <i className="bi bi-arrow-right text-xs"></i>
                  </Link>
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
                Reach out for profile updates, onboarding new people, or UI
                customization.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-4" data-aos="fade-right">
                {[
                  { icon: "bi-geo-alt", title: "Address", value: "Kumasi, Ghana" },
                  { icon: "bi-envelope", title: "Email", value: "letscode@example.com" },
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
                      <p className="text-sm text-slate-400 mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="glass-card p-6 lg:p-8 flex flex-col items-center justify-center text-center"
                data-aos="fade-left"
              >
                <i className="bi bi-person-lines-fill text-4xl text-violet-400 mb-4"></i>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Visit our portfolio tabs to explore each team member&apos;s
                  profile.
                </p>
                <a href="#portfolio-tabs" className="btn-primary">
                  <i className="bi bi-grid"></i>
                  View Portfolios
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
