import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"
import ScrollReveal from "@/components/ScrollReveal"

const values = [
  { icon:"💜", title:"Compassion",     desc:"Every interaction is guided by genuine empathy and care for the whole person.",       grad:"linear-gradient(135deg,#EC4899,#A855F7)" },
  { icon:"🏅", title:"Dignity",        desc:"We preserve the dignity and autonomy of every individual in our care.",               grad:"linear-gradient(135deg,#3B82F6,#6366F1)" },
  { icon:"🤝", title:"Respect",        desc:"Treating clients, families and colleagues with the highest level of respect.",        grad:"linear-gradient(135deg,#10B981,#14B8A6)" },
  { icon:"⭐", title:"Excellence",     desc:"Continuously raising standards through training, feedback and professional growth.",   grad:"linear-gradient(135deg,#F59E0B,#F97316)" },
  { icon:"🔒", title:"Integrity",      desc:"Honest, transparent communication and ethical practice in everything we do.",         grad:"linear-gradient(135deg,#0B2545,#163a6b)" },
  { icon:"👥", title:"Inclusivity",    desc:"Welcoming and serving individuals of all backgrounds, needs and abilities.",          grad:"linear-gradient(135deg,#F43F5E,#EC4899)" },
]

const team = [
  { name:"Care Management Team",   role:"Service Management",   emoji:"👩‍⚕️", grad:"linear-gradient(135deg,#F43F5E,#EC4899)" },
  { name:"Clinical Advisors",       role:"Health & Wellbeing",   emoji:"🩺",  grad:"linear-gradient(135deg,#3B82F6,#6366F1)" },
  { name:"Care Coordinators",       role:"Scheduling & Support", emoji:"📋",  grad:"linear-gradient(135deg,#10B981,#14B8A6)" },
  { name:"Trained Carers",          role:"Direct Care Delivery", emoji:"🫶",  grad:"linear-gradient(135deg,#8B5CF6,#A855F7)" },
]

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="page-hero" style={{
        position: "relative", padding: "110px 0 80px",
        backgroundImage: "url('/images/hero-about.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <span className="section-label" style={{ marginBottom: 20, background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
              🏥 About Us
            </span>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.4rem,6vw,4.5rem)", fontWeight: 700, color: "white", lineHeight: 1.08, marginTop: 20, marginBottom: 20 }}>
              About Othdabere<br /><span className="text-shimmer">Healthcare</span>
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.78)", fontSize: "1.1rem", maxWidth: 560, lineHeight: 1.72 }}>
              A domiciliary care agency built on compassion, professionalism and a deep commitment to enabling independence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div className="grid-2">
            <ScrollReveal direction="left">
              <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>📖 Our Story</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 16, lineHeight: 1.15 }}>
                Who We Are
              </h2>
              <div className="divider-teal" style={{ marginBottom: 24 }} />
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#334155", fontSize: "0.96rem", lineHeight: 1.78, marginBottom: 18 }}>
                Othdabere H.Q. Healthcare Services Ltd is a registered domiciliary care agency committed to delivering compassionate, personalised home care. Founded to bridge the gap in quality care provision, we have grown into a trusted team of dedicated professionals serving clients across the UK and Ghana.
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#334155", fontSize: "0.96rem", lineHeight: 1.78, marginBottom: 18 }}>
                Our goal is simple: to empower individuals to maintain their independence, dignity and quality of life in the comfort of their own home, surrounded by the people and places they love.
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#334155", fontSize: "0.96rem", lineHeight: 1.78 }}>
                Over our 3+ years of operation, we have supported over 100 clients, working closely with families to co-design care that truly makes a difference.
              </p>
              <div style={{ display: "flex", gap: 20, marginTop: 32, flexWrap: "wrap" }}>
                {[{ v:"100+",l:"Clients"}, {v:"25+",l:"Carers"}, {v:"3+",l:"Years"}, {v:"98%",l:"Satisfaction"}].map(s => (
                  <div key={s.v} style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2.2rem", fontWeight: 700, color: "#0D9488" }}>{s.v}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.78rem", color: "#64748B", fontWeight: 600 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div style={{ borderRadius: 24, overflow: "hidden", height: 480, position: "relative" }}>
                <img src="/images/about.jpg" alt="Othdabere Healthcare team" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 55%,rgba(11,37,69,0.55) 100%)" }} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-pad" style={{ background: "#F8FAFD" }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>🌟 Our Foundation</span>
            <h2 className="sec-h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>Mission, Vision & Values</h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24, marginBottom: 56 }}>
            {[
              { icon:"🎯", title:"Our Mission", grad:"linear-gradient(135deg,#0B2545,#163a6b)", body:"To provide personalised, high-quality domiciliary care that enables individuals to live safely, independently and comfortably in their own homes with dignity." },
              { icon:"🌅", title:"Our Vision",  grad:"linear-gradient(135deg,#0D9488,#14B8A6)", body:"To be a trusted, leading provider of compassionate care that significantly improves wellbeing and independence for vulnerable individuals across the UK and Ghana." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div style={{ borderRadius: 22, overflow: "hidden", height: "100%" }}>
                  <div style={{ background: item.grad, padding: "28px 28px 20px" }}>
                    <div style={{ fontSize: "2rem", marginBottom: 10 }}>{item.icon}</div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 700, color: "white" }}>{item.title}</h3>
                  </div>
                  <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderTop: "none", borderRadius: "0 0 22px 22px", padding: "24px 28px" }}>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#334155", fontSize: "0.94rem", lineHeight: 1.75, margin: 0 }}>{item.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.9rem", fontWeight: 700, color: "#0B2545", textAlign: "center", marginBottom: 32 }}>Our Values</h3>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 18, padding: "24px", textAlign: "center", height: "100%" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 16, background: v.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem", margin: "0 auto 16px", boxShadow: "0 6px 20px rgba(0,0,0,0.10)" }}>{v.icon}</div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.25rem", fontWeight: 700, color: "#0B2545", marginBottom: 8 }}>{v.title}</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#64748B", fontSize: "0.86rem", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>👥 Our Team</span>
            <h2 className="sec-h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>Dedicated Professionals</h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
            {team.map((t, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "32px 20px", textAlign: "center" }}>
                  <div style={{ width: 72, height: 72, borderRadius: "50%", background: t.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", margin: "0 auto 18px", boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}>{t.emoji}</div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 700, color: "#0B2545", marginBottom: 6 }}>{t.name}</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.8rem", color: "#0D9488", fontWeight: 600, margin: 0 }}>{t.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
