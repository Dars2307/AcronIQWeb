"use client";

import { useState, useEffect } from "react";
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
import { fetchSiteContent, fetchProducts, fetchRoadmap } from "@/lib/content";
import type { Product, RoadmapItem } from "@/lib/supabase";

export default function Home() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  const [siteContent, setSiteContent] = useState<Record<string, string>>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [roadmap, setRoadmap] = useState<RoadmapItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadContent() {
      try {
        const [content, productsData, roadmapData] = await Promise.all([
          fetchSiteContent(['hero_headline', 'hero_subline', 'hero_cta_primary', 'hero_cta_secondary', 'founder_quote', 'founder_name', 'founder_title']),
          fetchProducts(),
          fetchRoadmap()
        ]);
        setSiteContent(content);
        setProducts(productsData.slice(0, 3)); // Top 3 for homepage
        setRoadmap(roadmapData.slice(0, 3)); // Top 3 for homepage
      } catch (error) {
        console.error('Error loading content:', error);
      } finally {
        setLoading(false);
      }
    }
    loadContent();
  }, []);

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

  const productIcons: Record<string, JSX.Element> = {
    'strategic-intelligence-advisory': <FaBrain className="text-4xl text-blue-600" />,
    'signals-platform': <FaChartLine className="text-4xl text-blue-600" />,
    'early-access-tools': <FaShieldAlt className="text-4xl text-blue-600" />
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-blue-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* AcronIQ Logo - Subtle Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <img 
            src="/images/original/Acron%20first%20logo%20transparent.png" 
            alt="AcronIQ Logo" 
            className="w-[1400px] h-auto object-contain"
          />
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
            {loading ? 'Clarity in Complexity. Intelligence You Can Trust.' : (siteContent.hero_headline || 'Clarity in Complexity. Intelligence You Can Trust.')}
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {loading ? 'Strategic intelligence and AI advisory for leaders navigating high-stakes decisions with precision and trust.' : (siteContent.hero_subline || 'Strategic intelligence and AI advisory for leaders navigating high-stakes decisions with precision and trust.')}
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 bg-white text-navy font-bold text-lg rounded-lg hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">{siteContent.hero_cta_primary || 'Contact Us'}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                onClick={() => setShowEarlyAccess(true)}
                className="px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10 inline-flex items-center">
                  <FaRocket className="mr-2" />
                  {siteContent.hero_cta_secondary || 'Join Early Access'}
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition - Three Pillars */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <motion.div 
                  className="flex justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                >
                  {pillar.icon}
                </motion.div>
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
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-400 group relative overflow-hidden"
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    className="flex justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {productIcons[product.slug] || <FaBrain className="text-4xl text-blue-600" />}
                  </motion.div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <h3 className="text-2xl font-bold text-navy">{product.name}</h3>
                  </div>
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 border ${product.badge_color || 'bg-blue-100 text-blue-800 border-blue-200'}`}>
                    {product.status}
                  </span>
                  <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link 
                      href={product.link || '/products'}
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Learn More 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="ml-1"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
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
                "{siteContent.founder_quote || 'I founded AcronIQ because leaders deserve clarity, even when the world is at its most complex. In an age flooded with data, the true competitive advantage isn\'t more information—it\'s precision, trust, and intelligence that resonates.'}"
              </p>
              <p className="text-lg text-blue-200 mb-8 text-center">
                — {siteContent.founder_name || 'Joel Ogunniyi'}, {siteContent.founder_title || 'Founder & Chief Executive Officer'}
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

      {/* Interactive Stats Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "2025", label: "Founded", suffix: "" },
              { number: "3", label: "Core Products", suffix: "+" },
              { number: "100", label: "Early Access Users", suffix: "%" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring" }}
                whileHover={{ scale: 1.1 }}
                className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-5xl md:text-6xl font-bold mb-2"
                >
                  {stat.number}{stat.suffix}
                </motion.div>
                <div className="text-xl text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
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
                title: "Why Clarity Matters More Than Information in Strategic Decision-Making",
                excerpt: "In today's world, leaders aren't suffering from a lack of information — they're drowning in it. Clarity, not volume of data, is what defines advantage.",
                date: "December 2025"
              },
              {
                title: "Why Emotional Intelligence Matters in AI Advisory",
                excerpt: "Decisions that shape organisations are rarely made in perfect conditions. Intelligence without emotional understanding is incomplete.",
                date: "December 2025"
              },
              {
                title: "Navigating Complexity: A Framework for Founders",
                excerpt: "How to transform uncertainty into actionable strategy using intelligence-driven approaches.",
                date: "Coming Soon"
              }
            ].map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-300 group cursor-pointer relative overflow-hidden"
              >
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-bl-full"></div>
                
                <div className="relative z-10">
                  <span className="text-sm text-blue-600 font-semibold">{article.date}</span>
                  <h3 className="text-xl font-bold text-navy mt-3 mb-3 group-hover:text-blue-600 transition-colors">{article.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link 
                      href="/journal"
                      className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    >
                      Read More 
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="ml-1"
                      >
                        →
                      </motion.span>
                    </Link>
                  </motion.div>
                </div>
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

              {roadmap.map((item, index) => (
                <motion.div
                  key={item.id}
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
                      item.status === 'In Progress' 
                        ? 'border-blue-600 bg-blue-50' 
                        : 'border-gray-200'
                    }`}>
                      <h3 className="text-2xl font-bold text-navy mb-2">{item.title}</h3>
                      <p className="text-blue-600 font-semibold">{item.timeline}</p>
                      {item.status === 'In Progress' && (
                        <span className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                          {item.status}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Center Circle */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 ${
                    item.status === 'In Progress' 
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
