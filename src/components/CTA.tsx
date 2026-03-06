import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-28">
      <ScrollReveal>
        <div className="relative bg-card border border-border rounded-3xl p-12 sm:p-20 text-center overflow-hidden">
          {/* Ambient glows */}
          <div className="absolute top-0 left-1/3 w-80 h-80 bg-ai/[0.05] rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-btc/[0.05] rounded-full blur-[130px] pointer-events-none" />

          <div className="relative">
            <h2 className="font-display font-bold tracking-tight mb-5" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              Start hashing today
            </h2>
            <p className="text-text-dim max-w-lg mx-auto mb-10 text-lg leading-relaxed">
              Whether you&apos;re building AI apps or mining Bitcoin — your compute starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/ai" className="btn-ai w-full sm:w-auto px-8 py-4 rounded-xl text-sm tracking-wide inline-flex items-center justify-center gap-2">
                Get API Key &rarr;
              </Link>
              <Link href="/btc" className="btn-btc w-full sm:w-auto px-8 py-4 rounded-xl text-sm tracking-wide inline-flex items-center justify-center gap-2">
                Buy Hashrate &rarr;
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
