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

      {/* ── FOUNDER SECTION ── */}
      <section style={{ background: "#F8FAFD", padding: "80px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>👩‍⚕️ Our Founder</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16, marginBottom: 12 }}>
              Meet the Founder
            </h2>
            <div className="divider-teal" style={{ margin: "0 auto" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
            {/* Founder photo card */}
            <div style={{ maxWidth: 380, width: "100%" }}>
              <div style={{ borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(11,37,69,0.16)", aspectRatio: "3/4", position: "relative" }}>
                <img
                  src="/images/founder.jpeg"
                  alt="Dorothy Ohenewa – Founder"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(11,37,69,0.7) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 24px" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.9rem", fontWeight: 700, color: "white", lineHeight: 1.1 }}>Dorothy Ohenewa</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.82rem", color: "#5EEAD4", fontWeight: 600, marginTop: 6 }}>
                    Registered Nurse · Social Worker · Counsellor/Therapist
                  </div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.7)", marginTop: 4 }}>
                    Founder & Director — OHQHS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STAFF — CARERS SECTION ── */}
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
              { role: "Senior Carer", icon: "🏅", color: "linear-gradient(135deg,#0D9488,#14B8A6)" },
              { role: "Support Worker", icon: "🤝", color: "linear-gradient(135deg,#3B82F6,#6366F1)" },
              { role: "Domiciliary Care Professional", icon: "🏡", color: "linear-gradient(135deg,#F59E0B,#F97316)" },
            ].map((member, i) => (
              <div key={i} className="card-lift" style={{ borderRadius: 20, overflow: "hidden", background: "white", border: "1.5px solid #E2E8F0", boxShadow: "0 4px 24px rgba(11,37,69,0.07)" }}>
                <div style={{ background: member.color, height: 200, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem" }}>
                  {member.icon}
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

      {/* ── CLIENTS WITH CARER SUPPORT SECTION ── */}
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
              { caption: "Medication & Daily Routine Support", icon: "💊", grad: "linear-gradient(135deg,#EEF6FF,#DCFCE7)" },
              { caption: "Companionship & Emotional Support", icon: "🫶", grad: "linear-gradient(135deg,#FDF4FF,#FCE7F3)" },
              { caption: "Mobility & Physical Assistance", icon: "🦽", grad: "linear-gradient(135deg,#FFFBEB,#FEF3C7)" },
            ].map((item, i) => (
              <div key={i} className="card-lift" style={{ borderRadius: 20, overflow: "hidden", background: "white", border: "1.5px solid #E2E8F0" }}>
                <div style={{ height: 220, background: item.grad, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }}>
                  <div style={{ fontSize: "4rem" }}>{item.icon}</div>
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

      {/* ── CLIENTS SECTION ── */}
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
              { label: "Elderly Individuals", icon: "👴", desc: "Supporting older adults to live independently in their own homes with dignity.", color: "#0D9488" },
              { label: "People with Disabilities", icon: "♿", desc: "Empowering individuals with physical or learning disabilities to thrive.", color: "#6366F1" },
              { label: "Those with Chronic Illness", icon: "💙", desc: "Caring for clients managing long-term conditions with specialised support.", color: "#F59E0B" },
              { label: "Post-Hospital Patients", icon: "🏥", desc: "Helping clients safely transition from hospital back to their home environment.", color: "#EC4899" },
            ].map((c, i) => (
              <div key={i} className="card-lift" style={{ borderRadius: 20, background: "white", border: "1.5px solid #E2E8F0", padding: "32px 28px", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 700, color: "#0B2545", marginBottom: 10 }}>{c.label}</h3>
                <div style={{ width: 40, height: 3, background: c.color, borderRadius: 4, margin: "0 auto 14px" }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.88rem", lineHeight: 1.7, margin: 0 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DYNAMIC GALLERY GRID */}
      {photos && photos.length > 0 && (
        <section style={{ background: "#F8FAFD", padding: "96px 0" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="section-label" style={{ marginBottom: 16, display: "inline-flex" }}>📸 Photo Gallery</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", marginTop: 16 }}>
                Photo Moments
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
