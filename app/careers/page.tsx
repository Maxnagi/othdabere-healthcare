"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/ScrollReveal"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

const perks = [
  { icon:"💼", title:"Competitive Pay",        desc:"Excellent rates with guaranteed hours",      grad:"linear-gradient(135deg,#10B981,#14B8A6)" },
  { icon:"🎓", title:"Funded Training",         desc:"All training paid for — grow your career",  grad:"linear-gradient(135deg,#3B82F6,#6366F1)" },
  { icon:"🕐", title:"Flexible Hours",          desc:"Full-time, part-time and bank shifts",       grad:"linear-gradient(135deg,#F97316,#F59E0B)" },
  { icon:"🤝", title:"Supportive Team",         desc:"A positive, inclusive working environment",  grad:"linear-gradient(135deg,#F43F5E,#EC4899)" },
  { icon:"📋", title:"DBS Covered",             desc:"We cover the cost of your DBS check",        grad:"linear-gradient(135deg,#8B5CF6,#A855F7)" },
  { icon:"🏅", title:"Recognition & Rewards",   desc:"Staff appreciation and awards programme",    grad:"linear-gradient(135deg,#F59E0B,#F97316)" },
]

export default function Careers() {
  const [name,setName]=useState(""); const [email,setEmail]=useState(""); const [phone,setPhone]=useState("")
  const [message,setMessage]=useState(""); const [file,setFile]=useState<any>(null)
  const [loading,setLoading]=useState(false); const [sent,setSent]=useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault(); setLoading(true)
    let cvUrl = ""
    if (file) {
      const { data } = await supabase.storage.from("cv").upload(`applications/${Date.now()}-${file.name}`, file)
      if (data) cvUrl = data.path
    }
    await supabase.from("job_applications").insert([{ name, email, phone, message, cv: cvUrl }])
    setLoading(false); setSent(true)
    setName(""); setEmail(""); setPhone(""); setMessage("")
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="page-hero" style={{ position: "relative", padding: "110px 0 80px", backgroundImage: "url('/images/hero-careers.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <ScrollReveal>
            <span className="section-label" style={{ marginBottom: 20, background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>👩‍⚕️ Join Our Team</span>
            <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.4rem,6vw,4.5rem)", fontWeight: 700, color: "white", lineHeight: 1.08, marginTop: 20, marginBottom: 20 }}>
              Build a Career in <span className="text-shimmer">Compassionate Care</span>
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.78)", fontSize: "1.1rem", maxWidth: 520, lineHeight: 1.72 }}>
              Join a team that makes a real difference every day. We invest in our people because great care starts with great carers.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Perks */}
      <section className="section-pad" style={{ background: "white" }}>
        <div className="container">
          <ScrollReveal style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>🌟 Why Work With Us</span>
            <h2 className="sec-h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>Benefits & Perks</h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 20 }}>
            {perks.map((p, i) => (
              <ScrollReveal key={i} delay={i * 70}>
                <div className="card-lift" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 18, padding: "28px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: p.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0, boxShadow: "0 6px 18px rgba(0,0,0,0.10)" }}>{p.icon}</div>
                  <div>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.95rem", marginBottom: 6 }}>{p.title}</h4>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section-pad" style={{ background: "#F8FAFD" }}>
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <ScrollReveal style={{ textAlign: "center", marginBottom: 48 }}>
              <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>📝 Apply Now</span>
              <h2 className="sec-h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,4vw,2.8rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>Start Your Application</h2>
              <div className="divider-teal" style={{ margin: "0 auto" }} />
            </ScrollReveal>

            {sent ? (
              <ScrollReveal>
                <div style={{ background: "linear-gradient(135deg,#F0FDF4,#DCFCE7)", border: "1.5px solid rgba(22,163,74,0.3)", borderRadius: 20, padding: "48px", textAlign: "center" }}>
                  <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎉</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#166534", marginBottom: 12 }}>Application Received!</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#15803D", fontSize: "0.97rem", lineHeight: 1.7, marginBottom: 24 }}>Thank you for applying. Our team will review your application and be in touch within 3–5 business days.</p>
                  <button onClick={() => setSent(false)} style={{ background: "linear-gradient(135deg,#16A34A,#22C55E)", color: "white", border: "none", padding: "13px 30px", borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, cursor: "pointer", fontSize: "0.95rem" }}>Submit Another</button>
                </div>
              </ScrollReveal>
            ) : (
              <ScrollReveal>
                <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 24, padding: "40px" }}>
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                    <div className="form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
                      <input className="input-modern" placeholder="Full Name *" value={name} onChange={e => setName(e.target.value)} required />
                      <input className="input-modern" type="email" placeholder="Email Address *" value={email} onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <input className="input-modern" type="tel" placeholder="Phone Number *" value={phone} onChange={e => setPhone(e.target.value)} required />
                    <textarea className="input-modern" placeholder="Tell us about yourself — experience, motivation, skills..." value={message} onChange={e => setMessage(e.target.value)} rows={5} style={{ resize: "vertical" }} />
                    <div style={{ border: "1.5px dashed #CBD5E1", borderRadius: 12, padding: "20px", background: "#F8FAFD", textAlign: "center" }}>
                      <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.85rem", color: "#64748B", marginBottom: 12 }}>📎 Upload your CV (PDF or Word)</p>
                      <input type="file" accept=".pdf,.doc,.docx" onChange={e => setFile(e.target.files?.[0])} style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.85rem" }} />
                    </div>
                    <button type="submit" className="btn-primary" style={{ alignSelf: "flex-start" }}>
                      {loading ? "⏳ Submitting..." : "🚀 Submit Application"}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
