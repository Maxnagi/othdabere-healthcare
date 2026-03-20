"use client"

import { useEffect, useState } from "react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function AdminPWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showBanner, setShowBanner]         = useState(false)
  const [installed, setInstalled]           = useState(false)
  const [installing, setInstalling]         = useState(false)

  // ── Register ADMIN service worker ───────────────────
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return

    navigator.serviceWorker
      .register("/admin-sw.js", { scope: "/admin" })
      .then((reg) => console.log("[Admin SW] Registered:", reg.scope))
      .catch((err) => console.warn("[Admin SW] Registration failed:", err))
  }, [])

  // ── Capture install prompt ──────────────────────────
  useEffect(() => {
    const dismissed = localStorage.getItem("admin-pwa-dismissed")
    if (dismissed === "true") return

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true

    if (isStandalone) { setInstalled(true); return }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      setTimeout(() => setShowBanner(true), 2500)
    }

    window.addEventListener("beforeinstallprompt", handler)
    window.addEventListener("appinstalled", () => {
      setInstalled(true); setShowBanner(false)
    })
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    setInstalling(true)
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") { setInstalled(true); setShowBanner(false) }
    setInstalling(false)
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowBanner(false)
    localStorage.setItem("admin-pwa-dismissed", "true")
  }

  if (installed || !showBanner) return null

  return (
    <>
      <style>{`
        @keyframes adminSlideIn {
          from { transform: translateX(110%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .admin-pwa-toast {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 9999;
          width: min(360px, calc(100vw - 32px));
          animation: adminSlideIn 0.38s cubic-bezier(.22,.68,0,1.1) forwards;
        }
      `}</style>

      <div className="admin-pwa-toast">
        <div style={{
          background: "linear-gradient(135deg,#0B2545,#163a6b)",
          borderRadius: 18,
          boxShadow: "0 16px 48px rgba(11,37,69,0.50)",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: "18px 18px 16px",
          color: "white",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
            {/* Icon */}
            <div style={{
              width: 44, height: 44, borderRadius: 12, flexShrink: 0,
              background: "linear-gradient(135deg,#1e3a5f,#0D9488)",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.15)",
            }}>
              <span style={{ fontSize: "1.3rem" }}>⚙️</span>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.88rem", marginBottom: 4 }}>
                Install Admin Dashboard
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.76rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.5, marginBottom: 14 }}>
                Pin the OHQHS admin panel to your home screen for instant access.
              </div>

              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={handleInstall}
                  disabled={installing}
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg,#0D9488,#38BDF8)",
                    color: "white", border: "none",
                    padding: "9px 14px", borderRadius: 9,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 700, fontSize: "0.78rem",
                    cursor: installing ? "wait" : "pointer",
                    opacity: installing ? 0.75 : 1,
                  }}
                >
                  {installing ? "Installing…" : "📲 Install"}
                </button>
                <button
                  onClick={handleDismiss}
                  style={{
                    padding: "9px 12px", borderRadius: 9,
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.14)",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 600, fontSize: "0.76rem", cursor: "pointer",
                  }}
                >
                  Dismiss
                </button>
              </div>
            </div>

            <button
              onClick={handleDismiss}
              style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.4)", padding: 2, flexShrink: 0 }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
