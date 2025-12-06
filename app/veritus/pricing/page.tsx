"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FaCrown, 
  FaArrowRight, 
  FaShield, 
  FaCheckCircle, 
  FaDiamond,
  FaStar,
  FaLock,
  FaPhone,
  FaGlobe
} from "react-icons/fa";

export default function VeritusPricing() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: "Strategic Reports",
      subtitle: "Ad-hoc Intelligence",
      price: { monthly: 199, annual: 199 },
      unit: "per report",
      description: "Individual strategic intelligence reports for specific decisions",
      features: [
        "Comprehensive market analysis",
        "Risk assessment framework", 
        "Strategic recommendations",
        "Executive summary",
        "48-hour delivery",
        "Single-use licence"
      ],
      cta: "Order Report",
      popular: false,
      tier: "entry"
    },
    {
      name: "Executive Advisory", 
      subtitle: "Ongoing Intelligence",
      price: { monthly: 4999, annual: 49990 },
      unit: "per month",
      description: "Continuous strategic intelligence support for executive teams",
      features: [
        "Monthly strategic briefings",
        "Unlimited consultation access",
        "Market intelligence monitoring", 
        "Competitive analysis updates",
        "Risk monitoring & alerts",
        "Dedicated intelligence analyst",
        "Quarterly strategy sessions",
        "Priority response (< 24hrs)"
      ],
      cta: "Start Advisory",
      popular: true,
      tier: "premium"
    },
    {
      name: "Enterprise Intelligence",
      subtitle: "Institutional Partnership", 
      price: { monthly: 0, annual: 0 },
      unit: "custom pricing",
      description: "Comprehensive intelligence partnership for large organisations",
      features: [
        "Dedicated intelligence team",
        "Custom analysis frameworks",
        "Real-time market monitoring",
        "Strategic planning support",
        "Board-level presentations",
        "Multi-stakeholder access",
        "Regulatory compliance support",
        "24/7 priority access"
      ],
      cta: "Contact Sales",
      popular: false,
      tier: "enterprise"
    }
  ];

  const addOns = [
    {
      name: "Urgent Analysis",
      description: "Same-day strategic intelligence delivery",
      price: "£999"
    },
    {
      name: "Board Presentation",
      description: "Executive presentation preparation & delivery",
      price: "£2,499"
    },
    {
      name: "Due Diligence Package",
      description: "Comprehensive M&A intelligence support",
      price: "£9,999"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-[#111213] text-[#E6E7E8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.01]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"50px 50px"}} />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#C28B4A] rounded-sm flex items-center justify-center">
                <FaCrown className="text-2xl text-[#111213]" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-semibold text-[#E6E7E8]">Veritus Pricing</h1>
                <p className="text-[#C28B4A] font-mono text-lg">Intelligence With Purpose</p>
              </div>
            </div>
            
            <p className="text-xl text-[#B5B7BB] max-w-3xl mx-auto mb-8">
              Strategic intelligence pricing designed for executive decision-making. Choose the level of support that matches your strategic requirements.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm ${billingCycle === 'monthly' ? 'text-[#E6E7E8]' : 'text-[#B5B7BB]'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-[#C28B4A]' : 'bg-[#2B2D2E]'
                }`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-1'
                }`} />
              </button>
              <span className={`text-sm ${billingCycle === 'annual' ? 'text-[#E6E7E8]' : 'text-[#B5B7BB]'}`}>
                Annual
              </span>
              {billingCycle === 'annual' && (
                <span className="text-xs text-[#C28B4A] bg-[#C28B4A]/10 px-2 py-1 rounded-sm">
                  Save 17%
                </span>
              )}
            </div>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-[#151617] border rounded-sm p-8 ${
                  plan.popular 
                    ? 'border-[#C28B4A] ring-1 ring-[#C28B4A]/20' 
                    : 'border-[#2B2D2E]'
                } hover:border-[#C28B4A]/50 transition-colors`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#C28B4A] text-[#111213] px-4 py-1 rounded-sm text-xs font-semibold flex items-center space-x-1">
                      <FaStar className="w-3 h-3" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-[#E6E7E8] mb-2">{plan.name}</h3>
                  <p className="text-[#C28B4A] text-sm font-mono tracking-wider mb-4">{plan.subtitle}</p>
                  
                  <div className="mb-4">
                    {plan.price.monthly > 0 ? (
                      <>
                        <span className="text-4xl font-bold text-[#E6E7E8]">
                          £{billingCycle === 'annual' 
                            ? (plan.price.annual / (plan.unit === 'per month' ? 12 : 1)).toLocaleString()
                            : plan.price.monthly.toLocaleString()
                          }
                        </span>
                        <span className="text-[#B5B7BB] ml-2">{plan.unit}</span>
                        {billingCycle === 'annual' && plan.unit === 'per month' && (
                          <div className="text-sm text-[#B5B7BB] mt-1">
                            Billed annually (£{plan.price.annual.toLocaleString()})
                          </div>
                        )}
                      </>
                    ) : (
                      <span className="text-2xl font-semibold text-[#E6E7E8]">Custom Pricing</span>
                    )}
                  </div>
                  
                  <p className="text-[#B5B7BB] text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <FaCheckCircle className="text-[#C28B4A] text-sm mt-0.5 flex-shrink-0" />
                      <span className="text-[#B5B7BB] text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => plan.tier === 'enterprise' ? null : setShowEarlyAccess(true)}
                  className={`w-full py-3 px-6 rounded-sm font-semibold transition-all ${
                    plan.popular
                      ? 'bg-[#C28B4A] text-[#111213] hover:opacity-90'
                      : 'border border-[#2B2D2E] text-[#E6E7E8] hover:border-[#C28B4A]/50'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Add-ons Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-8"
          >
            <h3 className="text-2xl font-semibold text-[#E6E7E8] mb-6 text-center">
              Strategic Add-ons
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {addOns.map((addon, index) => (
                <div key={addon.name} className="text-center p-4 border border-[#2B2D2E] rounded-sm">
                  <h4 className="font-semibold text-[#E6E7E8] mb-2">{addon.name}</h4>
                  <p className="text-[#B5B7BB] text-sm mb-3">{addon.description}</p>
                  <span className="text-[#C28B4A] font-semibold">{addon.price}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-[#0F1011] border-t border-[#2B2D2E]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <FaDiamond className="text-[#C28B4A] text-2xl" />
                <h2 className="text-3xl md:text-4xl font-semibold text-[#E6E7E8]">
                  Enterprise Intelligence
                </h2>
              </div>
              
              <p className="text-xl text-[#B5B7BB] mb-6">
                For organisations requiring institutional-level strategic intelligence support.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Dedicated intelligence team",
                  "Custom analysis frameworks", 
                  "Board-level strategic support",
                  "Regulatory & compliance intelligence",
                  "Multi-stakeholder access management"
                ].map((feature, index) => (
                  <div key={feature} className="flex items-center space-x-3">
                    <FaCheckCircle className="text-[#C28B4A] text-sm" />
                    <span className="text-[#E6E7E8]">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/contact">
                <button className="bg-[#C28B4A] text-[#111213] px-8 py-4 rounded-sm font-semibold hover:opacity-90 transition-opacity flex items-center space-x-2">
                  <FaPhone className="text-sm" />
                  <span>Schedule Enterprise Consultation</span>
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-8"
            >
              <div className="text-center mb-6">
                <FaLock className="text-[#C28B4A] text-3xl mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#E6E7E8] mb-2">
                  Institutional Grade Security
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-[#2B2D2E]">
                  <span className="text-[#B5B7BB]">Data Classification</span>
                  <span className="text-green-400">TOP SECRET</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#2B2D2E]">
                  <span className="text-[#B5B7BB]">Encryption Standard</span>
                  <span className="text-green-400">AES-256</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-[#2B2D2E]">
                  <span className="text-[#B5B7BB]">Access Control</span>
                  <span className="text-green-400">Multi-Factor</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-[#B5B7BB]">Compliance</span>
                  <span className="text-green-400">SOC 2 Type II</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#111213] border-t border-[#2B2D2E]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-[#E6E7E8] mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What makes Veritus different from traditional consulting?",
                answer: "Veritus combines AI-powered analysis with strategic expertise, delivering intelligence in hours rather than weeks. Our focus is on actionable insights, not lengthy reports."
              },
              {
                question: "How quickly can I expect strategic intelligence delivery?",
                answer: "Strategic Reports are delivered within 48 hours. Executive Advisory clients receive priority access with responses typically within 24 hours."
              },
              {
                question: "Is my strategic information secure?",
                answer: "Absolutely. We maintain institutional-grade security with end-to-end encryption, strict access controls, and SOC 2 Type II compliance."
              },
              {
                question: "Can I upgrade or downgrade my plan?",
                answer: "Yes, you can adjust your plan at any time. Changes take effect at your next billing cycle, with prorated adjustments where applicable."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-6"
              >
                <h3 className="text-lg font-semibold text-[#E6E7E8] mb-3">{faq.question}</h3>
                <p className="text-[#B5B7BB]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <EarlyAccessModal 
        open={showEarlyAccess} 
        onClose={() => setShowEarlyAccess(false)} 
      />
    </Layout>
  );
}
