"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer style={{ background: "#06101E", color: "white" }}>

      {/* Main Footer */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 24px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 40 }}>

          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "linear-gradient(135deg, #0D9488, #0B2545)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.88rem", color: "white", lineHeight: 1.2 }}>Othdabere H.Q.</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.68rem", color: "rgba(255,255,255,0.5)", lineHeight: 1 }}>Healthcare Services Ltd</div>
              </div>
            </div>
            <p style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.87rem", color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7, marginBottom: 28,
            }}>
              Providing compassionate, professional domiciliary care services that empower individuals to live independently with dignity.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                { label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
              ].map(s => (
                <a key={s.label} href="#" style={{
                  width: 38, height: 38, borderRadius: 10,
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(13,148,136,0.3)"; e.currentTarget.style.color = "#2DD4BF" }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "white", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/domiciliary-care", label: "Domiciliary Care" },
                { href: "/faqs", label: "FAQs" },
                { href: "/blog", label: "Blog" },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.9rem", color: "rgba(255,255,255,0.55)",
                    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#2DD4BF"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                  >
                    <span style={{ width: 6, height: 1.5, background: "#0D9488", display: "inline-block", borderRadius: 1 }} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "white", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
              Our Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
              {["Personal Care", "Medication Support", "Meal Preparation", "Household Support", "Companionship", "Specialised Care"].map(s => (
                <li key={s}>
                  <Link href="/services" style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontSize: "0.9rem", color: "rgba(255,255,255,0.55)",
                    textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "#2DD4BF"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.55)"}
                  >
                    <span style={{ width: 6, height: 1.5, background: "#0D9488", display: "inline-block", borderRadius: 1 }} />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "white", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z", text: "+44 7588 160799" },
                { icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22,6l-10,7L2,6", text: "othdaberehealthcare@gmail.com" },
                { icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z", text: "United Kingdom & Ghana" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: 8, flexShrink: 0,
                    background: "rgba(13,148,136,0.15)",
                    border: "1px solid rgba(13,148,136,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#2DD4BF",
                  }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d={c.icon}/></svg>
                  </div>
                  <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.87rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, paddingTop: 6 }}>
                    {c.text}
                  </span>
                </div>
              ))}
            </div>

            <Link href="/careers" style={{
              display: "inline-flex", alignItems: "center", gap: 8, marginTop: 24,
              background: "rgba(13,148,136,0.18)",
              border: "1px solid rgba(13,148,136,0.3)",
              color: "#2DD4BF",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600, fontSize: "0.82rem",
              padding: "10px 18px", borderRadius: 100,
              textDecoration: "none", transition: "all 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(13,148,136,0.3)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(13,148,136,0.18)"}
            >
              We're Hiring →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "20px 24px",
        maxWidth: 1280, margin: "0 auto",
        display: "flex", flexWrap: "wrap", gap: 12,
        justifyContent: "space-between", alignItems: "center",
      }}>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
          © 2025 Othdabere High Quality Healthcare Services Ltd. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: 20 }}>
          {["Privacy Policy", "Terms of Service", "Accessibility"].map(l => (
            <a key={l} href="#" style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.78rem", color: "rgba(255,255,255,0.35)",
              textDecoration: "none", transition: "color 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#2DD4BF"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.35)"}
            >{l}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}