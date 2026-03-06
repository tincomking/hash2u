import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerStrip from "@/components/TickerStrip";
import BentoGrid from "@/components/BentoGrid";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
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
        <BentoGrid />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-ai/15 to-transparent" />
        <HowItWorks />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-btc/15 to-transparent" />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
