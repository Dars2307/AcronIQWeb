"use client";

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaTwitter, FaCheckCircle, FaExclamationTriangle, FaSpinner } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", message: "" });
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          setSubmitStatus(null);
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('Form submission error:', errorData);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className={`fixed top-20 right-4 z-50 px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 ${
            submitStatus === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}
        >
          {submitStatus === 'success' ? (
            <>
              <FaCheckCircle className="text-2xl" />
              <div>
                <div className="font-semibold">Message Sent Successfully!</div>
                <div className="text-sm opacity-90">We'll get back to you soon.</div>
              </div>
            </>
          ) : (
            <>
              <FaExclamationTriangle className="text-2xl" />
              <div>
                <div className="font-semibold">Failed to Send Message</div>
                <div className="text-sm opacity-90">Please try again or email us directly.</div>
              </div>
            </>
          )}
        </motion.div>
      )}

      <section className="py-20 bg-gradient-to-br from-navy to-navy-light text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have a question or ready to transform your business? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-navy mb-6">Contact Information</h2>
              <p className="text-gray-600 text-lg mb-8">
                Reach out to us through any of the following channels. Our team is ready to help you unlock the power of AI-driven intelligence.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a href="mailto:info@acroniq.co.uk" className="text-blue-600 hover:text-blue-700">
                      info@acroniq.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaLinkedin className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">LinkedIn</h3>
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      @AcronIQResearch
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaTwitter className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Twitter</h3>
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      @AcronIQ
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <h3 className="text-xl font-bold text-navy mb-3">Office Hours</h3>
                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM GMT</p>
                <p className="text-gray-700">Weekend: By appointment</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="card">
                <h2 className="text-3xl font-bold text-navy mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                      placeholder="Tell us about your project, goals, or how we can help transform your business..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <FaSpinner className="animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
