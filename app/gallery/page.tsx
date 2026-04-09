import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

/*
  care-gallery-collage.png is a 4-column × 3-row grid:
  Row 1 (top):    carers with patients — cols 0–3  → y  0%–33%
  Row 2 (middle): carers in action    — cols 0–3  → y 33%–66%
  Row 3 (bottom): client portraits    — cols 0–3  → y 66%–100%

  object-position x: col 0=12.5%  col 1=37.5%  col 2=62.5%  col 3=87.5%
  object-position y: row 0=16.5%  row 1=50%    row 2=83%
*/
const COLLAGE = "/images/care-gallery-collage.png"

// Each entry: which cell of the collage to show (col 0-3, row 0-2)
function cellPos(col: number, row: number) {
  const x = [12.5, 37.5, 62.5, 87.5][col]
  const y = [16.5, 50, 83][row]
  return `${x}% ${y}%`
}

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

      {/* ── FOUNDER ── */}
      <section style={{ background: "#F8FAFD", padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>👩‍⚕️ Our Founder</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Meet the Founder
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ maxWidth: 380, width: "100%" }}>
              <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(11,37,69,0.16)", aspectRatio: "3/4", position: "relative" }}>
                <img src="/images/founder.jpeg" alt="Dorothy Ohenewa – Founder"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,37,69,0.7) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 24px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", fontWeight: 700, color: "white", lineHeight: 1.1 }}>Dorothy Ohenewa</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#5EEAD4", fontWeight: 600, marginTop: 6 }}>
                    Registered Nurse · Social Worker · Counsellor/Therapist
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", marginTop: 4 }}>
                    Founder &amp; Director — OHQHS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAFF — CARERS ── */}
      <section style={{ background: "white", padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>👥 Our Team</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Staff — Carers
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.96rem", maxWidth: 520, margin: "0 auto" }}>
              Our compassionate, trained carers are at the heart of everything we do — delivering professional, dignified care every day.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              { role: "Senior Carer", col: 0, row: 0 },
              { role: "Support Worker", col: 1, row: 1 },
              { role: "Domiciliary Care Professional", col: 3, row: 0 },
            ].map((member, i) => (
              <div key={i} className="card-lift" style={{ borderRadius: 20, overflow: "hidden", background: "white", border: "1.5px solid #E2E8F0", boxShadow: "0 4px 24px rgba(11,37,69,0.07)" }}>
                <div style={{ height: 240, overflow: "hidden", position: "relative" }}>
                  <img
                    src={COLLAGE}
                    alt={member.role}
                    style={{
                      width: "400%",
                      height: "300%",
                      objectFit: "cover",
                      position: "absolute",
                      top: member.row === 0 ? "0%" : member.row === 1 ? "-100%" : "-200%",
                      left: member.col === 0 ? "0%" : member.col === 1 ? "-100%" : member.col === 2 ? "-200%" : "-300%",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,37,69,0.45) 0%, transparent 60%)" }} />
                </div>
                <div style={{ padding: "20px 24px 24px", textAlign: "center" }}>
                  <div style={{ width: 42, height: 4, borderRadius: 4, background: "linear-gradient(135deg,#0D9488,#38BDF8)", margin: "0 auto 14px" }} />
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#0D9488", fontWeight: 700, margin: 0 }}>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS WITH CARER SUPPORTING ── */}
      <section style={{ background: "#F8FAFD", padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>💛 Care in Action</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Clients with a Carer Supporting
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.96rem", maxWidth: 520, margin: "0 auto" }}>
              Real moments of care, companionship, and connection — our carers supporting clients in the comfort of their own homes.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[
              { caption: "Medication & Daily Routine Support", col: 2, row: 0 },
              { caption: "Companionship & Emotional Support",  col: 2, row: 1 },
              { caption: "Mobility & Physical Assistance",     col: 1, row: 1 },
            ].map((item, i) => (
              <div key={i} className="card-lift" style={{ borderRadius: 20, overflow: "hidden", background: "white", border: "1.5px solid #E2E8F0" }}>
                <div style={{ height: 240, overflow: "hidden", position: "relative" }}>
                  <img
                    src={COLLAGE}
                    alt={item.caption}
                    style={{
                      width: "400%",
                      height: "300%",
                      objectFit: "cover",
                      position: "absolute",
                      top: item.row === 0 ? "0%" : item.row === 1 ? "-100%" : "-200%",
                      left: item.col === 0 ? "0%" : item.col === 1 ? "-100%" : item.col === 2 ? "-200%" : "-300%",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,37,69,0.45) 0%, transparent 60%)" }} />
                </div>
                <div style={{ padding: "20px 24px 24px" }}>
                  <div style={{ width: 42, height: 4, borderRadius: 4, background: "linear-gradient(135deg,#0D9488,#38BDF8)", marginBottom: 14 }} />
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.9rem", color: "#0B2545", fontWeight: 600, margin: 0 }}>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <section style={{ background: "white", padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>🌟 Our Clients</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Clients
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.96rem", maxWidth: 560, margin: "0 auto" }}>
              We are proud to support individuals with diverse care needs — each person treated with the dignity, respect, and compassion they deserve.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              { label: "Elderly Individuals",      desc: "Supporting older adults to live independently in their own homes with dignity.",              col: 0, row: 2, accent: "#0D9488" },
              { label: "People with Disabilities", desc: "Empowering individuals with physical or learning disabilities to thrive.",                    col: 1, row: 2, accent: "#6366F1" },
              { label: "Those with Chronic Illness",desc: "Caring for clients managing long-term conditions with specialised support.",                col: 2, row: 2, accent: "#F59E0B" },
              { label: "Post-Hospital Patients",   desc: "Helping clients safely transition from hospital back to their home environment.",            col: 3, row: 2, accent: "#EC4899" },
            ].map((c, i) => (
              <div key={i} className="card-lift" style={{ borderRadius: 20, overflow: "hidden", background: "white", border: "1.5px solid #E2E8F0" }}>
                <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                  <img
                    src={COLLAGE}
                    alt={c.label}
                    style={{
                      width: "400%",
                      height: "300%",
                      objectFit: "cover",
                      position: "absolute",
                      top: c.row === 0 ? "0%" : c.row === 1 ? "-100%" : "-200%",
                      left: c.col === 0 ? "0%" : c.col === 1 ? "-100%" : c.col === 2 ? "-200%" : "-300%",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,37,69,0.5) 0%, transparent 55%)" }} />
                </div>
                <div style={{ padding: "20px 24px 24px", textAlign: "center" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.25rem", fontWeight: 700, color: "#0B2545", marginBottom: 8 }}>{c.label}</h3>
                  <div style={{ width: 36, height: 3, background: c.accent, borderRadius: 4, margin: "0 auto 12px" }} />
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.86rem", lineHeight: 1.65, margin: 0 }}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL COLLAGE SHOWCASE ── */}
      <section style={{ background: "#F8FAFD", padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>📸 Our People</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Care in Every Moment
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto 16px" }} />
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.96rem", maxWidth: 540, margin: "0 auto" }}>
              A glimpse of the warmth, dedication, and compassion that defines our team and the people we serve every day.
            </p>
          </div>
          <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(11,37,69,0.14)", border: "1.5px solid #E2E8F0" }}>
            <img
              src={COLLAGE}
              alt="Othdabere care team and clients"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* DYNAMIC SUPABASE GALLERY */}
      {photos && photos.length > 0 && (
        <section style={{ background: "white", padding: "96px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>📷 Photo Gallery</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16 }}>
                More Moments
              </h2>
            </div>
            <style>{`
              .gallery-masonry { columns: 3; column-gap: 20px; }
              .gallery-item { break-inside: avoid; margin-bottom: 20px; border-radius: 16px; overflow: hidden; border: 1.5px solid #E2E8F0; position: relative; background: #F8FAFD; cursor: pointer; }
              .gallery-item img { width: 100%; display: block; transition: transform 0.4s ease; }
              .gallery-item:hover img { transform: scale(1.05); }
              .gallery-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(11,37,69,0.6) 0%, transparent 60%); opacity: 0; transition: opacity 0.3s; display: flex; align-items: flex-end; padding: 20px; }
              .gallery-item:hover .gallery-overlay { opacity: 1; }
              .gallery-caption { font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; font-size: 0.88rem; color: white; }
              @media (max-width: 900px) { .gallery-masonry { columns: 2; } }
              @media (max-width: 560px) { .gallery-masonry { columns: 1; } }
            `}</style>
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
          </div>
        </section>
      )}

      <Footer />
    </>
  )
}
