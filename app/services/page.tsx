import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

const services = [
  { bg: "#FFF0F3", e: "🫀", title: "Personal Care",       desc: "Assistance with bathing, dressing, grooming and daily hygiene to ensure comfort and dignity." },
  { bg: "#EFF6FF", e: "💊", title: "Medication Support",  desc: "Helping individuals manage medications safely, including reminders and prescription support." },
  { bg: "#FFF7ED", e: "🍽️", title: "Meal Preparation",   desc: "Preparing healthy and nutritious meals that support wellbeing and specific dietary needs." },
  { bg: "#F0FDF4", e: "🏡", title: "Household Support",   desc: "Light housekeeping, laundry, shopping and home organisation to maintain a safe environment." },
  { bg: "#F5F3FF", e: "🤝", title: "Companionship",       desc: "Providing emotional support, conversation and assistance with community activities." },
  { bg: "#ECFDF5", e: "🧠", title: "Specialised Care",    desc: "Support for individuals with disabilities, dementia, mobility issues and post-hospital care." },
  { bg: "#EFF6FF", e: "🕐", title: "24/7 Support",        desc: "Round-the-clock access to our care coordinators and emergency support for peace of mind." },
  { bg: "#F0FDF4", e: "📋", title: "Care Planning",       desc: "Thorough assessments and personalised care plans reviewed regularly to meet evolving needs." },
  { bg: "#FFF0F3", e: "🕊️", title: "Palliative Care",    desc: "Sensitive, compassionate support for those with serious illness and their families." },
]

export default function Services() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="page-hero" style={{
        position: "relative",
        backgroundImage: "url('/images/hero-services.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            ✨ What We Provide
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 700 }}>
            Our Care Services
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.95rem,2vw,1.1rem)", maxWidth: 520, lineHeight: 1.7 }}>
            Professional domiciliary care designed to support individuals to live safely, independently, and comfortably in their homes.
          </p>
          <div style={{ width: 56, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">🫶 Core Services</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Our Core Services
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto 20px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "1rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Every service is tailored to your individual needs, delivered by compassionate, trained professionals.
            </p>
          </div>

          <div className="services-page-grid">
            {services.map((s, i) => (
              <div key={i} className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "24px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0D9488, #38BDF8)" }} />
                <div style={{ width: 54, height: 54, borderRadius: 14, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: "1.5rem" }}>
                  {s.e}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#0B2545", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOMICILIARY CARE DETAIL */}
      <section className="section-pad" style={{
        position: "relative",
        backgroundImage: "url('/images/domiciliary-detail.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="svc-detail-grid">

            {/* Left: text */}
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: 24 }}>
                Domiciliary Care Support
              </h2>
              {[
                "Our domiciliary care services allow individuals to receive professional support within the comfort of their homes while maintaining independence.",
                "Care plans are personalised to meet the specific needs of each client, ensuring dignity, safety and wellbeing at all times.",
                "Our carers work closely with families to ensure the highest quality care is delivered consistently.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.80)", fontSize: "0.97rem", lineHeight: 1.75, marginBottom: 14 }}>{p}</p>
              ))}
              <a href="/contact" className="btn-primary" style={{ display: "inline-flex", textDecoration: "none", marginTop: 8 }}>
                Arrange Care
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>

            {/* Right: feature badges grid */}
            <div className="svc-badges-grid">
              {["Personalised Plans","Regular Reviews","Family Updates","24/7 Support","Trained Staff","Dignity & Respect"].map((item, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 12, padding: "16px 14px", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}><path d="M20 6L9 17l-5-5" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "white" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="section-pad" style={{ background: "#F8FAFD" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">💚 Why Choose Us</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Why Choose Our Care Services
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div className="care-card-grid">
            {[
              { bg: "#ECFEFF", e: "🛡️", title: "Experienced Care Team",  desc: "Our trained carers bring compassion, skill and experience to every visit." },
              { bg: "#EFF6FF", e: "📋", title: "Personalised Care Plans", desc: "Every individual receives a care plan tailored to their specific needs and goals." },
              { bg: "#ECFDF5", e: "🕐", title: "Reliable Support",        desc: "We are committed to providing dependable, consistent care for families and communities." },
            ].map((item, i) => (
              <div key={i} className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "32px", textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: 18, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: "1.8rem" }}>
                  {item.e}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}