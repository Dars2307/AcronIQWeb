"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaChartLine, FaCog } from "react-icons/fa";

export default function Journal() {
  const entries = [
    {
      date: "10 November 2025",
      focus: "AcronIQ Veritus Core Engine",
      icon: <FaCode className="text-2xl text-blue-400" />,
      summary: "We finalised the baseline research pipeline structure:",
      details: [
        "Supabase schema architecture confirmed",
        "First prompt iteration and validation testing underway", 
        "Extracted early model behaviour patterns to refine scoring logic"
      ],
      next: [
        "Implement report formatting layer",
        "Begin preliminary accuracy benchmarking against manual research sets"
      ]
    },
    {
      date: "3 November 2025",
      focus: "System Architecture Planning",
      icon: <FaDatabase className="text-2xl text-green-400" />,
      summary: "Completed foundational infrastructure decisions:",
      details: [
        "Selected Next.js with TypeScript for frontend reliability",
        "Confirmed Supabase for data layer and authentication",
        "Established development workflow and version control standards"
      ],
      next: [
        "Begin AcronIQ Veritus core engine development",
        "Design initial database schema for research workflows"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AcronIQ Development Journal
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              AcronIQ is under active development. We build transparently.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              This journal documents our strategic decisions, research progress, and system architecture milestones 
              as we shape the intelligence infrastructure behind AcronIQ Veritus and the AcronIQ ecosystem.
            </p>
            <p className="text-lg text-blue-400 font-medium mt-6">
              Expect clarity. Expect detail. Expect precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {entries.map((entry, index) => (
              <motion.article
                key={entry.date}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-gray-900 text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {entry.icon}
                      <div>
                        <h2 className="text-2xl font-bold">{entry.focus}</h2>
                        <p className="text-gray-400 text-sm font-mono">{entry.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Summary</h3>
                    <p className="text-gray-700 mb-4">{entry.summary}</p>
                    <ul className="space-y-2">
                      {entry.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Next</h3>
                    <ul className="space-y-2">
                      {entry.next.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <FaCog className="text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Development Continues</h3>
              <p className="text-gray-400">
                New entries published weekly. Follow our progress as we build the future of strategic intelligence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
