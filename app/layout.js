import "./globals.css";

export const metadata = {
  title: "Lumi — Your AI Best Friend",
  description:
    "Meet Lumi. Always there, never judging. The AI friend who remembers you.",
  openGraph: {
    title: "Lumi — Your AI Best Friend",
    description: "Always there. Always warm. Always you.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
