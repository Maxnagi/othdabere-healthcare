"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Contacts() {
  const [messages, setMessages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => { fetchMessages() }, [])

  async function fetchMessages() {
    const { data } = await supabase.from("contact_messages").select("*").order("created_at", { ascending: false })
    setMessages(data || [])
    setLoading(false)
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFD" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "40px" }}>
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 4 }}>Contact Messages</h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>{messages.length} message{messages.length !== 1 ? "s" : ""} received</p>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#64748B", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Loading...</div>
        ) : messages.length === 0 ? (
          <div style={{ textAlign: "center", padding: 60, background: "white", borderRadius: 20, border: "1.5px solid #E2E8F0" }}>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: "1rem" }}>No messages yet.</p>
          </div>
        ) : (
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#F8FAFD", borderBottom: "1.5px solid #E2E8F0" }}>
                  {["Name", "Email", "Message", "Date"].map(h => (
                    <th key={h} style={{ padding: "14px 20px", textAlign: "left", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.06em" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, i) => (
                  <tr key={i} style={{ borderBottom: i < messages.length - 1 ? "1px solid #F1F5F9" : "none" }}>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "#0B2545" }}>{msg.name}</td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#0D9488" }}>{msg.email}</td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#64748B", maxWidth: 360 }}>{msg.message}</td>
                    <td style={{ padding: "14px 20px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#94A3B8", whiteSpace: "nowrap" }}>
                      {msg.created_at ? new Date(msg.created_at).toLocaleDateString("en-GB") : "—"}
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
