"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Admin(){

const [messages,setMessages] = useState<any[]>([])

useEffect(()=>{

fetchMessages()

},[])

async function fetchMessages(){

const { data } = await supabase
.from("contact_messages")
.select("*")
.order("created_at",{ascending:false})

setMessages(data || [])

}

return(

<div className="p-10">

<h1 className="text-3xl font-bold mb-10">
Admin Dashboard
</h1>

<h2 className="text-xl font-semibold mb-4">
Contact Messages
</h2>

<table className="w-full border">

<thead>

<tr className="bg-gray-100">

<th className="p-3 border">Name</th>
<th className="p-3 border">Email</th>
<th className="p-3 border">Message</th>

</tr>

</thead>

<tbody>

{messages.map((msg,index)=>(

<tr key={index}>

<td className="border p-3">{msg.name}</td>
<td className="border p-3">{msg.email}</td>
<td className="border p-3">{msg.message}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}