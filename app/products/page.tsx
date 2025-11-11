"use client";

import Layout from "@/components/Layout";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaBrain, FaChartLine, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function Products() {
  const products = [
    {
      icon: <FaBrain className="text-6xl text-blue-600" />,
      title: "AcronIQ Veritus",
      subtitle: "Intelligence With Purpose",
      description: "AcronIQ Veritus is powered by Polaris Intelligence Core (PIC), delivering strategic intelligence with purpose. Validate business ideas, analyze market fit, and receive actionable insights backed by advanced AI reasoning.",
      features: [
        "Powered by PIC (Polaris Intelligence Core)",
        "Business idea validation",
        "Market fit analysis", 
        "Strategic intelligence delivery",
        "Purpose-driven insights",
      ],
    },
    {
      icon: <FaChartLine className="text-6xl text-blue-600" />,
      title: "AcronIQ Signals",
      subtitle: "Market Intelligence & Trend Detection",
      description: "Stay ahead of the curve with AcronIQ Signals - an advanced early-warning system that detects emerging trends, market shifts, and opportunities before they become mainstream.",
      features: [
        "Real-time trend detection",
        "Market signal monitoring",
        "Predictive analytics",
        "Custom alert systems",
        "Industry insights",
      ],
    },
    {
      icon: <FaShieldAlt className="text-6xl text-blue-600" />,
      title: "AcronIQ Portal",
      subtitle: "Secure Client Workspace",
      description: "AcronIQ Portal is your centralized hub for collaboration and insights. Access all your research, reports, and analytics in one secure, intuitive platform designed for seamless workflow.",
      features: [
        "Secure data access",
        "Real-time collaboration",
        "Custom dashboards",
        "Report management",
        "API integration",
      ],
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful AI-driven tools designed to transform your business intelligence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="mb-6">{product.icon}</div>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-4xl font-bold text-navy">{product.title}</h2>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded-full border border-orange-200">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xl text-blue-600 mb-6">{product.subtitle}</p>
                  <p className="text-gray-600 text-lg mb-4">{product.description}</p>
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                    <p className="text-orange-800 font-medium">
                      🚧 This product is currently in development. Stay tuned for updates!
                    </p>
                  </div>
                  <Link href="/contact" className="btn-secondary inline-flex items-center group border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700">
                    Get Notified When Available
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="card bg-gradient-to-br from-gray-50 to-blue-50">
                    <h3 className="text-2xl font-bold text-navy mb-4">Key Features</h3>
                    <ul className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Interested in Early Access?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Our AI-powered products are currently in development. Contact us to join our early access programme and be the first to experience these innovative solutions.
            </p>
            <Link href="/contact" className="btn-secondary bg-white text-blue-600 border-white hover:bg-blue-50">
              Join Early Access Programme
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
