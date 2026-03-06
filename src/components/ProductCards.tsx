import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const AI_MODELS = ["Claude", "GPT-4o", "DeepSeek", "Llama", "Gemini", "Mistral"];

export default function ProductCards() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
          Two Products. <span className="text-gradient-white">One Platform.</span>
        </h2>
        <p className="text-text-dim max-w-2xl mx-auto leading-relaxed">
          Whether you need AI inference tokens or Bitcoin mining hashrate,
          Hash2U delivers compute power with transparent pricing.
        </p>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
        {/* AI Compute Card */}
        <ScrollReveal>
          <div className="product-card product-card-ai bg-card border border-border rounded-2xl p-8 h-full">
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-ai/10 border border-ai-border flex items-center justify-center">
                  <svg className="w-5 h-5 text-ai" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">AI Compute</h3>
                  <p className="text-xs text-text-muted">GPU Inference Tokens</p>
                </div>
              </div>

              <p className="text-text-dim text-sm leading-relaxed mb-6">
                One API key to access every major LLM. OpenAI-compatible format &mdash;
                change one line of code and save 20-40%.
              </p>

              {/* Model chips */}
              <div className="grid grid-cols-3 gap-2 mb-6">
                {AI_MODELS.map((m) => (
                  <div key={m} className="bg-bg rounded-lg px-3 py-2 text-center text-xs font-mono text-ai/80 border border-border">
                    {m}
                  </div>
                ))}
              </div>

              {/* Code preview */}
              <div className="bg-bg rounded-xl p-4 mb-6 font-mono text-xs overflow-x-auto border border-border leading-6">
                <span className="text-ai">from</span>{" "}
                <span className="text-text/80">openai</span>{" "}
                <span className="text-ai">import</span>{" "}
                <span className="text-text/80">OpenAI</span>
                <br />
                <span className="text-text/80">client = OpenAI(base_url=</span>
                <span className="text-success">&quot;https://api.hash2u.ai/v1&quot;</span>
                <span className="text-text/80">)</span>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-5 mb-6 text-sm">
                {[
                  { v: "15+", l: "models" },
                  { v: "<100ms", l: "TTFT" },
                  { v: "99.9%", l: "uptime" },
                ].map((m) => (
                  <div key={m.l}>
                    <span className="font-mono font-bold text-ai">{m.v}</span>
                    <span className="text-text-muted ml-1">{m.l}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/ai"
                className="block text-center py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, rgba(0,240,255,0.1), rgba(0,102,255,0.1))", border: "1px solid var(--color-ai-border)", color: "var(--color-ai)" }}
              >
                Get API Key &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* BTC Hashrate Card */}
        <ScrollReveal>
          <div className="product-card product-card-btc bg-card border border-border rounded-2xl p-8 h-full">
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-btc/10 border border-btc-border flex items-center justify-center">
                  <svg className="w-5 h-5 text-btc" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">BTC Hashrate</h3>
                  <p className="text-xs text-text-muted">Cloud Mining Contracts</p>
                </div>
              </div>

              <p className="text-text-dim text-sm leading-relaxed mb-6">
                Mine Bitcoin without owning hardware. Start from 10 TH/s with
                30-360 day flexible contracts. Transparent 3-party pricing.
              </p>

              {/* Miners */}
              <div className="grid grid-cols-2 gap-2 mb-6">
                {[
                  { name: "S21 XP", hash: "270 TH/s", eff: "13.5 J/TH" },
                  { name: "S21 XP Hyd", hash: "473 TH/s", eff: "12.0 J/TH" },
                  { name: "S21", hash: "200 TH/s", eff: "17.5 J/TH" },
                  { name: "S21+", hash: "220 TH/s", eff: "16.5 J/TH" },
                ].map((m) => (
                  <div key={m.name} className="bg-bg rounded-lg px-3 py-2 border border-border">
                    <div className="text-xs font-mono text-btc/80">{m.name}</div>
                    <div className="text-xs text-text-muted">{m.hash}</div>
                  </div>
                ))}
              </div>

              {/* Quick calc */}
              <div className="bg-bg rounded-xl p-4 mb-6 border border-border">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-text-muted">100 TH/s &times; 180 days</span>
                  <span className="font-mono font-bold text-btc">~0.034 BTC</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-muted">Estimated value</span>
                  <span className="font-mono font-bold text-success">$3,334</span>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-5 mb-6 text-sm">
                {[
                  { v: "10 TH/s", l: "min." },
                  { v: "30-360", l: "days" },
                  { v: "8%", l: "fee" },
                ].map((m) => (
                  <div key={m.l}>
                    <span className="font-mono font-bold text-btc">{m.v}</span>
                    <span className="text-text-muted ml-1">{m.l}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/btc"
                className="block text-center py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
                style={{ background: "linear-gradient(135deg, rgba(247,147,26,0.1), rgba(255,107,0,0.1))", border: "1px solid var(--color-btc-border)", color: "var(--color-btc)" }}
              >
                Start Mining &rarr;
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
