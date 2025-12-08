import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-32 bg-[#111213] text-[#E6E7E8] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, #C28B4A 1px, transparent 0)",backgroundSize:"32px 32px"}} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <p className="font-mono tracking-[0.2em] text-xs text-[#C28B4A] mb-6 uppercase">
              Legal Framework
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 leading-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-[#B5B7BB] max-w-3xl mx-auto">
              How AcronIQ Research protects and handles your information with precision and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-[#0F1011] border-t border-[#2B2D2E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 text-[#E6E7E8]">
            <p className="text-sm text-[#B5B7BB] mb-8">Last updated: December 2025</p>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">1. Introduction</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                AcronIQ Research ("we," "our," or "us") is committed to protecting your privacy with the same precision we apply to strategic intelligence. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and Veritus Private Beta Programme.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">2. Information We Collect</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="space-y-3 text-[#B5B7BB]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Name, email address, and professional contact information
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Business details, company information, and strategic requirements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Private Beta Programme application details and preferences
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Usage data and interaction patterns within Veritus platform
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">3. How We Use Your Information</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-3 text-[#B5B7BB]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Provide access to the Veritus Private Beta Programme
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Deliver strategic intelligence services and platform improvements
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Respond to inquiries and provide executive-level support
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Send relevant updates about platform development and strategic insights
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">4. Data Security & Confidentiality</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                We implement enterprise-grade security measures to protect your personal and strategic data. All information is encrypted in transit and at rest, with access limited to authorised personnel only. Your strategic intelligence requirements and business data are treated with the highest level of confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">5. Your Rights</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                You have the right to access, correct, or delete your personal information at any time. You may also object to or restrict certain processing of your data. For Private Beta participants, you can request data portability or account suspension through your dedicated support channel.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">6. Contact Us</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                If you have any questions about this Privacy Policy or data handling practices, please contact us at{" "}
                <a href="mailto:privacy@acroniq.co.uk" className="text-[#C28B4A] hover:opacity-80 transition-opacity">
                  privacy@acroniq.co.uk
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
