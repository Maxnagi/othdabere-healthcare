"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export default function Referral(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [person,setPerson] = useState("")
const [care,setCare] = useState("")

const handleSubmit = async (e:any)=>{
e.preventDefault()

await supabase
.from("referrals")
.insert([
{
referrer_name:name,
email:email,
person_needing_care:person,
care_requirements:care
}
])

alert("Referral submitted successfully")

setName("")
setEmail("")
setPerson("")
setCare("")
}

return(

<>
<Navbar/>

<section className="py-20">

<div className="max-w-4xl mx-auto px-6">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-6">
Care Referral
</h1>

<p className="mb-10">
If you would like to refer someone who may benefit from our care
services, please complete the form below.
</p>

<form onSubmit={handleSubmit} className="space-y-4">

<input
type="text"
placeholder="Referrer's Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="w-full border p-3 rounded"
/>

<input
type="email"
placeholder="Referrer's Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded"
/>

<input
type="text"
placeholder="Person needing care"
value={person}
onChange={(e)=>setPerson(e.target.value)}
className="w-full border p-3 rounded"
/>

<textarea
placeholder="Care requirements"
value={care}
onChange={(e)=>setCare(e.target.value)}
className="w-full border p-3 rounded"
/>

<button
type="submit"
className="bg-[#6DBE45] text-white px-6 py-3 rounded"
>
Submit Referral
</button>

</form>

</div>

</section>

<Footer/>

</>

)

}