"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #06b6d4, #f59e0b)" }}
          >
            <span className="text-[#09090b] font-bold text-xs font-display">#</span>
          </div>
          <span className="font-display font-bold text-base tracking-tight">
            Hash2U<span className="text-text-3">.ai</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/ai" className="text-sm text-text-2 hover:text-ai transition-colors">AI Compute</Link>
          <Link href="/btc" className="text-sm text-text-2 hover:text-btc transition-colors">BTC Hashrate</Link>
          <Link href="/pricing" className="text-sm text-text-2 hover:text-text transition-colors">Pricing</Link>
          <Link href="/ai/docs" className="text-sm text-text-2 hover:text-text transition-colors">Docs</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/dashboard" className="text-sm text-text-2 hover:text-text px-3 py-2 transition-colors">
            Sign In
          </Link>
          <Link
            href="/dashboard"
            className="text-sm font-semibold bg-text text-bg px-4 py-2 rounded-lg hover:bg-text/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden text-text-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-border px-6 py-5 flex flex-col gap-4">
          <Link href="/ai" className="text-sm text-text-2" onClick={() => setOpen(false)}>AI Compute</Link>
          <Link href="/btc" className="text-sm text-text-2" onClick={() => setOpen(false)}>BTC Hashrate</Link>
          <Link href="/pricing" className="text-sm text-text-2" onClick={() => setOpen(false)}>Pricing</Link>
          <Link href="/ai/docs" className="text-sm text-text-2" onClick={() => setOpen(false)}>Docs</Link>
          <Link
            href="/dashboard"
            className="text-sm font-semibold bg-text text-bg px-4 py-3 rounded-lg text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
