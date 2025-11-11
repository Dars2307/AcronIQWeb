import Layout from "@/components/Layout";

export default function Terms() {
  return (
    <Layout>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
            <p className="text-sm text-gray-500">Last updated: January 2025</p>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using AcronIQ Research's services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily access the materials (information or software) on AcronIQ Research's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="mt-4">This license shall automatically terminate if you violate any of these restrictions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Services Description</h2>
              <p>
                AcronIQ Research provides AI-powered intelligence and research services including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AcronIQ Veritus - Intelligence With Purpose</li>
                <li>AcronIQ Signals - Market intelligence and trend detection</li>
                <li>AcronIQ Portal - Secure client workspace</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. User Obligations</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Intellectual Property</h2>
              <p>
                All content, features, and functionality of our services are owned by AcronIQ Research and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Limitation of Liability</h2>
              <p>
                In no event shall AcronIQ Research be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Contact Information</h2>
              <p>
                For any questions about these Terms, please contact us at{" "}
                <a href="mailto:legal@acroniq.co.uk" className="text-blue-600 hover:text-blue-700">
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
