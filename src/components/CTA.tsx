import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTA() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <ScrollReveal>
        <div className="relative bg-card border border-border rounded-3xl p-12 sm:p-16 text-center overflow-hidden">
          {/* Background glows */}
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-ai/[0.06] rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-btc/[0.06] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
              Start Hashing Today
            </h2>
            <p className="text-text-dim max-w-xl mx-auto mb-10 text-lg leading-relaxed">
              Whether you&apos;re building AI apps or mining Bitcoin &mdash;
              your compute starts here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/ai"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-[#000] text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #00f0ff, #0066ff)", boxShadow: "0 0 30px rgba(0,240,255,0.3)" }}
              >
                Get AI API Key &rarr;
              </Link>
              <Link
                href="/btc"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-[#000] text-sm transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg, #f7931a, #ff6b00)", boxShadow: "0 0 30px rgba(247,147,26,0.3)" }}
              >
                Buy Hashrate &rarr;
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
