"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { useState } from "react";
import { FaBrain, FaChartLine, FaShieldAlt, FaRocket, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const features = [
    {
      icon: <FaBrain className="text-4xl text-blue-600" />,
      title: "TrueNorth",
      description: "AI-powered strategic intelligence that clarifies your path forward with precision and confidence.",
      status: "Coming Soon"
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-600" />,
      title: "AcronIQ Signals",
      description: "Advanced market intelligence that detects opportunities and risks before they become obvious.",
      status: "Coming Soon"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "NexusOne Portal",
      description: "Secure collaboration workspace designed for strategic decision-makers and their teams.",
      status: "Coming Soon"
    },
  ];

  return (
    <Layout>
      <EarlyAccessModal open={showModal} onClose={() => setShowModal(false)} />
      
      {/* HERO SECTION - Original Design */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white"
        style={{ backgroundColor: '#111827', minHeight: '100vh' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Transforming Ideas into{" "}
            <span className="text-blue-400">
              Intelligent Solutions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
            Strategic clarity in hours — not weeks. No guesswork, no consultancy overhead.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
            We provide AI-driven insight and research to empower businesses and drive innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              <FaRocket className="inline mr-2" />
              Join Early Access
            </button>
            <Link 
              href="/contact" 
              className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>


      {/* PRODUCTS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Intelligent solutions designed for modern businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-lg shadow-md p-8 text-center"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {feature.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
