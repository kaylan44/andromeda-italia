"use client";

import { useState, useEffect } from "react";
import {usePathname, useRouter} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";

const navLinks = [
  { key: "home", href: "#home" },
  { key: "menu", href: "#menu" },
  { key: "gallery", href: "#gallery" },
  { key: "contact", href: "#contact" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToLocale = (nextLocale: "en" | "fr") => {
    const hash = window.location.hash ?? "";
    const rest =
      pathname === `/${locale}` ? "" : pathname.replace(new RegExp(`^/${locale}`), "");

    router.push(`/${nextLocale}${rest}${hash}`);
  };

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
          scrolled
            ? "bg-black/80 border-b border-white/5 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="font-display text-2xl font-light tracking-[0.25em] text-warm-white hover:text-gold transition-colors duration-300"
          >
            ANDROMEDA
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-sans text-xs tracking-widest text-warm-white/70 hover:text-gold uppercase transition-colors duration-300 relative group"
              >
                {t(`links.${link.key}`)}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-6">
            {/* Lang switcher */}
            <div className="flex items-center gap-1 text-xs tracking-wider">
              <button
                onClick={() => goToLocale("en")}
                className={`transition-colors duration-200 px-1 ${locale === "en" ? "text-gold" : "text-warm-white/40 hover:text-warm-white/70"}`}
              >
                {t("language.en")}
              </button>
              <span className="text-warm-white/20">|</span>
              <button
                onClick={() => goToLocale("fr")}
                className={`transition-colors duration-200 px-1 ${locale === "fr" ? "text-gold" : "text-warm-white/40 hover:text-warm-white/70"}`}
              >
                {t("language.fr")}
              </button>
            </div>

            <a
              href="#menu"
              onClick={(e) => { e.preventDefault(); handleNavClick("#menu"); }}
              className="border border-gold/40 text-gold text-xs tracking-widest uppercase px-5 py-2.5 hover:bg-gold hover:text-charcoal transition-all duration-300 font-sans"
            >
              {t("reserve")}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label={t("mobile.toggleAriaLabel")}
          >
            <span className={`block w-6 h-px bg-warm-white/80 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
            <span className={`block w-4 h-px bg-warm-white/80 transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : ""}`} />
            <span className={`block w-6 h-px bg-warm-white/80 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/96 nav-blur flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="font-display text-3xl font-light text-warm-white/80 hover:text-gold transition-all duration-300 tracking-widest"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {t(`links.${link.key}`)}
            </a>
          ))}
          <div className="mt-6 flex items-center gap-3 text-sm tracking-wider">
            <button
              onClick={() => goToLocale("en")}
              className={`transition-colors px-2 ${locale === "en" ? "text-gold" : "text-warm-white/40"}`}
            >{t("language.en")}</button>
            <span className="text-warm-white/20">|</span>
            <button
              onClick={() => goToLocale("fr")}
              className={`transition-colors px-2 ${locale === "fr" ? "text-gold" : "text-warm-white/40"}`}
            >{t("language.fr")}</button>
          </div>
        </div>
      </div>
    </>
  );
}
