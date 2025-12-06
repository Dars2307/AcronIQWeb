"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import EarlyAccessModal from "./EarlyAccessModal";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/journal", label: "Journal" },
    { href: "/roadmap", label: "Roadmap" },
    { href: "/contact", label: "Contact" },
  ];

  // Close dropdown when clicking outside
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest('.products-dropdown-container')) {
      setShowProductsDropdown(false);
    }
  };

  useState(() => {
    if (showProductsDropdown) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  });

  return (
    <>
      <EarlyAccessModal open={showModal} onClose={() => setShowModal(false)} />
      <header className="w-full bg-[#111213] border-b border-[#2B2D2E] sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/AcronIQ-Primary-Logo.png"
                alt="AcronIQ Research Logo"
                width={180}
                height={50}
                className="object-contain max-h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#E6E7E8] hover:text-[#C28B4A] font-medium transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Products Dropdown */}
              <div 
                className="relative products-dropdown-container"
                onMouseEnter={() => setShowProductsDropdown(true)}
                onMouseLeave={() => setShowProductsDropdown(false)}
              >
                <button 
                  onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                  className="flex items-center gap-1 text-[#E6E7E8] hover:text-[#C28B4A] font-medium transition-colors duration-200"
                >
                  Products
                  <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${showProductsDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {showProductsDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#151617] rounded-sm shadow-xl border border-[#2B2D2E] py-2 z-50">
                    <Link
                      href="/products"
                      onClick={() => setShowProductsDropdown(false)}
                      className="block px-4 py-3 text-[#E6E7E8] hover:bg-[#2B2D2E] hover:text-[#C28B4A] transition-colors duration-200"
                    >
                      <div className="font-medium">Our Products</div>
                      <div className="text-xs text-[#B5B7BB] mt-0.5">Strategic Intelligence Portfolio</div>
                    </Link>
                    <Link
                      href="/veritus"
                      onClick={() => setShowProductsDropdown(false)}
                      className="block px-4 py-3 text-[#E6E7E8] hover:bg-[#2B2D2E] hover:text-[#C28B4A] transition-colors duration-200"
                    >
                      <div className="font-medium">Veritus</div>
                      <div className="text-xs text-[#B5B7BB] mt-0.5">Intelligence With Purpose</div>
                    </Link>
                    <Link
                      href="/veritus/pricing"
                      onClick={() => setShowProductsDropdown(false)}
                      className="block px-4 py-3 text-[#E6E7E8] hover:bg-[#2B2D2E] hover:text-[#C28B4A] transition-colors duration-200"
                    >
                      <div className="font-medium">Pricing</div>
                      <div className="text-xs text-[#B5B7BB] mt-0.5">Plans & Investment</div>
                    </Link>
                  </div>
                )}
              </div>

              <button
                onClick={() => setShowModal(true)}
                className="bg-[#C28B4A] text-[#111213] px-6 py-2 rounded-sm hover:opacity-90 transition-opacity duration-200 font-medium"
              >
                Early Access
              </button>
            </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
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
            
            {/* Mobile Products Section */}
            <div className="py-2">
              <div className="text-gray-900 font-semibold mb-2">Products</div>
              <Link
                href="/products"
                className="block py-2 pl-4 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Our Products
              </Link>
              <Link
                href="/pricing"
                className="block py-2 pl-4 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
            </div>

            <button
              onClick={() => {
                setShowModal(true);
                setIsOpen(false);
              }}
              className="block w-full mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
            >
              Early Access
            </button>
          </div>
        )}
      </div>
    </header>
    </>
  );
}
