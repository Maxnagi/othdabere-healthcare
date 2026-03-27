"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/admin", label: "Dashboard", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/contacts", label: "Contact Messages", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/referrals", label: "Referrals", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/careers", label: "Job Applications", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/blog", label: "Blog Posts", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/uploads", label: "Media Library", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.8"/><polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/gallery", label: "Gallery", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
]

function NavLinks({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Logo */}
      <div style={{ padding: "24px 20px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }} onClick={onClose}>
          <div style={{ background: "white", borderRadius: 10, padding: "5px 8px", display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img src="/logo.png" alt="OHQHS" style={{ height: 32, width: "auto", objectFit: "contain", display: "block" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.75rem", background: "linear-gradient(135deg,#0D9488,#14B8A6,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.3 }}>
              Othdabere High Quality
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", background: "linear-gradient(135deg,#0D9488,#14B8A6,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.3 }}>
              Healthcare Services Ltd
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 2 }}>
              Admin Panel
            </div>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav style={{ padding: "16px 12px", flex: 1, overflowY: "auto" }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.62rem", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0 12px", marginBottom: 8 }}>
          Navigation
        </div>
        {navItems.map(item => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href} onClick={onClose} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "11px 12px", borderRadius: 10, marginBottom: 4,
              textDecoration: "none",
              background: isActive ? "rgba(13,148,136,0.2)" : "transparent",
              border: isActive ? "1px solid rgba(13,148,136,0.3)" : "1px solid transparent",
              color: isActive ? "#2DD4BF" : "rgba(255,255,255,0.55)",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: isActive ? 600 : 400, fontSize: "0.88rem",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)" } }}
            onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "rgba(255,255,255,0.55)" } }}
            >
              <span style={{ flexShrink: 0 }}>{item.icon}</span>
              <span style={{ flex: 1 }}>{item.label}</span>
              {isActive && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2DD4BF", flexShrink: 0 }} />}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div style={{ padding: "16px 12px 24px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <Link href="/" onClick={onClose} style={{
          display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", borderRadius: 10,
          textDecoration: "none", color: "rgba(255,255,255,0.4)",
          fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.88rem", transition: "all 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.color = "rgba(255,255,255,0.7)" }}
        onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.4)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          View Website
        </Link>
      </div>
    </div>
  )
}

export default function AdminSidebar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <style>{`
        .admin-sidebar-desktop {
          width: 260px; min-height: 100vh; flex-shrink: 0;
          background: #06101E; display: flex; flex-direction: column;
          position: sticky; top: 0; height: 100vh; overflow-y: auto;
        }
        .admin-mobile-bar {
          display: none; align-items: center; justify-content: space-between;
          background: #06101E; padding: 14px 16px;
          position: sticky; top: 0; z-index: 200;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          width: 100%;
        }
        .admin-drawer {
          position: fixed; top: 0; left: 0; width: 280px; height: 100vh;
          background: #06101E; z-index: 300; overflow-y: auto;
          transform: translateX(-100%); transition: transform 0.28s cubic-bezier(.22,.68,0,1.1);
        }
        .admin-drawer.open { transform: translateX(0); }
        .admin-overlay {
          position: fixed; inset: 0; background: rgba(0,0,0,0.55);
          z-index: 299; opacity: 0; pointer-events: none; transition: opacity 0.28s ease;
        }
        .admin-overlay.open { opacity: 1; pointer-events: all; }
        @media (max-width: 900px) {
          .admin-sidebar-desktop { display: none !important; }
          .admin-mobile-bar      { display: flex !important; }
        }
      `}</style>

      {/* Desktop sidebar */}
      <div className="admin-sidebar-desktop">
        <NavLinks />
      </div>

      {/* Mobile top bar */}
      <div className="admin-mobile-bar">
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ background: "white", borderRadius: 8, padding: "4px 6px", display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="OHQHS" style={{ height: 26, width: "auto", display: "block" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "0.72rem", background: "linear-gradient(135deg,#0D9488,#14B8A6,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.25 }}>
              Othdabere H.Q. Healthcare Services Ltd
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Admin Panel</div>
          </div>
        </Link>
        <button onClick={() => setOpen(o => !o)} style={{
          background: open ? "rgba(13,148,136,0.2)" : "rgba(255,255,255,0.07)",
          border: `1px solid ${open ? "rgba(13,148,136,0.4)" : "rgba(255,255,255,0.12)"}`,
          borderRadius: 8, padding: 9, cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s",
        }} aria-label="Toggle menu">
          {open
            ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#2DD4BF" strokeWidth="2.2" strokeLinecap="round"/></svg>
            : <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
          }
        </button>
      </div>

      {/* Overlay + Drawer */}
      <div className={`admin-overlay${open ? " open" : ""}`} onClick={() => setOpen(false)} />
      <div className={`admin-drawer${open ? " open" : ""}`}>
        <NavLinks onClose={() => setOpen(false)} />
      </div>
    </>
  )
}
