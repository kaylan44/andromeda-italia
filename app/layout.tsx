import type { Metadata } from "next";
import { Cormorant, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const fontSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-sans",
});

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const fontDisplay = Cormorant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Andromeda — Authentic Italian Restaurant London",
  description:
    "Experience authentic Italian cuisine at Andromeda, London. Handcrafted pizzas, fresh pasta, and traditional recipes made with passion.",
  keywords: "Italian restaurant, London, pizza, pasta, fine dining, Andromeda",
  openGraph: {
    title: "Andromeda — Authentic Italian Restaurant London",
    description: "Handcrafted pizzas, fresh pasta, and traditional Italian recipes in the heart of London.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${fontSans.variable} ${fontSerif.variable} ${fontDisplay.variable}`}
    >
      <body className="grain-overlay">{children}</body>
    </html>
  );
}
