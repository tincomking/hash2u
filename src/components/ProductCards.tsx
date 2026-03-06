import Link from "next/link";

const AI_MODELS = [
  "Claude", "GPT-4o", "DeepSeek", "Llama", "Gemini", "Mistral",
];

export default function ProductCards() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
          Two Products. One Platform.
        </h2>
        <p className="text-text-dim max-w-2xl mx-auto">
          Whether you need AI inference tokens or Bitcoin mining hashrate,
          Hash2U delivers compute power with transparent pricing.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* AI Compute Card */}
        <div className="glass rounded-2xl p-8 group hover:border-ai/30 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-ai/10 border border-ai/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-ai" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl">AI Compute</h3>
              <p className="text-xs text-text-dim">GPU Inference Tokens</p>
            </div>
          </div>

          <p className="text-text-dim mb-6">
            One API key to access every major LLM. OpenAI-compatible format &mdash;
            change one line of code and save 20-40% vs direct pricing.
          </p>

          {/* Model grid */}
          <div className="grid grid-cols-3 gap-2 mb-6">
            {AI_MODELS.map((model) => (
              <div
                key={model}
                className="glass rounded-lg px-3 py-2 text-center text-xs font-mono text-ai/80"
              >
                {model}
              </div>
            ))}
          </div>

          {/* Code preview */}
          <div className="bg-bg rounded-xl p-4 mb-6 font-mono text-xs overflow-x-auto border border-border">
            <div className="text-text-dim">
              <span className="text-ai">from</span> openai <span className="text-ai">import</span> OpenAI
            </div>
            <div className="mt-1 text-text-dim">
              client = OpenAI(base_url=<span className="text-success">&quot;https://api.hash2u.ai/v1&quot;</span>)
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <div>
              <span className="font-mono font-bold text-ai">15+</span>
              <span className="text-text-dim ml-1">models</span>
            </div>
            <div>
              <span className="font-mono font-bold text-ai">&lt;100ms</span>
              <span className="text-text-dim ml-1">TTFT</span>
            </div>
            <div>
              <span className="font-mono font-bold text-ai">99.9%</span>
              <span className="text-text-dim ml-1">uptime</span>
            </div>
          </div>

          <Link
            href="/ai"
            className="block text-center py-3 rounded-xl bg-ai/10 border border-ai/20 text-ai font-medium hover:bg-ai/20 transition-colors"
          >
            Get API Key &rarr;
          </Link>
        </div>

        {/* BTC Hashrate Card */}
        <div className="glass rounded-2xl p-8 group hover:border-btc/30 transition-all duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-btc/10 border border-btc/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-btc" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
              </svg>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl">BTC Hashrate</h3>
              <p className="text-xs text-text-dim">Cloud Mining Contracts</p>
            </div>
          </div>

          <p className="text-text-dim mb-6">
            Mine Bitcoin without owning hardware. Start from 10 TH/s with
            30-360 day flexible contracts. Transparent 3-party pricing model.
          </p>

          {/* Miner showcase */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              { name: "S21 XP", hash: "270 TH/s", eff: "13.5 J/TH" },
              { name: "S21 XP Hyd", hash: "473 TH/s", eff: "12.0 J/TH" },
              { name: "S21", hash: "200 TH/s", eff: "17.5 J/TH" },
              { name: "S21+", hash: "220 TH/s", eff: "16.5 J/TH" },
            ].map((miner) => (
              <div key={miner.name} className="glass rounded-lg px-3 py-2">
                <div className="text-xs font-mono text-btc/80">{miner.name}</div>
                <div className="text-xs text-text-dim">{miner.hash}</div>
              </div>
            ))}
          </div>

          {/* Quick calc preview */}
          <div className="bg-bg rounded-xl p-4 mb-6 border border-border">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-text-dim">100 TH/s &times; 180 days</span>
              <span className="font-mono font-bold text-btc">~0.034 BTC</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-text-dim">Estimated value</span>
              <span className="font-mono font-bold text-success">$3,334</span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 mb-6 text-sm">
            <div>
              <span className="font-mono font-bold text-btc">10 TH/s</span>
              <span className="text-text-dim ml-1">min.</span>
            </div>
            <div>
              <span className="font-mono font-bold text-btc">30-360</span>
              <span className="text-text-dim ml-1">days</span>
            </div>
            <div>
              <span className="font-mono font-bold text-btc">8%</span>
              <span className="text-text-dim ml-1">fee</span>
            </div>
          </div>

          <Link
            href="/btc"
            className="block text-center py-3 rounded-xl bg-btc/10 border border-btc/20 text-btc font-medium hover:bg-btc/20 transition-colors"
          >
            Start Mining &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
