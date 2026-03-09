import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "charcoal": "#0d0d0d",
        "charcoal-light": "#161616",
        "charcoal-mid": "#1e1e1e",
        "warm-white": "#f5f0e8",
        "warm-cream": "#e8dcc8",
        "deep-red": "#8b1a1a",
        "accent-red": "#c0392b",
        "olive": "#4a5240",
        "olive-light": "#6b7a5a",
        "gold": "#b8956a",
        "gold-light": "#d4a574",
      },
      fontFamily: {
        "serif": ["Cormorant Garamond", "Georgia", "serif"],
        "sans": ["DM Sans", "Helvetica Neue", "sans-serif"],
        "display": ["Cormorant", "Georgia", "serif"],
      },
      letterSpacing: {
        "widest2": "0.3em",
        "widest3": "0.5em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        "fade-in": "fadeIn 1s ease forwards",
        "slide-left": "slideLeft 0.8s ease forwards",
        "slide-right": "slideRight 0.8s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
