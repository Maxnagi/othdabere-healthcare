"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"
import AdminGuard from "@/components/admin/AdminGuard"

export default function Careers() {
  const [applications, setApplications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchApplications() }, [])

  async function fetchApplications() {
    const { data } = await supabase
      .from("job_applications")
      .select("*")
      .order("created_at", { ascending: false })
    setApplications(data || [])
    setLoading(false)
  }

  return (
    <AdminGuard>
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-content">

        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 4 }}>
            Job Applications
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>
            {applications.length} application{applications.length !== 1 ? "s" : ""} received
          </p>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#64748B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Loading...</div>
        ) : applications.length === 0 ? (
          <div style={{ textAlign: "center", padding: 60, background: "white", borderRadius: 20, border: "1.5px solid #E2E8F0" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F0FDFA", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="7" width="20" height="14" rx="2" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: "1rem" }}>No applications received yet.</p>
          </div>
        ) : (
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, overflow: "hidden" }}>
            <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
              <thead>
                <tr style={{ background: "#F8FAFD", borderBottom: "1.5px solid #E2E8F0" }}>
                  {["Name", "Email", "Phone", "CV", "Applied"].map(h => (
                    <th key={h} style={{ padding: "14px 20px", textAlign: "left", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {applications.map((app, i) => (
                  <tr key={i} style={{ borderBottom: i < applications.length - 1 ? "1px solid #F1F5F9" : "none", transition: "background 0.15s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#FAFBFF")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#0B2545" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{ width: 34, height: 34, borderRadius: "50%", background: "linear-gradient(135deg, #0D9488, #14B8A6)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "white", flexShrink: 0 }}>
                          {app.name?.charAt(0).toUpperCase() || "?"}
                        </div>
                        {app.name}
                      </div>
                    </td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#0D9488" }}>{app.email}</td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#334155" }}>{app.phone || "—"}</td>
                    <td style={{ padding: "14px 20px" }}>
                      {app.cv ? (
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, background: "#DCFCE7", color: "#16A34A", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.75rem", padding: "4px 10px", borderRadius: 100 }}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          Uploaded
                        </span>
                      ) : (
                        <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#94A3B8" }}>—</span>
                      )}
                    </td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#94A3B8", whiteSpace: "nowrap" }}>
                      {app.created_at ? new Date(app.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          </div>
        )}
      </div>
    </div>
    </AdminGuard>
  )
}
