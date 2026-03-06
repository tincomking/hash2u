import ScrollReveal from "./ScrollReveal";

const STEPS = [
  {
    n: "01",
    title: "Create Account",
    desc: "Sign up with email, GitHub, or Google. Get $5 free AI credit.",
    color: "text-text-dim",
    border: "border-border",
  },
  {
    n: "02",
    title: "Choose Your Hash",
    desc: "Get an AI API key for model access, or pick a BTC mining contract.",
    color: "text-ai",
    border: "border-ai/20",
  },
  {
    n: "03",
    title: "Start Computing",
    desc: "Generate tokens or mine BTC. Track everything in your dashboard.",
    color: "text-btc",
    border: "border-btc/20",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-28">
      <ScrollReveal className="text-center mb-16">
        <p className="text-sm font-mono text-text-muted tracking-widest uppercase mb-4">Get Started</p>
        <h2 className="font-display font-bold tracking-tight" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
          Three steps to hash power
        </h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-3 gap-6">
        {STEPS.map((step, i) => (
          <ScrollReveal key={step.n} delay={i * 120}>
            <div className={`bento-card ${step.border} h-full`}>
              <div className="relative z-10">
                <span className={`font-mono text-4xl font-bold ${step.color} opacity-30`}>{step.n}</span>
                <h3 className="font-display font-bold text-xl mt-3 mb-2">{step.title}</h3>
                <p className="text-sm text-text-dim leading-relaxed">{step.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
