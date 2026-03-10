"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"
import ScrollReveal from "@/components/ScrollReveal"
import { useState } from "react"

const faqs = [
  { icon:"🏠", q:"What is domiciliary care?",             a:"Domiciliary care is professional care provided in a person's own home to help them maintain independence, dignity and quality of life. It covers everything from personal care and medication support to companionship and household help." },
  { icon:"👥", q:"Who can receive home care services?",   a:"Our services support elderly individuals, people with physical or learning disabilities, those recovering from illness or surgery, and individuals with long-term health conditions such as dementia." },
  { icon:"📅", q:"How often can care be provided?",       a:"Care can range from a single visit per week to multiple daily visits or live-in support, depending on individual needs. We create a schedule that works best for you and your family." },
  { icon:"📋", q:"How do I arrange care services?",       a:"Simply contact us by phone or through our website. We will arrange a free, no-obligation consultation and care assessment at a time that suits you. Care can typically begin within days." },
  { icon:"🔒", q:"Are your carers DBS checked?",          a:"Yes. Every carer employed by Othdabere Healthcare undergoes a full enhanced DBS (Disclosure and Barring Service) check before starting work, along with thorough reference and identity verification." },
  { icon:"💰", q:"How much does home care cost?",         a:"Costs vary depending on the type and frequency of care required. We provide a transparent, personalised quote following your care assessment. We can advise on funding options including local authority support." },
  { icon:"🔄", q:"Can I change my care plan?",            a:"Absolutely. Your care plan is a living document, reviewed regularly and updated whenever your needs or preferences change. Just speak to your care coordinator at any time." },
  { icon:"🌍", q:"Do you provide care in Ghana?",         a:"Yes. In addition to our UK services, Othdabere Healthcare also provides care support in Ghana. Please contact us to discuss your specific requirements and how we can help." },
]

export default function FAQs() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="page-hero" style={{ position: "relative", padding: "110px 0 80px", backgroundImage: "url('/images/hero-faqs.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <span className="section-label" style={{ marginBottom: 20, background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>❓ FAQs</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.4rem,6vw,4.5rem)", fontWeight: 700, color: "white", lineHeight: 1.08, marginTop: 20, marginBottom: 20 }}>
              Frequently Asked <span className="text-shimmer">Questions</span>
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.78)", fontSize: "1.1rem", maxWidth: 520, lineHeight: 1.72 }}>
              Everything you need to know about our care services, how to get started, and what to expect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: "#F8FAFD" }}>
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div style={{ marginBottom: 14, background: "white", border: `1.5px solid ${open === i ? "#0D9488" : "#E2E8F0"}`, borderRadius: 16, overflow: "hidden", transition: "border-color 0.25s, box-shadow 0.25s", boxShadow: open === i ? "0 4px 24px rgba(13,148,136,0.10)" : "none" }}>
                  <button onClick={() => setOpen(open === i ? null : i)} style={{
                    width: "100%", padding: "20px 24px", background: "none", border: "none",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
                    cursor: "pointer", textAlign: "left",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{faq.icon}</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.97rem" }}>{faq.q}</span>
                    </div>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                      background: open === i ? "linear-gradient(135deg,#0D9488,#14B8A6)" : "#F1F5F9",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.25s", transform: open === i ? "rotate(45deg)" : "none",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke={open === i ? "white" : "#0B2545"} strokeWidth="2.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>
                  {open === i && (
                    <div style={{ padding: "0 24px 22px 24px", borderTop: "1px solid #F1F5F9" }}>
                      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#334155", fontSize: "0.93rem", lineHeight: 1.75, margin: "16px 0 0" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal>
              <div style={{ marginTop: 40, background: "linear-gradient(135deg,#0B2545,#163a6b)", borderRadius: 20, padding: "32px", textAlign: "center", color: "white" }}>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>💬</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: 10 }}>Still have questions?</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.72)", fontSize: "0.93rem", marginBottom: 24, lineHeight: 1.7 }}>Our friendly team is happy to help. Call or email us anytime.</p>
                <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
                  <a href="tel:+447588160799" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#0D9488,#14B8A6)", color: "white", padding: "13px 26px", borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 18px rgba(13,148,136,0.35)" }}>📞 Call Us</a>
                  <a href="mailto:othdaberehealthcare@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "13px 26px", borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>📧 Email Us</a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </>
  )
}
