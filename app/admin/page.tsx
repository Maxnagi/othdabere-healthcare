"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"
import AdminGuard from "@/components/admin/AdminGuard"
import Link from "next/link"

const statCards = [
  { label: "Contact Messages", href: "/admin/contacts", color: "#3B82F6", bg: "#EFF6FF", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, table: "contact_messages" },
  { label: "Referrals", href: "/admin/referrals", color: "#8B5CF6", bg: "#F5F3FF", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, table: "referrals" },
  { label: "Job Applications", href: "/admin/careers", color: "#F97316", bg: "#FFF7ED", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, table: "job_applications" },
  { label: "Blog Posts", href: "/admin/blog", color: "#10B981", bg: "#ECFDF5", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, table: "blog_posts" },
]

const quickLinks = [
  { href: "/admin/uploads", label: "Upload Media", icon: "📤", desc: "Add images to the media library" },
  { href: "/admin/gallery", label: "Manage Gallery", icon: "🖼️", desc: "Edit public gallery photos" },
  { href: "/admin/blog", label: "Write Post", icon: "✏️", desc: "Create a new blog article" },
  { href: "/", label: "View Website", icon: "🌐", desc: "See the public-facing site" },
]

export default function AdminDashboard() {
  const [counts, setCounts] = useState<Record<string, number>>({})

  useEffect(() => {
    statCards.forEach(async card => {
      const { count } = await supabase.from(card.table).select("*", { count: "exact", head: true })
      setCounts(prev => ({ ...prev, [card.table]: count ?? 0 }))
    })
  }, [])

  return (
    <AdminGuard>
      <div className="admin-layout">
        <AdminSidebar />
        <div className="admin-content">
          {/* Header */}
          <div style={{ marginBottom: 36 }}>
            <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, color: "#0B2545", marginBottom: 4 }}>
              Admin Dashboard
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>
              Welcome back — here's an overview of your site activity.
            </p>
          </div>

          {/* Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,200px),1fr))", gap: 20, marginBottom: 40 }}>
            {statCards.map(card => (
              <Link key={card.table} href={card.href} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "white", border: "1.5px solid #E2E8F0", borderRadius: 18,
                  padding: "24px 20px", transition: "all 0.22s", cursor: "pointer",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 12px 32px rgba(11,37,69,0.10)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none" }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: 13, background: card.bg, color: card.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    {card.icon}
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.2rem", fontWeight: 700, color: card.color, lineHeight: 1 }}>
                    {counts[card.table] ?? "—"}
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#64748B", marginTop: 4, fontWeight: 500 }}>
                    {card.label}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick links */}
          <div style={{ marginBottom: 12 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "#0B2545", marginBottom: 16 }}>
              Quick Actions
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,220px),1fr))", gap: 16 }}>
              {quickLinks.map(link => (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "white", border: "1.5px solid #E2E8F0", borderRadius: 16,
                    padding: "20px", display: "flex", alignItems: "flex-start", gap: 14,
                    transition: "all 0.22s", cursor: "pointer",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#0D9488"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(13,148,136,0.10)" }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "#E2E8F0"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none" }}
                  >
                    <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{link.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#0B2545", marginBottom: 3 }}>{link.label}</div>
                      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "#94A3B8" }}>{link.desc}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AdminGuard>
  )
}
