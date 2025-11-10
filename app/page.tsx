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
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500 to-blue-300 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-2xl opacity-30" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              🚀 Building the Future of Strategic Intelligence
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Strategic Intelligence for{" "}
            <span className="text-blue-600 relative">
              High-Stakes Decisions
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <FaRocket className="inline mr-2" />
              Request Strategic Briefing
            </button>
            <Link 
              href="/about" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 font-semibold text-lg transform hover:-translate-y-1"
            >
              Learn How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT STATUS */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-xl" />
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-indigo-400 rounded-full blur-lg" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-blue-100 backdrop-blur-sm">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Building the Future of Strategic Intelligence</h3>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                We're developing cutting-edge AI tools that transform how organisations approach strategic decision-making, 
                market intelligence, and operational clarity.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6 shadow-inner">
                <div className="flex items-center justify-center mb-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
                <p className="text-blue-800 font-medium text-lg">
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
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full border border-blue-200">
                    {feature.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
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
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg group transition-all duration-300 bg-blue-50 hover:bg-blue-100 px-6 py-3 rounded-lg"
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
