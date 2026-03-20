"use client"

import { useEffect, useState } from "react"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function PWAInstallPrompt() {
  const [prompt, setPrompt]     = useState<BeforeInstallPromptEvent | null>(null)
  const [show, setShow]         = useState(false)
  const [installing, setInstalling] = useState(false)

  /* ── Register main SW ── */
  useEffect(() => {
    if (typeof window === "undefined") return
    if (!("serviceWorker" in navigator)) return
    if (window.location.pathname.startsWith("/admin")) return // admin has its own SW

    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .catch((e) => console.warn("[SW] reg failed", e))
  }, [])

  /* ── Capture beforeinstallprompt ── */
  useEffect(() => {
    if (typeof window === "undefined") return
    if (localStorage.getItem("pwa-dismissed") === "true") return

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as { standalone?: boolean }).standalone === true
    if (isStandalone) return

    const handler = (e: Event) => {
      e.preventDefault()
      setPrompt(e as BeforeInstallPromptEvent)
      setTimeout(() => setShow(true), 5000) // show after 5s
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
    localStorage.setItem("pwa-dismissed", "true")
  }

  if (!show) return null

  return (
    <>
      <style>{`
        @keyframes pwaSlideUp {
          from { transform: translateX(-50%) translateY(120%); opacity: 0; }
          to   { transform: translateX(-50%) translateY(0);    opacity: 1; }
        }
        .pwa-banner {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          width: min(440px, calc(100vw - 24px));
          z-index: 9999;
          animation: pwaSlideUp 0.4s cubic-bezier(.22,.68,0,1.1) forwards;
        }
        @media (max-width: 480px) {
          .pwa-banner { bottom: 12px; }
        }
      `}</style>

      <div className="pwa-banner" role="dialog" aria-label="Install OHQHS app">
        <div style={{
          background: "#fff",
          borderRadius: 20,
          boxShadow: "0 12px 48px rgba(11,37,69,.20), 0 2px 8px rgba(11,37,69,.08)",
          border: "1.5px solid rgba(13,148,136,.16)",
          overflow: "hidden",
        }}>
          {/* Gradient top bar */}
          <div style={{ height: 4, background: "linear-gradient(90deg,#0D9488,#38BDF8,#0D9488)" }} />

          <div style={{ padding: "18px 18px 16px", display: "flex", gap: 14, alignItems: "flex-start" }}>

            {/* App icon */}
            <div style={{
              width: 52, height: 52, borderRadius: 14, flexShrink: 0,
              background: "linear-gradient(135deg,#0B2545,#0D9488)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(13,148,136,.30)",
            }}>
              <span style={{ fontSize: "1.5rem" }}>🏥</span>
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontWeight: 800, fontSize: "clamp(.84rem,2.5vw,.92rem)",
                color: "#0B2545", marginBottom: 4,
              }}>
                Install OHQHS Care App
              </p>
              <p style={{
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                fontSize: "clamp(.72rem,2vw,.78rem)", color: "#64748B", lineHeight: 1.5,
              }}>
                Add to your home screen — quick access to care services, works offline too.
              </p>

              {/* Action buttons */}
              <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
                <button
                  onClick={handleInstall}
                  disabled={installing}
                  style={{
                    flex: "1 1 120px",
                    background: "linear-gradient(135deg,#0D9488,#38BDF8)",
                    color: "#fff", border: "none",
                    padding: "10px 16px", borderRadius: 10,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 700, fontSize: "clamp(.76rem,2vw,.82rem)",
                    cursor: installing ? "wait" : "pointer",
                    opacity: installing ? .7 : 1,
                    transition: "opacity .2s",
                  }}
                >
                  {installing ? "Installing…" : "📲 Install App"}
                </button>
                <button
                  onClick={handleDismiss}
                  style={{
                    flex: "0 0 auto",
                    padding: "10px 16px", borderRadius: 10,
                    background: "#F1F5F9", color: "#64748B",
                    border: "none", cursor: "pointer",
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 600, fontSize: "clamp(.72rem,2vw,.80rem)",
                  }}
                >
                  Not now
                </button>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              aria-label="Close"
              style={{
                background: "none", border: "none", cursor: "pointer",
                color: "#94A3B8", padding: 4, flexShrink: 0,
                lineHeight: 1,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Trust strip */}
          <div style={{
            background: "linear-gradient(135deg,#F0FDF4,#ECFEFF)",
            borderTop: "1px solid #E2E8F0",
            padding: "8px 18px",
            display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center",
          }}>
            {["CQC Registered", "Works Offline", "Free"].map((t) => (
              <span key={t} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                  <path d="M20 6L9 17l-5-5" stroke="#0D9488" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{
                  fontFamily: "'Plus Jakarta Sans',sans-serif",
                  fontSize: ".68rem", fontWeight: 700, color: "#0D9488",
                }}>{t}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
