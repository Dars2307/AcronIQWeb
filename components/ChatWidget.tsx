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
        "Hello! I'm AcronIQ Assist, here to help you navigate our platform. AcronIQ is currently focused on Veritus, our strategic intelligence engine for high-stakes decision-making. I can help you learn about Veritus, our Private Beta programme, or site navigation. How can I assist you today?",
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
        "I'm here to help with questions about AcronIQ's Veritus platform and Private Beta programme. Veritus is our flagship strategic intelligence engine for executives who require absolute clarity in high-stakes decisions. What would you like to know?";
      setMessages((prev) => [...prev, { role: "assistant", content: answer } as Message]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting. Quick guide: AcronIQ is currently focused on Veritus, our strategic intelligence engine for high-stakes decision-making. Additional platforms are planned for 2026. Join our Private Beta programme to get early access.",
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
      className="fixed bottom-28 right-8 w-80 bg-[#151617] rounded-2xl shadow-2xl border border-[#2B2D2E] overflow-hidden z-50"
    >
      <div className="bg-[#111213] border-b border-[#2B2D2E] text-[#E6E7E8] p-4 flex items-center justify-between">
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
                  ? "ml-10 bg-[#C28B4A]/10 text-[#E6E7E8] p-3 rounded-lg shadow-sm border border-[#C28B4A]/20"
                  : "mr-10 bg-[#2B2D2E] text-[#E6E7E8] p-3 rounded-lg shadow-sm border border-[#2B2D2E]"
              }
            >
              {m.content}
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={endRef} />
      </div>

      <div className="p-3 border-t border-[#2B2D2E] bg-[#151617]">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            rows={2}
            placeholder="Ask about Veritus or Private Beta access…"
            className="flex-1 resize-none rounded-md border border-[#2B2D2E] bg-[#111213] text-[#E6E7E8] p-2 focus:outline-none focus:ring-2 focus:ring-[#C28B4A] placeholder-[#B5B7BB]"
          />
          <button
            onClick={send}
            disabled={loading}
            className="h-10 w-10 rounded-md bg-[#C28B4A] text-[#111213] flex items-center justify-center hover:opacity-90 disabled:opacity-50"
            aria-label="Send"
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
        <div className="text-[10px] text-[#B5B7BB] mt-1">
          AcronIQ Assist — Your Platform Guide
        </div>
      </div>
    </motion.div>
  );
}
