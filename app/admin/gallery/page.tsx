"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"
import AdminGuard from "@/components/admin/AdminGuard"

interface GalleryPhoto {
  id: string
  image_url: string
  caption: string
  created_at: string
}

export default function AdminGallery() {
  const [file, setFile] = useState<File | null>(null)
  const [caption, setCaption] = useState("")
  const [loading, setLoading] = useState(false)
  const [dragOver, setDragOver] = useState(false)
  const [photos, setPhotos] = useState<GalleryPhoto[]>([])
  const [fetching, setFetching] = useState(true)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => { fetchPhotos() }, [])

  async function fetchPhotos() {
    setFetching(true)
    const { data } = await supabase.from("gallery").select("*").order("created_at", { ascending: false })
    setPhotos(data || [])
    setFetching(false)
  }

  async function uploadPhoto(e: React.FormEvent) {
    e.preventDefault()
    if (!file) return
    setLoading(true)

    const fileName = `gallery/${Date.now()}-${file.name}`
    const { error: uploadError } = await supabase.storage.from("media").upload(fileName, file)
    if (uploadError) { alert("Upload failed: " + uploadError.message); setLoading(false); return }

    const { data: publicUrl } = supabase.storage.from("media").getPublicUrl(fileName)

    const { error: dbError } = await supabase.from("gallery").insert({
      image_url: publicUrl.publicUrl,
      caption: caption.trim(),
    })

    if (dbError) { alert("Failed to save: " + dbError.message); setLoading(false); return }

    setFile(null); setCaption(""); setSuccess(true)
    setTimeout(() => setSuccess(false), 3000)
    fetchPhotos()
    setLoading(false)
  }

  async function deletePhoto(photo: GalleryPhoto) {
    if (!confirm("Delete this photo?")) return
    setDeleting(photo.id)
    await supabase.from("gallery").delete().eq("id", photo.id)
    // Extract storage path from URL
    const url = new URL(photo.image_url)
    const path = url.pathname.split("/object/public/media/")[1]
    if (path) await supabase.storage.from("media").remove([path])
    fetchPhotos()
    setDeleting(null)
  }

  return (
    <AdminGuard>
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFD" }}>
      <AdminSidebar />

      <div style={{ flex: 1, padding: "clamp(20px,4vw,40px)", overflowX: "hidden" }}>

        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 4 }}>
            Gallery Manager
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>
            Upload and manage gallery photos displayed on the public gallery page.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 28, alignItems: "flex-start" }}>

          {/* Upload Panel */}
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "32px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0B2545", marginBottom: 6 }}>Upload Photo</h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.82rem", marginBottom: 24 }}>Supported: JPG, PNG, WebP · Max 5MB</p>

            {success && (
              <div style={{ background: "#DCFCE7", border: "1.5px solid #22C55E", borderRadius: 12, padding: "12px 16px", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#16A34A" }}>Photo uploaded successfully!</span>
              </div>
            )}

            <form onSubmit={uploadPhoto} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* Drop zone */}
              <div
                onDragOver={e => { e.preventDefault(); setDragOver(true) }}
                onDragLeave={() => setDragOver(false)}
                onDrop={e => { e.preventDefault(); setDragOver(false); const f = e.dataTransfer.files?.[0]; if (f && f.type.startsWith("image/")) setFile(f) }}
                style={{ border: `2px dashed ${dragOver ? "#0D9488" : "#CBD5E1"}`, borderRadius: 14, padding: "32px 20px", textAlign: "center", position: "relative", background: dragOver ? "#F0FDFA" : "#F8FAFD", transition: "all 0.2s", cursor: "pointer" }}
              >
                <input type="file" accept="image/*" onChange={e => setFile(e.target.files?.[0] || null)} style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer" }} />
                <div style={{ width: 48, height: 48, borderRadius: 12, background: dragOver ? "rgba(13,148,136,0.12)" : "#EEF6FF", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke={dragOver ? "#0D9488" : "#94A3B8"} strokeWidth="1.8"/><circle cx="8.5" cy="8.5" r="1.5" stroke={dragOver ? "#0D9488" : "#94A3B8"} strokeWidth="1.8"/><polyline points="21,15 16,10 5,21" stroke={dragOver ? "#0D9488" : "#94A3B8"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                {file ? (
                  <>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0D9488", fontSize: "0.88rem", marginBottom: 2 }}>{file.name}</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: "0.75rem" }}>{(file.size / 1024 / 1024).toFixed(2)} MB · Click to change</p>
                  </>
                ) : (
                  <>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, color: "#334155", fontSize: "0.88rem", marginBottom: 2 }}>Drop photo here or click to browse</p>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: "0.75rem" }}>Max 5MB per image</p>
                  </>
                )}
              </div>

              {/* Caption */}
              <div>
                <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 7 }}>Caption (optional)</label>
                <input
                  value={caption}
                  onChange={e => setCaption(e.target.value)}
                  placeholder="e.g. Our care team in action"
                  style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #E2E8F0", borderRadius: 10, fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem", color: "#334155", background: "#F8FAFD", outline: "none", boxSizing: "border-box" }}
                />
              </div>

              <button
                type="submit"
                disabled={!file || loading}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: !file || loading ? "#E2E8F0" : "linear-gradient(135deg,#0B2545,#163a6b)",
                  color: !file || loading ? "#94A3B8" : "white",
                  padding: "13px", border: "none", borderRadius: 10,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.93rem",
                  cursor: !file || loading ? "not-allowed" : "pointer",
                  transition: "all 0.2s",
                }}
              >
                {loading ? (
                  <><svg width="15" height="15" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 1s linear infinite" }}><path d="M21 12a9 9 0 11-6.219-8.56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>Uploading...</>
                ) : (
                  <><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>Upload to Gallery</>
                )}
              </button>
            </form>
          </div>

          {/* Photos Grid */}
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "32px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0B2545" }}>Gallery Photos</h2>
              <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#64748B", background: "#F1F5F9", padding: "4px 12px", borderRadius: 100 }}>
                {photos.length} photo{photos.length !== 1 ? "s" : ""}
              </span>
            </div>

            {fetching ? (
              <div style={{ textAlign: "center", padding: "48px 0", color: "#94A3B8" }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 1s linear infinite", margin: "0 auto 12px", display: "block" }}><path d="M21 12a9 9 0 11-6.219-8.56" stroke="#0D9488" strokeWidth="2" strokeLinecap="round"/></svg>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.88rem" }}>Loading photos...</p>
              </div>
            ) : photos.length === 0 ? (
              <div style={{ textAlign: "center", padding: "48px 0", color: "#94A3B8" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#F8FAFD", border: "1.5px solid #E2E8F0", margin: "0 auto 16px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#CBD5E1" strokeWidth="1.8"/><circle cx="8.5" cy="8.5" r="1.5" stroke="#CBD5E1" strokeWidth="1.8"/><polyline points="21,15 16,10 5,21" stroke="#CBD5E1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#94A3B8" }}>No photos yet</p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#CBD5E1" }}>Upload your first photo to get started</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 14 }}>
                {photos.map(photo => (
                  <div key={photo.id} style={{ position: "relative", borderRadius: 12, overflow: "hidden", border: "1.5px solid #E2E8F0", aspectRatio: "1", background: "#F8FAFD" }}>
                    <img src={photo.image_url} alt={photo.caption || ""} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    {/* Overlay on hover */}
                    <div style={{ position: "absolute", inset: 0, background: "rgba(11,37,69,0.55)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, opacity: 0, transition: "opacity 0.22s" }}
                      onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                      onMouseLeave={e => (e.currentTarget.style.opacity = "0")}
                    >
                      {photo.caption && (
                        <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.72rem", color: "white", textAlign: "center", padding: "0 8px", lineHeight: 1.4 }}>{photo.caption}</p>
                      )}
                      <button
                        onClick={() => deletePhoto(photo)}
                        disabled={deleting === photo.id}
                        style={{ background: "#EF4444", color: "white", border: "none", borderRadius: 8, padding: "7px 14px", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.75rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 5 }}
                      >
                        {deleting === photo.id ? "..." : <>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><polyline points="3,6 5,6 21,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          Delete
                        </>}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1.5fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
    </AdminGuard>
  )
}
