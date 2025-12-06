"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes } from "react-icons/fa";
import ChatWidget from "./ChatWidget";

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

      {/* Chat Widget */}
      <AnimatePresence>{isOpen && <ChatWidget onClose={() => setIsOpen(false)} />}</AnimatePresence>
    </>
  );
}
