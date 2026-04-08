import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link href="/" className="navbar__logo">
              <span className="navbar__logo-icon">LC</span>
              LetsCode
            </Link>
            <p className="footer__tagline">
              Building thoughtful software that solves real problems.
            </p>
          </div>

          <div className="footer__columns">
            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              <Link href="/#about" className="footer__link">About</Link>
              <Link href="/#services" className="footer__link">Services</Link>
              <Link href="/#contact" className="footer__link">Contact</Link>
            </div>
            <div className="footer__col">
              <h4 className="footer__col-title">Connect</h4>
              <a href="mailto:letscode@example.com" className="footer__link">Email</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__link">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} LetsCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
