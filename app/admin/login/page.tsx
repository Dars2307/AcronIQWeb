"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLogin() {
  const [accessKey, setAccessKey] = useState("");
  const [showKey, setShowKey] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessKey }),
      });

      if (response.ok) {
        // Set admin session cookie
        document.cookie = `admin-session=${accessKey}; path=/; secure; samesite=strict`;
        router.push('/admin');
      } else {
        setError('Invalid access key');
      }
    } catch (error) {
      setError('Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111213] flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
           style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"32px 32px"}} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#C28B4A] rounded-sm flex items-center justify-center mx-auto mb-4">
              <FaLock className="w-8 h-8 text-[#111213]" />
            </div>
            <h1 className="text-2xl font-semibold text-[#E6E7E8] mb-2">Admin Access</h1>
            <p className="text-[#B5B7BB] text-sm">AcronIQ Content Management System</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
                Access Key
              </label>
              <div className="relative">
                <input
                  type={showKey ? "text" : "password"}
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  className="w-full px-4 py-3 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none pr-12"
                  placeholder="Enter admin access key"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#B5B7BB] hover:text-[#E6E7E8] transition-colors"
                >
                  {showKey ? <FaEyeSlash className="w-4 h-4" /> : <FaEye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-500/10 border border-red-500/20 rounded-sm p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C28B4A] text-[#111213] py-3 px-4 rounded-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Authenticating...' : 'Access CMS'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-[#B5B7BB]">
              Authorised personnel only
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
