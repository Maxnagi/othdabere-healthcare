import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false })

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section style={{
        position: "relative", padding: "120px 0 100px",
        backgroundImage: "url('/images/hero-blog.jpg')",
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        <div className="hero-overlay-light" style={{ position: "absolute", inset: 0 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="section-label" style={{ marginBottom: 20, display: "inline-flex", background: "rgba(13,148,136,0.18)", border: "1px solid rgba(20,184,166,0.35)", color: "#5EEAD4" }}>
            Insights & News
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 700, color: "white", lineHeight: 1.1, marginTop: 16, marginBottom: 16, maxWidth: 600 }}>
            Latest News
          </h1>
          <div style={{ width: 60, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2 }} />
        </div>
      </section>

      {/* ── WE ARE RECRUITING — STAFF ── */}
      <section style={{ padding: "80px 0", background: "white" }}>
        <div className="container">
          {/* Staff Recruitment Card */}
          <div style={{
            background: "linear-gradient(135deg, #0B2545 0%, #163a6b 50%, #0D9488 100%)",
            borderRadius: 28,
            padding: "56px 48px",
            marginBottom: 40,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Decorative orb */}
            <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "rgba(45,212,191,0.12)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -40, left: -40, width: 200, height: 200, borderRadius: "50%", background: "rgba(99,102,241,0.1)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(45,212,191,0.18)", border: "1px solid rgba(45,212,191,0.35)", borderRadius: 50, padding: "7px 16px", marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2DD4BF", display: "inline-block", animation: "pulseRing 2s ease-in-out infinite" }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#2DD4BF" }}>Now Hiring</span>
              </div>

              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "white", lineHeight: 1.15, marginBottom: 20, maxWidth: 640 }}>
                We Are Recruiting for Staff
              </h2>
              <div style={{ width: 56, height: 4, background: "linear-gradient(90deg, #38BDF8, #2DD4BF)", borderRadius: 2, marginBottom: 28 }} />

              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.82)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 680, marginBottom: 36 }}>
                Othdabere High Quality Healthcare Services Ltd is actively recruiting dedicated, compassionate professionals to join our growing team. We are looking for individuals who share our values of dignity, respect, and person-centred care to help us make a real difference in our communities.
              </p>

              {/* Role chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
                {[
                  { label: "Doctors", icon: "🩺" },
                  { label: "Nurses", icon: "👩‍⚕️" },
                  { label: "Counsellors", icon: "🧠" },
                  { label: "Administrators", icon: "💼" },
                  { label: "Carers", icon: "🤝" },
                  { label: "Cleaners", icon: "🧹" },
                ].map((role) => (
                  <span key={role.label} style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: 50, padding: "10px 20px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.88rem",
                    color: "white",
                  }}>
                    <span>{role.icon}</span> {role.label}
                  </span>
                ))}
              </div>

              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "rgba(255,255,255,0.72)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 680, marginBottom: 32 }}>
                Whether you are a seasoned healthcare professional or looking to begin a rewarding career in care, we welcome applications from all backgrounds. We offer competitive pay, ongoing training, a supportive working environment, and the opportunity to truly change lives.
              </p>

              <a href="/careers" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "linear-gradient(135deg, #0D9488, #0891B2)",
                color: "white", padding: "16px 32px", borderRadius: 50,
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem",
                textDecoration: "none", boxShadow: "0 8px 24px rgba(13,148,136,0.4)",
              }}>
                Apply Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          {/* Client Recruitment Card */}
          <div style={{
            background: "linear-gradient(135deg, #F0FDFA 0%, #EEF6FF 100%)",
            border: "2px solid #0D948822",
            borderRadius: 28,
            padding: "56px 48px",
            marginBottom: 64,
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: -50, right: -50, width: 240, height: 240, borderRadius: "50%", background: "rgba(13,148,136,0.06)", pointerEvents: "none" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(13,148,136,0.12)", border: "1px solid rgba(13,148,136,0.3)", borderRadius: 50, padding: "7px 16px", marginBottom: 24 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#0D9488", display: "inline-block" }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#0D9488" }}>Registering Clients</span>
              </div>

              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#0B2545", lineHeight: 1.15, marginBottom: 20, maxWidth: 640 }}>
                We Are Recruiting & Registering Clients
              </h2>
              <div style={{ width: 56, height: 4, background: "linear-gradient(90deg, #0D9488, #38BDF8)", borderRadius: 2, marginBottom: 28 }} />

              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#334155", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 680, marginBottom: 28 }}>
                We are currently recruiting and registering clients who need support with their daily care needs — delivered in the comfort of their own homes or personal spaces. Our mission is to provide compassionate, person-centred domiciliary care that allows individuals to live independently, safely, and with dignity.
              </p>

              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#334155", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 680, marginBottom: 36 }}>
                Whether you or a loved one needs assistance with daily routines, medication management, companionship, personal care, or specialist support, our experienced team is here to help. We work closely with clients, families, and healthcare professionals to create tailored care plans that truly meet individual needs.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 36 }}>
                {["Personal Care", "Medication Support", "Companionship", "Meal Preparation", "Mobility Assistance", "Specialist Care"].map((s) => (
                  <span key={s} style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    background: "white",
                    border: "1.5px solid #0D948844",
                    borderRadius: 50, padding: "9px 18px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem",
                    color: "#0D9488",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {s}
                  </span>
                ))}
              </div>

              <a href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "linear-gradient(135deg, #0B2545, #163a6b)",
                color: "white", padding: "16px 32px", borderRadius: 50,
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem",
                textDecoration: "none", boxShadow: "0 8px 24px rgba(11,37,69,0.2)",
              }}>
                Register as a Client
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          {/* Dynamic blog posts if any */}
          {posts && posts.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
              {posts?.map((post: any) => (
                <article key={post.id} className="card-lift" style={{
                  background: "white", border: "1.5px solid #E2E8F0",
                  borderRadius: 20, overflow: "hidden",
                }}>
                  {post.image ? (
                    <div style={{ height: 220, overflow: "hidden" }}>
                      <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                  ) : (
                    <div style={{ height: 160, background: "linear-gradient(135deg, #EEF6FF, #DCFCE7)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="14,2 14,8 20,8" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  )}
                  <div style={{ padding: "28px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      <span style={{ background: "#F0FDFA", color: "#0D9488", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.72rem", padding: "4px 10px", borderRadius: 100 }}>Healthcare</span>
                      <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.75rem", color: "#94A3B8" }}>
                        {new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </span>
                    </div>
                    <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 700, color: "#0B2545", marginBottom: 12, lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#64748B", fontSize: "0.9rem", lineHeight: 1.65, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as any, overflow: "hidden" }}>
                      {post.content}
                    </p>
                    <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, color: "#0D9488", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "0.85rem", cursor: "pointer" }}>
                      Read More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
