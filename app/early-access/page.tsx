"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaRocket, FaUsers, FaChartLine, FaCheckCircle } from "react-icons/fa";

export default function EarlyAccess() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    role: "",
    sector: "",
    decisions: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    {
      icon: <FaRocket className="text-2xl text-blue-400" />,
      title: "Priority Access to Beta Products",
      description: "Be amongst the first to experience TrueNorth and other AcronIQ intelligence tools."
    },
    {
      icon: <FaChartLine className="text-2xl text-green-400" />,
      title: "Strategic Research Updates",
      description: "Receive insights from our development journal and market intelligence findings."
    },
    {
      icon: <FaUsers className="text-2xl text-purple-400" />,
      title: "Influence Product Direction",
      description: "Your feedback shapes our roadmap and feature development priorities."
    }
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <FaCheckCircle className="text-6xl text-green-400 mx-auto mb-8" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Request Recorded
              </h1>
              <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-300 mb-4">
                Thank you. Your request has been recorded.
              </p>
              <p className="text-lg text-gray-400">
                We will contact you when your early access position is reached.
              </p>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Early Access to TrueNorth
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              For founders, operators, investors, analysts, planners, and strategists.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              TrueNorth is currently in private development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Joining the Waitlist Grants
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="bg-gray-900 text-white p-8">
              <h2 className="text-2xl font-bold text-center">Request Early Access</h2>
            </div>
            
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="role" className="block text-sm font-semibold text-gray-700 mb-2">
                    Role *
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select your role</option>
                    <option value="founder">Founder</option>
                    <option value="analyst">Analyst</option>
                    <option value="investor">Investor</option>
                    <option value="operator">Operator</option>
                    <option value="strategist">Strategist</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="sector" className="block text-sm font-semibold text-gray-700 mb-2">
                    Sector / Industry *
                  </label>
                  <input
                    type="text"
                    id="sector"
                    name="sector"
                    required
                    value={formData.sector}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="e.g., FinTech, Healthcare, SaaS"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="decisions" className="block text-sm font-semibold text-gray-700 mb-2">
                  What decisions do you need clearer insight on? *
                </label>
                <textarea
                  id="decisions"
                  name="decisions"
                  required
                  rows={4}
                  value={formData.decisions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                  placeholder="Describe the strategic decisions, market analysis, or business validation challenges you face..."
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Request Early Access
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
