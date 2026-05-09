"use client";
import { useState } from "react";

export default function WaitlistForm({ size = "normal" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle"); // idle | loading | done

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setState("done");
  };

  if (state === "done") {
    return (
      <div
        className="flex items-center gap-3 px-6 py-3 rounded-2xl border"
        style={{
          background: "rgba(192,132,252,0.08)",
          borderColor: "rgba(192,132,252,0.25)",
        }}
      >
        <span style={{ color: "#c084fc" }}>✦</span>
        <span className="text-sm" style={{ color: "#e8e6e3" }}>
          You&apos;re on the list. Lumi can&apos;t wait to meet you.
        </span>
      </div>
    );
  }

  const isLarge = size === "large";

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={`flex-1 rounded-full border outline-none transition-all duration-300 ${
          isLarge ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm"
        }`}
        style={{
          background: "#141418",
          borderColor: "#2a2a35",
          color: "#f1f0ee",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(192,132,252,0.5)";
          e.target.style.boxShadow = "0 0 0 3px rgba(192,132,252,0.08)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "#2a2a35";
          e.target.style.boxShadow = "none";
        }}
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className={`cta-btn text-white font-medium rounded-full whitespace-nowrap ${
          isLarge ? "px-7 py-3.5 text-base" : "px-5 py-3 text-sm"
        }`}
      >
        <span>
          {state === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              joining…
            </span>
          ) : (
            "Join Waitlist"
          )}
        </span>
      </button>
    </form>
  );
}
