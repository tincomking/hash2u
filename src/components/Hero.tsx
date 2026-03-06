"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => { requestAnimationFrame(() => setShow(true)); }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 overflow-hidden">
      {/* Aurora background */}
      <div className="aurora" />
      {/* Center purple blend */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#8b5cf6]/[0.06] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-5xl w-full">
        {/* Status badge */}
        <div
          className={`inline-flex items-center gap-2.5 glass rounded-full px-5 py-2 mb-10 transition-all duration-700 ${show ? "opacity-100" : "opacity-0 translate-y-4"}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
          </span>
          <span className="text-xs font-mono text-text-dim tracking-widest uppercase">All Systems Operational</span>
        </div>

        {/* Main title — massive */}
        <h1
          className={`font-display font-bold tracking-[-0.05em] leading-[0.95] mb-8 transition-all duration-1000 ${show ? "opacity-100" : "opacity-0 translate-y-6"}`}
          style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)" }}
        >
          <span className="text-grad-brand">Hash2U</span>
        </h1>

        {/* Subtitle */}
        <p
          className={`text-grad-white font-display font-semibold mb-4 transition-all duration-1000 delay-150 ${show ? "opacity-100" : "opacity-0 translate-y-4"}`}
          style={{ fontSize: "clamp(1.2rem, 3vw, 1.75rem)" }}
        >
          AI Tokens &middot; BTC Blocks &middot; One Platform
        </p>
        <p
          className={`text-text-dim max-w-xl mx-auto mb-14 leading-relaxed transition-all duration-1000 delay-300 ${show ? "opacity-100" : "opacity-0"}`}
          style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}
        >
          Route to every major LLM. Mine Bitcoin without hardware.
          Unified account, transparent pricing, crypto-native.
        </p>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-1000 delay-500 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <Link href="/ai" className="btn-ai w-full sm:w-auto px-8 py-4 rounded-xl text-sm tracking-wide inline-flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            AI Compute
          </Link>
          <Link href="/btc" className="btn-btc w-full sm:w-auto px-8 py-4 rounded-xl text-sm tracking-wide inline-flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
            </svg>
            BTC Hashrate
          </Link>
        </div>

        {/* Stats — like OpenRouter/Stripe */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden transition-all duration-1000 delay-700 ${show ? "opacity-100" : "opacity-0"}`}>
          {[
            { value: "15+", label: "AI Models", color: "text-ai" },
            { value: "$0.20", label: "From / 1M tokens", color: "text-text" },
            { value: "10 TH/s", label: "Min. Hashrate", color: "text-btc" },
            { value: "99.9%", label: "Uptime SLA", color: "text-success" },
          ].map((s) => (
            <div key={s.label} className="bg-card px-6 py-5 text-center">
              <div className={`font-mono font-bold text-xl sm:text-2xl ${s.color}`}>{s.value}</div>
              <div className="text-xs text-text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
