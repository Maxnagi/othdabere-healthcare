"use client"

import ScrollReveal from "./ScrollReveal"

const testimonials = [
  {
    quote: "Othdabere Healthcare provided excellent support for our mother. The carers were professional, compassionate and always went above and beyond what we expected.",
    name: "Sarah M.",
    relation: "Daughter of client",
    rating: 5,
    initials: "SM",
    grad: "linear-gradient(135deg,#F43F5E,#EC4899)",
    accent: "#F43F5E",
  },
  {
    quote: "The care team was incredibly reliable and supportive. We felt total confidence that our father was in safe, caring hands every single day.",
    name: "James K.",
    relation: "Son of client",
    rating: 5,
    initials: "JK",
    grad: "linear-gradient(135deg,#3B82F6,#6366F1)",
    accent: "#3B82F6",
  },
  {
    quote: "Highly recommended. Their carers treated our family member with genuine dignity and respect. The personalised approach made all the difference.",
    name: "Angela T.",
    relation: "Family member",
    rating: 5,
    initials: "AT",
    grad: "linear-gradient(135deg,#10B981,#14B8A6)",
    accent: "#10B981",
  },
]

const Stars = ({ n }: { n: number }) => (
  <div style={{ display: "flex", gap: 3 }}>
    {Array.from({ length: n }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
)

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ background: "#F8FAFD" }}>
      <div className="container">

        {/* Header */}
        <ScrollReveal style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            ⭐ Testimonials
          </span>
          <h2 className="sec-h2" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0B2545",
            marginTop: 16, marginBottom: 12,
          }}>
            What Families Say About Us
          </h2>
          <div className="divider-teal" style={{ margin: "0 auto" }} />
        </ScrollReveal>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 120}>
              <div className="card-lift" style={{
                background: "white",
                border: "1.5px solid #E2E8F0",
                borderRadius: 22, padding: "34px",
                position: "relative", overflow: "hidden",
                height: "100%",
              }}>
                {/* Color accent bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 5,
                  background: t.grad,
                }} />

                {/* Big quote */}
                <div style={{
                  position: "absolute", top: 16, right: 22,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "5rem", lineHeight: 1,
                  color: "#E2E8F0", userSelect: "none", fontWeight: 700,
                }}>"</div>

                <Stars n={t.rating} />

                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: "#334155", fontSize: "0.96rem",
                  lineHeight: 1.76, margin: "18px 0 26px",
                  fontStyle: "italic",
                }}>
                  "{t.quote}"
                </p>

                <div style={{
                  display: "flex", alignItems: "center", gap: 14,
                  borderTop: "1px solid #F1F5F9", paddingTop: 18,
                }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: "50%",
                    background: t.grad, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 700, fontSize: "0.85rem", color: "white",
                    boxShadow: `0 6px 20px ${t.accent}44`,
                  }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "#0B2545" }}>{t.name}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.76rem", color: "#64748B" }}>{t.relation}</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust bar */}
        <ScrollReveal style={{ marginTop: 52 }}>
          <div className="testimonial-trust" style={{
            background: "white", border: "1.5px solid #E2E8F0",
            borderRadius: 20, padding: "26px 32px",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "center", gap: 28,
          }}>
            {[
              { val: "4.9/5", lbl: "Average Rating" },
              { val: "⭐⭐⭐⭐⭐", lbl: "5-Star Reviews" },
              { val: "100+", lbl: "Happy Families" },
            ].map((item, i) => (
              <>
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.7rem", fontWeight: 700, color: "#0B2545",
                  }}>{item.val}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.76rem", color: "#64748B" }}>{item.lbl}</div>
                </div>
                {i < 2 && <div className="trust-divider" style={{ width: 1, height: 38, background: "#E2E8F0" }} />}
              </>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
