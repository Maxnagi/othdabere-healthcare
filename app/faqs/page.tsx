"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

const faqs = [
  { q: "What is domiciliary care?", a: "Domiciliary care is professional care provided in a person's home to help them maintain independence and quality of life. It covers a wide range of support from personal care and medication assistance to companionship and household tasks." },
  { q: "Who can receive home care services?", a: "Our services support elderly individuals, people with disabilities, those recovering from illness or surgery, and anyone who requires assistance to live comfortably and safely in their own home." },
  { q: "How often can care be provided?", a: "Care can be arranged as flexibly as needed — from a few hours per week to daily visits or full-time live-in support. We'll work with you to find the right level of care." },
  { q: "How do I arrange care services?", a: "Simply contact our team through our website or by calling +44 7588 160799. We'll discuss your needs, carry out a free care assessment, and create a personalised care plan." },
  { q: "Are your carers trained and checked?", a: "Yes. All our carers undergo rigorous vetting including enhanced DBS checks, and receive continuous professional training to ensure the highest standards of care." },
  { q: "Can I change or update my care plan?", a: "Absolutely. Care plans are reviewed regularly and can be updated at any time to reflect changes in your needs or preferences. We work closely with you and your family throughout." },
  { q: "Do you provide care in Ghana as well as the UK?", a: "Yes. Othdabere Healthcare operates in both the United Kingdom and Ghana, providing compassionate professional care in both regions." },
  { q: "How is the cost of care calculated?", a: "Care costs depend on the type and frequency of support required. Contact us for a free consultation and we'll provide clear, transparent pricing tailored to your needs." },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-faqs.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            FAQs
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 600 }}>
            Frequently Asked Questions
          </h1>
          <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2 }} />
        </div>
      </section>

      {/* FAQs */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>
              Everything You Need to Know
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "1rem", lineHeight: 1.7 }}>
              Can't find what you're looking for? <a href="/contact" style={{ color: "#0D9488", textDecoration: "none", fontWeight: 600 }}>Contact us directly</a>.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                border: `1.5px solid ${open === i ? "#0D9488" : "#E2E8F0"}`,
                borderRadius: 16, overflow: "hidden",
                transition: "border-color 0.2s",
                background: open === i ? "#F0FDFA" : "white",
              }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%", textAlign: "left",
                    padding: "20px 24px",
                    background: "none", border: "none", cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                  }}
                >
                  <span style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "1rem",
                    color: open === i ? "#0D9488" : "#0B2545",
                  }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
                    background: open === i ? "#0D9488" : "#F1F5F9",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.2s",
                  }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ transform: open === i ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
                      <path d="M6 9l6 6 6-6" stroke={open === i ? "white" : "#64748B"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                {open === i && (
                  <div style={{ padding: "0 24px 20px" }}>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#475569", fontSize: "0.95rem", lineHeight: 1.75, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
