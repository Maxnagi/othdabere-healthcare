const testimonials = [
  {
    quote: "Othdabere Healthcare provided excellent support for our mother. The carers were professional, compassionate and always went above and beyond.",
    name: "Sarah M.",
    relation: "Daughter of client",
    rating: 5,
    initials: "SM",
    color: "#0D9488",
  },
  {
    quote: "The care team was incredibly reliable and supportive. We felt total confidence that our father was in safe, caring hands every single day.",
    name: "James K.",
    relation: "Son of client",
    rating: 5,
    initials: "JK",
    color: "#0B2545",
  },
  {
    quote: "Highly recommended. Their carers treated our family member with genuine dignity and respect. The personalised approach made all the difference.",
    name: "Angela T.",
    relation: "Family member",
    rating: 5,
    initials: "AT",
    color: "#16A34A",
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
    <section style={{ padding: "100px 0", background: "#F8FAFD" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#F59E0B">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Testimonials
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0B2545",
            marginTop: 16, marginBottom: 12,
          }}>
            What Families Say About Us
          </h2>
          <div className="divider-teal" style={{ margin: "0 auto" }} />
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <div key={i} className="card-lift" style={{
              background: "white",
              border: "1.5px solid #E2E8F0",
              borderRadius: 20, padding: "36px",
              position: "relative",
            }}>
              {/* Big quote mark */}
              <div style={{
                position: "absolute", top: 20, right: 24,
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "5rem", lineHeight: 1,
                color: "#E2E8F0", userSelect: "none",
              }}>"</div>

              <Stars n={t.rating} />

              <p style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "#334155", fontSize: "0.97rem",
                lineHeight: 1.75, margin: "20px 0 28px",
                fontStyle: "italic",
              }}>
                "{t.quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 14, borderTop: "1px solid #F1F5F9", paddingTop: 20 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}99)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700, fontSize: "0.85rem", color: "white",
                  flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "#0B2545" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#64748B" }}>{t.relation}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div style={{
          marginTop: 56, background: "white",
          border: "1.5px solid #E2E8F0", borderRadius: 20,
          padding: "28px 32px",
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "center", gap: 32,
        }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 700, color: "#0B2545" }}>4.9/5</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#64748B" }}>Average Rating</div>
          </div>
          <div style={{ width: 1, height: 40, background: "#E2E8F0" }} />
          <div style={{ display: "flex", gap: 3 }}>{Array.from({length:5}).map((_,i)=><svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#F59E0B"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>)}</div>
          <div style={{ width: 1, height: 40, background: "#E2E8F0" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 700, color: "#0B2545" }}>100+</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#64748B" }}>Happy Families</div>
          </div>
        </div>
      </div>
    </section>
  )
}
