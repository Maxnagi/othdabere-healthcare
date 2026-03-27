import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function GalleryPage() {
  const { data: photos } = await supabase
    .from("gallery")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-services.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            🖼️ Our Gallery
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 600 }}>
            Life at Othdabere
          </h1>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "clamp(0.95rem,2vw,1.1rem)", maxWidth: 500, lineHeight: 1.7 }}>
            A window into our care community — moments of compassion, connection and professional excellence.
          </p>
          <div style={{ width: 56, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginTop: 20 }} />
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={{ background: "white", padding: "96px 0" }}>
        <div className="container">

          <style>{`
            .gallery-masonry {
              columns: 3;
              column-gap: 20px;
            }
            .gallery-item {
              break-inside: avoid;
              margin-bottom: 20px;
              border-radius: 16px;
              overflow: hidden;
              border: 1.5px solid #E2E8F0;
              position: relative;
              background: #F8FAFD;
              cursor: pointer;
            }
            .gallery-item img {
              width: 100%;
              display: block;
              transition: transform 0.4s ease;
            }
            .gallery-item:hover img { transform: scale(1.05); }
            .gallery-overlay {
              position: absolute; inset: 0;
              background: linear-gradient(to top, rgba(11,37,69,0.6) 0%, transparent 60%);
              opacity: 0; transition: opacity 0.3s;
              display: flex; align-items: flex-end; padding: 20px;
            }
            .gallery-item:hover .gallery-overlay { opacity: 1; }
            .gallery-caption {
              font-family: 'Plus Jakarta Sans', sans-serif;
              font-weight: 600; font-size: 0.88rem;
              color: white;
            }
            @media (max-width: 900px) { .gallery-masonry { columns: 2; } }
            @media (max-width: 560px) { .gallery-masonry { columns: 1; } }
          `}</style>

          {photos && photos.length > 0 ? (
            <div className="gallery-masonry">
              {photos.map((photo: any) => (
                <div key={photo.id} className="gallery-item">
                  <img src={photo.image_url} alt={photo.caption || "Gallery image"} loading="lazy" />
                  {photo.caption && (
                    <div className="gallery-overlay">
                      <span className="gallery-caption">{photo.caption}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 24px" }}>
              <div style={{ width: 90, height: 90, borderRadius: "50%", background: "#F0FDFA", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="#0D9488" strokeWidth="1.8"/><circle cx="8.5" cy="8.5" r="1.5" stroke="#0D9488" strokeWidth="1.8"/><polyline points="21,15 16,10 5,21" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", fontWeight: 700, color: "#0B2545", marginBottom: 12 }}>Gallery Coming Soon</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "1rem", marginBottom: 28 }}>
                We're adding photos to share our care community with you. Check back soon!
              </p>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg,#0B2545,#163a6b)", color: "white",
                padding: "14px 28px", borderRadius: 12, textDecoration: "none",
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.93rem",
              }}>
                Get In Touch
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
