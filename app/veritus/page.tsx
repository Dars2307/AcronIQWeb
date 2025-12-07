"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaCrown, 
  FaArrowRight, 
  FaShieldAlt, 
  FaBrain, 
  FaChartLine, 
  FaLock,
  FaCheckCircle,
  FaGlobe,
  FaUsers,
  FaGem
} from "react-icons/fa";

export default function Veritus() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  const capabilities = [
    {
      title: "Strategic Analysis",
      description: "Deep market and competitive intelligence synthesis",
      icon: FaChartLine
    },
    {
      title: "Decision Validation", 
      description: "Risk assessment and scenario modelling for executive choices",
      icon: FaShieldAlt
    },
    {
      title: "Intelligence Synthesis",
      description: "Transform complex data into actionable strategic insights",
      icon: FaBrain
    },
    {
      title: "Executive Advisory",
      description: "Direct consultation on high-stakes strategic decisions",
      icon: FaCrown
    }
  ];

  const useCases = [
    "Market entry strategy validation",
    "Merger & acquisition due diligence",
    "Competitive positioning analysis", 
    "Strategic partnership evaluation",
    "Risk mitigation planning",
    "Investment decision support"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#111213] text-[#E6E7E8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.01]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"60px 60px"}} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-[#C28B4A] rounded-sm flex items-center justify-center">
                  <FaCrown className="text-3xl text-[#111213]" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-semibold text-[#E6E7E8]">Veritus</h1>
                  <p className="text-[#C28B4A] font-mono text-lg tracking-wider">Intelligence With Purpose</p>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold text-[#E6E7E8] mb-6 leading-tight">
                Strategic Intelligence Advisor for Executive Decision-Making
              </h2>
              
              <p className="text-xl text-[#B5B7BB] mb-8 leading-relaxed">
                When the stakes are highest and clarity is non-negotiable, Veritus delivers strategic intelligence that transforms uncertainty into confident action. Purpose-built for C-suite leaders navigating complex, high-impact decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/veritus/pricing">
                  <button className="bg-[#C28B4A] text-[#111213] px-8 py-4 rounded-sm font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                    <span>View Pricing</span>
                    <FaArrowRight className="text-sm" />
                  </button>
                </Link>
                <button 
                  onClick={() => setShowEarlyAccess(true)}
                  className="border border-[#2B2D2E] text-[#E6E7E8] px-8 py-4 rounded-sm font-semibold text-lg hover:border-[#C28B4A]/50 transition-colors"
                >
                  Request Demo
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <FaGem className="text-[#C28B4A] text-lg" />
                  <span className="text-[#E6E7E8] font-semibold">Executive Intelligence Brief</span>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#B5B7BB]">Market Analysis</span>
                    <span className="text-green-400">Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B5B7BB]">Risk Assessment</span>
                    <span className="text-green-400">Complete</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B5B7BB]">Strategic Validation</span>
                    <span className="text-yellow-400">In Progress</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B5B7BB]">Decision Framework</span>
                    <span className="text-gray-400">Pending</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-[#2B2D2E]">
                  <p className="text-xs text-[#B5B7BB] italic">
                    "Veritus provided the strategic clarity we needed for our £50M acquisition. The analysis was comprehensive, the insights actionable, and the confidence level absolute."
                  </p>
                  <p className="text-xs text-[#C28B4A] mt-2">— CEO, FTSE 250 Company</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 bg-[#0F1011] border-t border-[#2B2D2E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#E6E7E8] mb-6">
              Core Capabilities
            </h2>
            <p className="text-xl text-[#B5B7BB] max-w-3xl mx-auto">
              Four pillars of strategic intelligence, engineered for executive decision-making
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-6 text-center hover:border-[#C28B4A]/30 transition-colors"
                >
                  <div className="w-16 h-16 bg-[#C28B4A] rounded-sm flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-2xl text-[#111213]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#E6E7E8] mb-3">{capability.title}</h3>
                  <p className="text-[#B5B7BB] text-sm">{capability.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-[#111213] border-t border-[#2B2D2E]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-semibold text-[#E6E7E8] mb-6">
                Strategic Applications
              </h2>
              <p className="text-xl text-[#B5B7BB] mb-8">
                Veritus excels in high-stakes scenarios where precision and strategic foresight determine success.
              </p>
              
              <div className="space-y-4">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <FaCheckCircle className="text-[#C28B4A] text-sm flex-shrink-0" />
                    <span className="text-[#E6E7E8]">{useCase}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-8"
            >
              <div className="text-center mb-6">
                <FaLock className="text-[#C28B4A] text-2xl mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-[#E6E7E8] mb-2">Executive Access</h3>
                <p className="text-[#B5B7BB]">Secure, confidential strategic intelligence</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-[#2B2D2E]">
                  <span className="text-[#B5B7BB]">Security Clearance</span>
                  <span className="text-green-400">Enterprise Grade</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#2B2D2E]">
                  <span className="text-[#B5B7BB]">Data Sovereignty</span>
                  <span className="text-green-400">Guaranteed</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#2B2D2E]">
                  <span className="text-[#B5B7BB]">Access Level</span>
                  <span className="text-[#C28B4A]">C-Suite Only</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#B5B7BB]">Response Time</span>
                  <span className="text-green-400">&lt; 24 Hours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0F1011] border-t border-[#2B2D2E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#E6E7E8] mb-6">
              Ready for Strategic Clarity?
            </h2>
            <p className="text-xl text-[#B5B7BB] mb-8">
              Join the executives who trust Veritus for their most critical strategic decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/veritus/pricing">
                <button className="bg-[#C28B4A] text-[#111213] px-8 py-4 rounded-sm font-semibold text-lg hover:opacity-90 transition-opacity">
                  View Pricing & Plans
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-[#2B2D2E] text-[#E6E7E8] px-8 py-4 rounded-sm font-semibold text-lg hover:border-[#C28B4A]/50 transition-colors">
                  Schedule Consultation
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <EarlyAccessModal 
        open={showEarlyAccess} 
        onClose={() => setShowEarlyAccess(false)} 
      />
    </Layout>
  );
}
