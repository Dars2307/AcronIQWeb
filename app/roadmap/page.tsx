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
      timeline: "Q4 2025 (Active)"
    },
    {
      phase: "Phase 2: Veritus General Availability", 
      status: "Upcoming",
      statusColor: "bg-orange-500",
      focus: "Public launch of strategic intelligence platform",
      description: "Full market launch of Veritus with 24-48 hour strategic analysis, executive decision support, and board-level presentations. Pricing from £199-£2,499.",
      icon: <FaCog className="text-3xl text-orange-400" />,
      timeline: "Q3 2026"
    },
    {
      phase: "Phase 3: Advanced Analytics Features",
      status: "Planned", 
      statusColor: "bg-blue-500",
      focus: "Enhanced intelligence capabilities",
      description: "Advanced scenario modeling, real-time competitive intelligence, and enhanced AI reasoning capabilities for complex strategic challenges.",
      icon: <FaChartLine className="text-3xl text-blue-400" />,
      timeline: "Q4 2026"
    },
    {
      phase: "Phase 4: Market Intelligence Platform",
      status: "Future (2027)",
      statusColor: "bg-gray-500", 
      focus: "Signal detection & trend forecasting",
      description: "Dedicated platform for market intelligence dashboards and early-warning systems that surface emerging signals before they mainstream.",
      icon: <FaNetworkWired className="text-3xl text-gray-400" />,
      timeline: "2027"
    },
    {
      phase: "Phase 5: Secure Collaboration Tools",
      status: "Future (2027+)",
      statusColor: "bg-gray-500",
      focus: "Executive workspace & collaboration", 
      description: "Secure client workspace for strategic collaboration, document management, and decision workflows designed for executive teams.",
      icon: <FaShieldAlt className="text-3xl text-gray-400" />,
      timeline: "2027+"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 bg-[#111213] text-[#E6E7E8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"32px 32px"}} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono tracking-[0.2em] text-xs text-[#C28B4A] mb-6 uppercase"
            >
              Strategic Development
            </motion.p>
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight">
              Product Roadmap
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#B5B7BB] max-w-3xl mx-auto mb-4"
            >
              Our focused approach to building the AcronIQ suite with surgical precision.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-[#B5B7BB] max-w-3xl mx-auto"
            >
              Each phase strengthens our strategic intelligence foundation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Table */}
      <section className="py-20 bg-[#0F1011] border-t border-[#2B2D2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Table */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#151617] rounded-sm border border-[#2B2D2E] overflow-hidden"
            >
              <div className="bg-[#111213] text-[#E6E7E8] border-b border-[#2B2D2E]">
                <div className="grid grid-cols-5 gap-4 p-6 font-semibold">
                  <div className="text-[#C28B4A]">Phase</div>
                  <div className="text-[#C28B4A]">Status</div>
                  <div className="text-[#C28B4A]">Focus</div>
                  <div className="text-[#C28B4A]">Description</div>
                  <div className="text-[#C28B4A]">Timeline</div>
                </div>
              </div>
              
              <div className="divide-y divide-[#2B2D2E]">
                {phases.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="grid grid-cols-5 gap-4 p-6 hover:bg-[#1a1b1c] transition-colors text-[#E6E7E8]"
                  >
                    <div className="font-semibold text-[#E6E7E8]">{phase.phase}</div>
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${phase.statusColor}`}>
                        {phase.status}
                      </span>
                    </div>
                    <div className="text-[#B5B7BB] font-medium">{phase.focus}</div>
                    <div className="text-[#B5B7BB]">{phase.description}</div>
                    <div className="text-[#C28B4A] font-mono text-sm">{phase.timeline}</div>
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
