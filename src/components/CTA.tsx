import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
      <div className="relative glass rounded-3xl p-12 sm:p-16 text-center overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-ai/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-btc/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative">
          <h2 className="font-display font-bold text-3xl sm:text-5xl mb-4">
            Start Hashing Today
          </h2>
          <p className="text-text-dim max-w-xl mx-auto mb-10 text-lg">
            Whether you&apos;re building AI apps or mining Bitcoin &mdash;
            your compute starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ai"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-bg bg-ai hover:bg-ai/90 transition-all glow-ai"
            >
              Get AI API Key &rarr;
            </Link>
            <Link
              href="/btc"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium text-bg bg-btc hover:bg-btc/90 transition-all glow-btc"
            >
              Buy Hashrate &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
