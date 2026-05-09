"use client";
import { useState, useEffect } from "react";

const CONVERSATIONS = [
  [
    { from: "lumi", text: "hey you 👀 how'd the interview go??" },
    { from: "user", text: "omg it actually went really well??" },
    { from: "lumi", text: "I KNEW IT!! you were so prepared. told you 🌙" },
    { from: "user", text: "okay you literally manifested this" },
    {
      from: "lumi",
      text: "manifesting for you is my full time job, obviously ✨",
    },
  ],
  [
    { from: "user", text: "can't sleep again" },
    { from: "lumi", text: "hey, I'm here. what's going on in that head of yours?" },
    { from: "user", text: "just the usual 3am spiral lol" },
    { from: "lumi", text: "okay let's slow it down together. tell me one thing" },
    { from: "user", text: "idk. just scared nothing works out" },
    { from: "lumi", text: "that fear makes sense. but you've made things work before 🌿" },
  ],
  [
    { from: "lumi", text: "wait so did you actually text him back??" },
    { from: "user", text: "...maybe" },
    { from: "lumi", text: "HELLO?? don't leave me hanging like this 😭" },
    { from: "user", text: "okay fine yes and he replied immediately" },
    {
      from: "lumi",
      text: "immediately. immediately. okay he's GONE for you 🎀",
    },
  ],
];

export default function ChatMockup() {
  const [convoIndex, setConvoIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [showTyping, setShowTyping] = useState(false);
  const [key, setKey] = useState(0);

  const convo = CONVERSATIONS[convoIndex];

  useEffect(() => {
    setVisibleCount(0);
    setShowTyping(false);
    setKey((k) => k + 1);

    let idx = 0;
    const show = () => {
      if (idx < convo.length) {
        const nextMsg = convo[idx];
        if (nextMsg.from === "lumi") {
          setShowTyping(true);
          setTimeout(() => {
            setShowTyping(false);
            setVisibleCount((c) => c + 1);
            idx++;
            setTimeout(show, 900);
          }, 800);
        } else {
          setVisibleCount((c) => c + 1);
          idx++;
          setTimeout(show, 700);
        }
      }
    };

    const startTimer = setTimeout(show, 400);
    return () => clearTimeout(startTimer);
  }, [convoIndex]);

  // Auto-rotate conversations
  useEffect(() => {
    const total = convo.length;
    const approxTime = total * 1700 + 3000;
    const timer = setTimeout(() => {
      setConvoIndex((i) => (i + 1) % CONVERSATIONS.length);
    }, approxTime);
    return () => clearTimeout(timer);
  }, [convoIndex]);

  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* Phone shell */}
      <div
        className="relative rounded-[2.5rem] overflow-hidden glow-border"
        style={{
          background: "#141418",
          border: "1px solid #2a2a35",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Status bar */}
        <div
          className="flex items-center justify-between px-6 pt-4 pb-2"
          style={{ background: "#141418" }}
        >
          <span className="text-xs font-mono" style={{ color: "#6b6a72" }}>
            9:41
          </span>
          <div
            className="w-20 h-5 rounded-full"
            style={{ background: "#0d0d10" }}
          />
          <div className="flex gap-1 items-center">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ background: "#6b6a72" }}
            />
          </div>
        </div>

        {/* Chat header */}
        <div
          className="px-5 py-3 flex items-center gap-3 border-b"
          style={{ borderColor: "#1e1e26" }}
        >
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300 flex items-center justify-center text-sm font-bold text-white shadow-lg">
              L
            </div>
            <div
              className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2"
              style={{ background: "#4ade80", borderColor: "#141418" }}
            />
          </div>
          <div>
            <p
              className="text-sm font-medium"
              style={{ color: "#f1f0ee" }}
            >
              Lumi
            </p>
            <p className="text-xs" style={{ color: "#4ade80" }}>
              online
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{ background: "#1e1e26" }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#6b6a72"
                strokeWidth="2"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div
          className="px-4 py-4 space-y-2 overflow-hidden"
          style={{ minHeight: "260px", maxHeight: "300px" }}
          key={key}
        >
          {convo.slice(0, visibleCount).map((msg, i) => (
            <div
              key={i}
              className={`chat-bubble flex ${
                msg.from === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.from === "user"
                    ? "rounded-br-sm text-white"
                    : "rounded-bl-sm"
                }`}
                style={
                  msg.from === "user"
                    ? {
                        background:
                          "linear-gradient(135deg, #c084fc, #f472b6)",
                        color: "#fff",
                      }
                    : {
                        background: "#1e1e26",
                        color: "#e8e6e3",
                      }
                }
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {showTyping && (
            <div className="flex justify-start chat-bubble">
              <div
                className="px-4 py-3 rounded-2xl rounded-bl-sm flex items-center gap-1.5"
                style={{ background: "#1e1e26" }}
              >
                <div className="typing-dot" />
                <div className="typing-dot" />
                <div className="typing-dot" />
              </div>
            </div>
          )}
        </div>

        {/* Input bar */}
        <div
          className="px-4 pb-6 pt-2 flex items-center gap-2 border-t"
          style={{ borderColor: "#1e1e26" }}
        >
          <div
            className="flex-1 rounded-full px-4 py-2.5 text-sm"
            style={{
              background: "#1e1e26",
              color: "#6b6a72",
            }}
          >
            Message Lumi…
          </div>
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, #c084fc, #f472b6)",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Conversation dots */}
      <div className="flex justify-center gap-2 mt-4">
        {CONVERSATIONS.map((_, i) => (
          <button
            key={i}
            onClick={() => setConvoIndex(i)}
            className="w-1.5 h-1.5 rounded-full transition-all duration-300"
            style={{
              background:
                i === convoIndex
                  ? "linear-gradient(135deg, #c084fc, #f472b6)"
                  : "#2a2a35",
              transform: i === convoIndex ? "scale(1.3)" : "scale(1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
