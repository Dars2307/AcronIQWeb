"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import Link from "next/link";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { motion } from "framer-motion";
import { 
  FaBrain, 
  FaChartLine, 
  FaShieldAlt, 
  FaArrowRight, 
  FaCheckCircle, 
  FaQuoteLeft,
  FaLightbulb,
  FaExclamationTriangle,
  FaChartBar
} from "react-icons/fa";

export default function Products() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Power in Clarity. Leadership Through Foresight.
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              In a world where leaders face complexity faster than clarity, AcronIQ gives them time back, with decisions made before uncertainty hits.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Our tools and advisory services provide strategic intelligence powered by AI, built to help you think further ahead.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowEarlyAccess(true)}
                className="px-8 py-4 bg-white text-navy font-bold text-lg rounded-lg hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Request Early Access
              </button>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-all duration-300"
              >
                Book an Advisory Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product 1: Strategic Intelligence Advisory */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden"
          >
            <div className="bg-blue-600 text-white px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Flagship Service</span>
                <span className="px-4 py-1 bg-white text-blue-600 font-semibold rounded-full text-sm">
                  Available Now
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
              <div>
                <FaBrain className="text-6xl text-blue-600 mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-4">Strategic Intelligence Advisory</h2>
                <p className="text-2xl text-blue-600 font-semibold mb-6">
                  For leaders who need clarity before decisions, not after the consequences.
                </p>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-blue-600">
                  <h3 className="text-xl font-bold text-navy mb-4">What You'll Gain</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaExclamationTriangle className="text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Identify unseen risks</strong> before they become costly mistakes</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Validate strategic choices</strong> before executing</span>
                    </li>
                    <li className="flex items-start">
                      <FaLightbulb className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700"><strong>Receive tailored insights,</strong> not generic AI output</span>
                    </li>
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Book an Advisory Consultation
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div>
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <FaChartBar className="text-blue-600 mr-2" />
                    Sample Deliverable
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                      <p className="font-semibold text-gray-900 mb-2">📊 Risk Heatmap</p>
                      <p className="text-gray-700 text-sm">
                        "Impact of entering Market B vs scaling in Market A"
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                      <p className="font-semibold text-gray-900 mb-2">🧠 Executive Summary</p>
                      <p className="text-gray-700 text-sm">
                        Decision bias detection and emotional influence factors
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border-l-4 border-green-500">
                      <p className="font-semibold text-gray-900 mb-2">📍 Strategic Recommendation</p>
                      <p className="text-gray-700 text-sm">
                        Actionable next steps with confidence scoring
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <FaQuoteLeft className="text-blue-600 text-2xl mb-3" />
                  <p className="text-gray-700 italic mb-3">
                    "AcronIQ's advisory helped us see the blind spots in our expansion strategy. We avoided a £2M mistake."
                  </p>
                  <p className="text-gray-600 font-semibold">— Founder, Series A SaaS</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product 2: AcronIQ Signals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">AI Dashboard</span>
                <span className="px-4 py-1 bg-white text-orange-600 font-semibold rounded-full text-sm">
                  Coming Q2 2026
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
              <div>
                <FaChartLine className="text-6xl text-orange-600 mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-4">AcronIQ Signals</h2>
                <p className="text-2xl text-orange-600 font-semibold mb-6">
                  "Spot shifts before competitors do."
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  AI dashboard that tracks unfolding change in real-time. Stay ahead with intelligence that surfaces market shifts before they become mainstream.
                </p>

                <div className="bg-gradient-to-br from-orange-50 to-white rounded-xl shadow-lg p-6 mb-8 border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold text-navy mb-4">Key Capabilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Trend detection across economic, tech, political factors</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Automated insight alerts with confidence scoring</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Scenario-based forward projections</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => setShowEarlyAccess(true)}
                  className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-bold text-lg rounded-lg hover:bg-orange-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Get Early Signals Alerts
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-orange-50 to-gray-50 rounded-xl p-8 border-2 border-orange-200 w-full">
                  <div className="text-center mb-6">
                    <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                      <FaChartLine className="text-5xl text-orange-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">Real-Time Intelligence</h3>
                    <p className="text-gray-600">Dashboard preview coming soon</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Market Signal</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded">High</span>
                      </div>
                      <p className="text-sm text-gray-600">Emerging trend detected in sector X</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Risk Alert</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs font-bold rounded">Medium</span>
                      </div>
                      <p className="text-sm text-gray-600">Regulatory shift in progress</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-900">Opportunity</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded">Emerging</span>
                      </div>
                      <p className="text-sm text-gray-600">New market opening detected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product 3: Decision Modelling Tools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-50 to-white rounded-2xl shadow-xl border-2 border-green-200 overflow-hidden"
          >
            <div className="bg-green-600 text-white px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Interactive Tools</span>
                <span className="px-4 py-1 bg-white text-green-600 font-semibold rounded-full text-sm">
                  Beta Access
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
                  <FaLightbulb className="text-6xl text-green-600 mb-6" />
                  <h2 className="text-4xl font-bold text-navy mb-4">Decision Modelling Tools</h2>
                  <p className="text-2xl text-green-600 font-semibold mb-6">
                    Interactive models for executives to "test-drive" strategic moves.
                  </p>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Explore scenarios, test assumptions, and quantify outcomes before committing resources. Make decisions with confidence, backed by data-driven simulations.
                  </p>

                  <button
                    onClick={() => setShowEarlyAccess(true)}
                    className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold text-lg rounded-lg hover:bg-green-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    Join Decision Tool Beta
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-navy mb-4">Use Cases & Outputs</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-2 text-gray-700 font-semibold">Use Case</th>
                          <th className="text-left py-3 px-2 text-gray-700 font-semibold">Output</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-2 text-gray-900 font-medium">Growth strategy validation</td>
                          <td className="py-3 px-2 text-gray-700">Scenario impact modelling</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2 text-gray-900 font-medium">Operational resilience</td>
                          <td className="py-3 px-2 text-gray-700">Failure event simulation</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2 text-gray-900 font-medium">Leadership bias detection</td>
                          <td className="py-3 px-2 text-gray-700">Cognitive influence score</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-start">
                  <FaCheckCircle className="text-green-600 text-2xl mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-navy mb-2">Beta Program Benefits</h4>
                    <p className="text-gray-700 mb-3">
                      Early access users get priority support, influence tool development, and exclusive pricing when we launch publicly.
                    </p>
                    <p className="text-green-700 font-semibold">
                      Limited spots available — join now to secure your place.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product 4: AcronIQ Portal */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-8 py-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">Intelligence Hub</span>
                <span className="px-4 py-1 bg-white text-gray-700 font-semibold rounded-full text-sm">
                  Q3 2026
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-8 lg:p-12">
              <div>
                <FaShieldAlt className="text-6xl text-gray-700 mb-6" />
                <h2 className="text-4xl font-bold text-navy mb-4">AcronIQ Portal</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  Internal ops + client intelligence embedded into daily decisions.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Currently internal-only. A unified workspace where strategic intelligence meets operational execution. Access reports, collaborate with your team, and track decision outcomes — all in one secure platform.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8 border-l-4 border-gray-700">
                  <h3 className="text-lg font-bold text-navy mb-3">What's Inside</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      Centralized intelligence repository
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      Real-time team collaboration
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      Custom dashboards and reporting
                    </li>
                    <li className="flex items-start">
                      <span className="text-gray-400 mr-2">•</span>
                      Decision tracking and outcomes analysis
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mb-6">
                  <p className="text-blue-900 font-semibold mb-2">🎯 Pre-Release Pilot Access</p>
                  <p className="text-gray-700">
                    We're selecting a small group of organizations for pilot access before public release. Express interest to be considered.
                  </p>
                </div>

                <button
                  onClick={() => setShowEarlyAccess(true)}
                  className="w-full lg:w-auto inline-flex items-center justify-center px-8 py-4 bg-gray-700 text-white font-bold text-lg rounded-lg hover:bg-gray-800 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  Request Pilot Access
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 border-2 border-gray-200 w-full">
                  <div className="text-center mb-6">
                    <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                      <FaShieldAlt className="text-5xl text-gray-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-navy mb-2">Unified Workspace</h3>
                    <p className="text-gray-600">External release roadmap Q3 2026</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                    <p className="text-gray-700 mb-4">
                      <strong>Currently in use internally</strong> to manage client deliverables, research workflows, and strategic intelligence operations.
                    </p>
                    <p className="text-gray-600 text-sm">
                      We're refining the platform based on real-world usage before opening to external organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Lead with Foresight?</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Join leaders who make decisions before uncertainty hits. Get early access to intelligence tools that transform complexity into clarity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={() => setShowEarlyAccess(true)}
                className="px-10 py-5 bg-white text-navy font-bold text-xl rounded-lg hover:bg-blue-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Request Early Access
              </button>
              <Link
                href="/contact"
                className="px-10 py-5 bg-transparent text-white font-bold text-xl rounded-lg border-2 border-white hover:bg-white hover:text-navy transition-all duration-300"
              >
                Book Advisory Call
              </Link>
            </div>
            
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
