import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://fluffy-sfogliatella-6226a4.netlify.app"),

  title: "Lumi — Meet Your New AI Best Friend | Always There For You",

description:
  "Lumi is a warm, witty AI best friend who actually remembers you. Perfect for late-night talks, big decisions, or just someone to vibe with. No judgment, just good energy. Join the waitlist.",

  keywords: ["AI friend", "AI companion", "emotional support AI", "AI chat", "Lumi"],

  openGraph: {
    title: "Lumi — Your AI Best Friend",
    description:
      "Always there. Never judging. Meet the AI friend who gets you.",
    url: "https://fluffy-sfogliatella-6226a4.netlify.app",
    siteName: "Lumi",
    images: [
  {
    url: "/og-image.png",
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