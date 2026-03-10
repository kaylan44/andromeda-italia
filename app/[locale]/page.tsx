import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import FeaturedMenu from "@/components/FeaturedMenu";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-charcoal">
      <Navbar />
      <Hero />
      <About />
      <FeaturedMenu />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

