"use client"

import { useEffect, useState } from "react"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function AdminPWAInstall() {
  const [prompt, setPrompt]       = useState<BeforeInstallPromptEvent | null>(null)
  const [show, setShow]           = useState(false)
  const [installing, setInstalling] = useState(false)

  /* ── Register admin SW ── */
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!("serviceWorker" in navigator)) return

    navigator.serviceWorker
      .register("/admin-sw.js", { scope: "/admin" })
      .catch((e) => console.warn("[Admin SW] reg failed", e))
  }, [])

  /* ── Capture install prompt ── */
  useEffect(() => {
    if (typeof window === "undefined") return
    if (localStorage.getItem("admin-pwa-dismissed") === "true") return

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as { standalone?: boolean }).standalone === true
    if (isStandalone) return

    const handler = (e: Event) => {
      e.preventDefault()
      setPrompt(e as BeforeInstallPromptEvent)
      setTimeout(() => setShow(true), 3000) // show after 3s on admin
    }
    window.addEventListener("beforeinstallprompt", handler)
    window.addEventListener("appinstalled", () => setShow(false))
    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!prompt) return
    setInstalling(true)
    await prompt.prompt()
    const { outcome } = await prompt.userChoice
    if (outcome === "accepted") setShow(false)
    setInstalling(false)
    setPrompt(null)
  }

  const handleDismiss = () => {
    setShow(false)
    localStorage.setItem("admin-pwa-dismissed", "true")
  }

  if (!show) return null

  return (
    <>
      <style>{`
        @keyframes adminToastIn {
          from { transform: translateX(110%); opacity: 0; }
          to   { transform: translateX(0);    opacity: 1; }
        }
        .admin-pwa-toast {
          position: fixed;
          top: 80px;
          right: 20px;
          width: min(340px, calc(100vw - 32px));
          z-index: 9999;
          animation: adminToastIn 0.38s cubic-bezier(.22,.68,0,1.1) forwards;
        }
        @media (max-width: 480px) {
          .admin-pwa-toast {
            top: auto;
            bottom: 16px;
            right: 12px;
            left: 12px;
            width: auto;
          }
        }
      `}</style>

      <div className="admin-pwa-toast" role="dialog" aria-label="Install admin app">
        <div style={{
          background: "linear-gradient(135deg,#0B2545,#163a6b)",
          borderRadius: 18,
          boxShadow: "0 16px 48px rgba(11,37,69,.55)",
          border: "1px solid rgba(255,255,255,.11)",
          padding: "16px 16px 14px",
          color: "#fff",
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>

            {/* Icon */}
            <div style={{
              width: 44, height: 44, borderRadius: 12, flexShrink: 0,
              background: "linear-gradient(135deg,#1e3a5f,#0D9488)",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: "1px solid rgba(255,255,255,.14)",
            }}>
              <span style={{ fontSize: "1.25rem" }}>⚙️</span>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 800, fontSize: ".86rem", marginBottom: 4,
              }}>
                Install Admin Dashboard
              </p>
              <p style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: ".74rem", color: "rgba(255,255,255,.62)", lineHeight: 1.5, marginBottom: 12,
              }}>
                Pin OHQHS admin to your home screen for instant access.
              </p>

              <div style={{ display: "flex", gap: 8 }}>
                <button
                  onClick={handleInstall}
                  disabled={installing}
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg,#0D9488,#38BDF8)",
                    color: "#fff", border: "none",
                    padding: "9px 14px", borderRadius: 9,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 700, fontSize: ".76rem",
                    cursor: installing ? "wait" : "pointer",
                    opacity: installing ? .7 : 1,
                  }}
                >
                  {installing ? "Installing…" : "📲 Install"}
                </button>
                <button
                  onClick={handleDismiss}
                  style={{
                    padding: "9px 12px", borderRadius: 9,
                    background: "rgba(255,255,255,.08)",
                    color: "rgba(255,255,255,.6)",
                    border: "1px solid rgba(255,255,255,.14)",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 600, fontSize: ".74rem", cursor: "pointer",
                  }}
                >
                  Dismiss
                </button>
              </div>
            </div>

            {/* Close */}
            <button
              onClick={handleDismiss}
              aria-label="Close"
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,.35)", padding: 2, flexShrink: 0, lineHeight: 1,
              }}
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
