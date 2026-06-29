import { useEffect, useState } from "react";
import { nav, CALENDAR_ID } from "../../content/lauraCopy.js";
import { handleAnchorClick, scrollToSection } from "../../utils/scroll.js";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`.trim()}>
      <div className="site-header__inner">
        <a
          className="site-header__wordmark"
          href="#top"
          onClick={(event) => handleAnchorClick(event, "top")}
        >
          {nav.wordmark}
        </a>

        <nav className="site-header__nav" aria-label="Navegación principal">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-header__link"
              onClick={(event) => handleAnchorClick(event, link.href.replace("#", ""))}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="btn btn--primary btn--sm site-header__cta"
          onClick={() => scrollToSection(CALENDAR_ID)}
        >
          <span className="btn__label site-header__cta-full">AGENDAR LLAMADA</span>
          <span className="btn__label site-header__cta-short">AGENDAR</span>
        </button>
      </div>
    </header>
  );
}
