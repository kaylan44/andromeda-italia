import type { Metadata } from "next";
import { Cormorant, Cormorant_Garamond, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` :
    process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  title: "Andromeda — Authentic Italian Restaurant London",
  description:
    "Experience authentic Italian cuisine at Andromeda, London. Handcrafted pizzas, fresh pasta, and traditional recipes made with passion.",
  keywords: "Italian restaurant, London, pizza, pasta, fine dining, Andromeda",
  openGraph: {
    title: "Andromeda — Authentic Italian Restaurant London",
    description: "Handcrafted pizzas, fresh pasta, and traditional Italian recipes in the heart of London.",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Andromeda — Authentic Italian Restaurant London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andromeda — Authentic Italian Restaurant London",
    description: "Handcrafted pizzas, fresh pasta, and traditional Italian recipes in the heart of London.",
    images: ["/images/og-image.webp"],
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
      <body className="grain-overlay">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
