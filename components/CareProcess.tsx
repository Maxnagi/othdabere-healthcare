"use client"

import ScrollReveal from "./ScrollReveal"

const steps = [
  {
    num: "01",
    gradient: "linear-gradient(135deg,#F43F5E,#EC4899)",
    shadow: "rgba(244,63,94,0.35)",
    emoji: "💬",
    title: "Initial Consultation",
    desc: "We speak with you and your family to fully understand care needs, preferences and goals.",
  },
  {
    num: "02",
    gradient: "linear-gradient(135deg,#3B82F6,#6366F1)",
    shadow: "rgba(59,130,246,0.35)",
    emoji: "📋",
    title: "Care Assessment",
    desc: "Our team visits and creates a fully personalised care plan tailored to the individual.",
  },
  {
    num: "03",
    gradient: "linear-gradient(135deg,#10B981,#14B8A6)",
    shadow: "rgba(16,185,129,0.35)",
    emoji: "🫶",
    title: "Care Delivery",
    desc: "Your matched, trained carer begins providing compassionate, professional support.",
  },
  {
    num: "04",
    gradient: "linear-gradient(135deg,#8B5CF6,#A855F7)",
    shadow: "rgba(139,92,246,0.35)",
    emoji: "📊",
    title: "Ongoing Review",
    desc: "We review and adapt your care plan continuously, keeping families fully informed.",
  },
]

export default function CareProcess() {
  return (
    <section className="section-pad" style={{ background: "white" }}>
      <div className="container">

        {/* Header */}
        <ScrollReveal style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            ⚡ Our Process
          </span>
          <h2 className="sec-h2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0B2545",
            marginTop: 16, marginBottom: 12,
          }}>
            How We Begin Your Care Journey
          </h2>
          <div className="divider-teal" style={{ margin: "0 auto 20px" }} />
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#64748B", fontSize: "1rem",
            maxWidth: 500, margin: "0 auto", lineHeight: 1.7,
          }}>
            Getting started is simple. We guide you through every step to ensure seamless, high-quality care.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <div className="process-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 0, position: "relative",
        }}>
          {/* Connecting line */}
          <div className="process-line" style={{
            position: "absolute", top: 52, left: "12.5%", right: "12.5%", height: 2,
            background: "linear-gradient(90deg,#F43F5E,#3B82F6,#10B981,#8B5CF6)",
            zIndex: 0, opacity: 0.25,
          }} />

          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 120} style={{ padding: "0 16px", textAlign: "center", position: "relative", zIndex: 1 }}>
              {/* Icon circle */}
              <div style={{ position: "relative", marginBottom: 24, display: "inline-block" }}>
                <div style={{
                  width: 84, height: 84, borderRadius: 24,
                  background: step.gradient,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem",
                  boxShadow: `0 10px 30px ${step.shadow}`,
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px) scale(1.05)"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 44px ${step.shadow}` }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 10px 30px ${step.shadow}` }}
                >
                  {step.emoji}
                </div>

                {/* Step number badge */}
                <div style={{
                  position: "absolute", top: -10, right: -10,
                  width: 28, height: 28, borderRadius: "50%",
                  background: step.gradient,
                  border: "2px solid white",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800, fontSize: "0.62rem", color: "white",
                }}>
                  {step.num}
                </div>
              </div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.28rem", fontWeight: 700,
                color: "#0B2545", marginBottom: 10,
              }}>{step.title}</h3>

              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#64748B", fontSize: "0.87rem", lineHeight: 1.65,
              }}>{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
