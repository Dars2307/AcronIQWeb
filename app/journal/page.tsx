"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaChartLine, FaCog } from "react-icons/fa";

export default function Journal() {
  const entries = [
    {
      date: "Coming Soon",
      focus: "Why Emotional Intelligence Matters in AI Advisory",
      icon: <FaCode className="text-2xl text-blue-400" />,
      summary: "Exploring the intersection of human insight and artificial intelligence in strategic decision-making.",
      details: [
        "How emotional intelligence enhances AI-driven advisory",
        "The role of trust and empathy in high-stakes decisions",
        "Building intelligence systems that resonate with human needs",
        "Case studies: When data alone isn't enough"
      ],
      next: []
    },
    {
      date: "Coming Soon",
      focus: "Navigating Complexity: A Framework for Founders",
      icon: <FaDatabase className="text-2xl text-green-400" />,
      summary: "How to transform uncertainty into actionable strategy using intelligence-driven approaches.",
      details: [
        "Understanding complexity vs. complication in business",
        "Decision frameworks for high-uncertainty environments",
        "The role of strategic intelligence in founder journeys",
        "Tools and methodologies for clarity in chaos"
      ],
      next: []
    },
    {
      date: "Coming Soon",
      focus: "The Future of Strategic Intelligence",
      icon: <FaChartLine className="text-2xl text-purple-400" />,
      summary: "What modular AI tools mean for the next generation of business leaders.",
      details: [
        "Evolution from traditional consulting to AI-augmented advisory",
        "Modular intelligence: Building blocks for strategic advantage",
        "The democratization of high-quality strategic insights",
        "Preparing for the intelligence-first organization"
      ],
      next: []
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
              Insights & Research
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Thought leadership on AI, strategy, and the future of intelligence.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              Exploring the intersection of artificial intelligence, strategic decision-making, and the evolving landscape 
              of business intelligence. We share insights on navigating complexity, building with precision, and leading in the age of AI.
            </p>
            <p className="text-lg text-blue-400 font-medium mt-6">
              Clarity. Precision. Intelligence that resonates.
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
                key={entry.focus}
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
                    <p className="text-gray-700 text-lg mb-4 leading-relaxed">{entry.summary}</p>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Topics</h3>
                    <ul className="space-y-2">
                      {entry.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 font-medium text-center">
                      📝 Article in development — stay tuned for publication
                    </p>
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
              <h3 className="text-xl font-bold mb-2">More Insights Coming Soon</h3>
              <p className="text-gray-400 mb-4">
                We're developing thought leadership content on AI, strategy, and the future of intelligence.
              </p>
              <p className="text-blue-400 font-medium">
                Subscribe to our early access programme to be notified when new articles are published.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
