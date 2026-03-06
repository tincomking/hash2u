import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16">
      {/* Radial gradient overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-btc/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
          <span className="text-xs font-mono text-text-dim">Platform Live</span>
        </div>

        {/* Main title */}
        <h1 className="font-display font-bold text-5xl sm:text-7xl lg:text-8xl tracking-tight mb-6">
          <span className="text-gradient-brand">Hash2U</span>
          <span className="text-text-dim">.ai</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-text/80 mb-4">
          All Hash Power. One Platform.
        </p>
        <p className="text-base sm:text-lg text-text-dim max-w-2xl mx-auto mb-12">
          AI model tokens and BTC mining hashrate, unified.
          <br className="hidden sm:block" />
          One account. One balance. Infinite compute.
        </p>

        {/* Dual CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/ai"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-bg bg-ai hover:bg-ai/90 transition-all glow-ai"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.59.659H9.06a2.25 2.25 0 01-1.59-.659L5 14.5m14 0V17a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 17v-2.5" />
              </svg>
              AI Compute
            </span>
          </Link>
          <Link
            href="/btc"
            className="group relative w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-bg bg-btc hover:bg-btc/90 transition-all glow-btc"
          >
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
              BTC Hashrate
            </span>
          </Link>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center">
          <div>
            <div className="font-mono text-2xl font-bold text-ai">15+</div>
            <div className="text-xs text-text-dim mt-1">AI Models</div>
          </div>
          <div className="w-px h-8 bg-border" />
          <div>
            <div className="font-mono text-2xl font-bold text-text">$0.20</div>
            <div className="text-xs text-text-dim mt-1">per 1M tokens from</div>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="hidden sm:block">
            <div className="font-mono text-2xl font-bold text-btc">10 TH/s</div>
            <div className="text-xs text-text-dim mt-1">Min. Hashrate</div>
          </div>
          <div className="w-px h-8 bg-border hidden sm:block" />
          <div className="hidden sm:block">
            <div className="font-mono text-2xl font-bold text-success">99.9%</div>
            <div className="text-xs text-text-dim mt-1">Uptime</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-5 h-5 text-text-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
