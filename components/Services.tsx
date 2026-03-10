"use client"

import Link from "next/link"

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
      </svg>
    ),
    iconClass: "icon-bg-pink",
    title: "Personal Care",
    desc: "Dignified assistance with bathing, dressing, grooming and daily hygiene to ensure comfort and independence.",
    link: "/services",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M6 3h12l2 3-8 5-8-5 2-3zM4 8l8 5 8-5v9a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconClass: "icon-bg-blue",
    title: "Medication Support",
    desc: "Safe management of medications, timely reminders and prescription support to maintain health outcomes.",
    link: "/services",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 2v3M10 2v3M14 2v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconClass: "icon-bg-orange",
    title: "Meal Preparation",
    desc: "Nutritious, tailored meals prepared fresh daily to support health, dietary needs and overall wellbeing.",
    link: "/services",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="9,22 9,12 15,12 15,22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconClass: "icon-bg-teal",
    title: "Household Support",
    desc: "Light housekeeping, laundry, shopping and home organisation to maintain a safe, comfortable environment.",
    link: "/services",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconClass: "icon-bg-purple",
    title: "Companionship",
    desc: "Meaningful social interaction, emotional support and community engagement to improve mental wellbeing.",
    link: "/services",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    iconClass: "icon-bg-green",
    title: "Specialised Care",
    desc: "Expert support for dementia, disabilities, mobility challenges and post-hospital recovery care.",
    link: "/services",
  },
]

export default function Services() {
  return (
    <section style={{ padding: "100px 0", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <span className="section-label">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              What We Offer
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0B2545",
            marginBottom: 16, lineHeight: 1.15,
          }}>
            Comprehensive Care Services
          </h2>
          <div className="divider-teal" style={{ margin: "0 auto 20px" }} />
          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#64748B", fontSize: "1.05rem",
            maxWidth: 560, margin: "0 auto", lineHeight: 1.7,
          }}>
            Every service is delivered by trained, compassionate professionals with personalised care plans tailored to your unique needs.
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {services.map((s, i) => (
            <div key={i} className="card-lift" style={{
              background: "white",
              border: "1.5px solid #E2E8F0",
              borderRadius: 20, padding: "32px",
              position: "relative", overflow: "hidden",
            }}>
              {/* Top accent bar */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0,
                height: 3,
                background: "linear-gradient(90deg, #0D9488, #38BDF8)",
              }} />

              <div className={s.iconClass} style={{
                width: 60, height: 60, borderRadius: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                {s.icon}
              </div>

              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.35rem", fontWeight: 700,
                color: "#0B2545", marginBottom: 10,
              }}>{s.title}</h3>

              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#64748B", fontSize: "0.92rem",
                lineHeight: 1.65, marginBottom: 20,
              }}>{s.desc}</p>

              <Link href={s.link} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                color: "#0D9488",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600, fontSize: "0.85rem",
                textDecoration: "none",
                transition: "gap 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.gap = "10px"}
              onMouseLeave={e => e.currentTarget.style.gap = "6px"}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: "center", marginTop: 56 }}>
          <Link href="/services" className="btn-navy" style={{ textDecoration: "none" }}>
            View All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}