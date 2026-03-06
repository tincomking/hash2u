const STEPS = [
  {
    n: "01",
    title: "Create Account",
    desc: "Sign up with email, GitHub, or Google. Get $5 free AI credit.",
    accent: "text-text-3",
    border: "hover:border-border",
  },
  {
    n: "02",
    title: "Choose Your Hash",
    desc: "Get an AI API key for model access, or pick a BTC mining contract.",
    accent: "text-ai",
    border: "hover:border-ai/30",
  },
  {
    n: "03",
    title: "Start Computing",
    desc: "Generate tokens or mine BTC. Track everything in your dashboard.",
    accent: "text-btc",
    border: "hover:border-btc/30",
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="reveal text-center mb-16">
        <p className="text-sm font-mono text-text-3 tracking-widest uppercase mb-4">
          Get Started
        </p>
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl">
          Three steps to hash power
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {STEPS.map((step) => (
          <div
            key={step.n}
            className={`reveal bg-card border border-border rounded-2xl p-6 transition-colors ${step.border}`}
          >
            <span className={`font-mono text-4xl font-bold ${step.accent} opacity-30`}>
              {step.n}
            </span>
            <h3 className="font-display font-bold text-xl mt-4 mb-2">{step.title}</h3>
            <p className="text-sm text-text-2 leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
