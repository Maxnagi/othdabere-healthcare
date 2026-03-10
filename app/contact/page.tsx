"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export default function Contact(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [message,setMessage] = useState("")
const [loading,setLoading] = useState(false)

const handleSubmit = async (e:any)=>{
e.preventDefault()

setLoading(true)

await supabase
.from("contact_messages")
.insert([
{
name,
email,
message
}
])

setLoading(false)

alert("Message sent successfully")

setName("")
setEmail("")
setMessage("")
}

return(

<>
<Navbar/>

{/* HERO */}

<section className="bg-[#F6F9FC] py-20">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-4">
Contact Us
</h1>

<p className="text-gray-600">
We are here to support you. Contact our team to learn more
about our healthcare and domiciliary care services.
</p>

</div>

</section>

{/* CONTACT DETAILS */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

<div>

<h2 className="text-2xl font-bold mb-6">
Get In Touch
</h2>

<p className="mb-4">
If you have any questions about our services or need care
support, please contact us.
</p>

<p className="mb-2">
📞 <strong>Phone:</strong> +44 7588 160799
</p>

<p className="mb-2">
📧 <strong>Email:</strong> othdaberehealthcare@gmail.com
</p>

<p>
📍 <strong>Location:</strong> United Kingdom & Ghana
</p>

</div>

{/* CONTACT FORM */}

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border p-3 rounded"
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded"
/>

<textarea
placeholder="Your Message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full border p-3 rounded h-32"
/>

<button
type="submit"
className="bg-[#1F3C6D] text-white px-6 py-3 rounded"
>
{loading ? "Sending..." : "Send Message"}
</button>

</form>

</div>

</section>

{/* MAP SECTION */}

<section className="bg-[#F6F9FC] py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-2xl font-bold text-center mb-10">
Our Service Areas
</h2>

<div className="w-full h-[400px]">

<iframe
className="w-full h-full rounded-lg"
src="https://www.google.com/maps?q=London&output=embed"
/>

</div>

</div>

</section>

<Footer/>

</>

)

}