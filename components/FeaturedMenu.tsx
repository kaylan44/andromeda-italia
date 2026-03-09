"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const menuCategories = ["All", "Pizza", "Pasta", "Gnocchi", "Lasagne"];

const dishes = [
  {
    id: 1,
    category: "Pizza",
    name: "Margherita Classica",
    description: "San Marzano tomatoes, fior di latte mozzarella, fresh basil, extra virgin olive oil",
    price: "£14",
    image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=600&q=85&auto=format",
    tag: "Signature",
  },
  {
    id: 2,
    category: "Pizza",
    name: "Diavola Nera",
    description: "Squid ink dough, spicy 'nduja, mozzarella, roasted peppers, capers",
    price: "£17",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=85&auto=format",
    tag: "Chef's Pick",
  },
  {
    id: 3,
    category: "Pasta",
    name: "Cacio e Pepe",
    description: "Tonnarelli pasta, aged Pecorino Romano, black pepper, butter",
    price: "£16",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=85&auto=format",
    tag: "Classic",
  },
  {
    id: 4,
    category: "Pasta",
    name: "Tagliatelle al Tartufo",
    description: "Egg tagliatelle, black truffle, Parmigiano cream, wild mushrooms",
    price: "£22",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=85&auto=format",
    tag: "Seasonal",
  },
  {
    id: 5,
    category: "Gnocchi",
    name: "Gnocchi alla Sorrentina",
    description: "Hand-rolled potato gnocchi, San Marzano tomato, fresh mozzarella, basil",
    price: "£15",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&q=85&auto=format",
    tag: "Signature",
  },
  {
    id: 6,
    category: "Lasagne",
    name: "Lasagne della Nonna",
    description: "Slow-braised beef ragù, béchamel, aged Parmigiano, egg pasta sheets",
    price: "£18",
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=85&auto=format",
    tag: "House Special",
  },
];

export default function FeaturedMenu() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredDishes =
    activeCategory === "All"
      ? dishes
      : dishes.filter((d) => d.category === activeCategory);

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-charcoal-light overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#1a1008_0%,transparent_60%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-gold/60" />
            <span className="text-gold text-xs tracking-widest2 uppercase font-sans">Our Cuisine</span>
            <div className="w-8 h-px bg-gold/60" />
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-light text-warm-white tracking-wide mb-4">
            Featured Dishes
          </h2>
          <p className="font-sans text-warm-white/40 text-sm max-w-md mx-auto font-light">
            Each dish is crafted with imported Italian ingredients and generations of culinary tradition.
          </p>
        </div>

        {/* Category filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-14 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          {menuCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-sans tracking-widest uppercase px-6 py-2.5 transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-gold text-charcoal border-gold"
                  : "border-white/10 text-warm-white/50 hover:border-gold/40 hover:text-warm-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dish cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredDishes.map((dish, i) => (
            <div
              key={dish.id}
              className={`group relative bg-charcoal border border-white/5 overflow-hidden transition-all duration-700 hover:border-gold/20 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: visible ? `${i * 100 + 300}ms` : "0ms" }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />

                {/* Tag badge */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-gold/30 px-3 py-1">
                  <span className="text-gold text-xs tracking-wider font-sans">{dish.tag}</span>
                </div>

                {/* Category */}
                <div className="absolute top-4 right-4 text-warm-white/50 text-xs tracking-widest font-sans uppercase">
                  {dish.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-light text-warm-white leading-tight group-hover:text-gold transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <span className="font-serif text-gold text-lg font-light ml-4 flex-shrink-0">{dish.price}</span>
                </div>

                <p className="font-sans text-warm-white/45 text-sm leading-relaxed font-light">
                  {dish.description}
                </p>

                {/* Hover line */}
                <div className="mt-5 w-0 h-px bg-gold transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>

        {/* View full menu CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="inline-flex flex-col items-center gap-4">
            <p className="font-sans text-warm-white/40 text-xs tracking-widest uppercase">
              Discover the complete experience
            </p>
            <a
              href="/menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-gold/50 text-gold text-xs font-sans tracking-widest uppercase px-10 py-4 hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <span>View Full Menu</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
