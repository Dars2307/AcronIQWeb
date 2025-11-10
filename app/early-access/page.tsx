"use client";

import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { useState } from "react";

export default function EarlyAccess() {
  const [showModal, setShowModal] = useState(true);

  const benefits = [
    {
      title: "Priority Access to Beta Products",
      description: "Be amongst the first to experience TrueNorth and other AcronIQ intelligence tools."
    },
    {
      title: "Strategic Research Updates", 
      description: "Receive insights from our development journal and market intelligence findings."
    },
    {
      title: "Influence Product Direction",
      description: "Your feedback shapes our roadmap and feature development priorities."
    }
  ];

  return (
    <Layout>
      <EarlyAccessModal open={showModal} onClose={() => setShowModal(false)} />
      
      {/* Hero Section - Palantir Gotham HQ Aesthetic */}
      <section className="gotham-hq min-h-screen flex items-center">
        <div className="max-w-5xl mx-auto px-8 pt-32 pb-24">
          <h1 className="font-serif text-5xl leading-tight text-white mb-8">
            Early Access to TrueNorth
          </h1>
          <div className="w-16 h-px bg-bronze mb-12"></div>
          <p className="text-stone text-xl leading-relaxed max-w-3xl mb-6">
            For founders, operators, investors, analysts, planners, and strategists.
          </p>
          <p className="text-stone text-lg leading-relaxed max-w-3xl mb-12">
            TrueNorth is currently in private development. Joining the waitlist grants priority access 
            to beta products, strategic research updates, and the opportunity to influence product direction.
          </p>
          
          <button 
            onClick={() => setShowModal(true)}
            className="btn-strategic tracking-wide px-8 py-4"
          >
            Request Strategic Briefing
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-charcoalLight py-32">
        <div className="max-w-5xl mx-auto px-8">
          <h2 className="font-serif text-3xl text-white mb-16 text-center">
            Joining the Waitlist Grants
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => (
              <div key={benefit.title} className="border-l-2 border-bronze pl-8">
                <h3 className="font-serif text-xl text-white mb-4">{benefit.title}</h3>
                <p className="text-stone leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="gotham-hq py-32">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <p className="font-serif text-2xl text-stone mb-16">
            If the problem matters, clarity is not optional.
          </p>
          
          <button 
            onClick={() => setShowModal(true)}
            className="btn-strategic px-12 py-4 text-base tracking-wide"
          >
            Join the Waitlist
          </button>
        </div>
      </section>
    </Layout>
  );
}
