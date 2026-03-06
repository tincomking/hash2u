"use client";

const TICKER_ITEMS = [
  { label: "Claude Opus 4", value: "$12.00/1M", color: "text-ai" },
  { label: "GPT-4o", value: "$2.00/1M", color: "text-ai" },
  { label: "DeepSeek V3", value: "$0.20/1M", color: "text-ai" },
  { label: "Llama 3.3 70B", value: "$0.40/1M", color: "text-ai" },
  { label: "BTC", value: "$97,432", color: "text-btc" },
  { label: "Hashprice", value: "$52.3/PH/day", color: "text-btc" },
  { label: "Network", value: "987 EH/s", color: "text-btc" },
  { label: "Gemini 2.5 Pro", value: "$1.25/1M", color: "text-ai" },
  { label: "Block Reward", value: "3.125 BTC", color: "text-btc" },
  { label: "Mistral Large", value: "$2.00/1M", color: "text-ai" },
];

function TickerContent() {
  return (
    <>
      {TICKER_ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-2 mx-6 whitespace-nowrap">
          <span className="text-text-dim">{item.label}</span>
          <span className={`font-mono font-semibold ${item.color}`}>{item.value}</span>
        </span>
      ))}
    </>
  );
}

export default function TickerStrip() {
  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-surface/50 py-3">
      <div className="ticker-animate inline-flex">
        <TickerContent />
        <TickerContent />
      </div>
    </div>
  );
}
