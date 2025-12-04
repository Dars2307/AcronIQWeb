"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaRocket, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 text-white rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center z-50 group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaTimes className="text-2xl" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <FaComments className="text-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Pulse animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20"></span>
        )}
      </motion.button>

      {/* Help Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-28 right-8 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-50"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
              <h3 className="text-xl font-bold mb-2">How can we help?</h3>
              <p className="text-blue-100 text-sm">Get in touch with our team</p>
            </div>

            {/* Menu Items */}
            <div className="p-4 space-y-2">
              <Link
                href="/early-access"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FaRocket className="text-blue-600 text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Join Early Access</div>
                  <div className="text-sm text-gray-500">Get exclusive access</div>
                </div>
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <FaEnvelope className="text-green-600 text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Contact Us</div>
                  <div className="text-sm text-gray-500">Send us a message</div>
                </div>
              </Link>

              <a
                href="https://www.linkedin.com/company/acroniq"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FaLinkedin className="text-blue-700 text-xl" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Follow Us</div>
                  <div className="text-sm text-gray-500">Connect on LinkedIn</div>
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-4 text-center">
              <p className="text-xs text-gray-500">
                Available Monday - Friday, 9am - 5pm GMT
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
