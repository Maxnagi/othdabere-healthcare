"use client"

const images = [
  { src: "/images/care1.jpg", label: "Personal Care" },
  { src: "/images/care2.jpg", label: "Companionship" },
  { src: "/images/care3.jpg", label: "Medication Support" },
  { src: "/images/care4.jpg", label: "Meal Preparation" },
  { src: "/images/care5.jpg", label: "Household Support" },
  { src: "/images/care6.jpg", label: "Specialised Care" },
]

export default function Gallery() {
  return (
    <section style={{ padding: "100px 0", background: "white" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="currentColor"/>
            </svg>
            Gallery
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 700, color: "#0B2545",
            marginTop: 16, marginBottom: 12,
          }}>
            Our Care in Action
          </h2>
          <div className="divider-teal" style={{ margin: "0 auto" }} />
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {images.map((img, i) => (
            <div key={i} style={{
              position: "relative", borderRadius: 16, overflow: "hidden",
              height: i === 0 || i === 3 ? 320 : 260,
            }}
            className="card-lift"
            >
              <img
                src={img.src}
                alt={img.label}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.5s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              {/* Overlay */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(11,37,69,0.75) 0%, transparent 60%)",
                display: "flex", alignItems: "flex-end", padding: "20px",
              }}>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 600, fontSize: "0.9rem",
                  color: "white",
                  background: "rgba(13,148,136,0.7)",
                  padding: "6px 14px", borderRadius: 100,
                  backdropFilter: "blur(8px)",
                }}>
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}