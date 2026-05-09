import "./globals.css";

const URL = "https://fluffy-sfogliatella-6226a4.netlify.app";

export const metadata = {
  metadataBase: new URL(URL),

  title: "Lumi — Your AI Best Friend",
  description:
    "Meet Lumi. A warm, witty AI friend who actually remembers you. Always there for late-night talks, big decisions, and everything in between.",

  keywords: [
    "AI friend",
    "AI companion",
    "emotional support AI",
    "AI chat",
    "Lumi",
  ],

  openGraph: {
    title: "Lumi — Your AI Best Friend",
    description:
      "Always there. Never judging. Meet the AI friend who gets you.",
    url: URL,
    siteName: "Lumi",
    images: [
      {
        url: "/opengraph-image",
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