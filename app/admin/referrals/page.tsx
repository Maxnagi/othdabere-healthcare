"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Referrals() {
  const [referrals, setReferrals] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchReferrals() }, [])

  async function fetchReferrals() {
    const { data } = await supabase.from("referrals").select("*").order("created_at", { ascending: false })
    setReferrals(data || [])
    setLoading(false)
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFD" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "40px" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 4 }}>Referrals</h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>{referrals.length} referral{referrals.length !== 1 ? "s" : ""} received</p>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#64748B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Loading...</div>
        ) : referrals.length === 0 ? (
          <div style={{ textAlign: "center", padding: 60, background: "white", borderRadius: 20, border: "1.5px solid #E2E8F0" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8" }}>No referrals yet.</p>
          </div>
        ) : (
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#F8FAFD", borderBottom: "1.5px solid #E2E8F0" }}>
                  {["Referrer", "Email", "Person Needing Care", "Care Requirements", "Date"].map(h => (
                    <th key={h} style={{ padding: "14px 20px", textAlign: "left", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {referrals.map((r, i) => (
                  <tr key={i} style={{ borderBottom: i < referrals.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#0B2545" }}>{r.referrer_name}</td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#0D9488" }}>{r.email}</td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#334155" }}>{r.person_needing_care}</td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#64748B", maxWidth: 260 }}>{r.care_requirements}</td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#94A3B8", whiteSpace: "nowrap" }}>
                      {r.created_at ? new Date(r.created_at).toLocaleDateString("en-GB") : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
