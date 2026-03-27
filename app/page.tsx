import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function TermsOfService() {
  return (
    <>
      <Navbar/>

      {/* Hero */}
      <section style={{
        position: "relative", padding: "100px 0 70px",
        backgroundImage: "url('/images/hero-services.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(13,148,136,0.2)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>📄 Legal</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,5vw,3.8rem)", fontWeight: 700, color: "white", marginTop: 16, lineHeight: 1.1 }}>
            Terms of Service
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.72)", marginTop: 14, fontSize: "1rem" }}>
            Last updated: January 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container" style={{ maxWidth: 860 }}>

          <div style={{ background: "linear-gradient(135deg,#EEF6FF,#ECFEFF)", border: "1.5px solid rgba(13,148,136,0.2)", borderRadius: 16, padding: "20px 24px", marginBottom: 40 }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#0B2545", fontSize: "0.93rem", lineHeight: 1.72, margin: 0 }}>
              <strong>Please read these Terms of Service carefully</strong> before using our website or engaging our services. By accessing our website or entering into a care agreement with us, you agree to be bound by these terms.
            </p>
          </div>

          {[
            {
              title: "1. About Us",
              icon: "🏢",
              text: "Othdabere High Quality Healthcare Services Ltd is a domiciliary care provider operating in the United Kingdom and Ghana. References to 'we', 'us', or 'our' in these terms refer to Othdabere H.Q. Healthcare Services Ltd.",
            },
            {
              title: "2. Services",
              icon: "🫶",
              text: "We provide domiciliary care services including personal care, medication support, meal preparation, companionship, household assistance and specialised care. All services are subject to a formal care agreement and individual care plan prepared following an initial assessment. Services are tailored to the needs of each individual client.",
            },
            {
              title: "3. Care Agreements",
              icon: "📋",
              text: "All care services are subject to a written care agreement between us and the client (or their authorised representative). The agreement sets out the scope of services, fees, cancellation terms, and responsibilities of both parties. No care arrangement is binding until a signed care agreement is in place.",
            },
            {
              title: "4. Website Use",
              icon: "💻",
              text: "You may use our website for lawful personal and non-commercial purposes only. You must not use our website to transmit harmful, offensive, or illegal content; attempt to gain unauthorised access to our systems; or interfere with our services in any way. We reserve the right to terminate access to users who violate these terms.",
            },
            {
              title: "5. Forms & Submissions",
              icon: "📝",
              text: "By submitting contact, referral or job application forms on our website, you confirm that the information provided is accurate and complete. You consent to us using this information to respond to your enquiry or process your application in accordance with our Privacy Policy.",
            },
            {
              title: "6. Intellectual Property",
              icon: "©️",
              text: "All content on this website, including text, images, logos, and design, is the intellectual property of Othdabere H.Q. Healthcare Services Ltd or its licensors. You may not reproduce, distribute, or use any content without prior written permission.",
            },
            {
              title: "7. Limitation of Liability",
              icon: "⚖️",
              text: "To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential losses arising from use of our website or services. Our total liability in connection with any service shall not exceed the amount paid for that service in the preceding three months.",
            },
            {
              title: "8. Third-Party Links",
              icon: "🔗",
              text: "Our website may contain links to third-party websites. We have no control over the content or privacy practices of those sites and accept no responsibility for them. Links are provided for convenience only.",
            },
            {
              title: "9. Changes to These Terms",
              icon: "🔄",
              text: "We reserve the right to update these Terms of Service at any time. The updated version will be posted on this page with a revised date. Continued use of our website or services following changes constitutes your acceptance of the updated terms.",
            },
            {
              title: "10. Governing Law",
              icon: "🏛️",
              text: "These terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
            },
            {
              title: "11. Contact",
              icon: "📧",
              text: "If you have any questions about these Terms of Service, please contact us at: othdaberehealthcare@gmail.com or call +44 7588 160799.",
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: 32, padding: "28px 32px", background: "#F8FAFD", borderRadius: 18, border: "1.5px solid #E2E8F0" }}>
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
