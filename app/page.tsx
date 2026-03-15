"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPass, setShowPass] = useState(false)

  const handleLogin = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push("/admin")
    }
  }

  return (
    <div style={{
      minHeight: "100vh", display: "flex",
      backgroundImage: "url('/images/login-bg.jpg')",
      backgroundSize: "cover", backgroundPosition: "center",
      position: "relative",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(6,20,40,0.92), rgba(11,37,69,0.85))" }} />

      {/* Left branding */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "60px", position: "relative", zIndex: 1 }} className="hidden-mobile">
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: "linear-gradient(135deg, #0D9488, #0B2545)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/></svg>
          </div>
          <div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: "1rem", color: "white" }}>Othdabere H.Q.</div>
            <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, fontSize: "0.72rem", color: "rgba(255,255,255,0.5)" }}>Healthcare Services Ltd</div>
          </div>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: 20, maxWidth: 400 }}>
          Admin Portal
        </h1>
        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 380 }}>
          Securely manage your care operations, referrals, careers and content from one place.
        </p>
      </div>

      {/* Right form */}
      <div style={{ width: "100%", maxWidth: 480, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 32px", position: "relative", zIndex: 1 }}>
        <div style={{ background: "white", borderRadius: 24, padding: "48px", width: "100%", boxShadow: "0 32px 80px rgba(0,0,0,0.3)" }}>
          <div style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 6 }}>Welcome Back</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>Sign in to access the admin panel</p>
          </div>

          {error && (
            <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: 10, padding: "12px 16px", marginBottom: 20, display: "flex", gap: 10, alignItems: "center" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#EF4444" strokeWidth="1.8"/><line x1="12" y1="8" x2="12" y2="12" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="#EF4444" strokeWidth="1.8" strokeLinecap="round"/></svg>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", color: "#DC2626" }}>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Email Address</label>
              <input type="email" placeholder="admin@example.com" value={email} onChange={e => setEmail(e.target.value)} className="input-modern" required />
            </div>
            <div>
              <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#334155", display: "block", marginBottom: 6 }}>Password</label>
              <div style={{ position: "relative" }}>
                <input type={showPass ? "text" : "password"} placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="input-modern" style={{ paddingRight: 48 }} required />
                <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#64748B" }}>
                  {showPass
                    ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    : <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8"/></svg>
                  }
                </button>
              </div>
            </div>
            <button type="submit" className="btn-navy" style={{ justifyContent: "center", padding: "16px", fontSize: "1rem", borderRadius: 12, marginTop: 8 }}>
              {loading ? "Signing In..." : "Sign In"}
              {!loading && <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </button>
          </form>

          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.8rem", color: "#94A3B8", textAlign: "center", marginTop: 24 }}>
            Secure admin access only. <a href="/" style={{ color: "#0D9488", textDecoration: "none" }}>Return to website →</a>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } }
      `}</style>
    </div>
  )
}
