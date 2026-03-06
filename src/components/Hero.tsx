"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/5 w-[500px] h-[500px] bg-ai/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/5 w-[500px] h-[500px] bg-btc/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#a855f7]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div
        className={`relative z-10 text-center max-w-5xl transition-all duration-1000 ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-mono text-text-dim tracking-wide">PLATFORM LIVE</span>
        </div>

        {/* Title */}
        <h1
          className="font-display font-bold tracking-[-0.04em] leading-[1.1] mb-6"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
        >
          <span className="text-gradient-brand">Hash2U</span>
          <span className="text-text-muted">.ai</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gradient-white font-display font-medium mb-3" style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}>
          All Hash Power. One Platform.
        </p>
        <p className="text-text-dim max-w-2xl mx-auto mb-14 leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)" }}>
          AI model API tokens and BTC mining hashrate, unified.
          <br className="hidden sm:block" />
          One account. One balance. Infinite compute.
        </p>

        {/* Dual CTA */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${
            show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link
            href="/ai"
            className="group w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-[#000] text-sm tracking-wide transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #00f0ff, #0066ff)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(0,240,255,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5" />
              </svg>
              AI Compute
            </span>
          </Link>
          <Link
            href="/btc"
            className="group w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-[#000] text-sm tracking-wide transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg, #f7931a, #ff6b00)" }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 0 40px rgba(247,147,26,0.5)")}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
              </svg>
              BTC Hashrate
            </span>
          </Link>
        </div>

        {/* Stats row */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center transition-all duration-1000 delay-500 ${
            show ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { value: "15+", label: "AI Models", color: "text-ai" },
            { value: "$0.20", label: "per 1M tokens from", color: "text-text" },
            { value: "10 TH/s", label: "Min. Hashrate", color: "text-btc" },
            { value: "99.9%", label: "Uptime", color: "text-success" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
              {i > 0 && <div className="w-px h-8 bg-border hidden sm:block" />}
              <div>
                <div className={`font-mono text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-text-muted mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-5 h-5 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
