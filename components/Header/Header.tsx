"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig, website } from "@/content/website";

const navItems = website.navigation.desktop;
const mobileNavItems = [website.navigation.mobileExtra[0], ...navItems, ...website.navigation.mobileExtra.slice(1)];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      headerRef.current?.classList.toggle("scrolled", y > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(y / max, 1) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`;
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("locked", menuOpen);

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("locked");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header ref={headerRef} className="nav" id="nav">
        <div className="wrap nav-inner">
          <Link href="/#home" className="nav-wordmark" aria-label={`${siteConfig.name} home`}>
            {siteConfig.shortName.toUpperCase()}
          </Link>
          <nav className="nav-links" aria-label="Primary navigation">
            {navItems.map((item) => <Link key={item.label} href={item.href}>{item.label}</Link>)}
          </nav>
          <div className="nav-right">
            <Link href="/#reservations" className="btn btn--gold btn--sm reserve-nav">
              <span>{website.navigation.reserveLabel}&nbsp; →</span>
            </Link>
            <button
              className={`burger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span /><span />
            </button>
          </div>
          <div ref={progressRef} className="progress" aria-hidden="true" />
        </div>
      </header>

      <div
        className={`mnav ${menuOpen ? "open" : ""}`}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <nav className="mnav-list" aria-label="Mobile navigation">
          {mobileNavItems.map((item, index) => (
            <Link key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>{item.label}</span><small>{String(index + 1).padStart(2, "0")}</small>
            </Link>
          ))}
        </nav>
        <div className="mnav-foot">
          <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
          <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          <span>{siteConfig.address.street} · {siteConfig.address.locality}</span>
        </div>
      </div>
    </>
  );
}
