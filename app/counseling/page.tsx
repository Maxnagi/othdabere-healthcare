import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"
import Link from "next/link"

const counselingServices = [
  { bg: "#F0FDFA", e: "🧠", title: "Mental Health Support",    desc: "Compassionate, confidential support for anxiety, depression, grief and emotional challenges affecting daily life." },
  { bg: "#EFF6FF", e: "💬", title: "Individual Counseling",    desc: "One-to-one sessions tailored to your personal circumstances, providing a safe space to talk and heal." },
  { bg: "#FFF7ED", e: "👨‍👩‍👧", title: "Family Counseling",     desc: "Guided support to help families navigate difficult situations, improve communication and strengthen relationships." },
  { bg: "#F5F3FF", e: "💔", title: "Bereavement Support",      desc: "Sensitive, compassionate guidance for those coping with loss, helping you process grief at your own pace." },
  { bg: "#ECFDF5", e: "🌿", title: "Stress & Anxiety Relief",  desc: "Practical strategies and therapeutic techniques to help manage stress and build emotional resilience." },
  { bg: "#FFF0F3", e: "🤲", title: "Carer Wellbeing Support",  desc: "Dedicated support for care workers and family carers who may be experiencing burnout or emotional fatigue." },
]

const process = [
  { step: "01", title: "Initial Consultation", desc: "A free, no-obligation conversation to understand your needs and how we can best support you." },
  { step: "02", title: "Tailored Care Plan",   desc: "We create a personalised counseling plan designed around your specific goals and circumstances." },
  { step: "03", title: "Ongoing Sessions",     desc: "Regular, flexible sessions — in-person or via phone — at a pace that works for you." },
  { step: "04", title: "Continued Support",    desc: "We provide follow-up care and check-ins to ensure lasting progress and wellbeing." },
]

export default function Counseling() {
  return (
    <>
      <Navbar />

      <style>{`
        @media (max-width: 768px) {
          .counsel-grid { grid-template-columns: 1fr !important; }
          .counsel-process { grid-template-columns: 1fr 1fr !important; }
          .counsel-cta-flex { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .counsel-process { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-services.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            🧠 Counseling & Wellbeing
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 700 }}>
            Professional Counseling & Mental Health Support
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.95rem,2vw,1.1rem)", maxWidth: 560, lineHeight: 1.7, marginBottom: 36 }}>
            Compassionate, confidential counseling for vulnerable individuals, families and carers — supporting mental and emotional wellbeing in the community.
          </p>
          <a href="https://wa.me/447588160799" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Start a Conversation on WhatsApp
          </a>
          <div style={{ width: 56, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 28 }} />
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
            <div>
              <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>💛 Our Approach</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, color: "#0B2545", lineHeight: 1.15, marginBottom: 20 }}>
                A Voice for the Voiceless
              </h2>
              <div className="divider-teal" />
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.97rem", lineHeight: 1.8, marginTop: 20, marginBottom: 16 }}>
                At Othdabere, we believe every person deserves to be heard, valued and supported. Our counseling services are designed to reach those who may feel isolated, overwhelmed or unheard — providing a compassionate space to heal and grow.
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.97rem", lineHeight: 1.8, marginBottom: 28 }}>
                Whether you are a vulnerable individual, a family member, or a dedicated carer, our trained professionals are here to provide the right level of support for your unique situation.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Confidential", "Non-Judgemental", "Culturally Sensitive", "Flexible Sessions"].map(b => (
                  <span key={b} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "#F0FDFA", border: "1.5px solid rgba(13,148,136,0.2)", color: "#0D9488", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.8rem", padding: "7px 14px", borderRadius: 100 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ position: "relative" }}>
              <div style={{ background: "linear-gradient(135deg,#F0FDFA,#EFF6FF)", borderRadius: 24, padding: "48px 36px", border: "1.5px solid #E2E8F0" }}>
                <div style={{ textAlign: "center", marginBottom: 28 }}>
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg,#0D9488,#0B2545)", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0B2545", marginBottom: 8 }}>Ready to Talk?</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem", lineHeight: 1.65 }}>
                    Our counseling team is just a message away. Reach out on WhatsApp for a free initial consultation — completely confidential.
                  </p>
                </div>
                <a href="https://wa.me/447588160799" target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                  background: "linear-gradient(135deg,#25D366,#128C7E)", color: "white",
                  padding: "16px", borderRadius: 14, textDecoration: "none",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem",
                  boxShadow: "0 8px 24px rgba(37,211,102,0.3)",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Chat on WhatsApp
                </a>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#94A3B8", textAlign: "center", marginTop: 12 }}>Free initial consultation · 100% Confidential</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNSELING SERVICES GRID */}
      <section className="section-pad" style={{ background: "#F8FAFD" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">🫶 What We Offer</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Our Counseling Services
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto 20px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "1rem", maxWidth: 500, margin: "0 auto", lineHeight: 1.7 }}>
              Every service is delivered with empathy, professionalism and a deep commitment to your wellbeing.
            </p>
          </div>

          <div className="counsel-grid services-page-grid">
            {counselingServices.map((s, i) => (
              <div key={i} className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "28px", position: "relative", overflow: "hidden" }}>
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

      {/* PROCESS */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">📋 How It Works</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Your Journey to Wellbeing
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>

          <div className="counsel-process" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {process.map((p, i) => (
              <div key={i} style={{ textAlign: "center", padding: "28px 20px" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "linear-gradient(135deg,#0D9488,#0B2545)", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "white" }}>{p.step}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 700, color: "#0B2545", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.86rem", lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHATSAPP CTA BANNER */}
      <section style={{ background: "linear-gradient(135deg,#0B2545,#163a6b)", padding: "80px 0" }}>
        <div className="container">
          <div className="counsel-cta-flex" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 620 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.9rem,4vw,3rem)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: 14 }}>
                Take the First Step Towards Feeling Better
              </h2>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.72)", fontSize: "1rem", lineHeight: 1.7 }}>
                You don't have to face it alone. Our counseling team is available now on WhatsApp — reach out for a free, confidential consultation with no obligation.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
              <a href="https://wa.me/447588160799" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: 12,
                background: "linear-gradient(135deg,#25D366,#128C7E)",
                color: "white", padding: "18px 32px", borderRadius: 14,
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem",
                textDecoration: "none", boxShadow: "0 8px 28px rgba(37,211,102,0.35)",
                whiteSpace: "nowrap",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Message Us on WhatsApp
              </a>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.1)", border: "1.5px solid rgba(255,255,255,0.22)",
                color: "white", padding: "14px 28px", borderRadius: 14,
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.93rem",
                textDecoration: "none", whiteSpace: "nowrap",
              }}>
                Or Send Us a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
