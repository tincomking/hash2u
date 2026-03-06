import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerStrip from "@/components/TickerStrip";
import ProductCards from "@/components/ProductCards";
import CodeDemo from "@/components/CodeDemo";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ParticleCanvas />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TickerStrip />
        <ProductCards />
        <CodeDemo />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
