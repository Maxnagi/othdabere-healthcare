"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg,#061428,#0B2545)", color: "white" }}>
      {/* Top wave */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: 50, display: "block" }}>
          <path d="M0 0L1440 0L1440 20C1200 50 960 0 720 20C480 40 240 10 0 30Z" fill="#F8FAFD"/>
        </svg>
      </div>

      <div className="container" style={{ paddingTop: 64, paddingBottom: 40 }}>
        <div className="footer-grid" style={{}}>

          {/* Brand */}
          <div className="footer-brand">
            {/* Logo — white card so it always shows regardless of logo design */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{
                background: "white",
                borderRadius: 12,
                padding: "6px 10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}>
                <img
                  src="/logo.png"
                  alt="Othdabere Healthcare logo"
                  style={{ height: 36, width: "auto", objectFit: "contain", display: "block" }}
                />
              </div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.92rem" }}>Othdabere High Quality</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "0.7rem", color: "rgba(255,255,255,0.55)" }}>Healthcare Services Ltd</div>
              </div>
            </div>

            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.58)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
             'A Voice for the Voiceless Domiciliary Care Agency: Reviving Care, Hope and Love for' Vulnerable within communities'. 
            </p>

            {/* Social icons */}
            <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
              {[
                { href: "mailto:othdaberehealthcare@gmail.com", label: "Email", icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                )},
                { href: "tel:+447588160799", label: "Phone", icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                )},
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.65)", textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background="rgba(13,148,136,0.35)"; e.currentTarget.style.borderColor="#0D9488"; e.currentTarget.style.color="white" }}
                onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.12)"; e.currentTarget.style.color="rgba(255,255,255,0.65)" }}
                >{s.icon}</a>
              ))}
            </div>

            {/* CQC badge */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(13,148,136,0.15)", border: "1px solid rgba(13,148,136,0.3)", borderRadius: 50, padding: "7px 14px" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#2DD4BF" }}>CQC Registered · DBS Checked Staff</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 18 }}>Quick Links</h4>
            {[
              { href: "/",               label: "Home" },
              { href: "/about",          label: "About Us" },
              { href: "/services",       label: "Services" },
              { href: "/domiciliary-care", label: "Domiciliary Care" },
              { href: "/careers",        label: "Careers" },
              { href: "/blog",           label: "Blog" },
              { href: "/faqs",           label: "FAQs" },
              { href: "/referral",       label: "Refer Someone" },
              { href: "/contact",        label: "Contact Us" },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{ display: "block", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.86rem", color: "rgba(255,255,255,0.60)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color="#2DD4BF"}
                onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.60)"}
              >{l.label}</Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 18 }}>Services</h4>
            {["Personal Care","Medication Support","Meal Preparation","Household Support","Companionship","Specialised Care","Palliative Care"].map(l => (
              <Link key={l} href="/services" style={{ display: "block", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.86rem", color: "rgba(255,255,255,0.60)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color="#2DD4BF"}
                onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.60)"}
              >{l}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.38)", marginBottom: 18 }}>Contact</h4>
            {[
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>, val: "+44 7588 160799", href: "tel:+447588160799", color: "#2DD4BF" },
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>, val: "othdaberehealthcare@gmail.com", href: "mailto:othdaberehealthcare@gmail.com", color: "#2DD4BF" },
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>, val: "United Kingdom & Ghana", href: "#", color: "rgba(255,255,255,0.60)" },
              { icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#2DD4BF" strokeWidth="1.8"/><path d="M12 6v6l4 2" stroke="#2DD4BF" strokeWidth="1.8" strokeLinecap="round"/></svg>, val: "Mon – Sun, 8am – 8pm", href: "#", color: "rgba(255,255,255,0.60)" },
            ].map((c, i) => (
              <a key={i} href={c.href} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.84rem", color: c.color, textDecoration: "none", marginBottom: 14, transition: "color 0.2s", lineHeight: 1.4 }}
                onMouseEnter={e => e.currentTarget.style.color="white"}
                onMouseLeave={e => e.currentTarget.style.color=c.color}
              >
                <span style={{ flexShrink: 0, marginTop: 1 }}>{c.icon}</span>{c.val}
              </a>
            ))}

            <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 8, background: "linear-gradient(135deg,#0D9488,#0891B2)", color: "white", padding: "11px 22px", borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.85rem", textDecoration: "none", transition: "transform 0.2s, box-shadow 0.2s", boxShadow: "0 4px 16px rgba(13,148,136,0.35)" }}
              onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(13,148,136,0.5)" }}
              onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 16px rgba(13,148,136,0.35)" }}
            >
              Contact Us →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between" }}>
          
          {/* Left: copyright */}
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>
            © 2025 Othdabere H.Q. Healthcare Services Ltd. All rights reserved.
          </p>

          {/* Centre: built by credit */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.28)" }}>Built by</span>
            <a href="https://maxnagi.com" target="_blank" rel="noopener noreferrer" style={{
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontSize: "0.78rem",
              fontWeight: 700,
              background: "linear-gradient(135deg,#38BDF8,#2DD4BF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.opacity="0.75"}
            onMouseLeave={e => e.currentTarget.style.opacity="1"}
            >
              maxnagi.com
            </a>
          </div>

          {/* Right: legal links */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { href: "/privacy-policy", label: "Privacy Policy" },
              { href: "/terms-of-service", label: "Terms" },
              { href: "/accessibility", label: "Accessibility" },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.38)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color="#2DD4BF"}
                onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.38)"}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}