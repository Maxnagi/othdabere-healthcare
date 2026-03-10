"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export default function Referral() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [person, setPerson] = useState("")
  const [care, setCare] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    await supabase.from("referrals").insert([{ referrer_name: name, email, person_needing_care: person, care_requirements: care }])
    setLoading(false)
    setSent(true)
    setName(""); setEmail(""); setPerson(""); setCare("")
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-referral.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            Refer Someone
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 600 }}>
            Make a Care Referral
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: 520, lineHeight: 1.7 }}>
            If you know someone who would benefit from our care services, please complete the referral form below.
          </p>
          <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "100px 0", background: "#F8FAFD" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 24, padding: "48px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 8 }}>Referral Form</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem", marginBottom: 32 }}>
              All referrals are handled confidentially. We'll reach out promptly.
            </p>

            {sent ? (
              <div style={{ background: "#DCFCE7", border: "1.5px solid #22C55E", borderRadius: 16, padding: "28px", textAlign: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 12px", display: "block" }}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#16A34A", fontSize: "1.2rem", marginBottom: 8 }}>Referral Submitted!</h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#15803D", fontSize: "0.95rem" }}>Thank you for the referral. Our team will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Your Name</label>
                  <input type="text" placeholder="Referrer's full name" value={name} onChange={e => setName(e.target.value)} className="input-modern" required />
                </div>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Your Email</label>
                  <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="input-modern" required />
                </div>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Person Needing Care</label>
                  <input type="text" placeholder="Name of the person needing care" value={person} onChange={e => setPerson(e.target.value)} className="input-modern" required />
                </div>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Care Requirements</label>
                  <textarea placeholder="Describe their care needs..." value={care} onChange={e => setCare(e.target.value)} className="input-modern" style={{ height: 120, resize: "vertical" as any }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "16px", fontSize: "1rem" }}>
                  {loading ? "Submitting..." : "Submit Referral"}
                  {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
