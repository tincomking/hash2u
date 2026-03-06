import Link from "next/link";

export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="reveal relative bg-card border border-border rounded-3xl p-12 sm:p-20 text-center overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-ai/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-btc/[0.04] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative">
          <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl lg:text-5xl mb-5">
            Start hashing today
          </h2>
          <p className="text-text-2 max-w-lg mx-auto mb-10 text-lg leading-relaxed">
            Whether you&apos;re building AI apps or mining Bitcoin — your compute starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ai"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold bg-ai text-black hover:bg-ai/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get API Key &rarr;
            </Link>
            <Link
              href="/btc"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold border border-btc/60 text-btc hover:bg-btc/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              Buy Hashrate &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
