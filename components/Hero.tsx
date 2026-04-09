"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const slides = [
  { src: "/images/hero-home.jpg",    alt: "Compassionate home care" },
  { src: "/images/care1.jpg",        alt: "Carer supporting client" },
  { src: "/images/homecare1.jpg",    alt: "Domiciliary care at home" },
  { src: "/images/hero-care.jpg",    alt: "Healthcare professional" },
]

const badges = ["CQC Registered", "DBS Checked Staff", "24/7 Support", "Personalised Plans"]

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
      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#061428",
      }}>

        {/* Slideshow images — RIGHT side panel, full bleed */}
        <div style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url('${slide.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: i === current ? 1 : 0,
                transition: "opacity 1.1s ease-in-out",
              }}
            />
          ))}
          {/* Gradient: strong dark on left for text, fades to near-transparent on right */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(6,20,40,0.96) 0%, rgba(6,20,40,0.88) 38%, rgba(6,20,40,0.55) 58%, rgba(6,20,40,0.18) 78%, rgba(6,20,40,0.04) 100%)",
            zIndex: 1,
          }} />
        </div>

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: 100, paddingBottom: 80, width: "100%" }}>
          <div style={{ maxWidth: 620 }}>

            {/* Brand pill */}
            <div className="anim-fade-up" style={{ marginBottom: 24 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(13,148,136,0.18)",
                border: "1px solid rgba(20,184,166,0.38)",
                color: "#5EEAD4",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.14em",
                textTransform: "uppercase", padding: "7px 16px", borderRadius: 100,
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#2DD4BF", display: "inline-block", animation: "pulseRing 2s ease-in-out infinite" }} />
                Domiciliary Care · UK &amp; Ghana
              </span>
            </div>

            {/* Main heading */}
            <h1 className="anim-fade-up delay-75" style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.06,
              marginBottom: 20,
              fontSize: "clamp(2.6rem,5.5vw,4.2rem)",
            }}>
              Compassionate Care{" "}
              <span style={{
                background: "linear-gradient(135deg,#38BDF8,#2DD4BF,#10B981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                in the Comfort
              </span>{" "}
              of Your Home
            </h1>

            {/* Company name line */}
            <div className="anim-fade-up delay-100" style={{ marginBottom: 18 }}>
              <span style={{
                display: "inline-block",
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 800,
                fontSize: "clamp(0.72rem,1.4vw,0.92rem)",
                letterSpacing: "0.04em",
                background: "linear-gradient(135deg,#38BDF8 0%,#2DD4BF 50%,#10B981 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textTransform: "uppercase",
              }}>
                OTHDABERE HIGH QUALITY HEALTHCARE SERVICES LTD (OHQHS)
              </span>
            </div>

            {/* Tagline */}
            <p className="anim-fade-up delay-150" style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "clamp(0.92rem,1.6vw,1.05rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.72,
              marginBottom: 32,
              maxWidth: 520,
            }}>
              A Voice for the Voiceless — delivering dignity, compassion and professional care for vulnerable individuals in their own homes.
            </p>

            {/* CTA */}
            <div className="anim-fade-up delay-200" style={{ marginBottom: 36 }}>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 9,
                background: "linear-gradient(135deg,#0D9488,#0891B2)",
                color: "white",
                padding: "13px 28px",
                borderRadius: 50,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                textDecoration: "none",
                boxShadow: "0 6px 22px rgba(13,148,136,0.42)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(13,148,136,0.55)" }}
                onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 22px rgba(13,148,136,0.42)" }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Get Started
              </Link>
            </div>

            {/* Trust badges */}
            <div className="anim-fade-up delay-250" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {badges.map(b => (
                <span key={b} style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "rgba(255,255,255,0.82)",
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontWeight: 500, fontSize: "0.74rem",
                  padding: "5px 12px", borderRadius: 100,
                }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {b}
                </span>
              ))}
            </div>

            {/* Slide dots */}
            <div style={{ display: "flex", gap: 8, marginTop: 40 }}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); startTimer() }}
                  aria-label={`Slide ${i + 1}`}
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: i === current ? "#2DD4BF" : "rgba(255,255,255,0.28)",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    transition: "all 0.3s ease",
                  }}
                />
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

      {/* ── STATS STRIP (below hero) ── */}
      <section style={{ background: "#F8FAFD", padding: "0" }}>
        <div style={{
          background: "white",
          borderBottom: "1px solid #E2E8F0",
          boxShadow: "0 4px 24px rgba(11,37,69,0.06)",
        }}>
          <div className="container">
            <div className="stats-strip-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 0,
            }}>
              {[
                { value: "100+", label: "Clients Supported",   color: "#0D9488",  icon: "🫶" },
                { value: "25+",  label: "Care Professionals",  color: "#6366F1",  icon: "👩‍⚕️" },
                { value: "3+",   label: "Years Experience",    color: "#F59E0B",  icon: "⭐" },
                { value: "98%",  label: "Satisfaction Rate",   color: "#EC4899",  icon: "✅" },
              ].map((s, i, arr) => (
                <div key={i} style={{
                  padding: "32px 24px",
                  textAlign: "center",
                  borderRight: i < arr.length - 1 ? "1px solid #E2E8F0" : "none",
                  transition: "background 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = "#F8FAFD"}
                  onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = "white"}
                >
                  <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>{s.icon}</div>
                  <div style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontWeight: 700,
                    fontSize: "2.4rem",
                    color: s.color,
                    lineHeight: 1,
                    marginBottom: 6,
                  }}>{s.value}</div>
                  <div style={{
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    color: "#64748B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
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
