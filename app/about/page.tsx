"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaBullseye, FaLightbulb, FaUsers, FaRocket, FaFlag, FaGlobe, FaShieldAlt } from "react-icons/fa";

export default function About() {
  const timeline = [
    { year: "2024", event: "Founded with a vision", description: "AcronIQ Research was born from the idea of democratizing AI-powered intelligence", icon: <FaLightbulb className="text-blue-600" /> },
    { year: "2024", event: "TrueNorth Launch", description: "Introduced our flagship AI strategist to help businesses validate and refine their ideas", icon: <FaRocket className="text-blue-600" /> },
    { year: "2025", event: "Expanding Horizons", description: "Launched AcronIQ Signals and NexusOne Portal to complete our intelligence suite", icon: <FaFlag className="text-blue-600" /> },
    { year: "Future", event: "Global Impact", description: "Scaling our solutions to empower businesses worldwide", icon: <FaGlobe className="text-blue-600" /> },
  ];

  const tools = [
    {
      icon: <FaBullseye className="text-5xl text-blue-600" />,
      title: "TrueNorth",
      description: "AI-powered strategist that validates business ideas and provides actionable insights for growth.",
    },
    {
      icon: <FaLightbulb className="text-5xl text-blue-600" />,
      title: "AcronIQ Signals",
      description: "Advanced trend detection and early-warning system for market intelligence.",
    },
    {
      icon: <FaUsers className="text-5xl text-blue-600" />,
      title: "NexusOne Portal",
      description: "Secure collaborative workspace for clients to access insights and manage projects.",
    },
  ];

  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About AcronIQ</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are pioneering the future of AI-driven intelligence and research
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg mb-4">
                At AcronIQ Research, we believe that every great idea deserves the power of intelligent insight. Our mission is to transform the way businesses approach strategy, market intelligence, and decision-making through cutting-edge AI technology.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                We combine advanced artificial intelligence with deep research expertise to deliver actionable insights that drive real business outcomes. From validating strategic decisions to detecting emerging market trends, we empower our clients to stay ahead of the curve.
              </p>
              <p className="text-gray-600 text-lg mb-4">
                Our commitment is to make sophisticated AI-powered research accessible, practical, and transformative for businesses of all sizes.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                <p className="text-blue-800 font-semibold flex items-center">
                  <FaShieldAlt className="mr-2" />
                  Ethical AI & Data Responsibility
                </p>
                <p className="text-blue-700 text-sm mt-1">
                  We prioritise transparency, privacy, and responsible AI practices in all our solutions, ensuring your data remains secure whilst delivering actionable insights.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="/images/mission.jpg" 
                alt="Our Mission - AI-powered intelligence network" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Our Tools</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A comprehensive suite of AI-powered solutions designed for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="card text-center"
              >
                <div className="flex justify-center mb-4">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-navy mb-3">{tool.title}</h3>
                <p className="text-gray-600">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-navy mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From vision to reality - the AcronIQ story
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className="card">
                    <span className="text-blue-600 font-bold text-xl">{item.year}</span>
                    <h3 className="text-2xl font-bold text-navy mt-2 mb-3">{item.event}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex w-2/12 justify-center">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.3 }}
                    className="w-12 h-12 bg-white rounded-full border-4 border-blue-600 shadow-lg z-10 flex items-center justify-center"
                  >
                    {item.icon}
                  </motion.div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
