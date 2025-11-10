"use client";

import Link from "next/link";
import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Layout>
      <EarlyAccessModal open={showModal} onClose={() => setShowModal(false)} />
      
      {/* HERO SECTION - Palantir Gotham HQ Aesthetic */}
      <section className="gotham-hq min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-8 pt-48 pb-36">
          <h1 className="font-serif text-6xl leading-snug text-white mb-8">
            Strategic Intelligence for High-Stakes Decisions
          </h1>
          <p className="text-stone mt-8 max-w-3xl text-lg leading-relaxed mb-12">
            We analyse the problem, remove what doesn't matter, and reveal the path forward —
            clearly and without delay.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <button 
              onClick={() => setShowModal(true)}
              className="btn-strategic tracking-wide"
            >
              Request a Strategic Briefing
            </button>
            <Link 
              href="/about" 
              className="text-stone hover:text-white font-medium py-3 transition-colors"
            >
              How We Work
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEM STATEMENT */}
      <section className="bg-charcoalLight text-offwhite py-32">
        <div className="max-w-5xl mx-auto px-8">
          <div className="max-w-3xl space-y-12">
            <p className="text-2xl leading-relaxed">
              Most organisations suffer from noise.
            </p>
            <p className="text-2xl leading-relaxed">
              Information without hierarchy. Data without clarity.
            </p>
            <p className="text-2xl leading-relaxed text-white font-serif">
              We remove noise. We surface signal.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="gotham-hq py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="px-8 py-16 border-r border-bronze/20">
              <h3 className="text-xl font-serif mb-6 text-bronze">Strategic Clarity</h3>
              <p className="text-stone leading-relaxed">
                We identify the decision that must be made, and the factors that determine it.
              </p>
            </div>
            <div className="px-8 py-16 border-r border-bronze/20">
              <h3 className="text-xl font-serif mb-6 text-bronze">Analytical Precision</h3>
              <p className="text-stone leading-relaxed">
                We apply structured reasoning and AI-assisted analysis to reveal what matters.
              </p>
            </div>
            <div className="px-8 py-16">
              <h3 className="text-xl font-serif mb-6 text-bronze">Decisive Action</h3>
              <p className="text-stone leading-relaxed">
                We provide clear recommendations, grounded in evidence, ready to implement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR INSTRUMENTS */}
      <section className="bg-charcoalLight text-white py-32">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="font-serif text-3xl mb-6 text-white">The Instruments</h2>
            <p className="text-stone text-lg">Tools designed for leaders who require precision.</p>
          </div>
          
          <div className="space-y-16">
            <div className="border-l-2 border-bronze pl-8">
              <h3 className="font-serif text-xl mb-4 text-white">TrueNorth</h3>
              <p className="text-stone leading-relaxed text-lg">
                An intelligence system that clarifies strategic direction.
              </p>
            </div>
            <div className="border-l-2 border-bronze pl-8">
              <h3 className="font-serif text-xl mb-4 text-white">Signals</h3>
              <p className="text-stone leading-relaxed text-lg">
                Detects shifts, patterns, and inflection points before they become obvious.
              </p>
            </div>
            <div className="border-l-2 border-bronze pl-8">
              <h3 className="font-serif text-xl mb-4 text-white">NexusOne</h3>
              <p className="text-stone leading-relaxed text-lg">
                Maintains organisational alignment and institutional memory with quiet consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="gotham-hq py-32">
        <div className="max-w-5xl mx-auto px-8">
          <div className="border-l-2 border-bronze pl-8 mb-20">
            <div className="space-y-8 mb-16">
              <p className="text-xl text-white">We work in concentrated analytical cycles.</p>
              <p className="text-xl text-white">We engage directly with decision-makers.</p>
              <p className="text-xl text-white">We deliver clarity in hours, not weeks.</p>
            </div>
            
            <div className="space-y-12">
              <h3 className="font-serif text-2xl text-bronze">The AcronIQ Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="font-serif text-lg mb-3 text-white">1. Define the Decision</h4>
                  <p className="text-stone">Isolate the choice that must be made.</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 text-white">2. Gather Relevant Signals</h4>
                  <p className="text-stone">Collect only information that affects the outcome.</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 text-white">3. Apply Structured Analysis</h4>
                  <p className="text-stone">Process data through disciplined reasoning frameworks.</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-3 text-white">4. Deliver Strategic Direction</h4>
                  <p className="text-stone">Present clear recommendations with implementation path.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section className="bg-charcoalLight text-white py-32">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-20">
            <h2 className="font-serif text-3xl mb-8 text-white">Trusted by Innovators and Strategic Leaders</h2>
            <p className="text-stone text-lg mb-4">Our work is often confidential.</p>
            <p className="text-stone text-lg">Discretion is part of the service.</p>
          </div>
          
          <div className="space-y-12">
            <div className="border-l-2 border-bronze pl-8">
              <p className="text-stone leading-relaxed text-lg">
                Reduced a 12-week strategic evaluation to 48 hours, enabling rapid capital allocation.
              </p>
            </div>
            <div className="border-l-2 border-bronze pl-8">
              <p className="text-stone leading-relaxed text-lg">
                Identified market misalignment that prevented a £2.4M product misinvestment.
              </p>
            </div>
            <div className="border-l-2 border-bronze pl-8">
              <p className="text-stone leading-relaxed text-lg">
                Revealed acquisition timing advantage that accelerated entry into a competitive sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST A STRATEGIC BRIEFING */}
      <section className="gotham-hq py-32">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="font-serif text-2xl mb-16 text-stone">
            If the problem matters, clarity is not optional.
          </p>
          
          <button 
            onClick={() => setShowModal(true)}
            className="btn-strategic px-12 py-4 text-base tracking-wide"
          >
            Request a Strategic Briefing
          </button>
        </div>
      </section>
    </Layout>
  );
}
