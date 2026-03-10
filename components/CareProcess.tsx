const steps = [
  {
    num: "01",
    iconClass: "icon-bg-teal",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Initial Consultation",
    desc: "We speak with you and your family to fully understand care needs, preferences, and goals for living at home.",
  },
  {
    num: "02",
    iconClass: "icon-bg-blue",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Care Assessment",
    desc: "Our team conducts a thorough in-home assessment and creates a personalised care plan tailored to your needs.",
  },
  {
    num: "03",
    iconClass: "icon-bg-green",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Care Delivery",
    desc: "Your matched, trained carer begins providing compassionate, professional support as scheduled.",
  },
  {
    num: "04",
    iconClass: "icon-bg-purple",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Ongoing Monitoring",
    desc: "We review and adapt your care plan continuously, keeping families informed at every step.",
  },
]

export default function CareProcess() {
  return (
    <section style={{ padding: "100px 0", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor"/>
            </svg>
            Our Process
          </span>
          <h2 style={{
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
            maxWidth: 520, margin: "0 auto", lineHeight: 1.7,
          }}>
            Getting started is simple. We guide you through every step to ensure seamless, high-quality care.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 0, position: "relative" }}>

          {/* Connecting line (desktop) */}
          <div style={{
            position: "absolute", top: 52, left: "12.5%", right: "12.5%", height: 2,
            background: "linear-gradient(90deg, #0D9488, #38BDF8, #16A34A, #7C3AED)",
            zIndex: 0, opacity: 0.3,
          }} />

          {steps.map((step, i) => (
            <div key={i} style={{
              display: "flex", flexDirection: "column", alignItems: "center",
              textAlign: "center", padding: "0 20px", position: "relative", zIndex: 1,
            }}>
              {/* Number + Icon */}
              <div style={{ position: "relative", marginBottom: 24 }}>
                <div className={step.iconClass} style={{
                  width: 80, height: 80, borderRadius: 20,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                }}>
                  {step.icon}
                </div>
                <div style={{
                  position: "absolute", top: -10, right: -10,
                  width: 28, height: 28, borderRadius: "50%",
                  background: "linear-gradient(135deg, #0B2545, #163a6b)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 800, fontSize: "0.65rem", color: "white",
                }}>
                  {step.num}
                </div>
              </div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.3rem", fontWeight: 700,
                color: "#0B2545", marginBottom: 10,
              }}>{step.title}</h3>

              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#64748B", fontSize: "0.88rem",
                lineHeight: 1.65,
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
