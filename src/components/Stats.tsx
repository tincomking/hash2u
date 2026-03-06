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

export default function Stats() {
  const tokens = useCountUp(2300000, 2000, 0);
  const models = useCountUp(15, 1500, 0);
  const hashrate = useCountUp(14.7, 2000, 1);
  const uptime = useCountUp(99.9, 1500, 1);

  return (
    <section className="relative z-10 py-24">
      {/* Gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-ai/30 to-transparent mb-24" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            Platform at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div ref={tokens.ref} className="glass rounded-2xl p-6 text-center">
            <div className="font-mono font-bold text-3xl sm:text-4xl text-ai mb-2">
              {tokens.value > 0 ? `${(tokens.value / 1000000).toFixed(1)}M` : "0"}
            </div>
            <div className="text-sm text-text-dim">Tokens Served Today</div>
          </div>
          <div ref={models.ref} className="glass rounded-2xl p-6 text-center">
            <div className="font-mono font-bold text-3xl sm:text-4xl text-text mb-2">
              {models.value}+
            </div>
            <div className="text-sm text-text-dim">AI Models Available</div>
          </div>
          <div ref={hashrate.ref} className="glass rounded-2xl p-6 text-center">
            <div className="font-mono font-bold text-3xl sm:text-4xl text-btc mb-2">
              {hashrate.value} PH/s
            </div>
            <div className="text-sm text-text-dim">Total Mining Power</div>
          </div>
          <div ref={uptime.ref} className="glass rounded-2xl p-6 text-center">
            <div className="font-mono font-bold text-3xl sm:text-4xl text-success mb-2">
              {uptime.value}%
            </div>
            <div className="text-sm text-text-dim">Platform Uptime</div>
          </div>
        </div>
      </div>

      {/* Gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-btc/30 to-transparent mt-24" />
    </section>
  );
}
