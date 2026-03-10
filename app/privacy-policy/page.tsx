import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar/>

      {/* Hero */}
      <section style={{
        position: "relative", padding: "100px 0 70px",
        backgroundImage: "url('/images/hero-about.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(13,148,136,0.2)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>🔒 Legal</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 700, color: "white", marginTop: 16, lineHeight: 1.1 }}>
            Privacy Policy
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.72)", marginTop: 14, fontSize: "1rem" }}>
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: 860 }}>

          {[
            {
              title: "1. Who We Are",
              icon: "🏢",
              text: "Othdabere High Quality Healthcare Services Ltd ('we', 'us', 'our') is a domiciliary care provider registered in the United Kingdom. We are committed to protecting and respecting your privacy. This policy explains how we collect, use, and safeguard your personal information when you use our website or engage our services.",
            },
            {
              title: "2. Information We Collect",
              icon: "📋",
              text: "We may collect the following personal information: full name, email address, phone number, home address, health and care-related information (for care planning purposes), next-of-kin details, and any other information you provide via our contact, referral or job application forms. We also collect non-personal data including browser type, IP address, and site usage statistics via cookies.",
            },
            {
              title: "3. How We Use Your Information",
              icon: "🎯",
              text: "We use your information to: provide and manage care services; communicate about your care plan or enquiry; process job applications and referrals; improve our website and services; comply with legal obligations under UK law and CQC regulations; send relevant health and service updates (with your consent).",
            },
            {
              title: "4. Legal Basis for Processing",
              icon: "⚖️",
              text: "Under UK GDPR, we process your data on the following lawful bases: performance of a contract (to provide care services); legitimate interests (to improve services and communicate with you); compliance with a legal obligation; and your explicit consent where required.",
            },
            {
              title: "5. Data Sharing",
              icon: "🔗",
              text: "We do not sell your personal data. We may share it with: healthcare professionals involved in your care; regulatory bodies such as the CQC; IT and software providers who support our operations (under strict data processing agreements); and where legally required by law enforcement or courts.",
            },
            {
              title: "6. Data Retention",
              icon: "🗄️",
              text: "We retain personal data for as long as necessary to provide care services and comply with legal and regulatory obligations. Care records are typically retained for a minimum of 7 years in accordance with NHS and CQC guidance. Job application data is held for 12 months unless you are hired.",
            },
            {
              title: "7. Your Rights",
              icon: "✅",
              text: "You have the right to: access your personal data; correct inaccurate data; request erasure (where legally permissible); restrict processing; data portability; object to processing; and withdraw consent at any time. To exercise these rights, please contact us at othdaberehealthcare@gmail.com.",
            },
            {
              title: "8. Cookies",
              icon: "🍪",
              text: "Our website uses essential cookies to function correctly and analytical cookies to understand how visitors use our site. You may disable cookies through your browser settings, but some site features may be affected.",
            },
            {
              title: "9. Security",
              icon: "🛡️",
              text: "We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or misuse. All care staff are trained in data protection and confidentiality obligations.",
            },
            {
              title: "10. Contact Us",
              icon: "📧",
              text: "If you have questions about this policy or wish to exercise your rights, please contact: Othdabere H.Q. Healthcare Services Ltd | Email: othdaberehealthcare@gmail.com | Phone: +44 7588 160799. If you are unsatisfied with our response, you may contact the Information Commissioner's Office (ICO) at ico.org.uk.",
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: 40, padding: "28px 32px", background: "#F8FAFD", borderRadius: 18, border: "1.5px solid #E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <span style={{ fontSize: "1.4rem" }}>{section.icon}</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.5rem", color: "#0B2545" }}>
                  {section.title}
                </h2>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569", fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer/>
    </>
  )
}
