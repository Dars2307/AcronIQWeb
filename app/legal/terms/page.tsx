import Layout from "@/components/Layout";

export default function Terms() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-[#B5B7BB] max-w-3xl mx-auto">
              The terms governing your access to AcronIQ Research and the Veritus Private Beta Programme.
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
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">1. Acceptance of Terms</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                By accessing and using AcronIQ Research's services, including participation in the Veritus Private Beta Programme, you accept and agree to be bound by these terms. If you do not agree to these terms, please do not use our services or participate in the Private Beta Programme.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">2. Private Beta Programme</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed mb-4">
                The Veritus Private Beta Programme is an exclusive, invitation-only programme for strategic intelligence platform development. By participating, you agree to:
              </p>
              <ul className="space-y-3 text-[#B5B7BB]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Provide constructive feedback on platform functionality and strategic intelligence capabilities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Maintain confidentiality regarding beta features, methodologies, and strategic insights
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  Use the platform solely for legitimate business intelligence and strategic planning purposes
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">3. Services Description</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed mb-4">
                AcronIQ Research provides strategic intelligence services currently focused on:
              </p>
              <ul className="space-y-3 text-[#B5B7BB]">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <strong className="text-[#E6E7E8]">Veritus Platform:</strong> Strategic intelligence engine for high-stakes decision-making (Private Beta)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <strong className="text-[#E6E7E8]">Strategic Advisory:</strong> Executive-level intelligence consulting and analysis
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#C28B4A] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <strong className="text-[#E6E7E8]">Future Platforms:</strong> Additional intelligence tools planned for 2026
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">4. User Obligations</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                You agree to use our services only for lawful business purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials and any strategic intelligence provided through our platform. Misuse of strategic intelligence or breach of confidentiality may result in immediate termination of access.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">5. Intellectual Property</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                All content, methodologies, strategic frameworks, and functionality of our services are owned by AcronIQ Research and protected by international intellectual property laws. The strategic intelligence and analysis provided through Veritus remain our proprietary methods, while insights generated for your specific use cases are provided under license for your business purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">6. Confidentiality & Beta Terms</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                Private Beta participants agree to maintain strict confidentiality regarding platform capabilities, strategic methodologies, and any proprietary intelligence frameworks. This confidentiality extends to business relationships, competitive insights, and strategic recommendations provided through the platform.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">7. Limitation of Liability</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                While we provide strategic intelligence with precision and care, business decisions remain your responsibility. AcronIQ Research shall not be liable for business outcomes, strategic decisions, or competitive actions taken based on our intelligence and analysis. Our liability is limited to the fees paid for services.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">8. Changes to Terms</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                We reserve the right to modify these Terms as our platform evolves. Private Beta participants will receive advance notice of any significant changes. Continued use of our services constitutes acceptance of updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#C28B4A] mb-6">9. Contact Information</h2>
              <p className="text-lg text-[#B5B7BB] leading-relaxed">
                For questions about these Terms or Private Beta Programme inquiries, contact us at{" "}
                <a href="mailto:legal@acroniq.co.uk" className="text-[#C28B4A] hover:opacity-80 transition-opacity">
                  legal@acroniq.co.uk
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
