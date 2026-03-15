"use client"

import { useEffect, useState, ReactNode } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

export default function AdminGuard({ children }: { children: ReactNode }) {
  const router = useRouter()
  const [authed, setAuthed] = useState(false)

  useEffect(() => {
    supabase.auth.getUser()
      .then(({ data }) => {
        if (data.user) {
          setAuthed(true)
        } else {
          router.replace("/login")
        }
      })
      .catch(() => router.replace("/login"))
  }, [])

  if (!authed) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#F8FAFD" }}>
      <div style={{ textAlign: "center" }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 1s linear infinite", margin: "0 auto 12px", display: "block" }}>
          <path d="M21 12a9 9 0 11-6.219-8.56" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>Verifying access...</p>
      </div>
      <style>{`@keyframes spin { from { transform:rotate(0deg) } to { transform:rotate(360deg) } }`}</style>
    </div>
  )

  return <>{children}</>
}
