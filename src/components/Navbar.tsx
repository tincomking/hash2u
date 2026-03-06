"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00f0ff, #f7931a)" }}>
            <span className="text-[#0a0a0f] font-bold text-sm font-display">#</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Hash2U<span className="text-text-muted">.ai</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/ai" className="text-sm font-medium text-text-dim hover:text-ai transition-colors">
            AI Compute
          </Link>
          <Link href="/btc" className="text-sm font-medium text-text-dim hover:text-btc transition-colors">
            BTC Hashrate
          </Link>
          <Link href="/pricing" className="text-sm font-medium text-text-dim hover:text-text transition-colors">
            Pricing
          </Link>
          <Link href="/ai/docs" className="text-sm font-medium text-text-dim hover:text-text transition-colors">
            Docs
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard" className="text-sm font-medium text-text-dim hover:text-text transition-colors px-4 py-2">
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-semibold px-5 py-2.5 rounded-lg bg-text text-bg hover:bg-text/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-text-dim min-h-[44px] min-w-[44px] flex items-center justify-center" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-border px-6 py-5 flex flex-col gap-4">
          <Link href="/ai" className="text-sm font-medium text-text-dim hover:text-ai" onClick={() => setMobileOpen(false)}>AI Compute</Link>
          <Link href="/btc" className="text-sm font-medium text-text-dim hover:text-btc" onClick={() => setMobileOpen(false)}>BTC Hashrate</Link>
          <Link href="/pricing" className="text-sm font-medium text-text-dim hover:text-text" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link href="/ai/docs" className="text-sm font-medium text-text-dim hover:text-text" onClick={() => setMobileOpen(false)}>Docs</Link>
          <Link href="/dashboard" className="text-sm font-semibold bg-text text-bg px-4 py-3 rounded-lg text-center" onClick={() => setMobileOpen(false)}>Get Started</Link>
        </div>
      )}
    </nav>
  );
}
