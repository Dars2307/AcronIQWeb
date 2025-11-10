"use client";

import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="text-white min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-8 py-32">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-medium leading-tight mb-8">
              Strategic Intelligence for High-Stakes Decisions
              <div className="w-24 h-px bg-bronze mt-4"></div>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone leading-relaxed mb-12 max-w-3xl">
              We analyse the problem, remove what doesn't matter, and reveal the path forward — clearly and without delay.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <Link 
                href="/early-access" 
                className="btn-strategic"
              >
                Request a Strategic Briefing
              </Link>
              <Link 
                href="/about" 
                className="text-stone hover:text-white font-medium py-3"
              >
                How We Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM STATEMENT */}
      <section className="bg-charcoalLight text-offwhite py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="max-w-3xl space-y-8">
            <p className="text-2xl leading-relaxed">
              Most organisations suffer from noise.
            </p>
            <p className="text-2xl leading-relaxed">
              Information without hierarchy. Data without clarity.
            </p>
            <p className="text-2xl leading-relaxed text-white">
              We remove noise. We surface signal.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE DO */}
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            <div className="px-8 py-12 border-r border-bronze/20">
              <h3 className="text-xl font-medium mb-6 text-bronze">Strategic Clarity</h3>
              <p className="text-stone leading-relaxed">
                We identify the decision that must be made, and the factors that determine it.
              </p>
            </div>
            <div className="px-8 py-12 border-r border-bronze/20">
              <h3 className="text-xl font-medium mb-6 text-bronze">Analytical Precision</h3>
              <p className="text-stone leading-relaxed">
                We apply structured reasoning and AI-assisted analysis to reveal what matters.
              </p>
            </div>
            <div className="px-8 py-12">
              <h3 className="text-xl font-medium mb-6 text-bronze">Decisive Action</h3>
              <p className="text-stone leading-relaxed">
                We provide clear recommendations, grounded in evidence, ready to implement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR INSTRUMENTS */}
      <section className="bg-charcoalLight text-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-medium mb-4">The Instruments</h2>
            <p className="text-stone text-lg">Tools designed for leaders who require precision.</p>
          </div>
          
          <div className="space-y-12">
            <div className="border-l-2 border-bronze pl-8">
              <h3 className="text-xl font-medium mb-3">TrueNorth</h3>
              <p className="text-stone leading-relaxed">
                An intelligence system that clarifies strategic direction.
              </p>
            </div>
            <div className="border-l-2 border-bronze pl-8">
              <h3 className="text-xl font-medium mb-3">Signals</h3>
              <p className="text-stone leading-relaxed">
                Detects shifts, patterns, and inflection points before they become obvious.
              </p>
            </div>
            <div className="border-l-2 border-bronze pl-8">
              <h3 className="text-xl font-medium mb-3">NexusOne</h3>
              <p className="text-stone leading-relaxed">
                Maintains organisational alignment and institutional memory with quiet consistency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK */}
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="border-l-2 border-bronze pl-8 mb-16">
            <div className="space-y-6 mb-12">
              <p className="text-xl">We work in concentrated analytical cycles.</p>
              <p className="text-xl">We engage directly with decision-makers.</p>
              <p className="text-xl">We deliver clarity in hours, not weeks.</p>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-medium mb-8 text-bronze">The AcronIQ Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium mb-2">1. Define the Decision</h4>
                  <p className="text-stone">Isolate the choice that must be made.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">2. Gather Relevant Signals</h4>
                  <p className="text-stone">Collect only information that affects the outcome.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">3. Apply Structured Analysis</h4>
                  <p className="text-stone">Process data through disciplined reasoning frameworks.</p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">4. Deliver Strategic Direction</h4>
                  <p className="text-stone">Present clear recommendations with implementation path.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PROOF */}
      <section className="bg-charcoalLight text-white py-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-medium mb-6">Trusted by Innovators and Strategic Leaders</h2>
            <p className="text-stone text-lg mb-4">Our work is often confidential.</p>
            <p className="text-stone text-lg">Discretion is part of the service.</p>
          </div>
          
          <div className="space-y-8">
            <div className="border-l-2 border-bronze pl-8">
              <p className="text-stone leading-relaxed">
                Reduced a 12-week strategic evaluation to 48 hours, enabling rapid capital allocation.
              </p>
            </div>
            <div className="border-l-2 border-bronze pl-8">
              <p className="text-stone leading-relaxed">
                Identified market misalignment that prevented a £2.4M product misinvestment.
              </p>
            </div>
            <div className="border-l-2 border-bronze pl-8">
              <p className="text-stone leading-relaxed">
                Revealed acquisition timing advantage that accelerated entry into a competitive sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. REQUEST A STRATEGIC BRIEFING */}
      <section className="bg-charcoal text-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-2xl mb-12 text-stone">
            If the problem matters, clarity is not optional.
          </p>
          
          <Link 
            href="/early-access" 
            className="btn-strategic px-12 py-4 text-lg"
          >
            Request a Strategic Briefing
          </Link>
        </div>
      </section>
    </Layout>
  );
}
