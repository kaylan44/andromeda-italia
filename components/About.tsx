"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const t = useTranslations("About");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-charcoal overflow-hidden"
    >
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,#1e1e1e_0%,#0d0d0d_60%)]" />

      {/* Decorative element */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text column */}
          <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-gold text-xs tracking-widest2 uppercase font-sans">{t("eyebrow")}</span>
            </div>

            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light leading-[1.1] text-warm-white mb-8 tracking-wide">
              {t("title.line1")}<br />
              <em className="text-gold font-light">{t("title.emphasis")}</em> {t("title.line2")}
            </h2>

            <div className="w-16 h-px bg-gradient-to-r from-gold/60 to-transparent mb-8" />

            <p className="font-sans text-warm-white/60 text-base leading-relaxed mb-6 font-light">
              {t("p1")}
            </p>

            <p className="font-sans text-warm-white/50 text-base leading-relaxed mb-10 font-light">
              {t("p2")}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
              {[
                { num: "5+", label: t("stats.years") },
                { num: "80+", label: t("stats.dishes") },
                { num: "4.9", label: t("stats.rating") },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl text-gold font-light mb-1">{stat.num}</div>
                  <div className="font-sans text-warm-white/40 text-xs uppercase tracking-wider leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image column */}
          <div className={`transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="relative">
              {/* Main image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/about-main.jpg"
                  alt={t("imageAlt")}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 bg-charcoal-mid border border-white/5 p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-display text-warm-white text-sm italic">{t("quote.text")}</div>
                    <div className="font-sans text-warm-white/40 text-xs tracking-wider mt-0.5">{t("quote.author")}</div>
                  </div>
                </div>
              </div>

              {/* Decorative frame corner */}
              <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-gold/30" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
