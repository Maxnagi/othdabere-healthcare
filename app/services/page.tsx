import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

const services = [
  { iconClass: "icon-bg-pink", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>, title: "Personal Care", desc: "Assistance with bathing, dressing, grooming and daily hygiene to ensure comfort and dignity." },
  { iconClass: "icon-bg-blue", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M6 3h12l2 3-8 5-8-5 2-3zM4 8l8 5 8-5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Medication Support", desc: "Helping individuals manage medications safely, including reminders and prescription support." },
  { iconClass: "icon-bg-orange", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 2v3M10 2v3M14 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Meal Preparation", desc: "Preparing healthy and nutritious meals that support wellbeing and specific dietary needs." },
  { iconClass: "icon-bg-teal", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Household Support", desc: "Light housekeeping, laundry, shopping and home organisation to maintain a safe environment." },
  { iconClass: "icon-bg-purple", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Companionship", desc: "Providing emotional support, conversation and assistance with community activities." },
  { iconClass: "icon-bg-green", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Specialised Care", desc: "Support for individuals with disabilities, dementia, mobility issues and post-hospital care." },
  { iconClass: "icon-bg-blue", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18A2 2 0 012.18 0H5.2a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.25 7.84a16 16 0 006 6l1.2-1.2a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.09v2.83z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "24/7 Support", desc: "Round-the-clock access to our care coordinators and emergency support for peace of mind." },
  { iconClass: "icon-bg-teal", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Care Planning", desc: "Thorough assessments and personalised care plans reviewed regularly to meet evolving needs." },
  { iconClass: "icon-bg-pink", icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Palliative Care", desc: "Sensitive, compassionate support for those with serious illness and their families." },
]

export default function Services() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-services.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            What We Provide
          </span>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700, color: "white",
            lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 700,
          }}>
            Our Care Services
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: 560, lineHeight: 1.7 }}>
            Professional domiciliary care designed to support individuals to live safely, independently, and comfortably in their homes.
          </p>
          <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700, color: "#0B2545", marginBottom: 12,
            }}>Our Core Services</h2>
            <div className="divider-teal" style={{ margin: "0 auto 20px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "1rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
              Every service is tailored to your individual needs, delivered by compassionate, trained professionals.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {services.map((s, i) => (
              <div key={i} className="card-lift" style={{
                background: "white", border: "1.5px solid #E2E8F0",
                borderRadius: 20, padding: "32px",
                position: "relative", overflow: "hidden",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0D9488, #38BDF8)" }} />
                <div className={s.iconClass} style={{ width: 60, height: 60, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 700, color: "#0B2545", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.92rem", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED */}
      <section style={{
        position: "relative", padding: "100px 0",
        backgroundImage: "url('/images/domiciliary-detail.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 60, alignItems: "center" }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: 24 }}>
                Domiciliary Care Support
              </h2>
              {[
                "Our domiciliary care services allow individuals to receive professional support within the comfort of their homes while maintaining independence.",
                "Care plans are personalised to meet the specific needs of each client, ensuring dignity, safety and wellbeing at all times.",
                "Our carers work closely with families to ensure the highest quality care is delivered consistently.",
              ].map((p, i) => (
                <p key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.8)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 16 }}>{p}</p>
              ))}
              <a href="/contact" className="btn-primary" style={{ display: "inline-flex", textDecoration: "none", marginTop: 8 }}>
                Arrange Care
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {["Personalised Plans", "Regular Reviews", "Family Updates", "24/7 Support", "Trained Staff", "Dignity & Respect"].map((item, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "20px", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 10 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "white" }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section style={{ padding: "100px 0", background: "#F8FAFD" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>
              Why Choose Our Care Services
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { iconClass: "icon-bg-teal", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Experienced Care Team", desc: "Our trained carers bring compassion, skill and experience to every visit." },
              { iconClass: "icon-bg-blue", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Personalised Care Plans", desc: "Every individual receives a care plan tailored to their specific needs and goals." },
              { iconClass: "icon-bg-green", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Reliable Support", desc: "We are committed to providing dependable, consistent care for families and communities." },
            ].map((item, i) => (
              <div key={i} className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "36px", textAlign: "center" }}>
                <div className={item.iconClass} style={{ width: 64, height: 64, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.93rem", lineHeight: 1.65 }}>{item.desc}</p>
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
