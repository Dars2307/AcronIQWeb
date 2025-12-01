"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaLinkedin, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About AcronIQ
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Mission</h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                AcronIQ is an intelligence research organisation focused on developing systems that enhance strategic decision-making.
              </p>
              <p className="text-lg">
                We build tools that allow individuals and organisations to see clearly, think precisely, and act with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                    <FaBrain className="text-4xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Joel Ogunniyi</h3>
                    <p className="text-blue-200">Founder & Chief Executive Officer</p>
                  </div>
                </div>
                <p className="text-lg leading-relaxed mb-4">
                  "I founded AcronIQ because leaders deserve clarity, even when the world is at its most complex. In an age flooded with data, the true competitive advantage isn't more information—it's precision, trust, and intelligence that resonates."
                </p>
                <p className="text-blue-100 leading-relaxed">
                  As Founder & CEO, my focus is on crafting intelligence frameworks that help executives see beyond noise and make decisions with unwavering clarity. With a background in strategic advisory and AI research, I built AcronIQ to transform how leaders navigate complexity.
                </p>
                <div className="mt-6">
                  <a 
                    href="https://www.linkedin.com/in/joelogunniyi17/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
                  >
                    <FaLinkedin className="text-2xl" />
                    <span className="font-semibold">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">The Vision</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We're building the future of strategic intelligence—where AI meets human insight, and complexity transforms into clarity.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AcronIQ exists to serve founders, executives, and strategic leaders who refuse to navigate by guesswork. We believe in precision over noise, trust over hype, and intelligence that resonates.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-700 italic">
                  "AcronIQ helped us see clarity in chaos. Their advisory transformed how we approach strategic decisions."
                </p>
                <p className="text-gray-600 mt-2 font-semibold">— Early Access Partner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
