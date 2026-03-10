import Link from "next/link"

const features = [
  {
    iconClass: "icon-bg-teal",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Fully Trained & DBS Checked",
    desc: "All our carers are rigorously vetted, DBS checked and continuously trained to the highest standards.",
  },
  {
    iconClass: "icon-bg-blue",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8"/><line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.8"/></svg>,
    title: "Personalised Care Plans",
    desc: "We design bespoke care plans around each individual's unique needs, preferences and goals.",
  },
  {
    iconClass: "icon-bg-green",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Flexible & Reliable",
    desc: "From a few hours per week to full-time support — we fit around your schedule with dependable consistency.",
  },
  {
    iconClass: "icon-bg-purple",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    title: "Family-Centred Approach",
    desc: "We work closely with families, keeping everyone informed and involved in the care journey.",
  },
]

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "100px 0", background: "#F8FAFD" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))", gap: 60, alignItems: "center" }}>

          {/* Image Panel */}
          <div style={{ position: "relative" }}>
            <div style={{ borderRadius: 24, overflow: "hidden", position: "relative" }}>
              <img
                src="/images/why-choose-us.jpg"
                alt="Caring team"
                style={{ width: "100%", height: 500, objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 50%, rgba(11,37,69,0.6) 100%)",
              }} />
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute", bottom: 28, left: -20,
              background: "white",
              borderRadius: 16, padding: "16px 20px",
              boxShadow: "0 16px 40px rgba(11,37,69,0.15)",
              display: "flex", alignItems: "center", gap: 14,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: "linear-gradient(135deg, #0D9488, #14B8A6)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.1rem", color: "#0B2545" }}>98% Satisfaction</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#64748B" }}>From our client reviews</div>
              </div>
            </div>

            {/* Experience badge */}
            <div style={{
              position: "absolute", top: 28, right: -20,
              background: "linear-gradient(135deg, #0B2545, #163a6b)",
              borderRadius: 16, padding: "16px 22px",
              boxShadow: "0 12px 32px rgba(11,37,69,0.3)",
              textAlign: "center",
            }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "2rem", color: "white", lineHeight: 1 }}>5+</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", marginTop: 4 }}>Years of Care</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="section-label" style={{ marginBottom: 20, display: "inline-flex" }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" fill="currentColor"/>
              </svg>
              Why Choose Us
            </span>

            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 700, color: "#0B2545",
              lineHeight: 1.15, marginTop: 16, marginBottom: 12,
            }}>
              Care You Can Trust,<br />Every Single Day
            </h2>

            <div className="divider-teal" style={{ marginBottom: 24 }} />

            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#64748B", fontSize: "1rem",
              lineHeight: 1.7, marginBottom: 36,
            }}>
              Othdabere Healthcare is committed to delivering outstanding person-centred care that empowers individuals and brings peace of mind to families.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div className={f.iconClass} style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.95rem", marginBottom: 4 }}>
                      {f.title}
                    </h4>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.87rem", lineHeight: 1.6, margin: 0 }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 40 }}>
              <Link href="/about" className="btn-primary" style={{ textDecoration: "none" }}>
                Learn About Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
