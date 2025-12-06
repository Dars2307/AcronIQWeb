"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane, FaTimes } from "react-icons/fa";

type Message = { role: "user" | "assistant"; content: string };

export default function ChatWidget({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm AcronIQ Assist — your guide through the platform. Need help understanding AcronIQ, our products, or the Veritus beta? Ask me anything and I'll guide you.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    const next: Message[] = [...messages, { role: "user", content: text } as Message];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-10) }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const answer = (data && data.answer) ||
        "I couldn't retrieve live data just now, but I can help with questions about AcronIQ products, Early Access, and platform navigation. For strategic analysis, Veritus can help you.";
      setMessages((prev) => [...prev, { role: "assistant", content: answer } as Message]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting. Quick guide: AcronIQ offers Veritus (Strategic Intelligence Advisor), Signals (market intelligence), BusinessHub (secure workspace), and Early Access programs.",
        } as Message,
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed bottom-28 right-8 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
    >
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex items-center justify-between">
        <div className="font-semibold">AcronIQ Assist</div>
        <button aria-label="Close chat" onClick={onClose} className="hover:opacity-80">
          <FaTimes />
        </button>
      </div>

      <div className="max-h-80 overflow-y-auto p-3 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              className={
                m.role === "user"
                  ? "ml-10 bg-blue-50 text-gray-900 p-3 rounded-lg shadow-sm border border-blue-100"
                  : "mr-10 bg-gray-50 text-gray-900 p-3 rounded-lg shadow-sm border border-gray-100"
              }
            >
              {m.content}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={endRef} />
      </div>

      <div className="p-3 border-t border-gray-200 bg-white">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={2}
            placeholder="Ask about products, Early Access, or platform help…"
            className="flex-1 resize-none rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={send}
            disabled={loading}
            className="h-10 w-10 rounded-md bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-50"
            aria-label="Send"
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
        <div className="text-[10px] text-gray-400 mt-1">
          AcronIQ Assist — Your Platform Guide
        </div>
      </div>
    </motion.div>
  );
}
