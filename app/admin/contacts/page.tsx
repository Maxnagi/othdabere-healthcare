"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Contacts(){

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

<div className="flex">

<AdminSidebar/>

<div className="p-10 flex-1">

<h1 className="text-3xl font-bold mb-8">
Contact Messages
</h1>

<table className="w-full border">

<thead>

<tr className="bg-gray-100">

<th className="border p-3">Name</th>
<th className="border p-3">Email</th>
<th className="border p-3">Message</th>

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

</div>

)

}