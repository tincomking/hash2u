import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TickerStrip from "@/components/TickerStrip";
import BentoGrid from "@/components/BentoGrid";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import RevealObserver from "@/components/RevealObserver";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TickerStrip />
        <BentoGrid />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <HowItWorks />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <Features />
        <CTA />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
