"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { motion } from "framer-motion";
import { FaChevronRight, FaPlay, FaQuoteLeft, FaRocket } from "react-icons/fa";

export default function Home() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const productsShowcase = [
    {
      key: "veritus",
      title: "AcronIQ Veritus",
      tagline: "Intelligence With Purpose",
      description:
        "Our strategic core. Veritus translates ambiguity into decisive direction with explainable AI reasoning.",
      label: "Core Engine",
      cta: { href: "/products", text: "See Veritus" },
    },
    {
      key: "signals",
      title: "AcronIQ Signals",
      tagline: "Signal over noise",
      description:
        "AI‑driven dashboards that reveal what matters in complex systems so leaders can act with clarity.",
      label: "In Development",
      cta: { href: "/early-access", text: "Join Signals Beta" },
    },
    {
      key: "businesshub",
      title: "BusinessHub",
      tagline: "Secure client workspace",
      description:
        "A premium, secure portal for collaboration, insights, and decision workflows — designed for executive teams.",
      label: "Coming Soon",
      cta: { href: "/contact", text: "Explore BusinessHub" },
    },
  ];

  const timeline = [
    { q: "Q1", year: "2026", title: "Early Access Launch", note: "Select partners onboarded" },
    { q: "Q2", year: "2026", title: "Signals Platform Beta", note: "First dashboards in production" },
    { q: "Q3", year: "2026", title: "Advisory Expansion", note: "Broader executive engagements" },
  ];

  return (
    <Layout>
      {/* Hero — Understand */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#111213] text-[#E6E7E8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"28px 28px"}} />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          <motion.h1 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-5xl md:text-7xl font-semibold leading-tight mb-6">
            Clarity in Complexity. <span className="text-[#C28B4A]">Intelligence You Can Trust.</span>
          </motion.h1>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-xl md:text-2xl text-[#B5B7BB] max-w-3xl mx-auto mb-10">
            Strategic intelligence and AI advisory for leaders navigating high-stakes decisions with precision and trust.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <button onClick={() => setShowEarlyAccess(true)} className="inline-flex items-center px-8 py-4 bg-[#C28B4A] text-[#111213] font-medium rounded-sm hover:opacity-90 transition">
              Join the Early Access Programme
              <FaChevronRight className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Believe — Product Showcase */}
      <section className="py-28 bg-[#111213] text-[#E6E7E8] border-t border-[#2B2D2E]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="mb-14">
            <h2 className="text-4xl md:text-5xl font-semibold mb-3">Precision tools for decisive leaders</h2>
            <p className="text-[#B5B7BB] text-lg">Veritus, Signals, and BusinessHub — built to move from noise to clarity.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {productsShowcase.map((p) => (
              <motion.div key={p.key} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="group p-6 rounded-sm bg-[#151617] border border-[#2B2D2E]">
                <div className="text-xs uppercase tracking-widest text-[#C28B4A] mb-2">{p.label}</div>
                <h3 className="text-2xl font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-[#B5B7BB] mb-6">{p.tagline}</p>

                <div className="aspect-video w-full rounded-sm bg-[#2B2D2E] flex items-center justify-center mb-5">
                  <button className="inline-flex items-center px-3 py-2 bg-[#111213] text-[#E6E7E8] border border-[#3a3b3c] rounded-sm hover:bg-[#1a1b1c] transition">
                    <FaPlay className="mr-2 text-[#C28B4A]" />
                    Watch 30s demo
                  </button>
                </div>

                <p className="text-sm text-[#D0D1D3] mb-6">{p.description}</p>
                <Link href={p.cta.href} className="inline-flex items-center text-[#C28B4A] hover:text-[#d29b5a]">
                  {p.cta.text}
                  <FaChevronRight className="ml-2 text-sm" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust — Credibility Layer */}
      <section className="py-28 bg-[#111213] text-[#E6E7E8] border-t border-[#2B2D2E]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h3 className="text-3xl font-semibold mb-4">Founder</h3>
            <div className="h-40 w-40 rounded-full bg-[#2B2D2E] mb-5" />
            <p className="text-lg">Joel Ogunniyi — Founder & Strategic Advisor</p>
            <p className="text-[#B5B7BB] mt-3">A decade in strategic intelligence. Building AcronIQ to turn complexity into certainty for decision‑makers.</p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h3 className="text-3xl font-semibold mb-4">Vision Manifesto</h3>
            <ul className="space-y-3 text-[#D0D1D3]">
              <li>We design for clarity — not noise.</li>
              <li>Intelligence must be explainable, accountable, and trusted.</li>
              <li>Leaders need signal, narrative, and timing — in one frame.</li>
            </ul>

            <div className="mt-8 border-l-2 border-[#C28B4A] pl-4">
              <FaQuoteLeft className="text-[#C28B4A] mb-3" />
              <p className="text-lg text-[#E6E7E8] italic">“AcronIQ helped us see clarity in chaos.”</p>
              <p className="text-sm text-[#B5B7BB] mt-1">Confidential client, executive team</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap — Proof of Direction */}
      <section className="py-28 bg-[#111213] text-[#E6E7E8] border-t border-[#2B2D2E]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-center mb-14">
            <h2 className="text-4xl font-semibold mb-3">Roadmap</h2>
            <p className="text-[#B5B7BB]">What’s next, with precision.</p>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#2B2D2E]" />
            {timeline.map((t, i) => (
              <motion.div key={`${t.q}-${t.year}`} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className={`relative flex ${i % 2 ? 'flex-row-reverse' : 'flex-row'} items-start mb-10`}>
                <div className={`w-1/2 ${i % 2 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                  <div className="inline-block">
                    <div className="text-xs tracking-widest text-[#C28B4A]">{t.q} {t.year}</div>
                    <div className="text-xl font-semibold">{t.title}</div>
                    <div className="text-sm text-[#B5B7BB]">{t.note}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 mt-1 w-3 h-3 rounded-full bg-[#C28B4A]" />
                <div className="w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join — Conversion */}
      <section className="py-28 bg-[#0F1011] text-[#E6E7E8] border-t border-[#2B2D2E]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-4xl md:text-5xl font-semibold mb-6">
            Understand → Believe → Trust → <span className="text-[#C28B4A]">Join</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="text-lg text-[#B5B7BB] mb-8">
            If the problem matters, clarity is not optional. Join our early access programme.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <button onClick={() => setShowEarlyAccess(true)} className="inline-flex items-center px-8 py-4 bg-[#C28B4A] text-[#111213] font-medium rounded-sm hover:opacity-90 transition">
              Get Started
              <FaRocket className="ml-2" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <EarlyAccessModal open={showEarlyAccess} onClose={() => setShowEarlyAccess(false)} />
    </Layout>
  );
}
