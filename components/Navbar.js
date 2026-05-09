"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d0d10]/80 backdrop-blur-xl border-b border-[#1e1e26]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <span className="text-white text-xs font-bold">L</span>
          </div>
          <span
            className="font-display text-lg font-medium tracking-tight"
            style={{ color: "#f1f0ee" }}
          >
            lumi
          </span>
        </div>

        {/* CTA */}
        <a
          href="#waitlist"
          className="cta-btn text-white text-sm font-medium px-5 py-2 rounded-full"
        >
          <span>Join Waitlist</span>
        </a>
      </div>
    </nav>
  );
}
