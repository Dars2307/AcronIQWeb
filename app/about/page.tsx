"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaBrain } from "react-icons/fa";

export default function About() {
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
              About AcronIQ
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Mission</h2>
            <div className="prose prose-lg mx-auto text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                AcronIQ is an intelligence research organisation focused on developing systems that enhance strategic decision-making.
              </p>
              <p className="text-lg">
                We build tools that allow individuals and organisations to see clearly, think precisely, and act with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Founder</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden max-w-4xl mx-auto"
          >
            <div className="bg-gray-900 text-white p-8">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaBrain className="text-3xl text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Joel "Nickron" Ogunniyi</h3>
                  <p className="text-blue-400 text-lg font-medium mb-1">Founder & Research Lead</p>
                  <p className="text-gray-400">AcronIQ Research (United Kingdom)</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="prose prose-lg text-gray-700 leading-relaxed mb-6">
                <p>
                  Joel leads AcronIQ's research direction and system architecture. His work focuses on applied intelligence: 
                  combining structured analysis, market insight, and AI-driven modelling to produce clear, actionable strategy outputs.
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-500 font-medium">Connect:</span>
                <div className="flex space-x-3">
                  <div className="flex items-center text-gray-400">
                    <FaLinkedin className="mr-2" />
                    <span className="text-sm">LinkedIn: Available when ready</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gray-900 text-white rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold mb-4">Team Expansion</h3>
              <p className="text-gray-400 leading-relaxed">
                More team profiles will be added as AcronIQ expands. We are building a focused team of researchers, 
                analysts, and engineers committed to advancing strategic intelligence capabilities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
