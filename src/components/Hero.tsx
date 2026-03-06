"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    requestAnimationFrame(() => setShow(true));
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-ai/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-btc/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl w-full">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2.5 bg-surface border border-border rounded-full px-4 py-2 mb-10 transition-all duration-700 ${
            show ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green" />
          </span>
          <span className="text-xs font-mono text-text-3 tracking-widest uppercase">
            All Systems Operational
          </span>
        </div>

        {/* Title */}
        <h1
          className={`font-display font-bold tracking-[-0.04em] leading-[0.95] text-5xl sm:text-6xl lg:text-8xl mb-6 transition-all duration-1000 ${
            show ? "opacity-100" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="bg-gradient-to-r from-ai via-[#a78bfa] to-btc bg-clip-text text-transparent">
            Hash2U
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`font-display font-semibold text-xl sm:text-2xl text-text mb-4 transition-all duration-1000 delay-100 ${
            show ? "opacity-100" : "opacity-0 translate-y-4"
          }`}
        >
          AI Tokens &middot; BTC Blocks &middot; One Platform
        </p>
        <p
          className={`text-text-2 max-w-lg mx-auto mb-12 text-base sm:text-lg leading-relaxed transition-all duration-1000 delay-200 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          Route to every major LLM. Mine Bitcoin without hardware.
          <br className="hidden sm:block" />
          Unified account, transparent pricing, crypto-native.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link
            href="/ai"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold bg-ai text-black hover:bg-ai/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            AI Compute &rarr;
          </Link>
          <Link
            href="/btc"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold border border-btc/60 text-btc hover:bg-btc/10 transition-colors inline-flex items-center justify-center gap-2"
          >
            BTC Hashrate &rarr;
          </Link>
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden transition-all duration-1000 delay-500 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { value: "15+", label: "AI Models", color: "text-ai" },
            { value: "$0.20", label: "From / 1M tokens", color: "text-text" },
            { value: "10 TH/s", label: "Min. Hashrate", color: "text-btc" },
            { value: "99.9%", label: "Uptime SLA", color: "text-green" },
          ].map((s) => (
            <div key={s.label} className="bg-card px-6 py-5 text-center">
              <div className={`font-mono font-bold text-xl sm:text-2xl ${s.color}`}>
                {s.value}
              </div>
              <div className="text-xs text-text-3 mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
