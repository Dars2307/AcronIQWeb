"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaCog, FaRocket, FaShieldAlt, FaChartLine, FaNetworkWired } from "react-icons/fa";

export default function Roadmap() {
  const phases = [
    {
      phase: "Phase 1: Veritus Private Beta Programme",
      status: "Active",
      statusColor: "bg-[#C28B4A]",
      focus: "Strategic intelligence engine with select partners",
      description: "Building Veritus with C-suite executives and strategic decision-makers. Private beta participants get preferential pricing, priority support, and influence on product development.",
      icon: <FaRocket className="text-3xl text-[#C28B4A]" />,
      timeline: "Q1 2025 (Active)"
    },
    {
      phase: "Phase 2: Veritus General Availability", 
      status: "Upcoming",
      statusColor: "bg-orange-500",
      focus: "Public launch of strategic intelligence platform",
      description: "Full market launch of Veritus with 24-48 hour strategic analysis, executive decision support, and board-level presentations. Pricing from £199-£2,499.",
      icon: <FaCog className="text-3xl text-orange-400" />,
      timeline: "Q2 2025"
    },
    {
      phase: "Phase 3: Advanced Analytics Features",
      status: "Planned", 
      statusColor: "bg-blue-500",
      focus: "Enhanced intelligence capabilities",
      description: "Advanced scenario modeling, real-time competitive intelligence, and enhanced AI reasoning capabilities for complex strategic challenges.",
      icon: <FaChartLine className="text-3xl text-blue-400" />,
      timeline: "Q3 2025"
    },
    {
      phase: "Phase 4: Market Intelligence Platform",
      status: "Future (2026)",
      statusColor: "bg-gray-500", 
      focus: "Signal detection & trend forecasting",
      description: "Dedicated platform for market intelligence dashboards and early-warning systems that surface emerging signals before they mainstream.",
      icon: <FaNetworkWired className="text-3xl text-gray-400" />,
      timeline: "2026"
    },
    {
      phase: "Phase 5: Secure Collaboration Tools",
      status: "Future (2026)",
      statusColor: "bg-gray-500",
      focus: "Executive workspace & collaboration", 
      description: "Secure client workspace for strategic collaboration, document management, and decision workflows designed for executive teams.",
      icon: <FaNetworkWired className="text-3xl text-gray-400" />,
      timeline: "2027+"
    }
  ];

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
              Product Roadmap
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4">
              AcronIQ builds in defined strategic phases.
            </p>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-4">
              Each phase strengthens our intelligence foundation and expands our capability to deliver actionable insight at scale.
            </p>
            <p className="text-lg text-blue-400 font-medium">
              This roadmap is transparent and may evolve based on research outcomes and market learning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
            >
              <div className="bg-gray-900 text-white">
                <div className="grid grid-cols-5 gap-4 p-6 font-semibold">
                  <div>Phase</div>
                  <div>Status</div>
                  <div>Focus</div>
                  <div>Description</div>
                  <div>Timeline</div>
                </div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-5 gap-4 p-6 hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-semibold text-gray-900">{phase.phase}</div>
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${phase.statusColor}`}>
                        {phase.status}
                      </span>
                    </div>
                    <div className="text-gray-700 font-medium">{phase.focus}</div>
                    <div className="text-gray-600">{phase.description}</div>
                    <div className="text-gray-500 font-mono text-sm">{phase.timeline}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Mobile Cards */}
          <div className="lg:hidden space-y-6">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
              >
                <div className="bg-gray-900 text-white p-4">
                  <div className="flex items-center space-x-3">
                    {phase.icon}
                    <div>
                      <h3 className="font-bold text-lg">{phase.phase}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${phase.statusColor}`}>
                          {phase.status}
                        </span>
                        <span className="text-gray-400 text-sm font-mono">{phase.timeline}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Focus</span>
                    <p className="text-gray-900 font-medium">{phase.focus}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Description</span>
                    <p className="text-gray-700">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Evolution Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-900 text-white rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Strategic Evolution</h3>
              <p className="text-gray-400 leading-relaxed">
                This roadmap reflects our current strategic direction. Phases may be adjusted based on research outcomes, 
                market feedback, and technological developments. We maintain transparency in our decision-making process 
                through our development journal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
