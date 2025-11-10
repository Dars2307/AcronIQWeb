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
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500 to-blue-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900">
            Strategic Intelligence for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              High-Stakes Decisions
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
            We analyse complex problems, remove what doesn't matter, and reveal clear paths forward — 
            helping leaders make confident decisions with precision and speed.
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            Professional strategic intelligence services powered by AI-driven analysis and structured thinking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              <FaRocket className="inline mr-2" />
              Request Strategic Briefing
            </button>
            <Link 
              href="/about" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Learn How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT STATUS */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Building the Future of Strategic Intelligence</h3>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                We're developing cutting-edge AI tools that transform how organisations approach strategic decision-making, 
                market intelligence, and operational clarity.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  🚀 Join our early access programme to be among the first to experience these innovative solutions when they launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Intelligence Tools</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-2">
              Professional-grade AI tools designed to enhance strategic decision-making
            </p>
            <p className="text-blue-600 font-medium">
              All products currently in development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-blue-800 text-sm font-medium">
                    🔧 Currently in development
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group"
            >
              Learn More About Our Products
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Strategic Intelligence?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our early access programme and be among the first to access these powerful strategic intelligence tools.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors duration-300 font-semibold text-lg shadow-lg"
          >
            Join Early Access Programme
          </button>
        </div>
      </section>
    </Layout>
  );
}
