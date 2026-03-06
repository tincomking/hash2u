import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hash2U.ai — All Hash Power. One Platform.",
  description:
    "AI model API tokens and BTC mining hashrate on a single platform. Route to the best AI models. Mine Bitcoin without hardware.",
  keywords: ["AI API", "Bitcoin Mining", "Cloud Hashrate", "LLM API", "Hash Power"],
  openGraph: {
    title: "Hash2U.ai — All Hash Power. One Platform.",
    description: "AI Tokens. BTC Blocks. Powered by Hash.",
    url: "https://hash2u.ai",
    siteName: "Hash2U.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
