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
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg shadow-gray-200/50' : 'shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/original/Acron first logo transparent.png" 
              alt="AcronIQ Research Logo" 
              width={48} 
              height={48}
              className="object-contain"
            />
            <span className="font-bold text-xl text-navy">AcronIQ</span>
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
            <a
              href="https://portal.acroniq.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Access Portal
            </a>
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
            <a
              href="https://portal.acroniq.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 btn-primary text-center"
            >
              Access Portal
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
