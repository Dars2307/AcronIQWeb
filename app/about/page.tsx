"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaLinkedin, FaBrain } from "react-icons/fa";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <FaBrain className="text-6xl text-blue-400" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About AcronIQ
            </h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mb-8"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Building the future of strategic intelligence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            >
              Our Mission
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl border border-blue-100"
            >
              <p className="text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
                AcronIQ is an intelligence research organisation focused on developing systems that enhance strategic decision-making.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                We build tools that allow individuals and organisations to see clearly, think precisely, and act with confidence.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10">
                  <motion.div 
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div 
                      className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <FaBrain className="text-5xl text-blue-600" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-bold">Joel Ogunniyi</h3>
                      <p className="text-blue-100 text-lg">Founder & Chief Executive Officer</p>
                    </div>
                  </motion.div>
                  <motion.p 
                    className="text-xl leading-relaxed mb-6 italic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    "I founded AcronIQ because leaders deserve clarity, even when the world is at its most complex. In an age flooded with data, the true competitive advantage isn't more information—it's precision, trust, and intelligence that resonates."
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
