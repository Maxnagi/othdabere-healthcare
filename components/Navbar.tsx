"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/domiciliary-care", label: "Care" },
    { href: "/careers", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" },
  ]

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(255,255,255,0.97)" : "white",
          boxShadow: scrolled ? "0 2px 32px rgba(11,37,69,0.10)" : "0 1px 0 #E2E8F0",
          backdropFilter: "blur(12px)",
          transition: "all 0.3s ease",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{
              width: 42, height: 42, borderRadius: 10,
              background: "linear-gradient(135deg, #0B2545, #0D9488)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
              </svg>
            </div>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.9rem", color: "#0B2545", lineHeight: 1.2 }}>
                Othdabere H.Q.
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.7rem", color: "#64748B", lineHeight: 1 }}>
                Healthcare Services Ltd
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden-mobile">
            {links.map(link => (
              <Link key={link.href} href={link.href} style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 500, fontSize: "0.875rem",
                color: "#334155", textDecoration: "none",
                padding: "8px 12px", borderRadius: 8,
                transition: "all 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#0D9488", e.currentTarget.style.background = "#F0FDF4")}
              onMouseLeave={e => (e.currentTarget.style.color = "#334155", e.currentTarget.style.background = "transparent")}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/contact" style={{
              display: "flex", alignItems: "center", gap: 6,
              background: "linear-gradient(135deg, #0B2545, #163a6b)",
              color: "white", padding: "10px 20px",
              borderRadius: 50, textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600, fontSize: "0.85rem",
              boxShadow: "0 4px 14px rgba(11,37,69,0.25)",
              transition: "all 0.25s ease",
            }}
            className="hidden-mobile"
            onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(11,37,69,0.35)" }}
            onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 14px rgba(11,37,69,0.25)" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
              </svg>
              Get Care Today
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
              className="show-mobile"
              aria-label="Menu"
            >
              {open ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#0B2545" strokeWidth="2" strokeLinecap="round"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="#0B2545" strokeWidth="2" strokeLinecap="round"/></svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div style={{
            borderTop: "1px solid #E2E8F0",
            background: "white",
            padding: "12px 24px 20px",
          }}>
            {links.map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block", padding: "12px 4px",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500, fontSize: "1rem",
                  color: "#334155", textDecoration: "none",
                  borderBottom: "1px solid #F1F5F9",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} style={{
              display: "block", marginTop: 16, textAlign: "center",
              background: "linear-gradient(135deg, #0B2545, #163a6b)",
              color: "white", padding: "14px",
              borderRadius: 50, textDecoration: "none",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600, fontSize: "0.95rem",
            }}>
              Get Care Today
            </Link>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}
