export default function CodeDemo() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: description */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-ai/10 border border-ai/20 px-3 py-1 mb-6">
            <span className="text-xs font-mono text-ai">OpenAI Compatible</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            One Line Change.
            <br />
            <span className="text-gradient-ai">Every Model.</span>
          </h2>
          <p className="text-text-dim mb-8 leading-relaxed">
            Already using the OpenAI SDK? Just swap the base URL and API key.
            Access Claude, GPT, DeepSeek, Llama, Gemini, and more through a
            single unified endpoint.
          </p>
          <div className="space-y-4">
            {[
              "OpenAI-compatible /v1/chat/completions",
              "Native streaming (SSE) support",
              "Automatic fallback across providers",
              "Real-time token & cost tracking",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-ai/10 border border-ai/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-ai" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-text/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: code block */}
        <div className="relative">
          {/* Terminal window */}
          <div className="rounded-2xl overflow-hidden border border-border bg-bg">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-surface border-b border-border">
              <div className="w-3 h-3 rounded-full bg-danger/60" />
              <div className="w-3 h-3 rounded-full bg-btc/60" />
              <div className="w-3 h-3 rounded-full bg-success/60" />
              <span className="text-xs text-text-dim ml-2 font-mono">main.py</span>
            </div>

            {/* Code */}
            <pre className="p-6 font-mono text-sm leading-7 overflow-x-auto">
              <code>
                <Line n={1}><K>from</K> openai <K>import</K> OpenAI</Line>
                <Line n={2} />
                <Line n={3}>client = OpenAI(</Line>
                <Line n={4}>    base_url=<S>&quot;https://api.hash2u.ai/v1&quot;</S>,</Line>
                <Line n={5}>    api_key=<S>&quot;h2u_sk_...&quot;</S>,</Line>
                <Line n={6}>)</Line>
                <Line n={7} />
                <Line n={8}>response = client.chat.completions.create(</Line>
                <Line n={9}>    model=<S>&quot;claude-opus-4&quot;</S>,</Line>
                <Line n={10}>    messages=[</Line>
                <Line n={11}>        {`{`}<S>&quot;role&quot;</S>: <S>&quot;user&quot;</S>, <S>&quot;content&quot;</S>: <S>&quot;Hello!&quot;</S>{`}`}</Line>
                <Line n={12}>    ],</Line>
                <Line n={13}>    stream=<K>True</K>,</Line>
                <Line n={14}>)</Line>
                <Line n={15} />
                <Line n={16}><K>for</K> chunk <K>in</K> response:</Line>
                <Line n={17}>    <C>print</C>(chunk.choices[<N>0</N>].delta.content)</Line>
              </code>
            </pre>
          </div>

          {/* Glow decoration */}
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-ai/10 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-ai/5 rounded-full blur-[40px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function Line({ n, children }: { n: number; children?: React.ReactNode }) {
  return (
    <div className="flex">
      <span className="w-8 text-right text-text-dim/40 select-none mr-4">{n}</span>
      <span className="text-text/80">{children}</span>
    </div>
  );
}

function K({ children }: { children: React.ReactNode }) {
  return <span className="text-ai">{children}</span>;
}

function S({ children }: { children: React.ReactNode }) {
  return <span className="text-success">{children}</span>;
}

function C({ children }: { children: React.ReactNode }) {
  return <span className="text-btc">{children}</span>;
}

function N({ children }: { children: React.ReactNode }) {
  return <span className="text-[#bd93f9]">{children}</span>;
}
