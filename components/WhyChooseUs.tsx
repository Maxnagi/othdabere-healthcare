"use client"

import Link from "next/link"
import ScrollReveal from "./ScrollReveal"

const features = [
  { cls:"icon-teal",   e:"🛡️", title:"Fully Trained & DBS Checked",  desc:"Every carer is rigorously vetted, DBS checked and continuously trained to the highest standards." },
  { cls:"icon-blue",   e:"📋", title:"Personalised Care Plans",       desc:"Bespoke care plans designed around each individual's needs, preferences and daily goals." },
  { cls:"icon-green",  e:"🕐", title:"Flexible & Reliable",           desc:"From a few hours weekly to full-time support — we fit your schedule with consistent dependability." },
  { cls:"icon-purple", e:"👨‍👩‍👧", title:"Family-Centred Approach",     desc:"We keep families informed and meaningfully involved at every stage of the care journey." },
]

export default function WhyChooseUs() {
  return (
    <section className="section-pad" style={{ background: "#F8FAFD" }}>
      <div className="container">
        <div className="grid-2">

          {/* Image */}
          <ScrollReveal direction="left">
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 24, overflow: "hidden" }}>
                <img
                  src="/images/why-choose-us.jpg"
                  alt="Why choose Othdabere"
                  className="why-img"
                  style={{ width: "100%", height: 500, objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 50%,rgba(11,37,69,0.55) 100%)" }} />
              </div>

              {/* Satisfaction badge — hidden on mobile via CSS class */}
              <div className="float-badge-right" style={{
                position: "absolute", bottom: 28, right: -20,
                background: "white", borderRadius: 18, padding: "16px 20px",
                boxShadow: "0 16px 40px rgba(11,37,69,0.15)",
                display: "flex", alignItems: "center", gap: 14,
              }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg,#0D9488,#14B8A6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", flexShrink: 0 }}>⭐</div>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "1.1rem", color: "#0B2545" }}>98% Satisfaction</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem", color: "#64748B" }}>From client reviews</div>
                </div>
              </div>

              {/* Experience badge — hidden on mobile via CSS class */}
              <div className="float-badge-left" style={{
                position: "absolute", top: 28, left: -20,
                background: "linear-gradient(135deg,#F43F5E,#F97316)", borderRadius: 16,
                padding: "16px 22px", boxShadow: "0 12px 32px rgba(244,63,94,0.35)", textAlign: "center",
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontWeight: 700, fontSize: "2.4rem", color: "white", lineHeight: 1 }}>3+</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.85)", marginTop: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>Years of Care</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal direction="right">
            <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>💚 Why Choose Us</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2rem,3.5vw,2.8rem)", fontWeight: 700, color: "#0B2545", lineHeight: 1.15, marginTop: 16, marginBottom: 12 }}>
              Care You Can Trust,<br />Every Single Day
            </h2>
            <div className="divider-teal" style={{ marginBottom: 24 }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#64748B", fontSize: "1rem", lineHeight: 1.72, marginBottom: 32 }}>
              Othdabere Healthcare is committed to delivering outstanding person-centred care that empowers individuals and brings peace of mind to families across the UK and Ghana.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "16px", borderRadius: 14, background: "white", border: "1.5px solid #E2E8F0", transition: "border-color 0.2s,box-shadow 0.2s", cursor: "default" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#0D9488"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(13,148,136,0.10)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none" }}
                >
                  <div className={f.cls} style={{ width: 44, height: 44, borderRadius: 12, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>{f.e}</div>
                  <div>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.94rem", marginBottom: 4 }}>{f.title}</h4>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <Link href="/about" className="btn-primary">Learn About Us →</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}