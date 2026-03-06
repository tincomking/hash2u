"use client";

const ITEMS = [
  { label: "Claude Opus 4", value: "$12/1M", c: "text-ai" },
  { label: "GPT-4o", value: "$2.00/1M", c: "text-ai" },
  { label: "DeepSeek V3", value: "$0.20/1M", c: "text-ai" },
  { label: "BTC", value: "$97,432", c: "text-btc" },
  { label: "Hashprice", value: "$52.3/PH/day", c: "text-btc" },
  { label: "Llama 3.3 70B", value: "$0.40/1M", c: "text-ai" },
  { label: "Network", value: "987 EH/s", c: "text-btc" },
  { label: "Gemini 2.5 Pro", value: "$1.25/1M", c: "text-ai" },
  { label: "Block Reward", value: "3.125 BTC", c: "text-btc" },
];

function Row() {
  return (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2 mx-8 whitespace-nowrap text-sm">
          <span className="text-text-muted">{item.label}</span>
          <span className={`font-mono font-semibold ${item.c}`}>{item.value}</span>
        </span>
      ))}
    </>
  );
}

export default function TickerStrip() {
  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-surface/60 py-3.5">
      <div className="ticker-animate inline-flex">
        <Row />
        <Row />
      </div>
    </div>
  );
}
