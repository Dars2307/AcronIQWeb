"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

interface AdminAuthProps {
  children: React.ReactNode;
}

export default function AdminAuth({ children }: AdminAuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessKey, setAccessKey] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Check if already authenticated on mount
  useEffect(() => {
    const authStatus = localStorage.getItem("admin_authenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessKey }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        localStorage.setItem("admin_authenticated", "true");
      } else {
        setError(data.error || "Authentication failed");
      }
    } catch (error) {
      setError("Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("admin_authenticated");
    setAccessKey("");
  };

  if (isAuthenticated) {
    return (
      <div>
        {/* Logout Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-sm text-sm font-medium transition-colors"
          >
            Logout
          </button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#111213] flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"32px 32px"}} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-md w-full mx-4"
      >
        <div className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#C28B4A] rounded-sm flex items-center justify-center mx-auto mb-4">
              <FaLock className="text-2xl text-[#111213]" />
            </div>
            <h1 className="text-2xl font-semibold text-[#E6E7E8] mb-2">
              AcronIQ CMS Access
            </h1>
            <p className="text-[#B5B7BB] text-sm">
              Enter your access key to manage content
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="accessKey" className="block text-sm font-medium text-[#E6E7E8] mb-2">
                Access Key
              </label>
              <div className="relative">
                <input
                  id="accessKey"
                  type={showPassword ? "text" : "password"}
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  className="w-full px-4 py-3 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] placeholder-[#B5B7BB] focus:outline-none focus:border-[#C28B4A] transition-colors"
                  placeholder="Enter your access key"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#B5B7BB] hover:text-[#E6E7E8] transition-colors"
                >
                  {showPassword ? (
                    <FaEyeSlash className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-sm p-3">
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !accessKey.trim()}
              className="w-full bg-[#C28B4A] text-[#111213] py-3 px-4 rounded-sm font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#111213] mr-2"></div>
                  Authenticating...
                </div>
              ) : (
                "Access CMS"
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-[#2B2D2E]">
            <p className="text-xs text-[#B5B7BB] text-center">
              AcronIQ Research · Strategic Intelligence Organisation
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
