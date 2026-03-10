"use client"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { supabase } from "@/lib/supabaseClient"
import { useState } from "react"

export default function Careers(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [phone,setPhone] = useState("")
const [message,setMessage] = useState("")
const [file,setFile] = useState<any>(null)

const handleSubmit = async (e:any)=>{
e.preventDefault()

let cvUrl = ""

if(file){

const { data,error } = await supabase.storage
.from("cv")
.upload(`applications/${Date.now()}-${file.name}`,file)

if(data){
cvUrl = data.path
}

}

await supabase
.from("job_applications")
.insert([{
name,
email,
phone,
message,
cv:cvUrl
}])

alert("Application submitted successfully")

setName("")
setEmail("")
setPhone("")
setMessage("")
}

return(

<>
<Navbar/>

<section className="py-20">

<div className="max-w-4xl mx-auto px-6">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-6">
Careers
</h1>

<p className="mb-10 text-gray-600">
Join our team of compassionate caregivers and help
make a difference in people's lives.
</p>

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
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded"
/>

<input
type="text"
placeholder="Phone Number"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="w-full border p-3 rounded"
/>

<textarea
placeholder="Tell us about yourself"
value={message}
onChange={(e)=>setMessage(e.target.value)}
className="w-full border p-3 rounded"
/>

<input
type="file"
onChange={(e)=>setFile(e.target.files?.[0])}
className="w-full"
/>

<button
type="submit"
className="bg-[#6DBE45] text-white px-6 py-3 rounded"
>
Submit Application
</button>

</form>

</div>

</section>

<Footer/>

</>

)

}