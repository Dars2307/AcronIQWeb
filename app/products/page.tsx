"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaArrowRight, 
  FaChevronRight, 
  FaShieldAlt, 
  FaChartLine, 
  FaCrown,
  FaCheckCircle,
  FaGem,
  FaLock,
  FaGlobe
} from "react-icons/fa";

export default function Products() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  const products = [
    {
      name: "Veritus",
      tagline: "Intelligence With Purpose",
      description: "Strategic Intelligence Advisor engineered for C-suite decision-making. When clarity determines outcome.",
      tier: "Executive",
      icon: FaCrown,
      features: [
        "Strategic analysis & validation",
        "Executive decision support", 
        "Market intelligence synthesis",
        "Risk assessment & mitigation",
        "Board-level presentations",
        "48-hour delivery guarantee"
      ],
      link: "/veritus",
      status: "Private Beta",
      pricing: "From £199",
      highlight: true
    }
  ];

  const testimonials = [
    {
      quote: "Veritus provided the strategic clarity we needed for our £50M acquisition. The analysis was comprehensive, the insights actionable, and the confidence level absolute.",
      author: "CEO, FTSE 250 Company",
      sector: "Financial Services"
    },
    {
      quote: "In high-stakes M&A, precision matters more than speed. Veritus delivers both with an intelligence depth that transforms uncertainty into confident action.",
      author: "Managing Director",
      sector: "Private Equity"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#111213] text-[#E6E7E8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.01]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"60px 60px"}} />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono tracking-[0.3em] text-xs text-[#C28B4A] mb-8 uppercase"
            >
              Strategic Intelligence Portfolio
            </motion.p>
            <h1 className="text-6xl md:text-8xl font-semibold mb-8 leading-tight">
              <span className="text-[#C28B4A]">Veritus</span> — Strategic Intelligence Engine
            </h1>
            <p className="text-2xl text-[#B5B7BB] max-w-5xl mx-auto leading-relaxed mb-12">
              Our flagship strategic intelligence platform for high-stakes decision-making. The first in the AcronIQ suite, with additional platforms planned for 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/veritus">
                <button className="bg-[#C28B4A] text-[#111213] px-10 py-4 rounded-sm font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-3">
                  <FaCrown className="text-xl" />
                  <span>Request Private Beta Access</span>
                  <FaArrowRight className="text-sm" />
                </button>
              </Link>
              <Link href="/veritus/pricing">
                <button className="border border-[#2B2D2E] text-[#E6E7E8] px-10 py-4 rounded-sm font-semibold text-lg hover:border-[#C28B4A]/50 transition-colors">
                  View Pricing Plans
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-32 bg-[#0F1011] border-t border-[#2B2D2E]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-semibold text-[#E6E7E8] mb-6">
              Veritus Platform
            </h2>
            <p className="text-xl text-[#B5B7BB] max-w-4xl mx-auto">
              Our flagship strategic intelligence engine for executives who understand that clarity is not optional when the stakes are highest. Additional platforms planned for 2026.
            </p>
          </motion.div>

          <div className="flex justify-center mb-20">
            <div className="max-w-md w-full">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`group relative bg-[#151617] border rounded-sm p-8 transition-all duration-500 ${
                    product.highlight 
                      ? 'border-[#C28B4A] ring-1 ring-[#C28B4A]/20' 
                      : 'border-[#2B2D2E] hover:border-[#C28B4A]/30'
                  }`}
                >
                  {product.highlight && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-[#C28B4A] text-[#111213] px-6 py-2 rounded-sm text-sm font-semibold flex items-center space-x-2">
                        <FaGem className="w-3 h-3" />
                        <span>Available Now</span>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-[0.01] transition-opacity duration-500" 
                       style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"20px 20px"}} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-20 h-20 bg-[#C28B4A] rounded-sm flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Icon className="text-3xl text-[#111213]" />
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 text-xs font-mono tracking-wider rounded-sm ${
                          product.status === 'Available' ? 'bg-green-500/20 text-green-400' :
                          product.status === 'Development' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {product.status}
                        </span>
                        <div className="text-[#C28B4A] font-mono text-sm mt-2">{product.pricing}</div>
                      </div>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-3xl font-semibold text-[#E6E7E8] mb-3">{product.name}</h3>
                      <p className="text-[#C28B4A] font-mono text-sm tracking-wider mb-4">{product.tagline}</p>
                      <p className="text-[#B5B7BB] leading-relaxed text-lg">{product.description}</p>
                    </div>
                    
                    <div className="space-y-4 mb-10">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <FaCheckCircle className="text-[#C28B4A] text-sm flex-shrink-0" />
                          <span className="text-[#B5B7BB] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link href={product.link}>
                      <button className="w-full bg-[#C28B4A] text-[#111213] py-4 px-6 rounded-sm font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-3">
                        <span>Request Private Beta Access</span>
                        <FaArrowRight className="text-sm" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Testimonials */}
      <section className="py-20 bg-[#111213] border-t border-[#2B2D2E]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#E6E7E8] mb-6">
              Executive Confidence
            </h2>
            <p className="text-xl text-[#B5B7BB] max-w-3xl mx-auto">
              When the stakes are highest, C-suite leaders trust AcronIQ for strategic intelligence that transforms uncertainty into confident action.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-8"
              >
                <div className="mb-6">
                  <FaLock className="text-[#C28B4A] text-xl mb-4" />
                  <p className="text-[#E6E7E8] text-lg leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#C28B4A] font-semibold">{testimonial.author}</p>
                    <p className="text-[#B5B7BB] text-sm">{testimonial.sector}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[#B5B7BB] font-mono">CONFIDENTIAL</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advantage */}
      <section className="py-20 bg-[#0F1011] border-t border-[#2B2D2E]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-[#E6E7E8] mb-6">
              Strategic Advantage
            </h2>
            <p className="text-xl text-[#B5B7BB] max-w-3xl mx-auto">
              When precision matters more than speed. When clarity determines outcome. When intelligence becomes competitive advantage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Focus",
                description: "Built for C-suite decision-making, not operational tasks. Every analysis designed for strategic impact.",
                icon: FaCrown
              },
              {
                title: "Strategic Depth", 
                description: "Intelligence that considers context, not just data. Insights that transform uncertainty into confidence.",
                icon: FaGlobe
              },
              {
                title: "Competitive Edge",
                description: "Analysis that creates sustainable market advantage. Intelligence that becomes strategic currency.",
                icon: FaGem
              }
            ].map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-[#151617] border border-[#2B2D2E] rounded-sm"
              >
                <div className="w-16 h-16 bg-[#C28B4A] rounded-sm flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="text-2xl text-[#111213]" />
                </div>
                <h3 className="text-2xl font-semibold text-[#E6E7E8] mb-4">{advantage.title}</h3>
                <p className="text-[#B5B7BB] leading-relaxed">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111213] border-t border-[#2B2D2E]">
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
              Join the executives who trust AcronIQ for their most critical strategic decisions. When clarity is not optional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/veritus">
                <button className="bg-[#C28B4A] text-[#111213] px-10 py-4 rounded-sm font-semibold text-lg hover:opacity-90 transition-opacity">
                  Access Veritus Now
                </button>
              </Link>
              <Link href="/contact">
                <button className="border border-[#2B2D2E] text-[#E6E7E8] px-10 py-4 rounded-sm font-semibold text-lg hover:border-[#C28B4A]/50 transition-colors">
                  Schedule Executive Consultation
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