"use client"

import Link from "next/link"
import ScrollReveal from "./ScrollReveal"

const services = [
  { cls:"svc-icon-1", e:"🫀", title:"Personal Care",        desc:"Dignified assistance with bathing, dressing, grooming and daily hygiene to ensure comfort and independence." },
  { cls:"svc-icon-2", e:"💊", title:"Medication Support",   desc:"Safe medication management, timely reminders and prescription support to maintain optimal health." },
  { cls:"svc-icon-3", e:"🍽️", title:"Meal Preparation",    desc:"Fresh, nutritious meals tailored to dietary needs and preferences, prepared with care every day." },
  { cls:"svc-icon-4", e:"🏡", title:"Household Support",    desc:"Light housekeeping, laundry, shopping and home organisation to maintain a safe, comfortable home." },
  { cls:"svc-icon-5", e:"🤝", title:"Companionship",        desc:"Meaningful social interaction, emotional support and community activities to improve wellbeing." },
  { cls:"svc-icon-6", e:"🧠", title:"Dementia & Specialist Care", desc:"Expert, compassionate support for dementia, learning disabilities and complex health conditions." },
  { cls:"svc-icon-7", e:"🕐", title:"24/7 Support",         desc:"Round-the-clock access to our care team and emergency coordination for complete peace of mind." },
  { cls:"svc-icon-8", e:"🕊️", title:"Palliative Care",     desc:"Sensitive end-of-life support for individuals and families delivered with empathy and dignity." },
  { cls:"svc-icon-9", e:"♿", title:"Mobility Assistance",  desc:"Safe, confident assistance with movement both inside the home and out in the community." },
]

export default function Services() {
  return (
    <section className="section-pad" style={{ background: "white" }}>
      <div className="container">
        <ScrollReveal style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>✨ What We Offer</span>
          <h2 className="sec-h2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 700, color: "#0B2545",
            marginTop: 16, marginBottom: 12,
          }}>Comprehensive Care Services</h2>
          <div className="divider-teal" style={{ margin: "0 auto 20px" }} />
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#64748B", fontSize: "1.05rem", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
            Every service is delivered by trained, compassionate professionals with personalised care plans built around your needs.
          </p>
        </ScrollReveal>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(285px,1fr))", gap: 22 }}>
          {services.map((s, i) => (
            <ScrollReveal key={i} delay={i * 55}>
              <div className="card-lift" style={{
                background: "white", border: "1.5px solid #E2E8F0",
                borderRadius: 20, padding: "28px",
                position: "relative", overflow: "hidden", height: "100%",
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg,#F43F5E,#0D9488,#3B82F6)" }} />
                <div className={s.cls} style={{
                  width: 58, height: 58, borderRadius: 16,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 18, fontSize: "1.6rem",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.10)",
                }}>{s.e}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 700, color: "#0B2545", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#64748B", fontSize: "0.9rem", lineHeight: 1.65, marginBottom: 18 }}>{s.desc}</p>
                <Link href="/services" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#0D9488", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.83rem", textDecoration: "none", transition: "gap 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                  onMouseLeave={e => e.currentTarget.style.gap = "6px"}
                >Learn More →</Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal style={{ textAlign: "center", marginTop: 52 }}>
          <Link href="/services" className="btn-navy">
            View All Services
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
