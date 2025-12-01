"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { motion } from "framer-motion";
import { 
  FaCompass, 
  FaBullseye, 
  FaHeart, 
  FaRocket, 
  FaChartLine, 
  FaShieldAlt, 
  FaBrain,
  FaLightbulb
} from "react-icons/fa";

export default function Home() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const pillars = [
    {
      icon: <FaBullseye className="text-5xl text-blue-600" />,
      title: "Precision",
      description: "Data translated into clear insight"
    },
    {
      icon: <FaHeart className="text-5xl text-blue-600" />,
      title: "Trust",
      description: "Advisory informed by emotional intelligence"
    },
    {
      icon: <FaLightbulb className="text-5xl text-blue-600" />,
      title: "Foresight",
      description: "Strategic anticipation, not reaction"
    }
  ];

  const products = [
    {
      icon: <FaBrain className="text-4xl text-blue-600" />,
      title: "Strategic Intelligence Advisory",
      badge: "Flagship Service",
      description: "High-stakes decision support for founders and leaders navigating complexity with confidence.",
      link: "/products"
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "Signals Platform",
      badge: "Coming Soon",
      description: "AI-driven dashboards delivering real-time market intelligence and trend detection.",
      link: "/products"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Early Access Tools",
      badge: "Beta",
      description: "Decision modeling and scenario planning tools for strategic foresight.",
      link: "/early-access"
    }
  ];

  const roadmapMilestones = [
    { quarter: "Q1 2025", title: "Early Access Launch", status: "active" },
    { quarter: "Q2 2025", title: "Signals Platform Beta", status: "upcoming" },
    { quarter: "Q3 2025", title: "Advisory Expansion", status: "upcoming" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-blue-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Compass Icon - Subtle Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <FaCompass className="text-[40rem]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <motion.div
            {...fadeInUp}
            className="mb-6"
          >
            <FaCompass className="text-6xl mx-auto mb-6 text-blue-300" />
          </motion.div>

          <motion.h1
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
          >
            Clarity in Complexity.{" "}
            <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-white bg-clip-text text-transparent">
              Intelligence You Can Trust.
            </span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Strategic intelligence and AI advisory for leaders navigating high-stakes decisions with precision and trust.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => setShowEarlyAccess(true)}
              className="px-8 py-4 bg-white text-navy font-bold text-lg rounded-lg hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <FaRocket className="inline mr-2" />
              Join the Early Access Programme
            </button>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-all duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition - Three Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Why AcronIQ Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic intelligence built on three foundational pillars.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center group"
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{pillar.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Duplicate CTA to reduce scroll drop-off */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowEarlyAccess(true)}
              className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <FaRocket className="inline mr-2" />
              Join the Early Access Programme
            </button>
          </motion.div>
        </div>
      </section>

      {/* Products & Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Products & Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modular intelligence tools designed for founders, executives, and strategic leaders.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="flex justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-navy">{product.title}</h3>
                </div>
                <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${
                  product.badge === "Flagship Service" 
                    ? "bg-blue-100 text-blue-800 border border-blue-200" 
                    : product.badge === "Beta"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-orange-100 text-orange-800 border border-orange-200"
                }`}>
                  {product.badge}
                </span>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                <Link 
                  href={product.link}
                  className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Duplicate CTA in Products section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="px-8 py-4 bg-navy text-white font-bold text-lg rounded-lg hover:bg-navy-light hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
              >
                Explore All Products
                <FaRocket className="ml-2" />
              </Link>
              <button
                onClick={() => setShowEarlyAccess(true)}
                className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Join Early Access
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Story Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white shadow-2xl max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Why AcronIQ Exists</h2>
              <p className="text-xl text-blue-100 mb-6 leading-relaxed text-center italic">
                "I founded AcronIQ because leaders deserve clarity, even when the world is at its most complex. In an age drowning in data, I believe the ultimate competitive advantage isn't more information—it's precision, trust, and intelligence that resonates."
              </p>
              <p className="text-lg text-blue-200 mb-8 text-center">
                — Joel Ogunniyi, Founder & Chief Intelligence Officer
              </p>
              <div className="text-center">
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Meet the Founder
                  <FaRocket className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journal / Insights */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Insights & Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thought leadership on AI, strategy, and the future of intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Why Emotional Intelligence Matters in AI Advisory",
                excerpt: "Exploring the intersection of human insight and artificial intelligence in strategic decision-making.",
                date: "Coming Soon"
              },
              {
                title: "Navigating Complexity: A Framework for Founders",
                excerpt: "How to transform uncertainty into actionable strategy using intelligence-driven approaches.",
                date: "Coming Soon"
              },
              {
                title: "The Future of Strategic Intelligence",
                excerpt: "What modular AI tools mean for the next generation of business leaders.",
                date: "Coming Soon"
              }
            ].map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
              >
                <span className="text-sm text-blue-600 font-semibold">{article.date}</span>
                <h3 className="text-xl font-bold text-navy mt-3 mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <Link 
                  href="/journal"
                  className="inline-block text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/journal"
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold text-lg rounded-lg hover:bg-navy-light transition-all duration-300 hover:shadow-xl transform hover:scale-105"
            >
              View Journal
              <FaRocket className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Roadmap</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our journey to building the future of strategic intelligence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-blue-400 to-gray-300"></div>

              {roadmapMilestones.map((milestone, index) => (
                <motion.div
                  key={milestone.quarter}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-white rounded-xl shadow-lg p-6 border-2 ${
                      milestone.status === 'active' 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200'
                    }`}>
                      <h3 className="text-2xl font-bold text-navy mb-2">{milestone.title}</h3>
                      <p className="text-blue-600 font-semibold">{milestone.quarter}</p>
                      {milestone.status === 'active' && (
                        <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          In Progress
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                    milestone.status === 'active' 
                      ? 'bg-blue-600 border-blue-200' 
                      : 'bg-white border-gray-300'
                  }`}></div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              href="/roadmap"
              className="inline-flex items-center px-8 py-4 bg-navy text-white font-bold text-lg rounded-lg hover:bg-navy-light hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              See Full Roadmap
              <FaRocket className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <FaCompass className="text-6xl mx-auto mb-6 text-blue-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Navigate with Clarity?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join forward-thinking leaders who are transforming complexity into competitive advantage.
            </p>
            <button
              onClick={() => setShowEarlyAccess(true)}
              className="px-10 py-5 bg-white text-navy font-bold text-xl rounded-lg hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <FaRocket className="inline mr-2" />
              Join the Early Access Programme
            </button>
            <p className="text-blue-200 mt-6">
              🔒 No spam. Unsubscribe anytime. Your privacy matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Early Access Modal */}
      <EarlyAccessModal 
        open={showEarlyAccess} 
        onClose={() => setShowEarlyAccess(false)} 
      />
    </Layout>
  );
}
