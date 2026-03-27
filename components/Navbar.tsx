"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

const links = [
  { href: "/",               label: "Home",       icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/about",          label: "About",      icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.9"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/></svg> },
  { href: "/services",       label: "Services",   icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/domiciliary-care", label: "Care",     icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/counseling",     label: "Counseling", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/gallery",        label: "Gallery",    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.9"/><circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.9"/><polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/careers",        label: "Careers",    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.9"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v4M10 14h4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/></svg> },
  { href: "/blog",           label: "News",       icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 10h16M4 14h10" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"/><rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.9"/></svg> },
  { href: "/faqs",           label: "FAQs",       icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.9"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg> },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <style>{`
        @keyframes menuSlideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes itemSlideIn {
          from { opacity: 0; transform: translateX(-22px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .mob-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 13px 16px;
          border-radius: 14px;
          text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 500;
          font-size: 1rem;
          color: #334155;
          transition: background 0.2s, color 0.2s, transform 0.18s;
          position: relative;
          overflow: hidden;
          opacity: 0;
          animation: itemSlideIn 0.36s cubic-bezier(.22,.68,0,1.15) forwards;
        }
        .mob-link:active {
          transform: scale(0.97);
        }
        .mob-link.active-link {
          background: linear-gradient(135deg, #ECFDF5, #ECFEFF);
          color: #0D9488;
          font-weight: 700;
        }
        .mob-link:not(.active-link):hover {
          background: #F8FAFD;
          color: #0D9488;
        }
        .mob-link-icon {
          width: 40px;
          height: 40px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: background 0.2s;
        }
        .active-link .mob-link-icon {
          background: linear-gradient(135deg, #0D9488, #0B9488);
          color: white;
          box-shadow: 0 4px 12px rgba(13,148,136,0.30);
        }
        .mob-link:not(.active-link) .mob-link-icon {
          background: #F1F5F9;
          color: #64748B;
        }
        .mob-link.active-link .mob-link-icon {
          color: white;
        }
        .mob-link-arrow {
          margin-left: auto;
          opacity: 0;
          transition: opacity 0.2s, transform 0.2s;
          color: #0D9488;
        }
        .active-link .mob-link-arrow,
        .mob-link:hover .mob-link-arrow {
          opacity: 1;
          transform: translateX(3px);
        }
        .mob-drawer {
          animation: menuSlideDown 0.28s cubic-bezier(.22,.68,0,1.1) forwards;
        }
      `}</style>

      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "white",
        boxShadow: scrolled ? "0 2px 32px rgba(11,37,69,0.10)" : "0 1px 0 #E2E8F0",
        backdropFilter: "blur(14px)",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between", height: 84,
        }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <img src="/logo.png" alt="Othdabere Healthcare" style={{ height: 60, width: "auto", objectFit: "contain", display: "block" }} />
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.85rem", background: "linear-gradient(135deg,#0D9488,#14B8A6,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: "1.25" }}>Othdabere High Quality</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.85rem", background: "linear-gradient(135deg,#0D9488,#14B8A6,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: "1.25" }}>Healthcare Services Ltd</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="nav-links-desk" style={{ display: "flex", alignItems: "center", gap: 2 }}>
            {links.map(link => (
              <Link key={link.href} href={link.href}
                style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 500, fontSize: "0.875rem", color: pathname === link.href ? "#0D9488" : "#334155", textDecoration: "none", padding: "8px 12px", borderRadius: 8, transition: "all 0.2s", background: pathname === link.href ? "linear-gradient(135deg,#F0FDF4,#ECFEFF)" : "transparent" }}
                onMouseEnter={e => { e.currentTarget.style.color = "#0D9488"; e.currentTarget.style.background = "linear-gradient(135deg,#F0FDF4,#ECFEFF)" }}
                onMouseLeave={e => { e.currentTarget.style.color = pathname === link.href ? "#0D9488" : "#334155"; e.currentTarget.style.background = pathname === link.href ? "linear-gradient(135deg,#F0FDF4,#ECFEFF)" : "transparent" }}
              >{link.label}</Link>
            ))}
          </div>

          {/* Desktop CTAs + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <a href="tel:+447588160799" className="nav-cta-desk" style={{ display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,#F0FDF4,#ECFEFF)", border: "1.5px solid rgba(13,148,136,0.22)", color: "#0D9488", padding: "8px 16px", borderRadius: 50, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.82rem", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "linear-gradient(135deg,#DCFCE7,#CCFBF1)"}
              onMouseLeave={e => e.currentTarget.style.background = "linear-gradient(135deg,#F0FDF4,#ECFEFF)"}
            >
              📞 +44 7588 160799
            </a>
            <Link href="/contact" className="nav-cta-desk" style={{ display: "flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg,#0B2545,#163a6b)", color: "white", padding: "10px 20px", borderRadius: 50, textDecoration: "none", fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 600, fontSize: "0.85rem", boxShadow: "0 4px 16px rgba(11,37,69,0.28)", transition: "all 0.28s cubic-bezier(.22,.68,0,1.2)" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(11,37,69,0.4)" }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(11,37,69,0.28)" }}
            >
              Get Care Today
            </Link>

            {/* Burger */}
            <button onClick={() => setOpen(!open)} className="nav-burger"
              style={{ background: open ? "linear-gradient(135deg,#ECFDF5,#ECFEFF)" : "none", border: `1.5px solid ${open ? "rgba(13,148,136,0.3)" : "#E2E8F0"}`, borderRadius: 10, cursor: "pointer", padding: "9px", alignItems: "center", justifyContent: "center", transition: "all 0.22s" }}
              aria-label="Toggle menu"
            >
              {open
                ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round"/></svg>
                : <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="#0B2545" strokeWidth="2.2" strokeLinecap="round"/></svg>
              }
            </button>
          </div>
        </div>

        {/* ── Mobile / Tablet Drawer ── */}
        {open && (
          <div className="mob-drawer" style={{
            borderTop: "1px solid #E2E8F0",
            background: "white",
            padding: "12px 16px 24px",
            maxHeight: "calc(100vh - 72px)",
            overflowY: "auto",
          }}>
            {/* Nav items */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {links.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`mob-link${isActive ? " active-link" : ""}`}
                    style={{ animationDelay: `${i * 55}ms` }}
                  >
                    {/* Icon box */}
                    <div className="mob-link-icon">{link.icon}</div>

                    {/* Label */}
                    <span>{link.label}</span>

                    {/* Active indicator pill */}
                    {isActive && (
                      <span style={{ marginLeft: "auto", marginRight: 4, fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", background: "linear-gradient(135deg,#0D9488,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                        Active
                      </span>
                    )}

                    {/* Arrow */}
                    <div className="mob-link-arrow">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Divider */}
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #E2E8F0, transparent)", margin: "16px 0" }} />

            {/* CTA buttons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <a href="tel:+447588160799" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, background: "linear-gradient(135deg,#F0FDF4,#ECFEFF)", border: "1.5px solid rgba(13,148,136,0.28)", color: "#0D9488", padding: "14px 10px", borderRadius: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.87rem", textDecoration: "none", transition: "transform 0.18s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(0.98)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                Call Us
              </a>
              <Link href="/contact" onClick={() => setOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, background: "linear-gradient(135deg,#0B2545,#163a6b)", color: "white", padding: "14px 10px", borderRadius: 14, fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.87rem", textDecoration: "none", boxShadow: "0 6px 20px rgba(11,37,69,0.28)", transition: "transform 0.18s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(0.98)"}
                onMouseLeave={e => e.currentTarget.style.transform = "none"}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Get Care Today
              </Link>
            </div>

            {/* Contact info strip */}
            <div style={{ marginTop: 16, background: "linear-gradient(135deg,#F8FAFD,#ECFEFF)", borderRadius: 14, padding: "14px 16px", display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.8rem", color: "#64748B" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 012 4.18 2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontWeight: 600, color: "#0D9488" }}>+44 7588 160799</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.8rem", color: "#64748B" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>othdaberehealthcare@gmail.com</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}