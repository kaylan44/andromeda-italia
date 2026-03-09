import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="scroll-smooth">
      <body className="grain-overlay">{children}</body>
    </html>
  );
}
