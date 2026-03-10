"use client"

import ScrollReveal from "./ScrollReveal"

const items = [
  { src: "/images/care1.jpg", label: "Personal Care",       accent: "#F43F5E" },
  { src: "/images/care2.jpg", label: "Medication Support",  accent: "#3B82F6" },
  { src: "/images/care3.jpg", label: "Companionship",       accent: "#10B981" },
  { src: "/images/care4.jpg", label: "Household Support",   accent: "#8B5CF6" },
  { src: "/images/care5.jpg", label: "Specialist Care",     accent: "#F97316" },
  { src: "/images/care6.jpg", label: "Mobility Assistance", accent: "#0D9488" },
]

export default function Gallery() {
  return (
    <section className="section-pad" style={{ background: "white" }}>
      <div className="container">
        <ScrollReveal style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>📸 Gallery</span>
          <h2 className="sec-h2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem,4vw,3rem)",
            fontWeight: 700, color: "#0B2545",
            marginTop: 16, marginBottom: 12,
          }}>Our Care in Action</h2>
          <div className="divider-teal" style={{ margin: "0 auto" }} />
        </ScrollReveal>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 16,
        }}>
          {items.map((item, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div style={{ position: "relative", borderRadius: 18, overflow: "hidden", cursor: "pointer", height: 240 }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector(".gi") as HTMLImageElement
                  const ov  = e.currentTarget.querySelector(".go") as HTMLDivElement
                  const lbl = e.currentTarget.querySelector(".gl") as HTMLDivElement
                  if (img) img.style.transform = "scale(1.08)"
                  if (ov)  ov.style.opacity = "1"
                  if (lbl) lbl.style.transform = "translateY(0)"
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector(".gi") as HTMLImageElement
                  const ov  = e.currentTarget.querySelector(".go") as HTMLDivElement
                  const lbl = e.currentTarget.querySelector(".gl") as HTMLDivElement
                  if (img) img.style.transform = "scale(1)"
                  if (ov)  ov.style.opacity = "0"
                  if (lbl) lbl.style.transform = "translateY(12px)"
                }}
              >
                <img src={item.src} alt={item.label} className="gi"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s cubic-bezier(.22,.68,0,1.2)" }} />
                <div className="go" style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to top, ${item.accent}ee 0%, ${item.accent}44 60%, transparent 100%)`,
                  opacity: 0, transition: "opacity 0.35s ease",
                  display: "flex", alignItems: "flex-end", padding: 20,
                }}>
                  <div className="gl" style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "0.95rem", color: "white",
                    transform: "translateY(12px)", transition: "transform 0.35s ease",
                  }}>{item.label}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
