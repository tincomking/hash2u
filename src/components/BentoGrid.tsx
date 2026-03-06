import ScrollReveal from "./ScrollReveal";

const MODELS = [
  { name: "Claude Opus 4", provider: "Anthropic", price: "$12/1M" },
  { name: "GPT-4o", provider: "OpenAI", price: "$2.00/1M" },
  { name: "DeepSeek V3", provider: "DeepSeek", price: "$0.20/1M" },
  { name: "Llama 3.3 70B", provider: "Meta", price: "$0.40/1M" },
  { name: "Gemini 2.5 Pro", provider: "Google", price: "$1.25/1M" },
  { name: "Mistral Large", provider: "Mistral", price: "$2.00/1M" },
];

export default function BentoGrid() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-28">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-mono text-text-muted tracking-widest uppercase mb-4">Two Products, One Platform</p>
        <h2 className="font-display font-bold tracking-tight leading-[1.1]" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
          AI inference and BTC mining,
          <br />
          <span className="text-grad-brand">powered by hash.</span>
        </h2>
      </ScrollReveal>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Card 1: AI Code Demo — spans 2 cols */}
        <ScrollReveal className="lg:col-span-2" delay={0}>
          <div className="bento-card bento-ai h-full">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-ai" />
                <span className="text-xs font-mono text-ai tracking-wider uppercase">AI Compute</span>
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">One API, Every Model</h3>
              <p className="text-sm text-text-dim mb-5 max-w-lg">OpenAI-compatible. Change one line. Access Claude, GPT, DeepSeek, Llama, Gemini, Mistral — all through a single endpoint.</p>

              {/* Terminal */}
              <div className="rounded-xl overflow-hidden border border-border bg-bg">
                <div className="flex items-center gap-1.5 px-4 py-2.5 bg-surface/80 border-b border-border">
                  <div className="w-2.5 h-2.5 rounded-full bg-danger/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-btc/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-success/50" />
                  <span className="text-[10px] text-text-muted ml-2 font-mono">main.py</span>
                </div>
                <pre className="p-5 font-mono text-[13px] leading-6 overflow-x-auto">
{`from openai import OpenAI

client = OpenAI(`}
<span className="code-line-highlight inline-block w-full">{`    base_url="https://api.hash2u.ai/v1",`}</span>
{`    api_key="h2u_sk_...",
)

resp = client.chat.completions.create(
    model="`}<span className="text-ai">claude-opus-4</span>{`",
    messages=[{"role": "user", "content": "Hello!"}],
    stream=True,
)`}
                </pre>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 2: AI Model List */}
        <ScrollReveal delay={100}>
          <div className="bento-card bento-ai h-full">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-text-muted tracking-wider uppercase">Models</span>
                <span className="text-xs text-ai font-mono">15+ available</span>
              </div>
              <div className="space-y-2.5">
                {MODELS.map((m) => (
                  <div key={m.name} className="flex items-center justify-between py-2 px-3 rounded-lg bg-bg/50 border border-border">
                    <div>
                      <div className="text-sm font-medium">{m.name}</div>
                      <div className="text-[11px] text-text-muted">{m.provider}</div>
                    </div>
                    <span className="font-mono text-xs text-ai">{m.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 3: BTC Quick Calc */}
        <ScrollReveal delay={150}>
          <div className="bento-card bento-btc h-full">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-btc" />
                <span className="text-xs font-mono text-btc tracking-wider uppercase">BTC Hashrate</span>
              </div>
              <h3 className="font-display font-bold text-2xl mb-2">Mine Without Hardware</h3>
              <p className="text-sm text-text-dim mb-5">10 TH/s minimum. 30-360 day contracts. 3-party transparent pricing.</p>

              <div className="space-y-3">
                <div className="flex justify-between items-center py-2.5 px-3 rounded-lg bg-bg/50 border border-border">
                  <span className="text-sm text-text-dim">Hashrate</span>
                  <span className="font-mono text-sm font-semibold">100 TH/s</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-3 rounded-lg bg-bg/50 border border-border">
                  <span className="text-sm text-text-dim">Duration</span>
                  <span className="font-mono text-sm font-semibold">180 days</span>
                </div>
                <div className="h-px bg-border" />
                <div className="flex justify-between items-center py-2.5 px-3 rounded-lg bg-bg/50 border border-border">
                  <span className="text-sm text-text-dim">Est. Output</span>
                  <span className="font-mono text-sm font-bold text-btc">~0.034 BTC</span>
                </div>
                <div className="flex justify-between items-center py-2.5 px-3 rounded-lg bg-bg/50 border border-border">
                  <span className="text-sm text-text-dim">Est. Value</span>
                  <span className="font-mono text-sm font-bold text-success">$3,334</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Card 4: Miners — spans 2 cols */}
        <ScrollReveal className="lg:col-span-2" delay={200}>
          <div className="bento-card bento-btc h-full">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-text-muted tracking-wider uppercase">Supported Hardware</span>
                <span className="text-xs text-btc font-mono">4 models</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { name: "S21 XP", hash: "270 TH/s", eff: "13.5 J/TH", badge: "Top Pick" },
                  { name: "S21 XP Hyd", hash: "473 TH/s", eff: "12.0 J/TH", badge: "Most Efficient" },
                  { name: "S21", hash: "200 TH/s", eff: "17.5 J/TH", badge: "" },
                  { name: "S21+", hash: "220 TH/s", eff: "16.5 J/TH", badge: "" },
                ].map((m) => (
                  <div key={m.name} className="bg-bg/50 border border-border rounded-xl p-4 text-center">
                    {m.badge && (
                      <span className="inline-block text-[10px] font-mono text-btc bg-btc/10 border border-btc/20 rounded-full px-2 py-0.5 mb-2">{m.badge}</span>
                    )}
                    <div className="font-mono font-bold text-sm mb-1">{m.name}</div>
                    <div className="font-mono text-btc text-sm">{m.hash}</div>
                    <div className="text-[11px] text-text-muted mt-1">{m.eff}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
