import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep text-stone-grey py-16">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center space-y-4">
          <Link href="/" className="inline-block mb-6">
            <Image 
              src="/images/AcronIQ-Primary-Logo.png" 
              alt="AcronIQ Research Logo" 
              width={120} 
              height={60}
              className="object-contain opacity-80"
            />
          </Link>
          
          <p className="text-lg">AcronIQ Research</p>
          <p className="text-sm">Strategic Intelligence & AI Advisory</p>
          <p className="text-sm">United Kingdom</p>
          
          <div className="pt-8 space-x-8">
            <Link href="/legal/privacy" className="text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="text-sm hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
