/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        lumi: {
          bg: "#0d0d10",
          card: "#141418",
          border: "#1e1e26",
          glow: "#c084fc",
          pink: "#f472b6",
          peach: "#fb923c",
          text: "#f1f0ee",
          muted: "#6b6a72",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "typing": "typing 1.2s steps(3) infinite",
        "blob": "blob 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
        typing: {
          "0%": { content: "'●'" },
          "33%": { content: "'● ●'" },
          "66%": { content: "'● ● ●'" },
          "100%": { content: "'●'" },
        },
      },
    },
  },
  plugins: [],
};
