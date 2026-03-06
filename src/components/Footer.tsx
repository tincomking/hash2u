import Link from "next/link";

const LINKS = {
  Products: [
    { label: "AI Compute", href: "/ai" },
    { label: "AI Models", href: "/ai/models" },
    { label: "Playground", href: "/ai/playground" },
    { label: "BTC Hashrate", href: "/btc" },
    { label: "Calculator", href: "/btc/calculator" },
  ],
  Developers: [
    { label: "API Docs", href: "/ai/docs" },
    { label: "Pricing", href: "/pricing" },
    { label: "Status", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #00e5ff, #f7931a)" }}>
                <span className="text-[#08080c] font-bold text-xs font-display">#</span>
              </div>
              <span className="font-display font-bold">Hash2U<span className="text-text-muted">.ai</span></span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              AI Tokens. BTC Blocks.
              <br />Powered by Hash.
            </p>
          </div>

          {Object.entries(LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm mb-4 text-text-dim">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-text-muted hover:text-text transition-colors">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Hash2U.ai</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-text-muted hover:text-text transition-colors">Privacy</Link>
            <Link href="#" className="text-xs text-text-muted hover:text-text transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
