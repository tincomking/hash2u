"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration = 2000, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = Date.now();
          const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Number((eased * end).toFixed(decimals)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          tick();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, decimals]);

  return { value, ref };
}

const STATS = [
  { end: 2.3, decimals: 1, suffix: "M", label: "Tokens Served Today", color: "text-ai" },
  { end: 15, decimals: 0, suffix: "+", label: "AI Models Available", color: "text-text" },
  { end: 14.7, decimals: 1, suffix: " PH/s", label: "Total Mining Power", color: "text-btc" },
  { end: 99.9, decimals: 1, suffix: "%", label: "Platform Uptime", color: "text-success" },
];

export default function Stats() {
  const counters = STATS.map((s) => useCountUp(s.end, 2000, s.decimals));

  return (
    <section className="relative z-10 py-24 lg:py-32">
      {/* Top divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-ai/20 to-transparent mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
            Platform at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              ref={counters[i].ref}
              className="bg-card border border-border rounded-2xl p-6 text-center transition-all hover:border-border-med hover:-translate-y-0.5"
            >
              <div className={`font-mono font-bold text-3xl sm:text-4xl ${stat.color} mb-2`}>
                {counters[i].value}{stat.suffix}
              </div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-btc/20 to-transparent mt-24" />
    </section>
  );
}
