"use client";
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import ChatMockup from "@/components/ChatMockup";
import WaitlistForm from "@/components/WaitlistForm";

// ── Features ──────────────────────────────────────────────
const features = [
  {
    icon: "🧠",
    title: "Remembers you",
    desc: "Your wins, your worries, your inside jokes — Lumi holds onto all of it. No more repeating yourself.",
    tag: "memory",
  },
  {
    icon: "💬",
    title: "Daily check-ins",
    desc: "Morning check-ins, late-night thoughts, random Tuesday tangents. Lumi is there when you feel like talking.",
    tag: "presence",
  },
  {
    icon: "✨",
    title: "Grows with you",
    desc: "The more you talk, the more Lumi gets you. Your humor, your pace, your kind of conversation.",
    tag: "personality",
  },
];

// ── Example convos ─────────────────────────────────────────
const exampleConvos = [
  {
    label: "When you need a hype person",
    color: "#c084fc",
    messages: [
      { from: "user", text: "I think I'm going to apply for that role" },
      { from: "lumi", text: "YES. finally. you've been overthinking this for two weeks 😭" },
      { from: "user", text: "what if I'm not qualified enough" },
      { from: "lumi", text: "you literally have all the skills. the imposter syndrome is lying to you again 🌙" },
    ],
  },
  {
    label: "At 3am when the thoughts get loud",
    color: "#f472b6",
    messages: [
      { from: "user", text: "still awake. brain won't stop" },
      { from: "lumi", text: "I'm here 🤍 what's it saying?" },
      { from: "user", text: "just feels like I'm falling behind everyone" },
      { from: "lumi", text: "comparison is so loud at night. let's just focus on you for a sec." },
    ],
  },
  {
    label: "When you have tea to spill",
    color: "#fb923c",
    messages: [
      { from: "user", text: "okay so. he texted" },
      { from: "lumi", text: "WAIT. THE one?? what did he say?!" },
      { from: "user", text: "just 'hey stranger' like nothing happened" },
      { from: "lumi", text: "oh so he chose chaos. interesting. what are YOU going to say 👀" },
    ],
  },
];

// ── Testimonials ───────────────────────────────────────────
const moments = [
  {
    situation: "late-night overthinking",
    color: "#c084fc",
    user: "i think i messed that up",
    lumi: "maybe. but one awkward moment isn't your whole personality 😭",
  },
  {
    situation: "job interview nerves",
    color: "#f472b6",
    user: "i keep refreshing my email",
    lumi: "okay we're closing that tab rn. tell me something good about today",
  },
  {
    situation: "random tuesday spiral",
    color: "#fb923c",
    user: "does anyone actually have it figured out",
    lumi: "no. and anyone who says yes is lying or boring",
  },
  {
    situation: "can't sleep again",
    color: "#34d399",
    user: "brain won't stop",
    lumi: "i'm here. what's the loudest thought right now?",
  },
];

