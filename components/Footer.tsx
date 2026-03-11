"use client"

import Link from "next/link"

const companyLinks = [
  { href: "/",                 label: "Home" },
  { href: "/about",            label: "About Us" },
  { href: "/services",         label: "Services" },
  { href: "/domiciliary-care", label: "Domiciliary Care" },
  { href: "/careers",          label: "Careers" },
  { href: "/blog",             label: "Blog" },
  { href: "/faqs",             label: "FAQs" },
  { href: "/referral",         label: "Refer Someone" },
  { href: "/contact",          label: "Contact Us" },
]

const contactItems = [
  { icon: "📞", val: "+44 7588 160799",              href: "tel:+447588160799" },
  { icon: "📧", val: "othdaberehealthcare@gmail.com", href: "mailto:othdaberehealthcare@gmail.com" },
  { icon: "📍", val: "United Kingdom & Ghana",        href: null },
  { icon: "🕐", val: "Mon – Sun, 8am – 8pm",          href: null },
]

const legalLinks = [
  { href: "/privacy-policy",   label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms" },
  { href: "/accessibility",    label: "Accessibility" },
]

const linkSt = {
  display: "block" as const,
  fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.60)",
  textDecoration: "none" as const,
  marginBottom: 10,
  transition: "color 0.2s",
  lineHeight: "1.5",
}

export default function Footer() {
  return (
    <footer style={{ background: "linear-gradient(180deg,#061428,#0B2545)", color: "white", overflow: "hidden" }}>

      {/* Top wave */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ width: "100%", height: 50, display: "block" }}>
          <path d="M0 0L1440 0L1440 20C1200 50 960 0 720 20C480 40 240 10 0 30Z" fill="#F8FAFD"/>
        </svg>
      </div>

      <div className="container" style={{ paddingTop: 52, paddingBottom: 32 }}>

        {/* Main grid */}
        <div className="footer-main-grid">

          {/* ── Brand column ── */}
          <div className="footer-brand-col">
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <img src="/logo.png" alt="Othdabere Healthcare" style={{ height: 40, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.88rem" }}>Othdabere H.Q.</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "0.67rem", color: "rgba(255,255,255,0.50)" }}>Healthcare Services Ltd</div>
              </div>
            </div>

            <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: "rgba(255,255,255,0.55)", fontSize: "0.84rem", lineHeight: 1.72, marginBottom: 18 }}>
              Compassionate domiciliary care across the UK and Ghana — empowering individuals to live independently with dignity since 2021.
            </p>

            <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
              {[
                { href: "mailto:othdaberehealthcare@gmail.com", label: "Email",
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg> },
                { href: "tel:+447588160799", label: "Phone",
                  icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg> },
              ].map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.11)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.60)", textDecoration: "none", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(13,148,136,0.35)"; e.currentTarget.style.color = "white" }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.60)" }}
                >{s.icon}</a>
              ))}
            </div>

            <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(13,148,136,0.12)", border: "1px solid rgba(13,148,136,0.25)", borderRadius: 8, padding: "7px 12px" }}>
              <span style={{ fontSize: "0.85rem" }}>✅</span>
              <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.70rem", color: "rgba(255,255,255,0.70)", fontWeight: 600 }}>CQC Registered · DBS Checked Staff</span>
            </div>
          </div>

          {/* ── Quick Links ── */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            {companyLinks.map(l => (
              <Link key={l.href} href={l.href} style={linkSt}
                onMouseEnter={e => e.currentTarget.style.color = "#2DD4BF"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.60)"}
              >{l.label}</Link>
            ))}
          </div>

          {/* ── Contact ── */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">Contact</h4>
            {contactItems.map(c => (
              c.href
                ? <a key={c.val} href={c.href} style={{ ...linkSt, display: "flex", gap: 8, alignItems: "flex-start" }}
                    onMouseEnter={e => e.currentTarget.style.color = "white"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.60)"}
                  >
                    <span style={{ flexShrink: 0 }}>{c.icon}</span>
                    <span style={{ wordBreak: "break-word" }}>{c.val}</span>
                  </a>
                : <div key={c.val} style={{ ...linkSt, display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0 }}>{c.icon}</span>
                    <span>{c.val}</span>
                  </div>
            ))}

            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, background: "linear-gradient(135deg,#0D9488,#14B8A6)", color: "white", padding: "11px 22px", borderRadius: 100, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.82rem", textDecoration: "none", boxShadow: "0 4px 18px rgba(13,148,136,0.35)", transition: "all 0.25s" }}
              onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)"}
              onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.transform = "none"}
            >Contact Us →</Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.32)", margin: 0 }}>
            © 2025 Othdabere H.Q. Healthcare Services Ltd. All rights reserved.
          </p>
          <div className="footer-legal-links">
            {legalLinks.map(l => (
              <Link key={l.href} href={l.href} style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.36)", textDecoration: "none", transition: "color 0.2s", whiteSpace: "nowrap" }}
                onMouseEnter={e => e.currentTarget.style.color = "#2DD4BF"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.36)"}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}