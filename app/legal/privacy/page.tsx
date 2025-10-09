import Layout from "@/components/Layout";

export default function Privacy() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Introduction</h2>
              <p>
                AcronIQ Research ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Business details and professional information</li>
                <li>Communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you relevant updates and information</li>
                <li>Analyze usage patterns and optimize our platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@acroniq.co.uk" className="text-blue-600 hover:text-blue-700">
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
