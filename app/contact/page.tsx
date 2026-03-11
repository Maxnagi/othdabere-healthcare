"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollReveal from "@/components/ScrollReveal"
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

    try{

      const res = await fetch("/api/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message
        })
      })

      const data = await res.json()

      if(!res.ok){
        alert(data.error || "Something went wrong")
        return
      }

      setSent(true)

      setName("")
      setEmail("")
      setPhone("")
      setMessage("")

    }catch(err){

      console.error(err)
      alert("Unexpected error")

    }finally{

      setLoading(false)

    }

  }

  return (

    <>
      <Navbar/>

      <section className="section-pad">

        <div className="container">

          <h2>Send Us a Message</h2>

          {sent ? (

            <div>
              <h3>✅ Message Sent!</h3>
              <p>We will respond within 1 business day.</p>
              <button onClick={()=>setSent(false)}>
                Send Another
              </button>
            </div>

          ) : (

            <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"16px"}}>

              <input
                placeholder="Full Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
              />

              <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                required
              />

              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          )}

        </div>

      </section>

      <Footer/>

    </>
  )
}