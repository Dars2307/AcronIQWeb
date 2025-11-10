import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image 
                src="/images/original/Acron first logo transparent.png" 
                alt="AcronIQ Research Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
              <span className="font-bold text-xl">AcronIQ Research</span>
            </Link>
            <p className="text-gray-300">
              Transforming Ideas into Intelligent Solutions
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
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
                <Link href="/early-access" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Early Access
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/legal/privacy" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-gray-300 hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
            <p className="text-gray-300 mt-4">
              <a href="mailto:info@acroniq.co.uk" className="hover:text-blue-400">
                info@acroniq.co.uk
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2025 AcronIQ Research. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
