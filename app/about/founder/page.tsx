import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"
import ScrollReveal from "@/components/ScrollReveal"
import Link from "next/link"

const pillars = [
  {
    num: "1",
    title: "A Shift Toward Person-Centred Care",
    body: "Over 15 years, I witnessed how hospital environments, while necessary, can be daunting and impersonal. Domiciliary care allows me to focus on the individual rather than the procedure. My goal is to build a service that treats people as individuals with unique histories, preferences, and goals, rather than just patients occupying a bed.",
    grad: "linear-gradient(135deg,#0D9488,#14B8A6)",
    icon: "🫶",
  },
  {
    num: "2",
    title: "Supporting Independence & Dignity",
    body: "I believe that people thrive when they are in familiar surroundings. My agency is dedicated to helping individuals stay independent in their own homes for longer, which can significantly improve their mental and emotional wellbeing, especially for those with dementia or chronic illnesses.",
    grad: "linear-gradient(135deg,#3B82F6,#6366F1)",
    icon: "🏡",
  },
  {
    num: "3",
    title: "Addressing the Demand for Quality Care",
    body: "With an ageing population and a rising need for specialised care, there is a clear demand for care providers who truly care. I want to use my clinical background to ensure that the home care provided is not just companionship but also safe, skilled, and professional.",
    grad: "linear-gradient(135deg,#F59E0B,#F97316)",
    icon: "⭐",
  },
  {
    num: "4",
    title: "Bridging the Gap Between Hospital and Home",
    body: "Having worked in acute care, I understand the importance of a smooth transition from hospital to home. I want to offer specialised reablement services, helping patients regain their independence after discharge, which reduces hospital readmissions.",
    grad: "linear-gradient(135deg,#EC4899,#A855F7)",
    icon: "🔗",
  },
  {
    num: "5",
    title: "Creating a Better Environment for Caregivers",
    body: "Having worked in challenging environments, I am committed to building a positive, supportive culture for my staff. I know that well-trained, compassionate staff — who are nurtured and respected — deliver the highest quality care to clients.",
    grad: "linear-gradient(135deg,#10B981,#0D9488)",
    icon: "🌱",
  },
  {
    num: "6",
    title: "Long-Term Relationships & Community Impact",
    body: "I want to build lasting, meaningful relationships with clients and their families, becoming a trusted part of their lives rather than a fleeting presence. I want to make a tangible, positive difference directly within my community.",
    grad: "linear-gradient(135deg,#0B2545,#163a6b)",
    icon: "🌍",
  },
]

