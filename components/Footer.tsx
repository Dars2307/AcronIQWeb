import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/images/AcronIQ-Primary-Logo.png" 
                alt="AcronIQ Research Logo" 
                width={140} 
                height={70}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-300 text-lg mb-4 max-w-md">
              Strategic Intelligence & AI Advisory services for leaders who require precision and clarity in high-stakes decisions.
            </p>
            <p className="text-gray-400 text-sm">
              United Kingdom
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/journal" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Connect</h3>
            <div className="space-y-3">
              <Link 
                href="/early-access" 
                className="block text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Early Access Programme
              </Link>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.linkedin.com/company/acroniq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm mb-2">
                © 2025 AcronIQ Research. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm italic">
                AcronIQ Research · Founded in Edinburgh · Built for the era of AI
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/legal/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
