import Link from 'next/link';

export const metadata = {
  title: 'Pricing | Veritus by AcronIQ',
  description: 'Simple pricing for serious decisions. Currently in beta — everything is free.',
};

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-6">
            Currently in Beta — Everything Free
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Veritus Beta Pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            We're in beta. That means everything is free for now — no credit card, no catch.
          </p>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Veritus will have simple, transparent tiers when we launch publicly. Here's what's coming soon:
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Free Tier */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Free</h3>
                <p className="text-slate-600 text-sm mb-4">Coming Soon</p>
                <div className="text-sm text-slate-500 italic">Basic access</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">1 project</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Limited analyses</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Watermarked exports</span>
                </li>
              </ul>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-emerald-800 font-medium">💬 Included FREE during beta</p>
              </div>
            </div>

            {/* Solo Tier */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-300 p-8 hover:shadow-xl transition-shadow relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Popular
                </span>
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Solo</h3>
                <p className="text-slate-600 text-sm mb-4">Coming Soon</p>
                <div className="text-sm text-slate-500 italic">For individuals</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">More sessions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Export support</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Saved history</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Advanced tools</span>
                </li>
              </ul>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-emerald-800 font-medium">💬 Included FREE during beta</p>
              </div>
            </div>

            {/* Pro Tier */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Pro</h3>
                <p className="text-slate-600 text-sm mb-4">Coming Soon</p>
                <div className="text-sm text-slate-500 italic">High-usage</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Advanced frameworks</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Faster response</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Priority features</span>
                </li>
              </ul>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-emerald-800 font-medium">💬 Included FREE during beta</p>
              </div>
            </div>

            {/* Team & Enterprise */}
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-8 hover:shadow-xl transition-shadow">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Team & Enterprise</h3>
                <p className="text-slate-600 text-sm mb-4">Coming Soon</p>
                <div className="text-sm text-slate-500 italic">For organizations</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Shared workspaces</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Roles & permissions</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">SSO</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-700">Dedicated support</span>
                </li>
              </ul>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800 font-medium">💬 By request during beta</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to experience Veritus?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the beta and get full access to all features — completely free while we refine the product.
            </p>
            <Link
              href="/early-access"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Join the Veritus Beta →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Is the beta really free?
              </h3>
              <p className="text-slate-600">
                Yes — no credit card required. We want early users to experience Veritus without barriers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                When will pricing be announced?
              </h3>
              <p className="text-slate-600">
                We'll announce pricing closer to public launch. Early beta users will receive advance notice and preferential rates.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Will early users keep their price permanently?
              </h3>
              <p className="text-slate-600">
                Yes. When we launch paid tiers, beta users who upgrade will lock in their rate permanently as a thank you for early support.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Can I cancel anytime?
              </h3>
              <p className="text-slate-600">
                Absolutely. All future plans will be month-to-month with no long-term commitments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                What counts as a "strategic session"?
              </h3>
              <p className="text-slate-600">
                A full deep-dive with Veritus: scenario analysis, insights, frameworks, and a final structured output. Quick queries don't count.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Do unused sessions roll over?
              </h3>
              <p className="text-slate-600">
                No — sessions reset monthly to keep usage fresh and predictable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
