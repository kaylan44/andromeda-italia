"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=85&auto=format",
    alt: "Neapolitan pizza fresh from the wood-fired oven",
    caption: "Wood-fired Pizza",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=85&auto=format",
    alt: "Fresh pasta handmade in our kitchen",
    caption: "Fresh Pasta",
    span: "",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=600&q=85&auto=format",
    alt: "Traditional Italian gnocchi",
    caption: "Gnocchi",
    span: "",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=85&auto=format",
    alt: "Authentic Italian lasagne",
    caption: "Lasagne",
    span: "",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85&auto=format",
    alt: "Elegant Italian dining ambiance",
    caption: "Our Ambiance",
    span: "",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1551183053-bf91798d047b?w=800&q=85&auto=format",
    alt: "Italian antipasti and starters",
    caption: "Antipasti",
    span: "col-span-2",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="relative py-28 md:py-40 bg-charcoal overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-8 h-px bg-gold/60" />
              <span className="text-gold text-xs tracking-widest2 uppercase font-sans">Visual Journey</span>
              <div className="w-8 h-px bg-gold/60" />
            </div>
            <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-warm-white tracking-wide mb-4">
              The Gallery
            </h2>
            <p className="font-sans text-warm-white/40 text-sm max-w-sm mx-auto font-light">
              A visual feast. Every frame captures the art of Italian cooking.
            </p>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
            {galleryImages.map((img, i) => (
              <div
                key={img.id}
                onClick={() => setLightbox({ src: img.src, alt: img.alt })}
                className={`group relative overflow-hidden cursor-pointer ${img.span} transition-all duration-700 ${
                  visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-px bg-gold" />
                    <span className="font-sans text-warm-white text-xs tracking-widest uppercase">{img.caption}</span>
                  </div>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-warm-white/60 hover:text-warm-white transition-colors"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative w-full max-w-4xl max-h-[85vh] aspect-video">
            <Image
              src={lightbox.src}
              alt={lightbox.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