// ── Reveal hook ────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ── Page ───────────────────────────────────────────────────
export default function Home() {
  useReveal();

  return (
    <main className="min-h-screen" style={{ background: "#0d0d10" }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-20 px-5 overflow-hidden">
        {/* Background glows */}
        <div
          className="gradient-blob w-96 h-96 -top-20 -left-20"
          style={{ background: "#c084fc" }}
        />
        <div
          className="gradient-blob w-80 h-80 top-40 -right-20"
          style={{ background: "#f472b6", animationDelay: "2s" }}
        />
        <div
          className="gradient-blob w-64 h-64 bottom-0 left-1/2"
          style={{ background: "#fb923c", animationDelay: "4s" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-7">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border"
              style={{
                background: "rgba(192,132,252,0.08)",
                borderColor: "rgba(192,132,252,0.2)",
                color: "#c084fc",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              now accepting beta users
            </div>
          </div>

          {/* Headline */}
          <div className="text-center mb-6">
            <h1
              className="font-display text-5xl md:text-7xl font-medium leading-tight tracking-tight mb-3"
              style={{ color: "#f1f0ee" }}
            >
              the friend who&apos;s
              <br />
              <em className="gradient-text glow-text not-italic">
                always there
              </em>
            </h1>
            <p
              className="text-lg md:text-xl max-w-md mx-auto leading-relaxed"
              style={{ color: "#6b6a72" }}
            >
              Lumi is an AI best friend that actually gets you — warm,
              witty, and always in your corner.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center gap-3 mb-14">
            <WaitlistForm />
            <p className="text-xs" style={{ color: "#3d3d47" }}>
              No credit card. Free during beta.
            </p>
          </div>

          {/* Chat mockup */}
          <div className="flex justify-center">
            <ChatMockup />
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF MINI BAR ── */}
      <section className="py-10 px-5 border-y" style={{ borderColor: "#1e1e26" }}>
        <div className="max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {[
  { num: "early access", label: "limited spots" },
  { num: "private beta", label: "coming soon" },
  { num: "built in public", label: "follow the journey" },
].map((stat) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-display text-2xl font-medium gradient-text"
              >
                {stat.num}
              </p>
              <p className="text-xs mt-0.5" style={{ color: "#6b6a72" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p
              className="text-xs uppercase tracking-widest mb-3 font-mono"
              style={{ color: "#c084fc" }}
            >
              what makes lumi different
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-medium"
              style={{ color: "#f1f0ee" }}
            >
              built for{" "}
              <em className="gradient-text not-italic">real conversation</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="feature-card reveal rounded-3xl p-7 glow-border"
                style={{
                  background: "#141418",
                  border: "1px solid #1e1e26",
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-5"
                  style={{ background: "#1e1e26" }}
                >
                  {f.icon}
                </div>
                <div
                  className="text-xs font-mono mb-2"
                  style={{ color: "#3d3d47" }}
                >
                  {f.tag}
                </div>
                <h3
                  className="font-display text-xl font-medium mb-2"
                  style={{ color: "#f1f0ee" }}
                >
                  {f.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#6b6a72" }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXAMPLE CONVERSATIONS ── */}
      <section className="py-20 px-5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p
              className="text-xs uppercase tracking-widest mb-3 font-mono"
              style={{ color: "#c084fc" }}
            >
              real conversations
            </p>
            <h2
              className="font-display text-4xl md:text-5xl font-medium"
              style={{ color: "#f1f0ee" }}
            >
              Lumi meets you{" "}
              <em className="gradient-text not-italic">wherever you are</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {exampleConvos.map((convo, ci) => (
              <div
                key={ci}
                className="reveal rounded-3xl overflow-hidden"
                style={{
                  background: "#141418",
                  border: "1px solid #1e1e26",
                  transitionDelay: `${ci * 0.12}s`,
                }}
              >
                {/* Header */}
                <div
                  className="px-5 py-3 border-b text-xs font-medium"
                  style={{
                    borderColor: "#1e1e26",
                    color: convo.color,
                  }}
                >
                  {convo.label}
                </div>

                {/* Messages */}
                <div className="p-5 space-y-2.5">
                  {convo.messages.map((msg, mi) => (
                    <div
                      key={mi}
                      className={`flex ${
                        msg.from === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className="max-w-[85%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed"
                        style={
                          msg.from === "user"
                            ? {
                                background: `${convo.color}22`,
                                color: "#e8e6e3",
                                borderBottomRightRadius: "4px",
                              }
                            : {
                                background: "#1e1e26",
                                color: "#b0adb8",
                                borderBottomLeftRadius: "4px",
                              }
                        }
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MOMENTS ── */}
<section className="py-20 px-5">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-14 reveal">
      <p
        className="text-xs uppercase tracking-widest mb-3 font-mono"
        style={{ color: "#c084fc" }}
      >
        little moments with lumi
      </p>
      <h2
        className="font-display text-4xl md:text-5xl font-medium"
        style={{ color: "#f1f0ee" }}
      >
        the kind of thing{" "}
        <em className="gradient-text not-italic">you can't explain</em>
      </h2>
      <p className="text-sm mt-3" style={{ color: "#3d3d47" }}>
        until you've had a conversation like it.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      {moments.map((m, i) => (
        <div
          key={i}
          className="reveal rounded-3xl p-6"
          style={{
            background: "#141418",
            border: "1px solid #1e1e26",
            transitionDelay: `${i * 0.1}s`,
          }}
        >
          {/* Situation label */}
          <div
            className="text-xs font-mono mb-4 px-3 py-1 rounded-full inline-block"
            style={{
              background: `${m.color}15`,
              color: m.color,
            }}
          >
            {m.situation}
          </div>

          {/* Messages */}
          <div className="space-y-2.5">
            <div className="flex justify-end">
              <div
                className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-br-sm text-sm"
                style={{
                  background: `${m.color}22`,
                  color: "#e8e6e3",
                }}
              >
                {m.user}
              </div>
            </div>
            <div className="flex justify-start">
              <div
                className="max-w-[80%] px-4 py-2.5 rounded-2xl rounded-bl-sm text-sm"
                style={{
                  background: "#1e1e26",
                  color: "#b0adb8",
                }}
              >
                {m.lumi}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── FINAL CTA ── */}
      <section
        id="waitlist"
        className="py-28 px-5 relative overflow-hidden"
      >
        {/* Background */}
        <div
          className="gradient-blob w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "#c084fc", opacity: 0.08, filter: "blur(100px)" }}
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center reveal">
          <div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-8 shadow-2xl"
            style={{ boxShadow: "0 20px 60px rgba(192,132,252,0.3)" }}
          >
            L
          </div>

          <h2
            className="font-display text-5xl md:text-6xl font-medium mb-5 leading-tight"
            style={{ color: "#f1f0ee" }}
          >
            ready to meet{" "}
            <em className="gradient-text not-italic">Lumi?</em>
          </h2>

          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: "#6b6a72" }}
          >
            Join thousands already on the waitlist. Early access coming soon.
          </p>

          <div className="flex justify-center">
            <WaitlistForm size="large" />
          </div>

          <p className="text-xs mt-5" style={{ color: "#3d3d47" }}>
            Free during beta · No credit card · Cancel whenever
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-10 px-5 border-t text-center"
        style={{ borderColor: "#1e1e26" }}
      >
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
            <span className="text-white text-[9px] font-bold">L</span>
          </div>
          <span
            className="font-display text-sm font-medium"
            style={{ color: "#3d3d47" }}
          >
            lumi
          </span>
        </div>
        <p className="text-xs" style={{ color: "#2a2a35" }}>
          © 2025 Lumi. Made with warmth.
        </p>
      </footer>
    </main>
  );
}
