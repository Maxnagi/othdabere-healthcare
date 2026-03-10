import Link from "next/link"

export default function Hero() {
  return (
    <section style={{
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
    }}>
      {/* Background Image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/hero-home.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />

      {/* Gradient Overlay */}
      <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />

      {/* Decorative Circles */}
      <div style={{
        position: "absolute", top: "15%", right: "8%",
        width: 400, height: 400, borderRadius: "50%",
        border: "1px solid rgba(13,148,136,0.2)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "20%", right: "11%",
        width: 280, height: 280, borderRadius: "50%",
        border: "1px solid rgba(56,189,248,0.15)",
        pointerEvents: "none",
      }} />

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "100px 24px 80px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 760 }}>

          {/* Label */}
          <div className="anim-fade-up opacity-0-init" style={{ marginBottom: 24 }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(13,148,136,0.18)",
              border: "1px solid rgba(20,184,166,0.35)",
              color: "#5EEAD4",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 700, fontSize: "0.72rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              padding: "7px 16px", borderRadius: 100,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#2DD4BF", display: "inline-block" }} />
              Professional Domiciliary Care
            </span>
          </div>

          {/* Heading */}
          <h1 className="anim-fade-up opacity-0-init delay-100" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 700, color: "white",
            lineHeight: 1.1, marginBottom: 24,
          }}>
            Compassionate Care{" "}
            <span style={{
              background: "linear-gradient(135deg, #38BDF8, #2DD4BF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              in the Comfort
            </span>{" "}
            of Your Home
          </h1>

          {/* Subtitle */}
          <p className="anim-fade-up opacity-0-init delay-200" style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.7, marginBottom: 40, maxWidth: 580,
          }}>
            Othdabere H.Q. Healthcare Services provides professional domiciliary care designed to support individuals to live independently with dignity, safety, and comfort.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up opacity-0-init delay-300" style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 60 }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", fontSize: "1rem", padding: "16px 32px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
              </svg>
              Get Care Today
            </Link>
            <Link href="/services" className="btn-secondary" style={{ textDecoration: "none", fontSize: "1rem", padding: "15px 32px" }}>
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="anim-fade-up opacity-0-init delay-400" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["CQC Registered", "DBS Checked Staff", "24/7 Support", "Personalised Plans"].map(badge => (
              <span key={badge} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "rgba(255,255,255,0.88)",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500, fontSize: "0.78rem",
                padding: "7px 14px", borderRadius: 100,
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Stats */}
        <div className="anim-fade-up opacity-0-init delay-500" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: 16, marginTop: 64,
          maxWidth: 680,
        }}>
          {[
            { value: "100+", label: "Clients Supported" },
            { value: "25+", label: "Care Staff" },
            { value: "5+", label: "Years Experience" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map(stat => (
            <div key={stat.value} style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              borderRadius: 16, padding: "20px",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.2rem", fontWeight: 700,
                color: "white", lineHeight: 1,
              }}>{stat.value}</div>
              <div style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.78rem", color: "rgba(255,255,255,0.65)",
                marginTop: 6, fontWeight: 500,
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ width: "100%", height: 60 }}>
          <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 20C480 40 240 10 0 30L0 60Z" fill="#F8FAFD"/>
        </svg>
      </div>
    </section>
  )
}
