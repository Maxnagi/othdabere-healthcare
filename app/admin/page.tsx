"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

const cards = [
  { href: "/admin/contacts", label: "Contacts", desc: "View & manage contact messages", iconClass: "icon-bg-blue", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/referrals", label: "Referrals", desc: "View care referrals", iconClass: "icon-bg-teal", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/careers", label: "Careers", desc: "Job applications received", iconClass: "icon-bg-green", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/blog", label: "Blog", desc: "Create and manage blog posts", iconClass: "icon-bg-purple", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { href: "/admin/uploads", label: "Media Library", desc: "Upload and manage images", iconClass: "icon-bg-orange", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.8"/><polyline points="21,15 16,10 5,21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
]

export default function Admin() {
  const router = useRouter()

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const { data } = await supabase.auth.getUser()
    if (!data.user) router.push("/login")
  }

  const logout = async () => {
    await supabase.auth.signOut()
    router.push("/login")
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFD" }}>
      <AdminSidebar />

      <div style={{ flex: 1, padding: "40px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 40 }}>
          <div>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 700, color: "#0B2545", marginBottom: 4 }}>Admin Dashboard</h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>Manage your care operations from here.</p>
          </div>
          <button onClick={logout} style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "white", border: "1.5px solid #FECACA",
            color: "#DC2626",
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.88rem",
            padding: "10px 18px", borderRadius: 10, cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = "#FEF2F2"}
          onMouseLeave={e => e.currentTarget.style.background = "white"}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Logout
          </button>
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {cards.map((card, i) => (
            <Link key={i} href={card.href} style={{ textDecoration: "none" }}>
              <div className="card-lift" style={{
                background: "white", border: "1.5px solid #E2E8F0",
                borderRadius: 20, padding: "28px",
                display: "flex", gap: 16, alignItems: "flex-start",
                cursor: "pointer",
              }}>
                <div className={card.iconClass} style={{ width: 56, height: 56, borderRadius: 16, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {card.icon}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "1.05rem", marginBottom: 4 }}>{card.label}</h3>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.85rem", margin: 0 }}>{card.desc}</p>
                </div>
                <div style={{ marginLeft: "auto" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
