"use client";

import { useState } from "react";
import Layout from "@/components/Layout";
import EarlyAccessModal from "@/components/EarlyAccessModal";
import { motion } from "framer-motion";
import { FaCode, FaDatabase, FaChartLine, FaCog } from "react-icons/fa";

export default function Journal() {
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  const entries = [
    {
      date: "December 2025",
      series: "Strategic Clarity Series",
      focus: "Why Clarity Matters More Than Information in Strategic Decision-Making",
      author: "Joel Ogunniyi",
      authorTitle: "Founder & CEO, AcronIQ Research",
      authorCredentials: "Strategic Advisor specialising in AI-driven decision systems",
      icon: <FaCode className="text-2xl text-blue-400" />,
      keyTakeaways: [
        "Leaders fail due to clarity issues, not data scarcity",
        "Data without clarity creates hesitation and fear-based decisions",
        "Strategic clarity requires precision, trust, and emotional alignment",
        "Future leadership belongs to those who see clearly before acting"
      ],
      summary: "In today's world, leaders aren't suffering from a lack of information — they're drowning in it. Every decision is surrounded by metrics, dashboards, forecasts, and AI-generated insight. Yet decisions still fail. Not because leaders didn't know enough, but because they couldn't see clearly.",
      fullArticle: `Clarity, not volume of data, is what defines advantage in high-stakes decision-making.

When complexity rises, the instinct is often to search for more data, more reports, more validation. But data without clarity only creates hesitation. It delays decisions until timing is lost or forces action rooted in fear rather than foresight.

**At AcronIQ, we believe strategic clarity is created through three core principles:**

**1. Precision over noise**

Insight must filter — not amplify — complexity. Useful intelligence answers: What truly matters here?

**2. Trust over uncertainty**

Leadership relies not only on numbers but aligned confidence. Insight should reinforce conviction, not increase anxiety.

**3. Intelligence that resonates**

Human context is essential. The best decisions are not just mathematically correct — they are strategically and emotionally aligned.

The future of leadership will not belong to those with the most information, but those who master the art of seeing clearly before acting decisively.

**AcronIQ was built for that future.**`,
      details: [
        "Why more data often leads to less clarity",
        "The difference between information and intelligence",
        "How strategic leaders cut through complexity",
        "Building decision frameworks that prioritize what matters"
      ],
      next: []
    },
    {
      date: "December 2025",
      series: "Strategic Clarity Series",
      focus: "Why Emotional Intelligence Matters in AI Advisory",
      author: "Joel Ogunniyi",
      authorTitle: "Founder & CEO, AcronIQ Research",
      authorCredentials: "Strategic Advisor specialising in AI-driven decision systems",
      icon: <FaDatabase className="text-2xl text-green-400" />,
      keyTakeaways: [
        "Advisory must factor emotional influence in AI decisions",
        "Executives struggle with fear, team dynamics, and political pressure",
        "AI provides depth; emotional intelligence provides direction",
        "Mathematically correct decisions fail if they can't be confidently executed"
      ],
      summary: "We often think of AI advisory as a discipline of logic, data and precision. But decisions that shape organisations are rarely made in perfect conditions. They're made under pressure — influenced by uncertainty, human perception, and emotional bias.",
      fullArticle: `That's why intelligence without emotional understanding is incomplete.

Executives don't struggle because they lack access to forecasting models. They struggle because instinct, fear, team dynamics or political pressure distort how information is received and acted on. Insight is only powerful if it resonates with the human who must execute it.

**Where emotional intelligence changes AI advisory**

**1. Translating insight into leadership action**

AI can highlight risks, but only emotional intelligence can guide how to deliver that insight in a way that drives action instead of resistance.

**2. Reducing fear-based decision patterns**

In high-stakes decisions, leaders often react to what feels safe, not what is strategically sound. A truly intelligent advisory system must recognise and account for fear-driven choices.

**3. Navigating executive dynamics**

Strategies don't fail during analysis — they fail in boardroom conversations. Understanding influence, alignment and leadership behaviour is essential to making AI-driven insights truly effective.

**The next evolution of strategic intelligence**

Artificial intelligence provides depth. Emotional intelligence provides direction. Real strategic advisory requires both.

At AcronIQ, we're designing intelligence systems that don't just give answers — they give leaders clarity that speaks to both reason and conviction.

**Because in high-stakes environments, the decision that is mathematically correct is irrelevant if it cannot be confidently executed.**`,
      details: [
        "How emotional intelligence enhances AI-driven advisory",
        "The role of trust and empathy in high-stakes decisions",
        "Building intelligence systems that resonate with human needs",
        "Case studies: When data alone isn't enough"
      ],
      next: []
    },
    {
      date: "Coming Soon",
      nextInsightDays: 14,
      focus: "Navigating Complexity: A Framework for Founders",
      icon: <FaChartLine className="text-2xl text-purple-400" />,
      summary: "How to transform uncertainty into actionable strategy using intelligence-driven approaches.",
      details: [
        "Understanding complexity vs. complication in business",
        "Decision frameworks for high-uncertainty environments",
        "The role of strategic intelligence in founder journeys",
        "Tools and methodologies for clarity in chaos"
      ],
      next: []
    },
    {
      date: "Coming Soon",
      focus: "The Future of Strategic Intelligence",
      icon: <FaDatabase className="text-2xl text-green-400" />,
      summary: "What modular AI tools mean for the next generation of business leaders.",
      details: [
        "Evolution from traditional consulting to AI-augmented advisory",
        "Modular intelligence: Building blocks for strategic advantage",
        "The democratization of high-quality strategic insights",
        "Preparing for the intelligence-first organization"
      ],
      next: []
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-[#111213] text-[#E6E7E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono tracking-[0.2em] text-xs text-[#C28B4A] mb-6 uppercase"
            >
              Strategic Intelligence Journal
            </motion.p>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Insights & Research
            </h1>
            <p className="text-xl text-[#B5B7BB] max-w-3xl mx-auto leading-relaxed">
              Thought leadership on AI, strategy, and the future of intelligence.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              Exploring the intersection of artificial intelligence, strategic decision-making, and the evolving landscape 
              of business intelligence. We share insights on navigating complexity, building with precision, and leading in the age of AI.
            </p>
            
            {/* Publishing Cadence */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300 text-sm font-semibold mb-1">
                  📅 Publishing Cycle: New insights released every 2–3 weeks
                </p>
                <p className="text-blue-400 text-sm">
                  Part of the AcronIQ Strategic Intelligence Series 2025
                </p>
              </div>
            </div>
            
            <p className="text-lg text-blue-400 font-medium mt-6">
              Clarity. Precision. Intelligence that resonates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Journal Entries */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {entries.map((entry, index) => (
              <motion.article
                key={entry.focus}
                id={`article-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04, duration: 0.5 }}
                className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
              >
                <div className="bg-gray-900 text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {entry.icon}
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">{entry.focus}</h2>
                        {entry.author && (
                          <div className="space-y-1">
                            <p className="text-blue-300 font-semibold">{entry.author}</p>
                            <p className="text-blue-200 text-sm">{entry.authorTitle}</p>
                            {entry.authorCredentials && (
                              <p className="text-gray-400 text-sm italic">{entry.authorCredentials}</p>
                            )}
                          </div>
                        )}
                        <div className="flex items-center gap-3 mt-2 flex-wrap">
                          <p className="text-gray-400 text-sm font-mono">{entry.date}</p>
                          {entry.series && (
                            <span className="px-2 py-1 bg-blue-600 text-white text-xs font-semibold rounded">
                              {entry.series}
                            </span>
                          )}
                          {entry.nextInsightDays && (
                            <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full animate-pulse">
                              📅 Next Insight Drops in {entry.nextInsightDays} Days
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <p className="text-gray-700 text-lg mb-6 leading-relaxed">{entry.summary}</p>
                    
                    {/* Key Takeaways Box */}
                    {entry.keyTakeaways && entry.keyTakeaways.length > 0 && (
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
                        <h3 className="text-lg font-bold text-navy mb-4 flex items-center">
                          <span className="text-2xl mr-2">📌</span>
                          Key Takeaways (for execs in a hurry)
                        </h3>
                        <ul className="space-y-2 mb-4">
                          {entry.keyTakeaways.map((takeaway, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-600 mr-2 font-bold">•</span>
                              <span className="text-gray-800 leading-relaxed">{takeaway}</span>
                            </li>
                          ))}
                        </ul>
                        {entry.fullArticle && (
                          <a 
                            href={`#article-${index}`}
                            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                          >
                            Read the full article →
                          </a>
                        )}
                      </div>
                    )}
                    
                    {entry.fullArticle ? (
                      <div className="prose prose-lg max-w-none">
                        {entry.fullArticle.split('\n\n').map((paragraph, idx) => (
                          <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                            {paragraph.startsWith('**') ? (
                              <strong className="text-navy">{paragraph.replace(/\*\*/g, '')}</strong>
                            ) : paragraph.match(/^\d+\./) ? (
                              <span className="block ml-4">{paragraph}</span>
                            ) : (
                              paragraph
                            )}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Topics</h3>
                        <ul className="space-y-2">
                          {entry.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                  
                  {entry.fullArticle ? (
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-lg p-6 mt-6">
                      <p className="text-navy font-semibold text-lg mb-3 text-center">
                        🧭 If you'd like early access to tools that turn complexity into clarity, we invite you to join our Early Access Programme.
                      </p>
                      <div className="text-center">
                        <button
                          onClick={() => setShowEarlyAccess(true)}
                          className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        >
                          Request Early Access
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-800 font-medium text-center">
                        📝 Article in development — stay tuned for publication
                      </p>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <FaCog className="text-4xl text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">More Insights Coming Soon</h3>
              <p className="text-gray-400 mb-4">
                We're developing thought leadership content on AI, strategy, and the future of intelligence.
              </p>
              <p className="text-blue-400 font-medium">
                Subscribe to our early access programme to be notified when new articles are published.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Early Access Modal */}
      <EarlyAccessModal 
        open={showEarlyAccess} 
        onClose={() => setShowEarlyAccess(false)} 
      />
    </Layout>
  );
}
