"use client"

const stats = [
  {
    value: "100+",
    label: "Clients Supported",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    desc: "Across UK and Ghana",
  },
  {
    value: "25+",
    label: "Care Professionals",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    desc: "DBS checked & trained",
  },
  {
    value: "5+",
    label: "Years Experience",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    desc: "Delivering quality care",
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/></svg>,
    desc: "From independent reviews",
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
      {/* Overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(135deg, rgba(6,20,40,0.95), rgba(11,37,69,0.92))",
      }} />

      {/* Decorative pattern */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700, color: "white",
          }}>
            Making a Real Difference
          </h2>
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "rgba(255,255,255,0.6)", fontSize: "1rem", marginTop: 10,
          }}>
            Numbers that reflect our commitment to excellence
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 24 }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              backdropFilter: "blur(12px)",
              borderRadius: 20, padding: "36px 28px",
              textAlign: "center",
              transition: "transform 0.3s, background 0.3s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(13,148,136,0.2)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)" }}
            onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLDivElement).style.transform = "none" }}
            >
              <div style={{
                width: 52, height: 52, borderRadius: 14, margin: "0 auto 20px",
                background: "rgba(13,148,136,0.2)", border: "1px solid rgba(13,148,136,0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#2DD4BF",
              }}>
                {stat.icon}
              </div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "3.2rem", fontWeight: 700,
                color: "white", lineHeight: 1,
                background: "linear-gradient(135deg, #38BDF8, #2DD4BF)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>{stat.value}</div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700, color: "white",
                fontSize: "1rem", marginTop: 8, marginBottom: 4,
              }}>{stat.label}</div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.78rem", color: "rgba(255,255,255,0.5)",
              }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}