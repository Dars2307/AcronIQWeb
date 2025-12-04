"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/pricing", label: "Pricing" },
    { href: "/journal", label: "Journal" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg shadow-gray-200/50' : 'shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/AcronIQ-Primary-Logo.png" 
              alt="AcronIQ Research Logo" 
              width={120} 
              height={60}
              className="object-contain"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/early-access"
              className="btn-secondary border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700 relative"
            >
              Early Access
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/early-access"
              className="block mt-2 btn-secondary border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700 text-center"
            >
              Early Access
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
