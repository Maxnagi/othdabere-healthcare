import Link from "next/link"
import ScrollReveal from "./ScrollReveal"

export default function CTA() {
  return (
    <section style={{
      position: "relative", overflow: "hidden",
      backgroundImage: "url('/images/cta-bg.jpg')",
      backgroundSize: "cover", backgroundPosition: "center",
      padding: "100px 0",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(6,20,40,0.95),rgba(11,37,69,0.88),rgba(13,148,136,0.45))" }} />
      <div style={{ position: "absolute", top: "10%", right: "4%", width: 280, height: 280, borderRadius: "50%", background: "radial-gradient(circle,rgba(20,184,166,0.18),transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "3%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(139,92,246,0.15),transparent 70%)", pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <ScrollReveal>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)",
            color: "#5EEAD4", fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.14em",
            textTransform: "uppercase", padding: "7px 16px", borderRadius: 100,
            marginBottom: 24, display: "inline-flex",
          }}>
            📞 Get In Touch
          </span>

          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem,5vw,3.6rem)",
            fontWeight: 700, color: "white",
            lineHeight: 1.12, marginBottom: 16,
          }}>
            Need Professional Home Care?<br />
            <span className="text-shimmer">We Are Here for You.</span>
          </h2>

          <p style={{
            fontFamily: "'Plus Jakarta Sans',sans-serif",
            color: "rgba(255,255,255,0.72)", fontSize: "1.05rem",
            maxWidth: 520, margin: "0 auto 14px", lineHeight: 1.7,
          }}>
            Call our friendly team today to discuss a personalised care plan for you or your loved one.
          </p>

          <a href="tel:+447588160799" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.9rem", fontWeight: 700,
            color: "#2DD4BF", textDecoration: "none", display: "block",
            marginBottom: 36, letterSpacing: "0.02em",
          }}>
            +44 7588 160799
          </a>

          <div className="cta-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "1rem", padding: "16px 36px" }}>
              📋 Contact Us Today
            </Link>
            <Link href="/referral" className="btn-secondary" style={{ fontSize: "1rem", padding: "15px 36px" }}>
              🔗 Refer Someone
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
