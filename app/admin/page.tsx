"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Blog() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [published, setPublished] = useState(false)
  const [posts, setPosts] = useState<any[]>([])
  const [loadingPosts, setLoadingPosts] = useState(true)

  useEffect(() => { fetchPosts() }, [])

  async function fetchPosts() {
    const { data } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })
    setPosts(data || [])
    setLoadingPosts(false)
  }

  const createPost = async (e: any) => {
    e.preventDefault()
    setLoading(true)

    let imageUrl = ""
    if (image) {
      const fileName = `${Date.now()}-${image.name}`
      const { error } = await supabase.storage.from("media").upload(fileName, image)
      if (!error) {
        const { data } = supabase.storage.from("media").getPublicUrl(fileName)
        imageUrl = data.publicUrl
      }
    }

    await supabase.from("blog_posts").insert([{ title, content, image: imageUrl }])
    setTitle(""); setContent(""); setImage(null)
    setLoading(false)
    setPublished(true)
    fetchPosts()
    setTimeout(() => setPublished(false), 3000)
  }

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#F8FAFD" }}>
      <AdminSidebar />
      <div style={{ flex: 1, padding: "40px" }}>

        <div style={{ marginBottom: 36 }}>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700, color: "#0B2545", marginBottom: 4 }}>
            Blog Posts
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem" }}>
            Create and manage healthcare blog posts
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>

          {/* Create form */}
          <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 20, padding: "32px" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 700, color: "#0B2545", marginBottom: 6 }}>
              Create New Post
            </h2>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.85rem", marginBottom: 28 }}>
              Write and publish a new blog post
            </p>

            {published && (
              <div style={{ background: "#DCFCE7", border: "1.5px solid #22C55E", borderRadius: 12, padding: "12px 16px", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "#16A34A" }}>Post published successfully!</span>
              </div>
            )}

            <form onSubmit={createPost} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div>
                <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 6 }}>Post Title</label>
                <input
                  type="text"
                  placeholder="Enter a compelling title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  className="input-modern"
                  required
                />
              </div>
              <div>
                <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 6 }}>Content</label>
                <textarea
                  placeholder="Write your blog post content here..."
                  value={content}
                  onChange={e => setContent(e.target.value)}
                  className="input-modern"
                  style={{ height: 180, resize: "vertical" as any }}
                  required
                />
              </div>
              <div>
                <label style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.82rem", color: "#334155", display: "block", marginBottom: 6 }}>Featured Image</label>
                <div style={{ border: "1.5px dashed #CBD5E1", borderRadius: 10, padding: "20px", textAlign: "center", cursor: "pointer", position: "relative", background: "#F8FAFD" }}>
                  <input type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0])} style={{ position: "absolute", inset: 0, opacity: 0, cursor: "pointer" }} />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 8px", display: "block" }}>
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="8.5" cy="8.5" r="1.5" stroke="#94A3B8" strokeWidth="1.5"/>
                    <polyline points="21,15 16,10 5,21" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#64748B", margin: 0 }}>
                    {image ? (
                      <span style={{ color: "#0D9488", fontWeight: 600 }}>{image.name}</span>
                    ) : "Click to upload a featured image"}
                  </p>
                </div>
              </div>
              <button
                type="submit"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  background: "linear-gradient(135deg, #0B2545, #163a6b)",
                  color: "white", padding: "14px",
                  border: "none", borderRadius: 10, cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem",
                  transition: "all 0.25s",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.9")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                {loading ? "Publishing..." : "Publish Post"}
                {!loading && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
            </form>
          </div>

          {/* Recent posts */}
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0B2545", marginBottom: 20 }}>
              Recent Posts ({posts.length})
            </h2>

            {loadingPosts ? (
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: "0.9rem" }}>Loading posts...</p>
            ) : posts.length === 0 ? (
              <div style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 16, padding: "40px", textAlign: "center" }}>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#94A3B8", fontSize: "0.9rem" }}>No posts yet. Create your first post!</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {posts.map((post, i) => (
                  <div key={i} style={{ background: "white", border: "1.5px solid #E2E8F0", borderRadius: 16, padding: "20px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                    {post.image ? (
                      <img src={post.image} alt={post.title} style={{ width: 64, height: 64, borderRadius: 10, objectFit: "cover", flexShrink: 0 }} />
                    ) : (
                      <div style={{ width: 64, height: 64, borderRadius: 10, background: "linear-gradient(135deg, #EEF6FF, #DCFCE7)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "#0B2545", fontSize: "0.92rem", marginBottom: 4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {post.title}
                      </h4>
                      <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.8rem", lineHeight: 1.5, margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as any, overflow: "hidden" }}>
                        {post.content}
                      </p>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", color: "#94A3B8", marginTop: 6, display: "block" }}>
                        {post.created_at ? new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }) : ""}
                      </span>
                    </div>
                    <span style={{ background: "#DCFCE7", color: "#16A34A", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.7rem", padding: "4px 10px", borderRadius: 100, flexShrink: 0 }}>
                      Published
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
