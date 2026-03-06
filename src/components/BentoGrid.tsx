const MODELS = [
  { name: "Claude Opus 4", provider: "Anthropic", price: "$12/1M" },
  { name: "GPT-4o", provider: "OpenAI", price: "$2.00/1M" },
  { name: "DeepSeek V3", provider: "DeepSeek", price: "$0.20/1M" },
  { name: "Llama 3.3 70B", provider: "Meta", price: "$0.40/1M" },
  { name: "Gemini 2.5 Pro", provider: "Google", price: "$1.25/1M" },
  { name: "Mistral Large", provider: "Mistral", price: "$2.00/1M" },
];

const MINERS = [
  { name: "S21 XP", hash: "270 TH/s", eff: "13.5 J/TH", badge: "Top Pick" },
  { name: "S21 XP Hyd", hash: "473 TH/s", eff: "12.0 J/TH", badge: "Most Efficient" },
  { name: "S21", hash: "200 TH/s", eff: "17.5 J/TH", badge: "" },
  { name: "S21+", hash: "220 TH/s", eff: "16.5 J/TH", badge: "" },
];

export default function BentoGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      {/* Header */}
      <div className="reveal text-center mb-16">
        <p className="text-sm font-mono text-text-3 tracking-widest uppercase mb-4">
          Two Products, One Platform
        </p>
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl">
          AI inference and BTC mining,
          <br />
          <span className="bg-gradient-to-r from-ai to-btc bg-clip-text text-transparent">
            powered by hash.
          </span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1: AI Code Demo — 2 cols */}
        <div className="reveal lg:col-span-2 bg-card border border-border rounded-2xl p-6 hover:border-ai/30 transition-colors">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-ai" />
            <span className="text-xs font-mono text-ai tracking-wider uppercase">AI Compute</span>
          </div>
          <h3 className="font-display font-bold text-2xl mb-2">One API, Every Model</h3>
          <p className="text-sm text-text-2 mb-6 max-w-lg leading-relaxed">
            OpenAI-compatible endpoint. Change one line to access Claude, GPT, DeepSeek,
            Llama, Gemini, Mistral — all through a single API.
          </p>

          {/* Terminal */}
          <div className="rounded-xl overflow-hidden border border-border bg-bg">
            <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-btc/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green/50" />
              <span className="text-[11px] text-text-3 ml-2 font-mono">main.py</span>
            </div>
            <pre className="p-5 font-mono text-[13px] leading-7 overflow-x-auto text-text-2">
{`from openai import OpenAI

client = OpenAI(
    base_url="`}<span className="text-ai">https://api.hash2u.ai/v1</span>{`",
    api_key="h2u_sk_...",
)

resp = client.chat.completions.create(
    model="`}<span className="text-ai">claude-opus-4</span>{`",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=True,
)`}</pre>
          </div>
        </div>

        {/* Card 2: Model List */}
        <div className="reveal bg-card border border-border rounded-2xl p-6 hover:border-ai/30 transition-colors">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-mono text-text-3 tracking-wider uppercase">Models</span>
            <span className="text-xs text-ai font-mono">15+ available</span>
          </div>
          <div className="space-y-2">
            {MODELS.map((m) => (
              <div
                key={m.name}
                className="flex items-center justify-between py-2.5 px-3 rounded-lg bg-bg/50 border border-border"
              >
                <div>
                  <div className="text-sm font-medium">{m.name}</div>
                  <div className="text-xs text-text-3">{m.provider}</div>
                </div>
                <span className="font-mono text-xs text-ai">{m.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: BTC Calculator */}
        <div className="reveal bg-card border border-border rounded-2xl p-6 hover:border-btc/30 transition-colors">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-btc" />
            <span className="text-xs font-mono text-btc tracking-wider uppercase">BTC Hashrate</span>
          </div>
          <h3 className="font-display font-bold text-2xl mb-2">Mine Without Hardware</h3>
          <p className="text-sm text-text-2 mb-6 leading-relaxed">
            10 TH/s minimum. 30-360 day contracts. Transparent 3-party pricing.
          </p>

          <div className="space-y-2">
            {[
              { label: "Hashrate", value: "100 TH/s" },
              { label: "Duration", value: "180 days" },
            ].map((row) => (
              <div key={row.label} className="flex justify-between items-center py-2.5 px-3 rounded-lg bg-bg/50 border border-border">
                <span className="text-sm text-text-2">{row.label}</span>
                <span className="font-mono text-sm font-semibold">{row.value}</span>
              </div>
            ))}
            <div className="h-px bg-border my-1" />
            <div className="flex justify-between items-center py-2.5 px-3 rounded-lg bg-bg/50 border border-border">
              <span className="text-sm text-text-2">Est. Output</span>
              <span className="font-mono text-sm font-bold text-btc">~0.034 BTC</span>
            </div>
            <div className="flex justify-between items-center py-2.5 px-3 rounded-lg bg-bg/50 border border-border">
              <span className="text-sm text-text-2">Est. Value</span>
              <span className="font-mono text-sm font-bold text-green">$3,334</span>
            </div>
          </div>
        </div>

        {/* Card 4: Mining Hardware — 2 cols */}
        <div className="reveal lg:col-span-2 bg-card border border-border rounded-2xl p-6 hover:border-btc/30 transition-colors">
          <div className="flex items-center justify-between mb-5">
            <span className="text-xs font-mono text-text-3 tracking-wider uppercase">Supported Hardware</span>
            <span className="text-xs text-btc font-mono">4 models</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {MINERS.map((m) => (
              <div key={m.name} className="bg-bg/50 border border-border rounded-xl p-4 text-center">
                {m.badge && (
                  <span className="inline-block text-[10px] font-mono text-btc bg-btc/10 border border-btc/20 rounded-full px-2 py-0.5 mb-2">
                    {m.badge}
                  </span>
                )}
                <div className="font-mono font-bold text-sm mb-1">{m.name}</div>
                <div className="font-mono text-btc text-sm">{m.hash}</div>
                <div className="text-xs text-text-3 mt-1">{m.eff}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
