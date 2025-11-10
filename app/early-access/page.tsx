"use client";

import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { useState } from "react";

export default function EarlyAccess() {
  const [showModal, setShowModal] = useState(true);

  const benefits = [
    {
      title: "Priority Access to Beta Products",
      description: "Be amongst the first to experience TrueNorth and other AcronIQ intelligence tools."
    },
    {
      title: "Strategic Research Updates", 
      description: "Receive insights from our development journal and market intelligence findings."
    },
    {
      title: "Influence Product Direction",
      description: "Your feedback shapes our roadmap and feature development priorities."
    }
  ];

  return (
    <Layout>
      <EarlyAccessModal open={showModal} onClose={() => setShowModal(false)} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500 to-blue-300 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
            Early Access to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              TrueNorth
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
            For founders, operators, investors, analysts, planners, and strategists.
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            TrueNorth is currently in private development. Joining the waitlist grants priority access 
            to beta products, strategic research updates, and the opportunity to influence product direction.
          </p>

          <button 
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Request Strategic Briefing
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Joining the Waitlist Grants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
            Join the Waitlist
          </button>
        </div>
      </section>
    </Layout>
  );
}
