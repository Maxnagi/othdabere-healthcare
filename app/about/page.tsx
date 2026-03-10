import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

const team = [
  { name: "Care Director", role: "Registered Manager", initials: "CD", color: "#0D9488" },
  { name: "Senior Carer", role: "Lead Care Coordinator", initials: "SC", color: "#0B2545" },
  { name: "Training Lead", role: "Clinical Trainer", initials: "TL", color: "#16A34A" },
  { name: "Admin Manager", role: "Operations & Admin", initials: "AM", color: "#7C3AED" },
]

export default function About() {
  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        padding: "140px 0 110px",
        backgroundImage: "url('/images/hero-about.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        overflow: "hidden",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div style={{
          position: "absolute", top: "10%", right: "5%",
          width: 360, height: 360, borderRadius: "50%",
          border: "1px solid rgba(13,148,136,0.18)",
          pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 640 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(13,148,136,0.18)",
              border: "1px solid rgba(20,184,166,0.35)",
              color: "#5EEAD4",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700, fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              padding: "7px 16px", borderRadius: 100, marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2DD4BF", display: "inline-block" }} />
              Who We Are
            </span>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
              fontWeight: 700, color: "white",
              lineHeight: 1.08, marginBottom: 20,
            }}>
              About Othdabere Healthcare
            </h1>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "rgba(255,255,255,0.75)", fontSize: "1.1rem",
              lineHeight: 1.7, maxWidth: 560,
            }}>
              A domiciliary care agency built on compassion, professionalism, and an unwavering commitment to empowering individuals to live with dignity.
            </p>
            <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 28 }} />
          </div>
        </div>
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: 50 }}>
            <path d="M0 50L1440 50L1440 25C1200 50 960 0 720 18C480 36 240 8 0 25L0 50Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 72, alignItems: "center" }}>
            <div>
              <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>
                Our Story
              </span>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                fontWeight: 700, color: "#0B2545",
                lineHeight: 1.15, marginTop: 16, marginBottom: 12,
              }}>
                Compassionate Care Rooted in Community
              </h2>
              <div className="divider-teal" style={{ marginBottom: 28 }} />
              {[
                "Othdabere High Quality Healthcare Services Ltd is a domiciliary care agency committed to delivering compassionate and professional home care services across the United Kingdom and Ghana.",
                "Our goal is to empower individuals to maintain their independence, dignity, and quality of life while receiving support within the comfort of their own homes.",
                "We work closely with families and communities to provide reliable, person-centred care that meets each individual's unique needs — from personal care to specialised support.",
              ].map((para, i) => (
                <p key={i} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "1rem", lineHeight: 1.78, marginBottom: 18 }}>
                  {para}
                </p>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 36 }}>
                {[
                  { label: "Founded", value: "2019" },
                  { label: "Service Areas", value: "UK & Ghana" },
                  { label: "Care Staff", value: "25+" },
                  { label: "Clients Supported", value: "100+" },
                ].map((f, i) => (
                  <div key={i} style={{ background: "#F8FAFD", border: "1.5px solid #E2E8F0", borderRadius: 14, padding: "18px 20px" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 700, color: "#0B2545", lineHeight: 1 }}>{f.value}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#64748B", marginTop: 4, fontWeight: 500 }}>{f.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 24, overflow: "hidden", position: "relative" }}>
                <img src="/images/about.jpg" alt="About Othdabere Healthcare" style={{ width: "100%", height: 520, objectFit: "cover", display: "block" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 55%, rgba(11,37,69,0.55) 100%)" }} />
              </div>
              <div style={{
                position: "absolute", bottom: 28, right: -24,
                background: "white", borderRadius: 16, padding: "16px 20px",
                boxShadow: "0 20px 48px rgba(11,37,69,0.14)",
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #0D9488, #14B8A6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#0B2545" }}>CQC Registered</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", color: "#64748B", marginTop: 2 }}>Regulated care provider</div>
                </div>
              </div>
              <div style={{
                position: "absolute", top: 28, left: -24,
                background: "linear-gradient(135deg, #0B2545, #163a6b)",
                borderRadius: 16, padding: "16px 22px",
                boxShadow: "0 12px 32px rgba(11,37,69,0.28)",
                textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2.2rem", color: "white", lineHeight: 1 }}>5+</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.65)", marginTop: 4, letterSpacing: "0.06em", textTransform: "uppercase" }}>Years of Care</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section style={{ padding: "100px 0", background: "#F8FAFD" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>Our Guiding Principles</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              What Drives Everything We Do
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              {
                iconClass: "icon-bg-teal", accent: "#0D9488",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: "Our Mission",
                text: "To provide personalised high-quality domiciliary care that enables individuals to live safely and independently in their homes with dignity and confidence.",
              },
              {
                iconClass: "icon-bg-blue", accent: "#1D4ED8",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
                title: "Our Vision",
                text: "To be a trusted, leading provider of compassionate care that meaningfully improves the wellbeing and independence of every individual we support.",
              },
              {
                iconClass: "icon-bg-green", accent: "#16A34A",
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>,
                title: "Our Values",
                text: "Compassion, dignity, respect, professionalism, transparency, and an unwavering commitment to delivering excellent person-centred care every day.",
              },
            ].map((card, i) => (
              <div key={i} className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "36px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg, ${card.accent}, ${card.accent}80)` }} />
                <div className={card.iconClass} style={{ width: 64, height: 64, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
                  {card.icon}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 700, color: "#0B2545", marginBottom: 14 }}>{card.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.95rem", lineHeight: 1.72, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>Our Team</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              The People Behind Our Care
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
            {team.map((member, i) => (
              <div key={i} className="card-lift" style={{ background: "#F8FAFD", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "32px", textAlign: "center" }}>
                <div style={{
                  width: 80, height: 80, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${member.color}, ${member.color}bb)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.3rem", color: "white",
                  boxShadow: `0 8px 24px ${member.color}33`,
                }}>
                  {member.initials}
                </div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#0B2545", marginBottom: 6 }}>{member.name}</h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#0D9488", fontWeight: 600, margin: 0 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACCREDITATION STRIP ── */}
      <section style={{ background: "#F8FAFD", padding: "48px 0", borderTop: "1.5px solid #E2E8F0", borderBottom: "1.5px solid #E2E8F0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: 40 }}>
            {["CQC Registered Provider", "DBS Checked Staff", "Fully Insured", "Safeguarding Compliant", "GDPR Compliant"].map((badge, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#DCFCE7", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "#334155" }}>{badge}</span>
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