export default function FounderPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{ position: "relative", padding: "110px 0 80px", backgroundImage: "url('/images/hero-about.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.75)", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.84rem", textDecoration: "none", marginBottom: 20, transition: "color 0.2s" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Back to About
            </Link>
            <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
              👩‍⚕️ Meet the Founder
            </span>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.4rem,6vw,4.5rem)", fontWeight: 700, color: "white", lineHeight: 1.08, marginTop: 20, marginBottom: 20 }}>
              Dorothy <span className="text-shimmer">Ohenewa</span>
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.78)", fontSize: "1.1rem", maxWidth: 560, lineHeight: 1.72 }}>
              Registered Nurse · Social Worker · Founder & Director of OHQHS
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Intro */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: "flex-start", gap: 56 }}>
            {/* Photo */}
            <ScrollReveal direction="left">
              <div style={{ position: "relative", top: 0 }}>
                <div style={{ borderRadius: 28, overflow: "hidden", boxShadow: "0 24px 64px rgba(11,37,69,0.18)", aspectRatio: "3/4" }}>
                  <img src="/images/founder.jpeg" alt="Dorothy Ohenewa – Founder" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                </div>
                {/* Award badge */}
                <div style={{ marginTop: 20, background: "linear-gradient(135deg,#FEF9C3,#FEF3C7)", border: "1.5px solid #F59E0B44", borderRadius: 18, padding: "18px 22px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ fontSize: "2rem", flexShrink: 0 }}>🏆</div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.84rem", color: "#92400E" }}>Best Senior Nurse of the Year — 2018</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.77rem", color: "#A16207", marginTop: 2 }}>Laurels Group of Care Homes, London, UK</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem", color: "#78350F", marginTop: 2 }}>Trophy + fully-funded Level 5 Leadership & Strategic Management Scholarship</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Bio text */}
            <ScrollReveal direction="right">
              <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>📖 Her Story</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, color: "#0B2545", lineHeight: 1.18, marginTop: 16, marginBottom: 8 }}>
                From NHS Nursing Manager to Compassionate Care Pioneer
              </h2>
              <div className="divider-teal" style={{ marginBottom: 24 }} />

              {[
                `My name is Dorothy Ohenewa, a trained social worker with a background in Leadership and Strategic Management in the United Kingdom, and over a decade of experience in non-profit organisation management, family services and providing primary health care.`,
                `As a highly dedicated Registered Nurse with 15 years of comprehensive clinical experience and several years of progressive leadership as a Nursing Manager in the United Kingdom, I am committed to delivering exceptional patient care while fostering a supportive and high-performing clinical team and domiciliary care.`,
                `My career is defined by a passion for both bedside care and clinical excellence, bridging the gap between operational demands and compassionate, person-centred nursing. My hard work and contribution to the NHS and the healthcare system in the UK means that I was adjudged the best senior nurse in 2018 by the Laurels Group of Care Homes in London, United Kingdom.`,
                `I was awarded the Best Senior Nurse of the Year in 2018 with a trophy and a scholarship fully funded to embark on Level 5 Leadership and Strategic Management by the Laurels Care Home, London.`,
                `In my recent management roles, I have successfully led multidisciplinary teams, improving patient satisfaction scores and reducing operational bottlenecks through strategic staffing, mentoring, and implementing robust clinical governance. I pride myself on my ability to lead by example, mentoring junior staff, and creating a collaborative environment focused on continuous quality improvement. My expertise includes clinical risk assessment, budgetary management, staff recruitment, and ensuring compliance with healthcare regulations.`,
                `After 15 years working as a nurse in traditional healthcare settings, I decided to establish my own domiciliary care agency — to move from transactional, time-constrained care to providing compassionate, person-centred support in the comfort of a person's own home. My decision is driven by a commitment to elevating care quality and improving patient/client outcomes through tailored community-based support. I observed there was a major need in supporting vulnerable people and people with disabilities with their daily care needs in their own homes.`,
                `Othdabere High Quality Healthcare Services Ltd Agency is the culmination of my experience, passion, and belief that the best care is compassionate, tailored, and provided at home.`,
              ].map((para, i) => (
                <p key={i} style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#334155", fontSize: "0.95rem", lineHeight: 1.82, marginBottom: 16 }}>
                  {para}
                </p>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section className="section-pad" style={{ background: "#F8FAFD" }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>💡 Why Domiciliary Care?</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Working with OHQHS Enables…
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>
            {pillars.map((p, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, overflow: "hidden", height: "100%" }}>
                  <div style={{ background: p.grad, padding: "20px 24px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>{p.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 3 }}>Pillar {p.num}</div>
                      <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.2rem", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.2 }}>{p.title}</h3>
                    </div>
                  </div>
                  <div style={{ padding: "20px 24px 24px" }}>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#334155", fontSize: "0.88rem", lineHeight: 1.75, margin: 0 }}>{p.body}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>👥 The Team</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              The People Who Make It Possible
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#64748B", fontSize: "0.96rem", maxWidth: 520, margin: "0 auto" }}>
              Our dedicated team of compassionate professionals, hand-picked and trained to deliver care with dignity, warmth, and expertise.
            </p>
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 28 }}>
            {[
              { img: "/images/Team-1.jpeg", role: "Trained Carer & Support Worker" },
              { img: "/images/Team-2.jpeg", role: "Domiciliary Care Professional" },
              { img: "/images/Team-3.jpeg", role: "Health & Wellbeing Specialist" },
            ].map((member, i) => (
              <ScrollReveal key={i} delay={i * 120}>
                <div className="card-lift" style={{ borderRadius: 22, overflow: "hidden", background: "white", border: "1.5px solid #E2E8F0", boxShadow: "0 4px 24px rgba(11,37,69,0.07)" }}>
                  <div style={{ height: 320, overflow: "hidden", position: "relative" }}>
                    <img
                      src={member.img}
                      alt={member.role}
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.5s ease" }}
                      onMouseEnter={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1.06)"}
                      onMouseLeave={e => (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 55%,rgba(11,37,69,0.4) 100%)" }} />
                  </div>
                  <div style={{ padding: "20px 24px 24px", textAlign: "center" }}>
                    <div style={{ width: 42, height: 4, borderRadius: 4, background: "linear-gradient(135deg,#0D9488,#38BDF8)", margin: "0 auto 14px" }} />
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.82rem", color: "#0D9488", fontWeight: 600, margin: 0 }}>{member.role}</p>
                  </div>
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
