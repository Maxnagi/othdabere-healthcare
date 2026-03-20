"use client"

import { useEffect, useState } from "react"

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showBanner, setShowBanner]         = useState(false)
  const [installed, setInstalled]           = useState(false)
  const [installing, setInstalling]         = useState(false)
  const [dismissed, setDismissed]           = useState(false)

  // ── Register main service worker ──────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return

    // Only register on non-admin pages
    if (window.location.pathname.startsWith("/admin")) return

    navigator.serviceWorker
      .register("/sw.js", { scope: "/" })
      .then((reg) => console.log("[SW] Registered:", reg.scope))
      .catch((err) => console.warn("[SW] Registration failed:", err))
  }, [])

  // ── Capture install prompt ─────────────────────────────────────
  useEffect(() => {
    const dismissed_before = localStorage.getItem("pwa-dismissed")
    if (dismissed_before === "true") return

    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as Navigator & { standalone?: boolean }).standalone === true

    if (isStandalone) { setInstalled(true); return }

    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show banner after 4s delay
      setTimeout(() => setShowBanner(true), 4000)
    }

    window.addEventListener("beforeinstallprompt", handler)
    window.addEventListener("appinstalled", () => {
      setInstalled(true)
      setShowBanner(false)
    })

    return () => window.removeEventListener("beforeinstallprompt", handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return
    setInstalling(true)
    await deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === "accepted") {
      setInstalled(true)
      setShowBanner(false)
    }
    setInstalling(false)
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setShowBanner(false)
    setDismissed(true)
    localStorage.setItem("pwa-dismissed", "true")
  }

  if (installed || dismissed || !showBanner) return null

  return (
    <>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(110%); opacity: 0; }
          to   { transform: translateY(0);    opacity: 1; }
        }
        .pwa-banner {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) translateY(0);
          z-index: 9999;
          width: min(420px, calc(100vw - 32px));
          animation: slideUp 0.42s cubic-bezier(.22,.68,0,1.1) forwards;
        }
      `}</style>

      <div className="pwa-banner">
        <div style={{
          background: "white",
          borderRadius: 20,
          boxShadow: "0 12px 48px rgba(11,37,69,0.22), 0 2px 8px rgba(11,37,69,0.10)",
          border: "1.5px solid rgba(13,148,136,0.18)",
          overflow: "hidden",
        }}>
          {/* Top accent bar */}
          <div style={{ height: 4, background: "linear-gradient(90deg,#0D9488,#38BDF8,#0D9488)", backgroundSize: "200% 100%", animation: "shimmer 3s linear infinite" }} />

          <div style={{ padding: "20px 20px 18px", display: "flex", gap: 14, alignItems: "flex-start" }}>
            {/* Icon */}
            <div style={{
              width: 52, height: 52, borderRadius: 14, flexShrink: 0,
              background: "linear-gradient(135deg,#0B2545,#0D9488)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 14px rgba(13,148,136,0.35)",
            }}>
              <span style={{ fontSize: "1.5rem" }}>🏥</span>
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontWeight: 800, fontSize: "0.92rem", color: "#0B2545", marginBottom: 3 }}>
                Install OHQHS Care App
              </div>
              <div style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.78rem", color: "#64748B", lineHeight: 1.5 }}>
                Add to your home screen for quick access to our care services — works offline too.
              </div>

              {/* Buttons */}
              <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                <button
                  onClick={handleInstall}
                  disabled={installing}
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg,#0D9488,#38BDF8)",
                    color: "white", border: "none",
                    padding: "10px 16px", borderRadius: 10,
                    fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 700, fontSize: "0.82rem",
                    cursor: installing ? "wait" : "pointer",
                    transition: "opacity 0.2s",
                    opacity: installing ? 0.7 : 1,
                  }}
                >
                  {installing ? "Installing…" : "📲 Install App"}
                </button>
                <button
                  onClick={handleDismiss}
                  style={{
                    padding: "10px 14px", borderRadius: 10,
                    background: "#F1F5F9", color: "#64748B",
                    border: "none", fontFamily: "'Plus Jakarta Sans',sans-serif",
                    fontWeight: 600, fontSize: "0.8rem", cursor: "pointer",
                  }}
                >
                  Not now
                </button>
              </div>
            </div>

            {/* Close X */}
            <button
              onClick={handleDismiss}
              style={{ background: "none", border: "none", cursor: "pointer", padding: 4, color: "#94A3B8", flexShrink: 0 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Trust strip */}
          <div style={{ background: "linear-gradient(135deg,#F0FDF4,#ECFEFF)", borderTop: "1px solid #E2E8F0", padding: "9px 20px", display: "flex", gap: 16, alignItems: "center" }}>
            {["CQC Registered", "Offline Access", "Free to Install"].map(t => (
              <div key={t} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: "0.7rem", fontWeight: 600, color: "#0D9488" }}>{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
