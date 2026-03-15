"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useState } from "react"

const contactInfo = [
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    label: "Phone",
    value: "+44 7588 160799",
    href: "tel:+447588160799",
    bg: "#F0FDFA",
    color: "#0D9488",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    label: "Email",
    value: "othdaberehealthcare@gmail.com",
    href: "mailto:othdaberehealthcare@gmail.com",
    bg: "#EFF6FF",
    color: "#3B82F6",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    label: "Based In",
    value: "United Kingdom & Ghana",
    href: null,
    bg: "#FFF7ED",
    color: "#F59E0B",
  },
  {
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    label: "Office Hours",
    value: "Mon–Fri: 8am–6pm | 24/7 Care Line",
    href: null,
    bg: "#F5F3FF",
    color: "#8B5CF6",
  },
]

const reasons = [
  { e: "🛡️", title: "CQC Registered",   desc: "Fully compliant, regulated and inspected." },
  { e: "✅", title: "DBS Checked Staff", desc: "All carers are fully vetted and trained." },
  { e: "💛", title: "Personalised Care", desc: "Plans built around each individual's needs." },
  { e: "🕐", title: "24/7 Support",      desc: "Round-the-clock care line, always available." },
]

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [service, setService] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message: `[Service: ${service}]\n\n${message}` }),
      })
      const data = await res.json()
      if (!res.ok) { alert(data.error || "Something went wrong"); return }
      setSent(true)
      setName(""); setEmail(""); setPhone(""); setService(""); setMessage("")
    } catch (err) {
      console.error(err); alert("Unexpected error")
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    border: "1.5px solid #E2E8F0",
    borderRadius: 12,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: "0.93rem",
    color: "#334155",
    background: "#F8FAFD",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxSizing: "border-box",
  }

  return (
    <>
      <Navbar />

      <style>{`
        .contact-input:focus { border-color: #0D9488 !important; box-shadow: 0 0 0 3px rgba(13,148,136,0.10) !important; background: white !important; }
        .contact-card { transition: transform 0.22s, box-shadow 0.22s; }
        .contact-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(11,37,69,0.10) !important; }
        @media (max-width: 900px) {
          .contact-two-col { flex-direction: column !important; }
          .contact-form-col { width: 100% !important; }
          .contact-info-col { width: 100% !important; }
          .contact-cards-grid { grid-template-columns: 1fr 1fr !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .contact-cards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-contact.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            💬 Get In Touch
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 680 }}>
            Contact Us Today
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.95rem,2vw,1.1rem)", maxWidth: 520, lineHeight: 1.7 }}>
            We're here to help. Reach out to discuss your care needs or those of a loved one — our team responds promptly.
          </p>
          <div style={{ width: 56, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section style={{ background: "white", padding: "64px 0 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="contact-cards-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 64 }}>
            {contactInfo.map((item, i) => (
              <div key={i} className="contact-card" style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "28px 24px", boxShadow: "0 2px 12px rgba(11,37,69,0.05)" }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, color: item.color }}>
                  {item.icon}
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#94A3B8", marginBottom: 6 }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: item.color, textDecoration: "none", lineHeight: 1.4 }}>{item.value}</a>
                ) : (
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#334155", margin: 0, lineHeight: 1.4 }}>{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section style={{ background: "#F8FAFD", padding: "72px 0 96px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
          <div className="contact-two-col" style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>

            {/* FORM */}
            <div className="contact-form-col" style={{ flex: "1 1 60%", background: "white", border: "1.5px solid #E2E8F0", borderRadius: 24, padding: "clamp(24px,5vw,48px) clamp(20px,4vw,40px)", boxShadow: "0 4px 24px rgba(11,37,69,0.07)" }}>
              <div style={{ marginBottom: 36 }}>
                <span className="section-label" style={{ marginBottom: 14, display: "inline-flex" }}>✉️ Send a Message</span>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,3.5vw,2.6rem)", fontWeight: 700, color: "#0B2545", lineHeight: 1.15, marginBottom: 10 }}>
                  How Can We Help You?
                </h2>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.93rem", lineHeight: 1.7 }}>
                  Fill in the form below and a member of our care team will respond within one business day.
                </p>
              </div>

              {sent ? (
                <div style={{ textAlign: "center", padding: "48px 24px" }}>
                  <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#F0FDFA", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#0D9488" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.95rem", marginBottom: 28 }}>Thank you for reaching out. Our team will get back to you within 1 business day.</p>
                  <button onClick={() => setSent(false)} style={{ background: "linear-gradient(135deg,#0D9488,#14B8A6)", color: "white", border: "none", borderRadius: 12, padding: "14px 32px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem", cursor: "pointer" }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div className="form-two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 7 }}>Full Name <span style={{ color: "#EF4444" }}>*</span></label>
                      <input className="contact-input" placeholder="e.g. John Smith" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 7 }}>Phone Number</label>
                      <input className="contact-input" type="tel" placeholder="+44 7xxx xxxxxx" value={phone} onChange={e => setPhone(e.target.value)} style={inputStyle} />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 7 }}>Email Address <span style={{ color: "#EF4444" }}>*</span></label>
                    <input className="contact-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required style={inputStyle} />
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 7 }}>Service of Interest</label>
                    <select className="contact-input" value={service} onChange={e => setService(e.target.value)} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}>
                      <option value="">Select a service...</option>
                      <option>Personal Care</option>
                      <option>Live In Care</option>
                      <option>Respite Care</option>
                      <option>Rehabilitation Care</option>
                      <option>Supportive Living</option>
                      <option>Medication Support</option>
                      <option>Counseling Support</option>
                      <option>Palliative Care</option>
                      <option>Other / General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 7 }}>Your Message <span style={{ color: "#EF4444" }}>*</span></label>
                    <textarea className="contact-input" placeholder="Tell us about your care needs or how we can help..." value={message} onChange={e => setMessage(e.target.value)} required rows={5} style={{ ...inputStyle, resize: "vertical", minHeight: 120 }} />
                  </div>

                  <button type="submit" disabled={loading} style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                    background: loading ? "#E2E8F0" : "linear-gradient(135deg,#0B2545,#163a6b)",
                    color: loading ? "#94A3B8" : "white",
                    border: "none", borderRadius: 14, padding: "16px 28px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem",
                    cursor: loading ? "not-allowed" : "pointer",
                    boxShadow: loading ? "none" : "0 8px 24px rgba(11,37,69,0.28)",
                    transition: "all 0.25s",
                    marginTop: 4,
                  }}>
                    {loading ? "Sending..." : "Send Message →"}
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="contact-info-col" style={{ flex: "1 1 36%", display: "flex", flexDirection: "column", gap: 24 }}>

              {/* WhatsApp CTA */}
              <div style={{ background: "linear-gradient(135deg,#25D366,#128C7E)", borderRadius: 20, padding: "32px 28px", color: "white" }}>
                <div style={{ width: 52, height: 52, background: "rgba(255,255,255,0.2)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: 10, color: "white" }}>Chat on WhatsApp</h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", lineHeight: 1.65, color: "rgba(255,255,255,0.88)", marginBottom: 22 }}>
                  Get a quick response from our care team on WhatsApp. Available to answer your questions any time.
                </p>
                <a href="https://wa.me/447588160799" target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "white", color: "#128C7E",
                  padding: "13px 24px", borderRadius: 12,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.93rem",
                  textDecoration: "none",
                }}>
                  Message Us on WhatsApp
                </a>
              </div>

              {/* Why choose us */}
              <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "32px 28px" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "#0B2545", marginBottom: 20 }}>Why Choose Othdabere?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {reasons.map((r, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                      <div style={{ width: 42, height: 42, borderRadius: 11, background: "#F0FDFA", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.15rem" }}>{r.e}</div>
                      <div>
                        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#0B2545", marginBottom: 3 }}>{r.title}</p>
                        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#64748B", margin: 0 }}>{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call direct */}
              <div style={{ background: "linear-gradient(135deg,#0B2545,#163a6b)", borderRadius: 20, padding: "28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, background: "rgba(255,255,255,0.1)", borderRadius: 14, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 6 }}>Prefer to Call?</p>
                <a href="tel:+447588160799" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 700, color: "#2DD4BF", textDecoration: "none" }}>+44 7588 160799</a>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", marginTop: 6 }}>Mon–Fri 8am–6pm · 24/7 Care Line</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
