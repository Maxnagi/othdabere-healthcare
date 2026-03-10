"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    await supabase.from("contact_messages").insert([{ name, email, message }])
    setLoading(false)
    setSent(true)
    setName(""); setEmail(""); setMessage("")
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-contact.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            Get In Touch
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 600 }}>
            We're Here to Help You
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: 500, lineHeight: 1.7 }}>
            Contact our team to learn more about our healthcare and domiciliary care services.
          </p>
          <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* MAIN */}
      <section style={{ padding: "100px 0", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: 60 }}>

            {/* Info */}
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>Contact Information</h2>
              <div className="divider-teal" style={{ marginBottom: 28 }} />
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "1rem", lineHeight: 1.7, marginBottom: 36 }}>
                If you have any questions about our services or need care support, please contact us. We're happy to help.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { iconClass: "icon-bg-teal", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: "Phone", value: "+44 7588 160799" },
                  { iconClass: "icon-bg-blue", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: "Email", value: "othdaberehealthcare@gmail.com" },
                  { iconClass: "icon-bg-green", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: "Location", value: "United Kingdom & Ghana" },
                ].map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div className={c.iconClass} style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {c.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>{c.label}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "1rem", color: "#0B2545" }}>{c.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div style={{ marginTop: 40, borderRadius: 16, overflow: "hidden", border: "1.5px solid #E2E8F0" }}>
                <iframe
                  style={{ width: "100%", height: 260, display: "block", border: "none" }}
                  src="https://www.google.com/maps?q=London&output=embed"
                  title="Service areas"
                />
              </div>
            </div>

            {/* Form */}
            <div style={{ background: "#F8FAFD", border: "1.5px solid #E2E8F0", borderRadius: 24, padding: "40px" }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 700, color: "#0B2545", marginBottom: 8 }}>Send Us a Message</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem", marginBottom: 32 }}>We'll get back to you within 24 hours.</p>

              {sent ? (
                <div style={{ background: "#DCFCE7", border: "1.5px solid #22C55E", borderRadius: 16, padding: "24px", textAlign: "center" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 12px", display: "block" }}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#16A34A", fontSize: "1.1rem", marginBottom: 8 }}>Message Sent!</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#15803D", fontSize: "0.9rem" }}>Thank you for reaching out. We'll be in touch soon.</p>
                  <button onClick={() => setSent(false)} style={{ marginTop: 16, background: "none", border: "none", color: "#16A34A", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, cursor: "pointer", textDecoration: "underline" }}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Full Name</label>
                    <input type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} className="input-modern" required />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Email Address</label>
                    <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="input-modern" required />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Message</label>
                    <textarea placeholder="How can we help you?" value={message} onChange={e => setMessage(e.target.value)} className="input-modern" style={{ height: 140, resize: "vertical" as any }} required />
                  </div>
                  <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "16px", fontSize: "1rem" }}>
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
