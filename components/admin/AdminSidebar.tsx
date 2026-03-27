"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/admin",          label: "Dashboard",        icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.8"/></svg> },
  { href: "/admin/contacts", label: "Contact Messages", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/referrals", label: "Referrals",       icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/careers",  label: "Job Applications", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/blog",     label: "Blog Posts",       icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/uploads",  label: "Media Library",    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.8"/><polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/gallery",  label: "Gallery",          icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
]

/** Shared nav list — used in both desktop sidebar and mobile drawer */
function NavContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname()
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>

      {/* Brand */}
      <div style={{ padding: "22px 18px 18px", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <Link href="/" onClick={onClose} style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}>
          <div style={{ background: "white", borderRadius: 9, padding: "5px 7px", flexShrink: 0, display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="OHQHS" style={{ height: 30, width: "auto", objectFit: "contain", display: "block" }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.74rem", background: "linear-gradient(135deg,#0D9488,#14B8A6,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.3 }}>
              Othdabere High Quality
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 700, fontSize: "0.74rem", background: "linear-gradient(135deg,#0D9488,#14B8A6,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.3 }}>
              Healthcare Services Ltd
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.58rem", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: 2 }}>
              Admin Panel
            </div>
          </div>
        </Link>
      </div>

      {/* Nav items */}
      <nav style={{ padding: "14px 10px", flex: 1, overflowY: "auto" }}>
        <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.6rem", fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0 10px", marginBottom: 8 }}>
          Navigation
        </div>
        {navItems.map(item => {
          const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
          return (
            <Link key={item.href} href={item.href} onClick={onClose} style={{
              display: "flex", alignItems: "center", gap: 12,
              padding: "11px 12px", borderRadius: 10, marginBottom: 2,
              textDecoration: "none",
              background: isActive ? "rgba(13,148,136,0.18)" : "transparent",
              border: isActive ? "1px solid rgba(13,148,136,0.3)" : "1px solid transparent",
              color: isActive ? "#2DD4BF" : "rgba(255,255,255,0.6)",
              fontFamily: "'Plus Jakarta Sans',sans-serif",
              fontWeight: isActive ? 600 : 400, fontSize: "0.9rem",
              transition: "all 0.18s",
            }}
            onMouseEnter={e => { if (!isActive) { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)" } }}
            onMouseLeave={e => { if (!isActive) { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.6)" } }}
            >
              <span style={{ flexShrink: 0 }}>{item.icon}</span>
              <span style={{ flex: 1, minWidth: 0 }}>{item.label}</span>
              {isActive && <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#2DD4BF", flexShrink: 0 }} />}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: "12px 10px 20px", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <Link href="/" onClick={onClose} style={{
          display: "flex", alignItems: "center", gap: 10, padding: "11px 12px", borderRadius: 10,
          textDecoration: "none", color: "rgba(255,255,255,0.4)",
          fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 400, fontSize: "0.88rem", transition: "all 0.18s",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.75)" }}
        onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.4)" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          View Website
        </Link>
      </div>
    </div>
  )
}

export default function AdminSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close drawer on navigation
  useEffect(() => { setOpen(false) }, [pathname])

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  return (
    <>
      <style>{`
        /* ═══════════════════════════════════════
           DESKTOP: classic sticky sidebar column
           ═══════════════════════════════════════ */
        .adm-sidebar {
          width: 260px;
          min-width: 260px;
          flex-shrink: 0;
          background: #06101E;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          /* Ensure it shows on desktop */
        }

        /* Topbar and drawer hidden on desktop */
        .adm-topbar  { display: none; }
        .adm-overlay { display: none; }
        .adm-drawer  { display: none; }

        /* ═══════════════════════════════════════
           MOBILE: sidebar disappears completely,
           replaced by fixed topbar + slide drawer
           ═══════════════════════════════════════ */
        @media (max-width: 900px) {

          /* Kill the sidebar — zero size, invisible */
          .adm-sidebar {
            display: none !important;
            width: 0 !important;
            min-width: 0 !important;
            overflow: hidden !important;
          }

          /* Fixed topbar across full viewport */
          .adm-topbar {
            display: flex !important;
            position: fixed;
            top: 0; left: 0; right: 0;
            height: 56px;
            background: #06101E;
            border-bottom: 1px solid rgba(255,255,255,0.08);
            align-items: center;
            justify-content: space-between;
            padding: 0 16px;
            gap: 12px;
            z-index: 200;
            box-shadow: 0 2px 16px rgba(0,0,0,0.3);
          }

          /* Dark overlay behind drawer */
          .adm-overlay {
            display: block !important;
            position: fixed;
            inset: 0;
            background: rgba(0,0,0,0.62);
            z-index: 400;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.25s ease;
          }
          .adm-overlay.open {
            opacity: 1;
            pointer-events: all;
          }

          /* Slide-in nav drawer */
          .adm-drawer {
            display: block !important;
            position: fixed;
            top: 0; left: 0;
            width: min(290px, 82vw);
            height: 100dvh;
            background: #06101E;
            z-index: 500;
            overflow-y: auto;
            transform: translateX(-100%);
            transition: transform 0.26s cubic-bezier(.22,.68,0,1.1);
          }
          .adm-drawer.open {
            transform: translateX(0);
          }
        }
      `}</style>

      {/* ── 1. Desktop sticky sidebar ── */}
      <div className="adm-sidebar">
        <NavContent />
      </div>

      {/* ── 2. Mobile fixed topbar ── */}
      <div className="adm-topbar">
        {/* Logo + name */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1, minWidth: 0, overflow: "hidden" }}>
          <div style={{ background: "white", borderRadius: 7, padding: "4px 6px", flexShrink: 0, display: "flex", alignItems: "center" }}>
            <img src="/logo.png" alt="OHQHS" style={{ height: 26, width: "auto", objectFit: "contain", display: "block" }} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.68rem", background: "linear-gradient(135deg,#0D9488,#14B8A6,#38BDF8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", lineHeight: 1.25, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Othdabere High Quality Healthcare Services Ltd
            </div>
            <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.54rem", color: "rgba(255,255,255,0.38)", textTransform: "uppercase", letterSpacing: "0.07em" }}>
              Admin Panel
            </div>
          </div>
        </div>

        {/* Burger button */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{ flexShrink: 0, background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "8px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "white", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem", fontWeight: 600 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="white" strokeWidth="2.2" strokeLinecap="round"/></svg>
          Menu
        </button>
      </div>

      {/* ── 3. Overlay ── */}
      <div className={`adm-overlay${open ? " open" : ""}`} onClick={() => setOpen(false)} />

      {/* ── 4. Slide-in drawer ── */}
      <div className={`adm-drawer${open ? " open" : ""}`}>
        {/* Close button inside drawer */}
        <div style={{ padding: "14px 16px 0", display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: "7px 10px", cursor: "pointer", display: "flex", alignItems: "center", gap: 5, color: "rgba(255,255,255,0.7)", fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.75rem" }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
            Close
          </button>
        </div>
        <NavContent onClose={() => setOpen(false)} />
      </div>
    </>
  )
}
