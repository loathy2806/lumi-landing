import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://fluffy-sfogliatella-6226a4.netlify.app"),

  title: "Lumi — Your AI Best Friend",
  description:
  "Meet Lumi, your AI best friend. Warm, witty, and always there — for late-night talks, big life decisions, or just someone to vent to. No judgment, just good vibes.",

  keywords: ["AI friend", "AI companion", "emotional support AI", "AI chat", "Lumi"],

  openGraph: {
    title: "Lumi — Your AI Best Friend",
    description:
      "Always there. Never judging. Meet the AI friend who gets you.",
    url: "https://fluffy-sfogliatella-6226a4.netlify.app",
    siteName: "Lumi",
    images: [
  {
    url: "https://fluffy-sfogliatella-6226a4.netlify.app/opengraph-image",
    width: 1200,
    height: 630,
    alt: "Lumi — Your AI Best Friend",
  },
],
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}