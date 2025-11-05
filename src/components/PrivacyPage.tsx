import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/Cold_AI_Logo_Rectangle_Transparent.png"
                alt="Cold AI"
                className="h-12 w-auto"
              />
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mb-8 sm:mb-12">Last updated: 16 October 2024</p>

          <div className="prose prose-invert prose-orange max-w-none space-y-8">
            {/* Introduction */}
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy explains how Cold AI processes personal data when you visit <strong>coldai.uk</strong>, interact with us, or use our Services.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1) Who is the controller</h2>
              <p className="text-gray-300 leading-relaxed">
                <strong>Controller:</strong> Cold AI Ltd<br />
                <strong>Email:</strong>{' '}
                <a href="mailto:info@coldai.uk" className="text-orange-400 hover:text-orange-300 transition-colors">info@coldai.uk</a>
                <br /><br />
                If we act as your processor for data you upload into the Services, our processing is governed by our DPA with you.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2) Scope</h2>
              <p className="text-gray-300 leading-relaxed">
                This Policy covers personal data we process as controller, including website visits, product accounts, support, marketing, and sales interactions. It does not cover processing we perform strictly on your instructions as processor.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">3) What we collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>Account and contact data:</strong> name, email, role, company, billing data.</li>
                <li><strong>Usage and device data:</strong> IP address, browser/OS, pages viewed, timestamps, referrers, product events, security telemetry.</li>
                <li><strong>Support data:</strong> messages, tickets, call notes.</li>
                <li><strong>Marketing preferences and communications.</strong></li>
                <li><strong>Content you submit:</strong> prompts, files, or data you choose to provide.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                We do not intentionally collect special category data. Do not submit such data unless we have agreed appropriate safeguards.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">4) Why we collect it and legal bases</h2>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li><strong>Provide and secure the Services:</strong> authentication, routing, performance, fraud prevention, incident detection, customer support. <em>Legal bases: contract performance, legitimate interests, legal obligations.</em></li>
                <li><strong>Improve and develop:</strong> features, quality, and security. <em>Legal basis: legitimate interests.</em></li>
                <li><strong>Billing and account administration:</strong> <em>Legal bases: contract performance and legal obligations.</em></li>
                <li><strong>Communicate with you:</strong> updates, security notices, service messages. <em>Legal bases: contract performance and legitimate interests.</em></li>
                <li><strong>Marketing:</strong> where permitted. <em>Legal bases: consent for electronic marketing, or legitimate interests for B2B with opt-out.</em></li>
                <li><strong>Compliance:</strong> legal requests and enforcement of rights. <em>Legal basis: legal obligations and legitimate interests.</em></li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">5) Cookies and similar technologies</h2>
              <p className="text-gray-300 leading-relaxed mb-3">
                We use cookies, local storage, and similar technologies for essential functionality, performance, and security. Some cookies are set by <strong>Cloudflare</strong> to keep the service secure and reliable.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Key examples: <code className="text-orange-400">__cf_bm</code>, <code className="text-orange-400">cf_clearance</code> and related Cloudflare cookies used to manage traffic, mitigate bots, and apply WAF challenges. Session and preference cookies for login and settings.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">6) Cloudflare</h2>
              <p className="text-gray-300 leading-relaxed">
                We use Cloudflare as a reverse proxy, CDN, DDoS/WAF, and bot management provider. Cloudflare processes limited traffic data and security telemetry as our processor. Cloudflare uses EU Standard Contractual Clauses with the UK Addendum for international transfers.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">7) Sharing your data</h2>
              <p className="text-gray-300 leading-relaxed mb-3">We share personal data only with:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li><strong>Processors:</strong> hosting, email, CRM, analytics, payment, security providers including Cloudflare.</li>
                <li><strong>Professional advisers and auditors</strong> under confidentiality.</li>
                <li><strong>Authorities</strong> if required by law.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                <strong>We do not sell personal data.</strong>
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">8) International transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Where data is transferred outside the UK/EEA, we use appropriate safeguards such as the EU SCCs with the UK Addendum, plus transfer risk assessments where required.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">9) Retention</h2>
              <p className="text-gray-300 leading-relaxed mb-3">We keep data only as long as needed. Typical periods:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                <li>Account and billing records: 6 years after account closure.</li>
                <li>Product logs and security telemetry: 30 to 180 days.</li>
                <li>Support tickets: up to 2 years after closure.</li>
                <li>Marketing data: until opt-out or after inactivity period.</li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">10) Your rights (UK GDPR)</h2>
              <p className="text-gray-300 leading-relaxed">
                You have the right to request access, rectification, erasure, restriction, portability, and to object to certain processing. Where processing is based on consent, you can withdraw consent at any time. To exercise these rights, contact{' '}
                <a href="mailto:info@coldai.uk" className="text-orange-400 hover:text-orange-300 transition-colors">info@coldai.uk</a>. You also have the right to complain to the UK Information Commissioner's Office (ICO).
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">11) Children</h2>
              <p className="text-gray-300 leading-relaxed">
                Our Services are for business use and not directed to children. Do not use the Services if you are under 18.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">12) Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We apply layered security measures including encryption in transit, role-based access control, secret management, logging and monitoring, vulnerability management, regular reviews, and Cloudflare's edge protections.
              </p>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">13) Automated decision-making</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not make solely automated decisions with legal or similarly significant effects. Our AI features generate content and recommendations under your direction.
              </p>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">14) Marketing</h2>
              <p className="text-gray-300 leading-relaxed">
                You can opt out of marketing emails at any time using the unsubscribe link or by emailing{' '}
                <a href="mailto:info@coldai.uk" className="text-orange-400 hover:text-orange-300 transition-colors">info@coldai.uk</a>. We may still send service and security notices.
              </p>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">15) Changes to this Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Policy to reflect changes to our practices or the law. We will post updates with a new "Last updated" date and, where material, provide notice.
              </p>
            </section>

            {/* Contact Section */}
            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">16) Contact</h2>
              <p className="text-gray-300 leading-relaxed">
                Please contact us on{' '}
                <a href="mailto:info@coldai.uk" className="text-orange-400 hover:text-orange-300 transition-colors">info@coldai.uk</a>
              </p>
            </section>
          </div>

          {/* Footer Nav */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link
              to="/"
              className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/terms"
              className="text-orange-400 hover:text-orange-300 transition-colors"
            >
              Terms & Conditions →
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
