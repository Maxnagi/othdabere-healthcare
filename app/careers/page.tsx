"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

const perks = [
  { iconClass: "icon-bg-teal", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "DBS Sponsored", desc: "We fully sponsor your DBS check as part of joining our team." },
  { iconClass: "icon-bg-blue", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Ongoing Training", desc: "Access to regular training courses and career development opportunities." },
  { iconClass: "icon-bg-green", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Flexible Hours", desc: "Full-time, part-time and flexible shifts to suit your lifestyle." },
  { iconClass: "icon-bg-orange", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, title: "Supportive Team", desc: "Join a warm, inclusive team that values every member's contribution." },
]

export default function Careers() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [file, setFile] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    let cvUrl = ""
    if (file) {
      const { data } = await supabase.storage.from("cv").upload(`applications/${Date.now()}-${file.name}`, file)
      if (data) cvUrl = data.path
    }
    await supabase.from("job_applications").insert([{ name, email, phone, message, cv: cvUrl }])
    setLoading(false)
    setSent(true)
    setName(""); setEmail(""); setPhone(""); setMessage("")
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-careers.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            Join Our Team
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 600 }}>
            Build a Career in Compassionate Care
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "1.1rem", maxWidth: 540, lineHeight: 1.7 }}>
            Join our team of dedicated caregivers and make a real difference in people's lives every day.
          </p>
          <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* PERKS */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.4rem", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>Why Work With Us</h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {perks.map((p, i) => (
              <div key={i} className="card-lift" style={{ background: "#F8FAFD", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "28px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div className={p.iconClass} style={{ width: 48, height: 48, borderRadius: 14, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>{p.icon}</div>
                <div>
                  <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.97rem", marginBottom: 6 }}>{p.title}</h4>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding: "80px 0", background: "#F8FAFD" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 24, padding: "48px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 8 }}>Apply Now</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem", marginBottom: 32 }}>We'd love to hear from you. Complete the form below to apply.</p>

            {sent ? (
              <div style={{ background: "#DCFCE7", border: "1.5px solid #22C55E", borderRadius: 16, padding: "28px", textAlign: "center" }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 12px", display: "block" }}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#16A34A", fontSize: "1.2rem", marginBottom: 8 }}>Application Received!</h4>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#15803D", fontSize: "0.95rem" }}>Thank you for applying. We'll review your application and be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Full Name</label>
                  <input type="text" placeholder="Your full name" value={name} onChange={e => setName(e.target.value)} className="input-modern" required />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Email</label>
                    <input type="email" placeholder="your@email.com" value={email} onChange={e => setEmail(e.target.value)} className="input-modern" required />
                  </div>
                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Phone</label>
                    <input type="text" placeholder="+44 ..." value={phone} onChange={e => setPhone(e.target.value)} className="input-modern" required />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Tell Us About Yourself</label>
                  <textarea placeholder="Your experience, why you'd like to join..." value={message} onChange={e => setMessage(e.target.value)} className="input-modern" style={{ height: 120, resize: "vertical" as any }} />
                </div>
                <div>
                  <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Upload CV (optional)</label>
                  <div style={{ border: "1.5px dashed #CBD5E1", borderRadius: 10, padding: "20px", textAlign: "center", cursor: "pointer", position: "relative", background: "#F8FAFD" }}>
                    <input type="file" onChange={e => setFile(e.target.files?.[0])} style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer" }} />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 8px", display: "block" }}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="#64748B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#64748B", margin: 0 }}>
                      {file ? file.name : "Click to upload or drag & drop your CV"}
                    </p>
                  </div>
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: "center", padding: "16px", fontSize: "1rem" }}>
                  {loading ? "Submitting..." : "Submit Application"}
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
