import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  {
    icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z",
    title: "Unified Platform",
    desc: "One account for AI tokens and BTC hashrate. One balance. One dashboard. Switch between GPU and ASIC compute seamlessly.",
  },
  {
    icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Transparent Pricing",
    desc: "No hidden fees. Real-time cost tracking for AI usage. Open 3-party game-theory pricing for BTC contracts.",
  },
  {
    icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Crypto Native",
    desc: "Pay with BTC, USDT, ETH, or traditional cards. Use mining revenue to fund AI API calls. Web3-friendly.",
  },
  {
    icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z",
    title: "Blazing Fast",
    desc: "AI API with sub-100ms TTFT. Automatic provider fallback ensures 99.9% uptime. Edge-deployed globally.",
  },
  {
    icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
    title: "Enterprise Secure",
    desc: "API keys hashed at rest. HTTPS everywhere. Rate limiting and abuse protection. SOC 2 compliance roadmap.",
  },
  {
    icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5",
    title: "Developer First",
    desc: "OpenAI-compatible API. Drop-in replacement. SDKs for Python, Node.js, Go. Comprehensive docs.",
  },
];

export default function Features() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 lg:py-32">
      <ScrollReveal className="text-center mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4">
          Why <span className="text-gradient-brand">Hash2U</span>?
        </h2>
        <p className="text-text-dim max-w-2xl mx-auto leading-relaxed">
          Built for developers, traders, and miners who demand performance,
          transparency, and flexibility.
        </p>
      </ScrollReveal>

      <ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="stagger group bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-border-med hover:-translate-y-0.5"
            >
              <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted group-hover:text-ai transition-colors mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                </svg>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-text-dim leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
