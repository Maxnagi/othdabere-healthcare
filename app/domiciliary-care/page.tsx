import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

export default function DomiciliaryCare() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-care.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            Home Care
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 700 }}>
            Domiciliary Care Services
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: 560, lineHeight: 1.7 }}>
            Professional support that enables individuals to receive high-quality care within the comfort of their own homes.
          </p>
          <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* WHAT IS */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>What Is It?</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "#0B2545", lineHeight: 1.15, marginTop: 16, marginBottom: 12 }}>
                Understanding Domiciliary Care
              </h2>
              <div className="divider-teal" style={{ marginBottom: 24 }} />
              {[
                "Domiciliary care, also known as home care, is professional support provided to individuals in their own homes to help them maintain independence and quality of life.",
                "This type of care allows individuals to continue living in familiar surroundings while receiving assistance with daily activities and personal care.",
                "Our carers provide personalised support tailored to each individual's needs, working alongside families for the best outcomes.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "1rem", lineHeight: 1.75, marginBottom: 16 }}>{p}</p>
              ))}
              <a href="/contact" className="btn-primary" style={{ display: "inline-flex", textDecoration: "none", marginTop: 8 }}>
                Arrange Care Today
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div style={{ borderRadius: 24, overflow: "hidden" }}>
              <img src="/images/homecare1.jpg" alt="Home care" style={{ width: "100%", height: 480, objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SUPPORT */}
      <section style={{ padding: "100px 0", background: "#F8FAFD" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>Who Our Care Supports</h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { iconClass: "icon-bg-teal", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Elderly Individuals", desc: "Helping older adults maintain independence and receive compassionate assistance with daily living." },
              { iconClass: "icon-bg-blue", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>, title: "People with Disabilities", desc: "Personalised support for individuals living with physical or learning disabilities." },
              { iconClass: "icon-bg-green", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Recovery After Illness", desc: "Supporting individuals recovering from hospital stays, operations or medical treatment." },
            ].map((c, i) => (
              <div key={i} className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "32px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0D9488, #38BDF8)" }} />
                <div className={c.iconClass} style={{ width: 60, height: 60, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "#0B2545", marginBottom: 10 }}>{c.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.92rem", lineHeight: 1.65 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES INCLUDED */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>Services Included</h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { title: "Personal Care", desc: "Bathing, dressing, grooming and personal hygiene delivered with dignity." },
              { title: "Medication Support", desc: "Helping clients manage medications and collect prescriptions safely." },
              { title: "Household Support", desc: "Cleaning, shopping, laundry and preparing nutritious meals." },
              { title: "Companionship", desc: "Emotional support and social interaction to improve wellbeing." },
              { title: "Mobility Assistance", desc: "Helping individuals move safely within their homes and communities." },
              { title: "Specialised Care", desc: "Support for dementia, disabilities and long-term health conditions." },
            ].map((s, i) => (
              <div key={i} style={{ background: "#F8FAFD", border: "1.5px solid #E2E8F0", borderRadius: 16, padding: "24px", display: "flex", gap: 14, alignItems: "flex-start" }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#0D9488", marginTop: 6, flexShrink: 0 }} />
                <div>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.97rem", marginBottom: 6 }}>{s.title}</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.87rem", lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{
        position: "relative", padding: "100px 0",
        backgroundImage: "url('/images/care-benefits-bg.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", marginBottom: 12 }}>Benefits of Home Care</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: "1rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Staying at home is often the best environment for recovery and continued wellbeing.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { title: "Independence", desc: "Remain in your own home while receiving expert professional support." },
              { title: "Comfort", desc: "Familiar surroundings significantly improve emotional wellbeing." },
              { title: "Personalised", desc: "Care plans are fully tailored to individual needs and preferences." },
              { title: "Family Peace of Mind", desc: "Families can rest assured knowing their loved one is well cared for." },
            ].map((b, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "32px", backdropFilter: "blur(12px)" }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#2DD4BF", marginBottom: 16 }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 700, color: "white", marginBottom: 10 }}>{b.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.72)", fontSize: "0.9rem", lineHeight: 1.65, margin: 0 }}>{b.desc}</p>
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
