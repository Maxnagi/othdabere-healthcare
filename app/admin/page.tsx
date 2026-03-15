"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Uploads() {
  const [file, setFile] = useState<any>(null)
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const uploadImage = async (e: any) => {
    e.preventDefault()
    if (!file) return
    setLoading(true)

    const fileName = `${Date.now()}-${file.name}`
    const { data, error } = await supabase.storage.from("media").upload(fileName, file)

    if (error) {
      alert("Upload failed: " + error.message)
      setLoading(false)
      return
    }

    const { data: publicUrl } = supabase.storage.from("media").getPublicUrl(fileName)
    setImageUrl(publicUrl.publicUrl)
    setLoading(false)
  }

  const copyUrl = () => {
    navigator.clipboard.writeText(imageUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFD" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "40px" }}>

        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 4 }}>
            Media Library
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>
            Upload images for use across the website
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

          {/* Upload panel */}
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "36px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 700, color: "#0B2545", marginBottom: 6 }}>
              Upload Image
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.85rem", marginBottom: 28 }}>
              Supported formats: JPG, PNG, WebP, GIF
            </p>

            <form onSubmit={uploadImage} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Drop zone */}
              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); setFile(e.dataTransfer.files?.[0]) }}
                style={{
                  border: `2px dashed ${dragOver ? "#0D9488" : "#CBD5E1"}`,
                  borderRadius: 16, padding: "40px 24px",
                  textAlign: "center", cursor: "pointer",
                  position: "relative",
                  background: dragOver ? "#F0FDFA" : "#F8FAFD",
                  transition: "all 0.2s",
                }}
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => setFile(e.target.files?.[0])}
                  style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer" }}
                />
                <div style={{ width: 56, height: 56, borderRadius: 14, background: dragOver ? "rgba(13,148,136,0.12)" : "#EEF6FF", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke={dragOver ? "#0D9488" : "#94A3B8"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8.5" cy="8.5" r="1.5" stroke={dragOver ? "#0D9488" : "#94A3B8"} strokeWidth="1.8"/>
                    <polyline points="21,15 16,10 5,21" stroke={dragOver ? "#0D9488" : "#94A3B8"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                {file ? (
                  <>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0D9488", fontSize: "0.95rem", marginBottom: 4 }}>
                      {file.name}
                    </p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: "0.78rem" }}>
                      {(file.size / 1024 / 1024).toFixed(2)} MB · Click to change
                    </p>
                  </>
                ) : (
                  <>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#334155", fontSize: "0.95rem", marginBottom: 4 }}>
                      Drop image here or click to browse
                    </p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: "0.78rem" }}>
                      Max file size: 5MB
                    </p>
                  </>
                )}
              </div>

              <button
                type="submit"
                disabled={!file || loading}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: !file || loading ? "#E2E8F0" : "linear-gradient(135deg, #0B2545, #163a6b)",
                  color: !file || loading ? "#94A3B8" : "white",
                  padding: "14px", border: "none", borderRadius: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem",
                  cursor: !file || loading ? "not-allowed" : "pointer",
                  transition: "all 0.25s",
                }}
              >
                {loading ? (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 1s linear infinite" }}>
                      <path d="M21 12a9 9 0 11-6.219-8.56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Uploading...
                  </>
                ) : (
                  <>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Upload Image
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Result panel */}
          <div>
            {imageUrl ? (
              <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, overflow: "hidden" }}>
                <div style={{ position: "relative" }}>
                  <img src={imageUrl} alt="Uploaded" style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }} />
                  <div style={{
                    position: "absolute", top: 12, right: 12,
                    background: "#DCFCE7", border: "1px solid #22C55E",
                    borderRadius: 100, padding: "5px 12px",
                    display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", color: "#16A34A" }}>Uploaded</span>
                  </div>
                </div>

                <div style={{ padding: "24px" }}>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.82rem", color: "#334155", marginBottom: 8 }}>
                    Image URL — copy for use in blog posts or pages:
                  </p>
                  <div style={{ display: "flex", gap: 8 }}>
                    <input
                      value={imageUrl}
                      readOnly
                      style={{
                        flex: 1, padding: "10px 14px",
                        border: "1.5px solid #E2E8F0",
                        borderRadius: 8, background: "#F8FAFD",
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "0.78rem", color: "#64748B",
                        outline: "none",
                      }}
                    />
                    <button
                      onClick={copyUrl}
                      style={{
                        display: "flex", alignItems: "center", gap: 6, flexShrink: 0,
                        background: copied ? "#DCFCE7" : "linear-gradient(135deg, #0D9488, #14B8A6)",
                        color: copied ? "#16A34A" : "white",
                        border: "none", borderRadius: 8, padding: "10px 16px",
                        fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem",
                        cursor: "pointer", transition: "all 0.2s",
                      }}
                    >
                      {copied ? (
                        <><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>Copied!</>
                      ) : (
                        <><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>Copy</>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "60px 40px", textAlign: "center" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#F8FAFD", border: "1.5px solid #E2E8F0", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8.5" cy="8.5" r="1.5" stroke="#CBD5E1" strokeWidth="1.8"/>
                    <polyline points="21,15 16,10 5,21" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#94A3B8", marginBottom: 8 }}>
                  No Image Uploaded Yet
                </h3>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#CBD5E1", fontSize: "0.88rem" }}>
                  Upload an image to see a preview and copy its URL
                </p>
              </div>
            )}

            {/* Tips */}
            <div style={{ background: "#F0FDFA", border: "1.5px solid rgba(13,148,136,0.2)", borderRadius: 16, padding: "20px", marginTop: 20 }}>
              <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "#0D9488", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.8"/><line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>
                Image Tips
              </h4>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                {["Use high-quality images (1200px+ wide) for hero sections", "JPG format is best for photos; PNG for logos and graphics", "Compress images before uploading to improve page speed", "Copy the URL and paste it into blog posts or page code"].map((tip, i) => (
                  <li key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#0F766E" }}>
                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#0D9488", marginTop: 5, flexShrink: 0 }} />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}
