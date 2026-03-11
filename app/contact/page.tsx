"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/ScrollReveal"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export default function Contact() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [message,setMessage] = useState("")
  const [loading,setLoading] = useState(false)
  const [sent,setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if(loading) return

    setLoading(true)

    try {

      const { error } = await supabase
        .from("contact_messages")
        .insert([{ name,email,phone,message }])

      if(error){
        console.error("Supabase error:",error.message)
        alert("Something went wrong. Please try again.")
        return
      }

      setSent(true)

      setName("")
      setEmail("")
      setPhone("")
      setMessage("")

    } catch(err){

      console.error("Unexpected error:",err)
      alert("Unexpected error occurred")

    } finally{

      setLoading(false)

    }

  }

  const contactInfo = [

    {
      icon:"📞",
      label:"Phone",
      val:"+44 7588 160799",
      href:"tel:+447588160799",
      grad:"linear-gradient(135deg,#10B981,#14B8A6)"
    },

    {
      icon:"📧",
      label:"Email",
      val:"othdaberehealthcare@gmail.com",
      href:"mailto:othdaberehealthcare@gmail.com",
      grad:"linear-gradient(135deg,#3B82F6,#6366F1)"
    },

    {
      icon:"📍",
      label:"Location",
      val:"United Kingdom & Ghana",
      href:"#",
      grad:"linear-gradient(135deg,#F43F5E,#EC4899)"
    },

    {
      icon:"🕐",
      label:"Hours",
      val:"Mon–Sun: 8am – 8pm",
      href:"#",
      grad:"linear-gradient(135deg,#F97316,#F59E0B)"
    }

  ]

  return (

    <>
      <Navbar/>

      {/* HERO */}

      <section
        className="page-hero"
        style={{
          position:"relative",
          padding:"110px 0 80px",
          backgroundImage:"url('/images/hero-contact.jpg')",
          backgroundSize:"cover",
          backgroundPosition:"center"
        }}
      >

        <div className="hero-overlay" style={{position:"absolute",inset:0}}/>

        <div className="container" style={{position:"relative",zIndex:1}}>

          <ScrollReveal>

            <span
              className="section-label"
              style={{
                marginBottom:20,
                background:"rgba(13,148,136,0.18)",
                border:"1px solid rgba(20,184,166,0.35)",
                color:"#5EEAD4"
              }}
            >
              📞 Get In Touch
            </span>

            <h1
              style={{
                fontFamily:"'Cormorant Garamond',serif",
                fontSize:"clamp(2.4rem,6vw,4.5rem)",
                fontWeight:700,
                color:"white",
                lineHeight:1.08,
                marginTop:20,
                marginBottom:20
              }}
            >
              Contact <span className="text-shimmer">Our Team</span>
            </h1>

            <p
              style={{
                fontFamily:"'Plus Jakarta Sans',sans-serif",
                color:"rgba(255,255,255,0.78)",
                fontSize:"1.1rem",
                maxWidth:520,
                lineHeight:1.72
              }}
            >
              We are here to support you. Reach out to discuss care options,
              ask questions or arrange a consultation.
            </p>

          </ScrollReveal>

        </div>

      </section>


      {/* CONTACT INFO */}

      <section style={{background:"white",padding:"60px 0 0"}}>

        <div className="container">

          <div
            style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
              gap:18
            }}
          >

            {contactInfo.map((c,i)=>(

              <ScrollReveal key={i} delay={`d${i+1}` as any}>

                <a
                  href={c.href}
                  style={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"center",
                    textAlign:"center",
                    padding:"28px 20px",
                    borderRadius:18,
                    textDecoration:"none",
                    background:"white",
                    border:"1.5px solid #E2E8F0"
                  }}
                >

                  <div
                    style={{
                      width:52,
                      height:52,
                      borderRadius:14,
                      background:c.grad,
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      fontSize:"1.4rem",
                      marginBottom:14
                    }}
                  >
                    {c.icon}
                  </div>

                  <div
                    style={{
                      fontFamily:"'Plus Jakarta Sans',sans-serif",
                      fontWeight:700,
                      fontSize:"0.78rem",
                      color:"#0D9488",
                      textTransform:"uppercase",
                      letterSpacing:"0.06em",
                      marginBottom:6
                    }}
                  >
                    {c.label}
                  </div>

                  <div
                    style={{
                      fontFamily:"'Plus Jakarta Sans',sans-serif",
                      color:"#334155",
                      fontSize:"0.88rem",
                      fontWeight:500
                    }}
                  >
                    {c.val}
                  </div>

                </a>

              </ScrollReveal>

            ))}

          </div>

        </div>

      </section>


      {/* CONTACT FORM */}

      <section className="section-pad" style={{background:"white"}}>

        <div className="container">

          <div className="grid-2" style={{gap:56}}>

            <ScrollReveal>

              <h2
                style={{
                  fontFamily:"'Cormorant Garamond',serif",
                  fontSize:"clamp(2rem,4vw,2.6rem)",
                  fontWeight:700,
                  color:"#0B2545",
                  marginBottom:12
                }}
              >
                Send Us a Message
              </h2>

              <div className="divider-teal" style={{marginBottom:32}}/>

              {sent ? (

                <div
                  style={{
                    background:"linear-gradient(135deg,#F0FDF4,#DCFCE7)",
                    border:"1.5px solid rgba(22,163,74,0.3)",
                    borderRadius:18,
                    padding:"40px",
                    textAlign:"center"
                  }}
                >

                  <div style={{fontSize:"3rem",marginBottom:16}}>✅</div>

                  <h3
                    style={{
                      fontFamily:"'Cormorant Garamond',serif",
                      fontSize:"1.8rem",
                      fontWeight:700,
                      color:"#166534",
                      marginBottom:10
                    }}
                  >
                    Message Sent!
                  </h3>

                  <p
                    style={{
                      fontFamily:"'Plus Jakarta Sans',sans-serif",
                      color:"#15803D",
                      fontSize:"0.95rem",
                      lineHeight:1.7,
                      marginBottom:24
                    }}
                  >
                    Thank you for reaching out. Our team will respond within 1 business day.
                  </p>

                  <button
                    onClick={()=>setSent(false)}
                    style={{
                      background:"linear-gradient(135deg,#16A34A,#22C55E)",
                      color:"white",
                      border:"none",
                      padding:"12px 28px",
                      borderRadius:50,
                      fontFamily:"'Plus Jakarta Sans',sans-serif",
                      fontWeight:600,
                      cursor:"pointer"
                    }}
                  >
                    Send Another
                  </button>

                </div>

              ) : (

                <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:16}}>

                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>

                    <input
                      className="input-modern"
                      placeholder="Full Name *"
                      value={name}
                      onChange={e=>setName(e.target.value)}
                      required
                    />

                    <input
                      className="input-modern"
                      type="email"
                      placeholder="Email Address *"
                      value={email}
                      onChange={e=>setEmail(e.target.value)}
                      required
                    />

                  </div>

                  <input
                    className="input-modern"
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                  />

                  <textarea
                    className="input-modern"
                    placeholder="Your Message *"
                    value={message}
                    onChange={e=>setMessage(e.target.value)}
                    required
                    rows={5}
                  />

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{alignSelf:"flex-start",opacity:loading?0.7:1}}
                  >
                    {loading ? "⏳ Sending..." : "📤 Send Message"}
                  </button>

                </form>

              )}

            </ScrollReveal>

          </div>

        </div>

      </section>

      <Footer/>

    </>
  )

}