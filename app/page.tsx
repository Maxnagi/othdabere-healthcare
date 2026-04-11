import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const features = [
  { icon:"🎨", title:"Colour Contrast",     desc:"All text and interactive elements meet or exceed WCAG 2.1 AA contrast ratio requirements (minimum 4.5:1 for normal text, 3:1 for large text) to ensure readability for users with low vision or colour blindness." },
  { icon:"⌨️", title:"Keyboard Navigation", desc:"Every interactive element — links, buttons, forms and menus — is fully navigable using a keyboard alone. Focus indicators are clearly visible so keyboard-only users can always see where they are on the page." },
  { icon:"📱", title:"Responsive Design",   desc:"Our website adapts fully to all screen sizes, including mobile phones, tablets and large desktop displays. Content reflows appropriately so nothing is lost or obscured on smaller screens." },
  { icon:"🔊", title:"Screen Reader Support",desc:"We use semantic HTML elements, appropriate ARIA labels and descriptive alt text for all meaningful images. This ensures compatibility with screen readers such as NVDA, JAWS and VoiceOver." },
  { icon:"🔤", title:"Resizable Text",       desc:"All text on our website can be resized up to 200% using browser zoom without loss of content or functionality. We avoid fixed pixel sizes for text wherever possible." },
  { icon:"🐢", title:"Reduced Motion",       desc:"We respect users' system-level preferences for reduced motion. Animations and transitions are disabled for users who have enabled the 'prefers-reduced-motion' setting on their device." },
  { icon:"🖱️", title:"Touch-Friendly Targets",desc:"All interactive elements are sized and spaced to meet WCAG 2.5.5 target size guidelines (minimum 44×44px), making them accessible to users with motor disabilities or touch screen devices." },
  { icon:"📋", title:"Form Accessibility",  desc:"All form fields are associated with descriptive labels. Error messages are clearly identified and describe what is required. Required fields are marked and validation feedback is provided in an accessible format." },
]

const standards = [
  { level:"A", label:"WCAG 2.1 Level A", color:"#16A34A", bg:"#DCFCE7" },
  { level:"AA", label:"WCAG 2.1 Level AA (target)", color:"#1D4ED8", bg:"#DBEAFE" },
  { level:"AAA", label:"Selected AAA criteria", color:"#7C3AED", bg:"#EDE9FE" },
]

export default function Accessibility() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section style={{
        position: "relative", padding: "90px 0 70px",
        backgroundImage: "url('/images/hero-services.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)",
            color: "#5EEAD4", fontFamily: "'Plus Jakarta Sans',sans-serif",
            fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.14em",
            textTransform: "uppercase", padding: "7px 16px", borderRadius: 100, marginBottom: 20,
          }}>♿ Accessibility</span>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "clamp(2.2rem,5vw,4rem)", fontWeight: 700, color: "white", marginBottom: 16 }}>
            Accessibility Statement
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.72)", fontSize: "1rem", maxWidth: 540, margin: "0 auto" }}>
            We are committed to making our website accessible to everyone, including people with disabilities. This page explains what we do and how to get help.
          </p>
        </div>
      </section>

      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div style={{ maxWidth: 900, margin: "0 auto" }}>

            {/* Intro */}
            <div style={{ background: "linear-gradient(135deg,#EEF6FF,#F0FDF4)", border: "1.5px solid rgba(13,148,136,0.18)", borderRadius: 20, padding: "28px 32px", marginBottom: 52 }}>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#334155", fontSize: "0.97rem", lineHeight: 1.75, margin: 0 }}>
                Othdabere H.Q. Healthcare Services Ltd is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards. Our target conformance is <strong>WCAG 2.1 Level AA</strong>.
              </p>
            </div>

            {/* Conformance standards */}
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 24 }}>Conformance Standards</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 52 }}>
              {standards.map(s => (
                <div key={s.level} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 22px", borderRadius: 14, background: s.bg, border: `1.5px solid ${s.color}33` }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.8rem", color: "white" }}>{s.level}</div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", color: s.color }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Features grid */}
            <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 28 }}>What We Have Done</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(360px,1fr))", gap: 20, marginBottom: 52 }}>
              {features.map((f, i) => (
                <div key={i} style={{
                  background: "white", border: "1.5px solid #E2E8F0",
                  borderRadius: 18, padding: "24px",
                  display: "flex", gap: 18, alignItems: "flex-start",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}>
                  <div style={{ fontSize: "1.8rem", flexShrink: 0 }}>{f.icon}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.95rem", marginBottom: 8 }}>{f.title}</h3>
                    <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#64748B", fontSize: "0.87rem", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Known limitations */}
            <div style={{ background: "#FFFBEB", border: "1.5px solid #FCD34D", borderRadius: 18, padding: "28px 32px", marginBottom: 40 }}>
              <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.6rem", flexShrink: 0 }}>⚠️</span>
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, color: "#92400E", fontSize: "1rem", marginBottom: 10 }}>Known Limitations</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "#78350F", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                    We are aware that some legacy blog post images may lack descriptive alt text. We are actively working to address this. Additionally, some embedded Google Maps content has limited screen-reader support beyond the iframe title. We will continue improving these areas.
                  </p>
                </div>
              </div>
            </div>

            {/* Feedback */}
            <div style={{ background: "linear-gradient(135deg,#0B2545,#163a6b)", borderRadius: 20, padding: "40px", color: "white", textAlign: "center" }}>
              <div style={{ fontSize: "2rem", marginBottom: 14 }}>🗣️</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: "1.8rem", fontWeight: 700, marginBottom: 12 }}>Feedback & Assistance</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.72)", fontSize: "0.95rem", lineHeight: 1.75, marginBottom: 28, maxWidth: 560, margin: "0 auto 28px" }}>
                If you experience any accessibility barriers on our website, or need content provided in an alternative format, please contact us. We take all feedback seriously and aim to respond within 5 working days.
              </p>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="mailto:othdaberehealthcare@gmail.com" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "white", padding: "13px 24px", borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", transition: "background 0.2s" }}>
                  📧 Email Us
                </a>
                <a href="tel:+447588160799" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#0D9488,#14B8A6)", color: "white", padding: "13px 24px", borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none", boxShadow: "0 4px 20px rgba(13,148,136,0.35)" }}>
                  📞 Call Us
                </a>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.4)", fontSize: "0.78rem", marginTop: 20 }}>
                This statement was last reviewed in January 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
