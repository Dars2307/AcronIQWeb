"use client";

import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaShieldAlt, FaRocket } from "react-icons/fa";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  };

  const features = [
    {
      icon: <FaBrain className="text-4xl text-blue-600" />,
      title: "AcronIQ Veritus",
      description: "Intelligence With Purpose — powered by Polaris Intelligence Core (PIC).",
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "AcronIQ Signals",
      description: "Market intelligence & early-warning system for trend detection.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "NexusOne Portal",
      description: "Secure client workspace for seamless collaboration and insights.",
    },
  ];


  return (
    <Layout>
      <section className="relative min-h-screen pb-32 flex items-center justify-center bg-gradient-to-br from-navy via-navy-light to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full blur-2xl" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            {...fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-8 mt-20"
          >
            Transforming Ideas into{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-blue-200 bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </motion.h1>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-blue-200 mb-6 max-w-4xl mx-auto"
          >
            Strategic clarity in hours — not weeks. No guesswork, no consultancy overhead.
          </motion.p>

          <motion.p
            {...fadeInUp}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            We provide AI-driven insight and research to empower businesses and drive innovation.
          </motion.p>

          <motion.div
            {...fadeInUp}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="btn-secondary text-lg bg-white text-navy border-2 border-white hover:bg-gray-100 hover:text-navy hover:shadow-lg transition-all duration-300"
            >
              <FaRocket className="inline mr-2" />
              Early Access
            </Link>
            <Link href="/contact" className="btn-secondary text-lg bg-transparent text-white border-2 border-white hover:bg-white hover:text-navy hover:shadow-lg transition-all duration-300">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-navy mb-4">Building the Future of AI Research</h3>
              <p className="text-gray-700 text-lg mb-4">
                We're currently developing cutting-edge AI tools that will transform how businesses approach strategic decision-making and market intelligence.
              </p>
              <p className="text-blue-600 font-medium">
                🚀 Join our early access programme to be amongst the first to experience these innovative solutions when they launch.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Our Products</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-2">
              Cutting-edge AI tools designed to transform your business intelligence
            </p>
            <p className="text-orange-600 font-medium">
              All products are currently in development - coming soon!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card text-center hover:scale-105"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-navy">{feature.title}</h3>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-semibold rounded-full border border-orange-200">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                  <p className="text-orange-800 text-sm font-medium">
                    🚧 Currently in development
                  </p>
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
            <Link href="/products" className="btn-secondary border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700">
              Learn More About Our Products
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
