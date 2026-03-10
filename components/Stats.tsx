"use client"

import ScrollReveal from "./ScrollReveal"

const stats = [
  {
    value: "100+",
    label: "Clients Supported",
    sub: "Across UK & Ghana",
    emoji: "👥",
    grad: "linear-gradient(135deg,#38BDF8,#2DD4BF)",
    glow: "rgba(56,189,248,0.3)",
  },
  {
    value: "25+",
    label: "Care Professionals",
    sub: "DBS checked & trained",
    emoji: "🛡️",
    grad: "linear-gradient(135deg,#a78bfa,#818cf8)",
    glow: "rgba(167,139,250,0.3)",
  },
  {
    value: "3+",
    label: "Years Experience",
    sub: "Delivering quality care",
    emoji: "🏆",
    grad: "linear-gradient(135deg,#f97316,#f59e0b)",
    glow: "rgba(249,115,22,0.3)",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    sub: "From independent reviews",
    emoji: "⭐",
    grad: "linear-gradient(135deg,#34d399,#22C55E)",
    glow: "rgba(52,211,153,0.3)",
  },
]

export default function Stats() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      padding: "90px 0",
      backgroundImage: "url('/images/stats-bg.jpg')",
      backgroundSize: "cover", backgroundPosition: "center",
    }}>
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg,rgba(6,20,40,0.96),rgba(11,37,69,0.93))",
      }} />
      {/* Dot pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      {/* Color blobs */}
      <div style={{ position: "absolute", top: "20%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(13,148,136,0.15),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.12),transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <ScrollReveal style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700, color: "white", marginBottom: 10,
          }}>
            Making a Real Difference
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "rgba(255,255,255,0.55)", fontSize: "1rem",
          }}>
            Numbers that reflect our commitment to excellence
          </p>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 }}>
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(14px)",
                borderRadius: 22, padding: "36px 24px",
                textAlign: "center",
                transition: "transform 0.32s, background 0.32s, box-shadow 0.32s",
                cursor: "default",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = "rgba(255,255,255,0.11)"
                el.style.transform = "translateY(-8px)"
                el.style.boxShadow = `0 24px 48px ${s.glow}`
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.background = "rgba(255,255,255,0.06)"
                el.style.transform = "none"
                el.style.boxShadow = "none"
              }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{s.emoji}</div>

                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "3rem", fontWeight: 700,
                  background: s.grad,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                }}>{s.value}</div>

                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700, color: "white",
                  fontSize: "0.97rem", marginTop: 8, marginBottom: 4,
                }}>{s.label}</div>

                <div style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "0.75rem", color: "rgba(255,255,255,0.45)",
                }}>{s.sub}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
