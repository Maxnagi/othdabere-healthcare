"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const slides = [
  { src: "/images/hero-home.jpg",  alt: "Compassionate home care" },
  { src: "/images/care1.jpg",      alt: "Carer supporting client" },
  { src: "/images/homecare1.jpg",  alt: "Domiciliary care at home" },
  { src: "/images/hero-care.jpg",  alt: "Healthcare professional" },
]

const badges = ["CQC Registered", "DBS Checked Staff", "24/7 Support", "Personalised Plans"]

const stats = [
  { value: "100+", label: "Clients Supported",  color: "#0D9488", icon: "🫶" },
  { value: "25+",  label: "Care Professionals", color: "#6366F1", icon: "👩‍⚕️" },
  { value: "3+",   label: "Years Experience",   color: "#F59E0B", icon: "⭐" },
  { value: "98%",  label: "Satisfaction Rate",  color: "#EC4899", icon: "✅" },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
    }, 4500)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [])

  return (
    <>
      {/* HERO */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#061428",
      }}>

        {/* Slideshow */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {slides.map((slide, i) => (
            <div key={i} style={{
              position: "absolute", inset: 0,
              backgroundImage: "url('" + slide.src + "')",
              backgroundSize: "cover", backgroundPosition: "center",
              opacity: i === current ? 1 : 0,
              transition: "opacity 1.1s ease-in-out",
            }} />
          ))}
          <div style={{
            position: "absolute", inset: 0, zIndex: 1,
            background: "linear-gradient(to right, rgba(6,20,40,0.96) 0%, rgba(6,20,40,0.88) 36%, rgba(6,20,40,0.55) 58%, rgba(6,20,40,0.16) 78%, rgba(6,20,40,0.04) 100%)",
          }} />
        </div>

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 100, paddingBottom: 80, width: "100%" }}>
          <div style={{ maxWidth: 600 }}>

            {/* 1 — INTRO HEADING */}
            <h1 className="anim-fade-up" style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              marginBottom: 16,
              fontSize: "clamp(2rem,4.2vw,3.2rem)",
            }}>
              Compassionate care{" "}
              <span style={{
                background: "linear-gradient(135deg,#38BDF8,#2DD4BF,#10B981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>in the comfort</span>{" "}
              of your home
            </h1>

            {/* 2 — COMPANY NAME */}
            <div className="anim-fade-up delay-75" style={{ marginBottom: 16 }}>
              <span style={{
                display: "inline-block",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(0.78rem,1.5vw,1rem)",
                letterSpacing: "0.03em",
                background: "linear-gradient(135deg,#38BDF8 0%,#2DD4BF 50%,#10B981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textTransform: "uppercase",
                lineHeight: 1.45,
              }}>
                OTHDABERE HIGH QUALITY HEALTHCARE SERVICES LTD (OHQHS)
              </span>
            </div>

            {/* 3 — SERVICE AREA */}
            <div className="anim-fade-up delay-100" style={{ marginBottom: 22 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(13,148,136,0.18)",
                border: "1px solid rgba(20,184,166,0.38)",
                color: "#5EEAD4",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 600, fontSize: "0.82rem",
                letterSpacing: "0.06em",
                padding: "7px 16px", borderRadius: 100,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2DD4BF", display: "inline-block", animation: "pulseRing 2s ease-in-out infinite" }} />
                Domiciliary Care · UK &amp; Ghana
              </span>
            </div>

            {/* 4 — SHORT TAGLINE */}
            <p className="anim-fade-up delay-150" style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "clamp(0.9rem,1.5vw,1rem)",
              color: "rgba(255,255,255,0.68)",
              lineHeight: 1.6,
              marginBottom: 32,
              maxWidth: 440,
            }}>
              A voice for the voiceless.
            </p>

            {/* CTA */}
            <div className="anim-fade-up delay-200" style={{ marginBottom: 32 }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: "linear-gradient(135deg,#0D9488,#0891B2)",
                color: "white", padding: "12px 26px", borderRadius: 50,
                fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.88rem",
                textDecoration: "none", boxShadow: "0 6px 22px rgba(13,148,136,0.42)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(13,148,136,0.55)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 22px rgba(13,148,136,0.42)" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Get Started
              </Link>
            </div>

            {/* Trust badges */}
            <div className="anim-fade-up delay-250" style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {badges.map(b => (
                <span key={b} style={{
                  display: "inline-flex", alignItems: "center", gap: 5,
                  background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)",
                  color: "rgba(255,255,255,0.78)", fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: 500, fontSize: "0.7rem", padding: "5px 11px", borderRadius: 100,
                }}>
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {b}
                </span>
              ))}
            </div>

            {/* Slide dots */}
            <div style={{ display: "flex", gap: 7, marginTop: 36 }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => { setCurrent(i); startTimer() }} aria-label={"Slide " + (i + 1)} style={{
                  width: i === current ? 26 : 7, height: 7, borderRadius: 4,
                  background: i === current ? "#2DD4BF" : "rgba(255,255,255,0.28)",
                  border: "none", cursor: "pointer", padding: 0, transition: "all 0.3s ease",
                }} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: -1, left: 0, right: 0, lineHeight: 0, pointerEvents: "none", zIndex: 3 }}>
          <svg viewBox="0 0 1440 56" fill="none" preserveAspectRatio="none" style={{ width: "100%", height: 56 }}>
            <path d="M0 56L1440 56L1440 28C1200 56 960 0 720 20C480 40 240 8 0 28L0 56Z" fill="#F8FAFD"/>
          </svg>
        </div>
      </section>

      {/* STATS STRIP — always 4 columns, compact on mobile via clamp() */}
      <section style={{ background: "#F8FAFD" }}>
        <div style={{ background: "white", borderBottom: "1px solid #E2E8F0", boxShadow: "0 4px 20px rgba(11,37,69,0.06)" }}>
          <div className="container" style={{ padding: "0 16px" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  padding: "clamp(10px,2.5vw,22px) clamp(4px,1.2vw,14px)",
                  textAlign: "center",
                  borderRight: i < stats.length - 1 ? "1px solid #E2E8F0" : "none",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#F8FAFD"}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "white"}
                >
                  <div style={{ fontSize: "clamp(0.8rem,1.8vw,1.1rem)", marginBottom: 3 }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.3rem,3.2vw,2.1rem)",
                    color: s.color,
                    lineHeight: 1,
                    marginBottom: 4,
                  }}>{s.value}</div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: "clamp(0.5rem,1.1vw,0.7rem)",
                    fontWeight: 600,
                    color: "#64748B",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    lineHeight: 1.3,
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
