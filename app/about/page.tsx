"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaLinkedin, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-[#111213] text-[#E6E7E8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"32px 32px"}} />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono tracking-[0.2em] text-xs text-[#C28B4A] mb-6 uppercase"
            >
              Intelligence Organisation
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight">
              About AcronIQ
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#B5B7BB] max-w-3xl mx-auto"
            >
              We're currently focused on Veritus, our strategic intelligence engine for high-stakes decision-making. Additional platforms planned for 2026.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#0F1011] border-t border-[#2B2D2E]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#E6E7E8] mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-[#B5B7BB] max-w-4xl mx-auto leading-relaxed">
              We believe that in an age of information overload, the true competitive advantage lies not in having more data, but in having clearer insight. AcronIQ exists to transform complexity into clarity through Veritus, our strategic intelligence engine built for executives who can't afford ambiguity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-[#151617] rounded-sm border border-[#2B2D2E]"
            >
              <div className="w-12 h-12 bg-[#C28B4A] rounded-sm flex items-center justify-center mx-auto mb-6">
                <span className="text-lg font-semibold text-[#111213]">1</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#E6E7E8] mb-4">Precision</h3>
              <p className="text-[#B5B7BB]">
                Data translated into clear insight through disciplined analysis and structured thinking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-[#151617] rounded-sm border border-[#2B2D2E]"
            >
              <div className="w-12 h-12 bg-[#C28B4A] rounded-sm flex items-center justify-center mx-auto mb-6">
                <span className="text-lg font-semibold text-[#111213]">2</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#E6E7E8] mb-4">Trust</h3>
              <p className="text-[#B5B7BB]">
                Advisory informed by emotional intelligence and deep understanding of strategic context.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 bg-[#151617] rounded-sm border border-[#2B2D2E]"
            >
              <div className="w-12 h-12 bg-[#C28B4A] rounded-sm flex items-center justify-center mx-auto mb-6">
                <span className="text-lg font-semibold text-[#111213]">3</span>
              </div>
              <h3 className="text-2xl font-semibold text-[#E6E7E8] mb-4">Foresight</h3>
              <p className="text-[#B5B7BB]">
                Strategic anticipation, not reaction. Intelligence that positions you ahead of market shifts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-24 bg-[#111213] border-t border-[#2B2D2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-[#151617] rounded-sm p-10 border border-[#2B2D2E] relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"24px 24px"}} />

                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div 
                      className="w-24 h-24 bg-[#C28B4A] rounded-sm flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaBrain className="text-4xl text-[#111213]" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-semibold text-[#E6E7E8]">Joel Ogunniyi</h3>
                      <p className="text-[#C28B4A] text-lg font-mono tracking-wider text-sm uppercase">Founder & CEO</p>
                    </div>
                  </motion.div>
                  <motion.p 
                    className="text-xl leading-relaxed mb-6 text-[#E6E7E8] italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    "I founded AcronIQ because leaders deserve clarity, even when the world is at its most complex. We're building Veritus to turn complexity into certainty for decision-makers who can't afford ambiguity."
                  </motion.p>
                  <motion.p 
                    className="text-blue-50 leading-relaxed text-lg"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    As Founder & CEO, my focus is on crafting intelligence frameworks that help executives see beyond noise and make decisions with unwavering clarity. With a background in strategic advisory and AI research, I built AcronIQ to transform how leaders navigate complexity.
                  </motion.p>
                  <motion.div 
                    className="mt-8"
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href="https://www.linkedin.com/in/joelogunniyi17/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl"
                    >
                      <FaLinkedin className="text-2xl" />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.h2 
                className="text-5xl font-bold text-navy mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                The Vision
              </motion.h2>
              <motion.p 
                className="text-2xl text-gray-700 mb-6 leading-relaxed font-semibold"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                We're building the future of strategic intelligence—where AI meets human insight, and complexity transforms into clarity.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                AcronIQ exists to serve founders, executives, and strategic leaders who refuse to navigate by guesswork. We believe in precision over noise, trust over hype, and intelligence that resonates.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                AcronIQ is being built not as a temporary solution, but as a long-term intelligence partner for leaders shaping the next decades.
              </motion.p>
              <motion.div 
                className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 rounded-r-2xl shadow-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <p className="text-gray-700 italic text-lg leading-relaxed">
                  "AcronIQ helped us see clarity in chaos. Their advisory transformed how we approach strategic decisions."
                </p>
                <p className="text-gray-600 mt-3 font-bold">— Early Access Partner</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
