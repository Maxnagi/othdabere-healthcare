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
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 56 }}>

          {/* Brand */}
          <div className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <img src="/logo.png" alt="Othdabere Healthcare logo" style={{ height: 46, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.92rem" }}>Othdabere H.Q.</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "0.7rem", color: "rgba(255,255,255,0.55)" }}>Healthcare Services Ltd</div>
              </div>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.58)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: 20, maxWidth: 280 }}>
              Providing compassionate, professional domiciliary care across the UK and Ghana since 2021. Dignity and independence at home.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href:"mailto:othdaberehealthcare@gmail.com", label:"Email", icon: (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                )},
                { href:"tel:+447588160799", label:"Phone", icon: (
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
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>Services</h4>
            {["Personal Care","Medication Support","Meal Preparation","Household Support","Companionship","Dementia Care"].map(l => (
              <Link key={l} href="/services" style={{ display: "block", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.87rem", color: "rgba(255,255,255,0.62)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color="#2DD4BF"}
                onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.62)"}
              >{l}</Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>Company</h4>
            {[
              { href:"/about",    label:"About Us"   },
              { href:"/careers",  label:"Careers"    },
              { href:"/blog",     label:"Blog"       },
              { href:"/faqs",     label:"FAQs"       },
              { href:"/referral", label:"Refer Someone" },
              { href:"/contact",  label:"Contact Us" },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{ display: "block", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.87rem", color: "rgba(255,255,255,0.62)", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color="#2DD4BF"}
                onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.62)"}
              >{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.88rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>Contact</h4>
            {[
              { icon:"📞", val:"+44 7588 160799", href:"tel:+447588160799" },
              { icon:"📧", val:"othdaberehealthcare@gmail.com", href:"mailto:othdaberehealthcare@gmail.com" },
              { icon:"📍", val:"United Kingdom & Ghana", href:"#" },
            ].map(c => (
              <a key={c.val} href={c.href} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.62)", textDecoration: "none", marginBottom: 14, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color="white"}
                onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.62)"}
              >
                <span style={{ flexShrink: 0 }}>{c.icon}</span>{c.val}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 28, display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.80rem", color: "rgba(255,255,255,0.38)", margin: 0 }}>
            © 2025 Othdabere H.Q. Healthcare Services Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { href:"/privacy",       label:"Privacy Policy" },
              { href:"/terms",         label:"Terms of Service" },
              { href:"/accessibility", label:"Accessibility" },
            ].map(l => (
              <Link key={l.label} href={l.href} style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.80rem", color: "rgba(255,255,255,0.40)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color="#2DD4BF"}
                onMouseLeave={e => e.currentTarget.style.color="rgba(255,255,255,0.40)"}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
