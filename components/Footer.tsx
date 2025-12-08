import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaRocket, FaShieldAlt, FaBrain } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0F1011] text-[#E6E7E8] py-20 border-t border-[#2B2D2E] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"24px 24px"}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center mb-8 group">
              <div className="w-12 h-12 bg-[#C28B4A] rounded-sm flex items-center justify-center mr-4 group-hover:opacity-90 transition-opacity">
                <FaBrain className="text-2xl text-[#111213]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#E6E7E8]">AcronIQ Research</h3>
                <p className="text-xs text-[#C28B4A] font-mono tracking-wider uppercase">Strategic Intelligence Organisation</p>
              </div>
            </Link>
            
            <p className="text-[#B5B7BB] text-lg mb-6 max-w-md leading-relaxed">
              We're currently focused on Veritus, our strategic intelligence engine for high-stakes decision-making. Additional platforms planned for 2026.
            </p>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-2 h-2 bg-[#C28B4A] rounded-full animate-pulse"></div>
              <p className="text-[#B5B7BB] text-sm">
                Private Beta Programme Active
              </p>
            </div>
            
            <p className="text-[#B5B7BB] text-sm">
              🏴󠁧󠁢󠁳󠁣󠁴󠁿 Founded in Edinburgh · Built for the era of AI
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#C28B4A] flex items-center">
              <FaShieldAlt className="mr-2" />
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/veritus" className="text-[#B5B7BB] hover:text-[#C28B4A] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#C28B4A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Veritus Platform
                </Link>
              </li>
              <li>
                <Link href="/veritus/pricing" className="text-[#B5B7BB] hover:text-[#C28B4A] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#C28B4A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#B5B7BB] hover:text-[#C28B4A] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#C28B4A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About AcronIQ
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-[#B5B7BB] hover:text-[#C28B4A] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#C28B4A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Strategic Insights
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-[#B5B7BB] hover:text-[#C28B4A] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#C28B4A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Product Roadmap
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#B5B7BB] hover:text-[#C28B4A] transition-colors flex items-center group">
                  <span className="w-1 h-1 bg-[#C28B4A] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Beta Access */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-[#C28B4A] flex items-center">
              <FaRocket className="mr-2" />
              Connect
            </h3>
            <div className="space-y-4">
              <Link 
                href="/veritus" 
                className="block bg-[#C28B4A] text-[#111213] px-4 py-3 rounded-sm font-semibold hover:opacity-90 transition-opacity text-center"
              >
                Request Private Beta Access
              </Link>
              
              <div className="pt-4 border-t border-[#2B2D2E]">
                <p className="text-[#B5B7BB] text-sm mb-3">Follow our journey</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/acroniq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#151617] border border-[#2B2D2E] rounded-sm flex items-center justify-center text-[#B5B7BB] hover:text-[#C28B4A] hover:border-[#C28B4A] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2B2D2E] mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-[#B5B7BB] text-sm mb-2">
                © 2025 AcronIQ Research. All rights reserved.
              </p>
              <p className="text-[#B5B7BB] text-sm">
                Strategic Intelligence Organisation · Veritus Private Beta Programme
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/legal/privacy" className="text-[#B5B7BB] hover:text-[#C28B4A] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-[#B5B7BB] hover:text-[#C28B4A] text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
