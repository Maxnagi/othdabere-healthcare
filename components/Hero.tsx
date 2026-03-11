"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const statCards = [
  { value: "100+", label: "Clients Supported",  color: "#0D9488" },
  { value: "25+",  label: "Care Professionals",  color: "#6366F1" },
  { value: "3+",   label: "Years Experience",    color: "#F59E0B" },
  { value: "98%",  label: "Satisfaction Rate",   color: "#EC4899" },
]

const badges = ["CQC Registered","DBS Checked Staff","24/7 Support","Personalised Plans"]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => {
      const el = heroRef.current?.querySelector<HTMLElement>(".hero-bg")
      if (el) el.style.transform = `translateY(${window.scrollY * 0.28}px)`
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section ref={heroRef} style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", overflow:"hidden" }}>

      {/* BG */}
      <div className="hero-bg" style={{ position:"absolute", inset:"-15% 0 0 0", backgroundImage:"url('/images/hero-home.jpg')", backgroundSize:"cover", backgroundPosition:"center", willChange:"transform" }} />
      <div className="hero-overlay" style={{ position:"absolute", inset:0 }} />

      {/* Orbs */}
      <div style={{ position:"absolute", top:"8%", right:"12%", width:340, height:340, borderRadius:"50%", background:"radial-gradient(circle, rgba(13,148,136,0.18) 0%, transparent 70%)", animation:"float 6s ease-in-out infinite", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:"20%", left:"6%", width:220, height:220, borderRadius:"50%", background:"radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)", animation:"float 8s ease-in-out infinite 2s", pointerEvents:"none" }} />

      {/* Content */}
      <div className="container" style={{ position:"relative", zIndex:1, paddingTop:80, paddingBottom:60, width:"100%" }}>
        <div className="hero-text-block">

          {/* Badge */}
          <div className="anim-fade-up" style={{ marginBottom:22 }}>
            <span style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(13,148,136,0.18)", border:"1px solid rgba(20,184,166,0.38)", color:"#5EEAD4", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:700, fontSize:"0.72rem", letterSpacing:"0.14em", textTransform:"uppercase", padding:"7px 16px", borderRadius:100 }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:"#2DD4BF", display:"inline-block", animation:"pulseRing 2s ease-in-out infinite" }} />
              Professional Domiciliary Care — UK & Ghana
            </span>
          </div>

          {/* Heading */}
          <h1 className="anim-fade-up delay-100 hero-h1-main" style={{ fontFamily:"'Cormorant Garamond',serif", fontWeight:700, color:"white", lineHeight:1.08, marginBottom:22 }}>
            Compassionate Care{" "}
            <span style={{ background:"linear-gradient(135deg,#38BDF8,#2DD4BF,#10B981)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              in the Comfort
            </span>{" "}
            of Your Home
          </h1>

          {/* Subtext */}
          <p className="anim-fade-up delay-200" style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"clamp(0.95rem,2vw,1.18rem)", color:"rgba(255,255,255,0.78)", lineHeight:1.74, marginBottom:36, maxWidth:600 }}>
            Othdabere H.Q. Healthcare Services provides professional domiciliary care designed to support individuals to live independently with dignity, safety, and comfort.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up delay-300 hero-cta-row" style={{ display:"flex", flexWrap:"wrap", gap:12, marginBottom:44 }}>
            <Link href="/contact" className="btn-primary" style={{ textDecoration:"none", fontSize:"1rem", padding:"16px 32px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Get Care Today
            </Link>
            <Link href="/services" className="btn-secondary" style={{ textDecoration:"none", fontSize:"1rem", padding:"15px 32px" }}>
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          {/* Trust badges */}
          <div className="anim-fade-up delay-400" style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
            {badges.map(b => (
              <span key={b} style={{ display:"inline-flex", alignItems:"center", gap:6, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(255,255,255,0.18)", color:"rgba(255,255,255,0.88)", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500, fontSize:"0.77rem", padding:"6px 13px", borderRadius:100 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* ── Stat cards — controlled entirely by CSS ── */}
        <div className="anim-fade-up delay-500 hero-stat-grid">
          {statCards.map((s, i) => (
            <div key={i} className="stat-card"
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,0.16)"; (e.currentTarget as HTMLDivElement).style.transform="translateY(-4px)" }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.background="rgba(255,255,255,0.09)"; (e.currentTarget as HTMLDivElement).style.transform="none" }}
            >
              <div className="stat-value" style={{ color: s.color }}>{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position:"absolute", bottom:-1, left:0, right:0, lineHeight:0, pointerEvents:"none" }}>
        <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" style={{ width:"100%", height:56 }}>
          <path d="M0 56L1440 56L1440 28C1200 56 960 0 720 20C480 40 240 8 0 28L0 56Z" fill="#F8FAFD"/>
        </svg>
      </div>
    </section>
  )
}