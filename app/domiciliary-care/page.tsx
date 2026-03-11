import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

export default function DomiciliaryCare() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="page-hero" style={{
        position: "relative",
        backgroundImage: "url('/images/hero-care.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            🏡 Home Care
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 700 }}>
            Domiciliary Care Services
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.95rem, 2vw, 1.1rem)", maxWidth: 520, lineHeight: 1.7 }}>
            Professional support that enables individuals to receive high-quality care within the comfort of their own homes.
          </p>
          <div style={{ width: 56, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* WHAT IS DOMICILIARY CARE */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="section-label">💡 What Is It?</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0B2545", lineHeight: 1.15, marginTop: 16, marginBottom: 12 }}>
                Understanding Domiciliary Care
              </h2>
              <div className="divider-teal" style={{ marginBottom: 24 }} />
              {[
                "Domiciliary care, also known as home care, is professional support provided to individuals in their own homes to help them maintain independence and quality of life.",
                "This type of care allows individuals to continue living in familiar surroundings while receiving assistance with daily activities and personal care.",
                "Our carers provide personalised support tailored to each individual's needs, working alongside families for the best outcomes.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.97rem", lineHeight: 1.75, marginBottom: 16 }}>{p}</p>
              ))}
              <a href="/contact" className="btn-primary" style={{ display: "inline-flex", textDecoration: "none", marginTop: 8 }}>
                Arrange Care Today
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div style={{ borderRadius: 24, overflow: "hidden" }}>
              <img src="/images/homecare1.jpg" alt="Home care" style={{ width: "100%", height: "100%", minHeight: 320, objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section className="section-pad" style={{ background: "#F8FAFD" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">👥 Who We Help</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Who Our Care Supports
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div className="care-card-grid">
            {[
              { grad: "linear-gradient(135deg,#ECFEFF,#CFFAFE)", icon: "👴", title: "Elderly Individuals", desc: "Helping older adults maintain independence and receive compassionate assistance with daily living." },
              { grad: "linear-gradient(135deg,#EFF6FF,#DBEAFE)", icon: "♿", title: "People with Disabilities", desc: "Personalised support for individuals living with physical or learning disabilities." },
              { grad: "linear-gradient(135deg,#ECFDF5,#D1FAE5)", icon: "🏥", title: "Recovery After Illness", desc: "Supporting individuals recovering from hospital stays, operations or medical treatment." },
            ].map((c, i) => (
              <div key={i} className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "28px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0D9488, #38BDF8)" }} />
                <div style={{ width: 58, height: 58, borderRadius: 16, background: c.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.7rem", marginBottom: 18 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 700, color: "#0B2545", marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES INCLUDED */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">✅ What's Included</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Services Included
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div className="care-services-grid">
            {[
              { icon: "🫀", title: "Personal Care",       desc: "Bathing, dressing, grooming and personal hygiene delivered with dignity." },
              { icon: "💊", title: "Medication Support",  desc: "Helping clients manage medications and collect prescriptions safely." },
              { icon: "🏡", title: "Household Support",   desc: "Cleaning, shopping, laundry and preparing nutritious meals." },
              { icon: "🤝", title: "Companionship",       desc: "Emotional support and social interaction to improve wellbeing." },
              { icon: "🦽", title: "Mobility Assistance", desc: "Helping individuals move safely within their homes and communities." },
              { icon: "🧠", title: "Specialised Care",    desc: "Support for dementia, disabilities and long-term health conditions." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#F8FAFD", border: "1.5px solid #E2E8F0", borderRadius: 14, padding: "20px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "linear-gradient(135deg,#ECFEFF,#EFF6FF)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", flexShrink: 0 }}>{s.icon}</div>
                <div>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.95rem", marginBottom: 5 }}>{s.title}</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="section-pad" style={{
        position: "relative",
        backgroundImage: "url('/images/care-benefits-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label" style={{ background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>🌟 Why Home Care</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "white", marginTop: 16, marginBottom: 12 }}>
              Benefits of Home Care
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "1rem", maxWidth: 460, margin: "0 auto", lineHeight: 1.7 }}>
              Staying at home is often the best environment for recovery and continued wellbeing.
            </p>
          </div>
          <div className="care-benefits-grid">
            {[
              { icon: "🏠", title: "Independence",        desc: "Remain in your own home while receiving expert professional support." },
              { icon: "💛", title: "Comfort",             desc: "Familiar surroundings significantly improve emotional wellbeing." },
              { icon: "📋", title: "Personalised",        desc: "Care plans fully tailored to individual needs and preferences." },
              { icon: "👨‍👩‍👧", title: "Peace of Mind",    desc: "Families rest assured knowing their loved one is well cared for." },
            ].map((b, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 18, padding: "28px", backdropFilter: "blur(12px)" }}>
                <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{b.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 700, color: "white", marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.72)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
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