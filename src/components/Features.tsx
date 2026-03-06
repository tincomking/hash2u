import ScrollReveal from "./ScrollReveal";

const FEATURES = [
  { icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z", title: "Smart Routing", desc: "Automatically route to the fastest or cheapest provider. Fallback across providers when one goes down." },
  { icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z", title: "Blazing Fast", desc: "Sub-100ms time-to-first-token. Edge-deployed globally. Native SSE streaming." },
  { icon: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Crypto Payments", desc: "Pay with BTC, USDT, ETH, or credit cards. Use mining revenue to fund AI API calls." },
  { icon: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178zM15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "Full Transparency", desc: "Real-time cost tracking. Open 3-party game-theory pricing for BTC. No hidden fees ever." },
  { icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z", title: "Secure by Default", desc: "API keys hashed at rest. HTTPS everywhere. Rate limiting. 2FA support." },
  { icon: "M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5", title: "Developer First", desc: "OpenAI-compatible. Drop-in replacement. SDKs for Python, Node.js, Go." },
];

export default function Features() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-28">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-mono text-text-muted tracking-widest uppercase mb-4">Features</p>
        <h2 className="font-display font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
          Built different
        </h2>
      </ScrollReveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {FEATURES.map((f, i) => (
          <ScrollReveal key={f.title} delay={i * 80}>
            <div className="bento-card group h-full">
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-text-muted group-hover:text-ai group-hover:border-ai/20 transition-all mb-4">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={f.icon} />
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-base mb-1.5">{f.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed">{f.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
