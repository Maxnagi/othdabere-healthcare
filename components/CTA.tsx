import Link from "next/link"

export default function CTA() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      padding: "100px 0",
      backgroundImage: "url('/images/cta-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      {/* Overlay */}
      <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />

      {/* Decorative */}
      <div style={{
        position: "absolute", top: -100, right: -100,
        width: 500, height: 500, borderRadius: "50%",
        border: "1px solid rgba(13,148,136,0.15)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 320, height: 320, borderRadius: "50%",
        border: "1px solid rgba(56,189,248,0.1)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 800, margin: "0 auto", padding: "0 24px",
        position: "relative", zIndex: 1, textAlign: "center",
      }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(13,148,136,0.18)",
          border: "1px solid rgba(20,184,166,0.35)",
          color: "#5EEAD4",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 700, fontSize: "0.72rem",
          letterSpacing: "0.14em", textTransform: "uppercase",
          padding: "7px 16px", borderRadius: 100,
          marginBottom: 24,
        }}>
          Ready to Get Started?
        </span>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
          fontWeight: 700, color: "white",
          lineHeight: 1.15, marginBottom: 20,
        }}>
          Let's Talk About the Care{" "}
          <span style={{
            background: "linear-gradient(135deg, #38BDF8, #2DD4BF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            You Deserve
          </span>
        </h2>

        <p style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: "1.1rem", color: "rgba(255,255,255,0.75)",
          lineHeight: 1.7, marginBottom: 16,
        }}>
          Call us today to discuss a personalised care plan for you or your loved one. Our team is ready to help.
        </p>

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.8rem", fontWeight: 600,
          color: "white", marginBottom: 40,
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#2DD4BF">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
          </svg>
          +44 7588 160799
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
          <Link href="/contact" className="btn-primary" style={{ textDecoration: "none", fontSize: "1rem", padding: "16px 36px" }}>
            Contact Us Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/referral" className="btn-secondary" style={{ textDecoration: "none", fontSize: "1rem", padding: "15px 36px" }}>
            Make a Referral
          </Link>
        </div>
      </div>
    </section>
  )
}
