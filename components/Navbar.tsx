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
    { href: "/",                  label: "Home" },
    { href: "/about",             label: "About" },
    { href: "/services",          label: "Services" },
    { href: "/domiciliary-care",  label: "Care" },
    { href: "/careers",           label: "Careers" },
    { href: "/blog",              label: "Blog" },
    { href: "/faqs",              label: "FAQs" },
  ]

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.97)" : "white",
      boxShadow: scrolled ? "0 2px 32px rgba(11,37,69,0.10)" : "0 1px 0 #E2E8F0",
      backdropFilter: "blur(14px)",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", height: 72,
      }}>

        {/* Real logo */}
        <Link href="/" style={{ display:"flex", alignItems:"center", gap:10, textDecoration:"none", flexShrink:0 }}>
          <img
            src="/logo.png"
            alt="Othdabere Healthcare"
            style={{ height:44, width:"auto", objectFit:"contain", display:"block" }}
          />
          <div style={{ lineHeight:1.2 }}>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800, fontSize:"0.88rem", color:"#0B2545" }}>Othdabere H.Q.</div>
            <div style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:400, fontSize:"0.67rem", color:"#64748B" }}>Healthcare Services Ltd</div>
          </div>
        </Link>

        {/* Desktop nav links */}
        <div className="nav-links-desk" style={{ display:"flex", alignItems:"center", gap:2 }}>
          {links.map(link => (
            <Link key={link.href} href={link.href}
              style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500, fontSize:"0.875rem", color:"#334155", textDecoration:"none", padding:"8px 12px", borderRadius:8, transition:"all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.color="#0D9488"; e.currentTarget.style.background="linear-gradient(135deg,#F0FDF4,#ECFEFF)" }}
              onMouseLeave={e => { e.currentTarget.style.color="#334155"; e.currentTarget.style.background="transparent" }}
            >{link.label}</Link>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <a href="tel:+447588160799" className="nav-cta-desk" style={{
            display:"flex", alignItems:"center", gap:6,
            background:"linear-gradient(135deg,#F0FDF4,#ECFEFF)",
            border:"1.5px solid rgba(13,148,136,0.22)", color:"#0D9488",
            padding:"8px 16px", borderRadius:50,
            fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:"0.82rem",
            textDecoration:"none", transition:"all 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background="linear-gradient(135deg,#DCFCE7,#CCFBF1)"}
          onMouseLeave={e => e.currentTarget.style.background="linear-gradient(135deg,#F0FDF4,#ECFEFF)"}
          >
            📞 +44 7588 160799
          </a>

          <Link href="/contact" className="nav-cta-desk" style={{
            display:"flex", alignItems:"center", gap:6,
            background:"linear-gradient(135deg,#0B2545,#163a6b)", color:"white",
            padding:"10px 20px", borderRadius:50, textDecoration:"none",
            fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:"0.85rem",
            boxShadow:"0 4px 16px rgba(11,37,69,0.28)",
            transition:"all 0.28s cubic-bezier(.22,.68,0,1.2)",
          }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(11,37,69,0.4)" }}
          onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 16px rgba(11,37,69,0.28)" }}
          >
            Get Care Today
          </Link>

          {/* Burger button */}
          <button onClick={() => setOpen(!open)} className="nav-burger"
            style={{ background:"none", border:"1.5px solid #E2E8F0", borderRadius:8, cursor:"pointer", padding:"8px", display:"none", alignItems:"center", justifyContent:"center" }}
            aria-label="Toggle menu"
          >
            {open
              ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#0B2545" strokeWidth="2.2" strokeLinecap="round"/></svg>
              : <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="#0B2545" strokeWidth="2.2" strokeLinecap="round"/></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ borderTop:"1px solid #E2E8F0", background:"white", padding:"8px 16px 20px" }}>
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
              style={{ display:"flex", alignItems:"center", gap:10, padding:"13px 8px", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500, fontSize:"1rem", color:"#334155", textDecoration:"none", borderBottom:"1px solid #F1F5F9", transition:"color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color="#0D9488"}
              onMouseLeave={e => e.currentTarget.style.color="#334155"}
            >
              <span style={{ width:6, height:6, borderRadius:"50%", background:"linear-gradient(135deg,#0D9488,#38BDF8)", flexShrink:0 }} />
              {link.label}
            </Link>
          ))}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, marginTop:16 }}>
            <a href="tel:+447588160799" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6, background:"linear-gradient(135deg,#F0FDF4,#ECFEFF)", border:"1.5px solid rgba(13,148,136,0.25)", color:"#0D9488", padding:"13px 10px", borderRadius:12, fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:"0.85rem", textDecoration:"none" }}>
              📞 Call Us
            </a>
            <Link href="/contact" onClick={() => setOpen(false)} style={{ display:"flex", alignItems:"center", justifyContent:"center", background:"linear-gradient(135deg,#0B2545,#163a6b)", color:"white", padding:"13px 10px", borderRadius:12, fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:600, fontSize:"0.85rem", textDecoration:"none" }}>
              Get Care Today
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
