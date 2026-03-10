"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Careers(){

const [applications,setApplications] = useState<any[]>([])

useEffect(()=>{
fetchApplications()
},[])

async function fetchApplications(){

const { data } = await supabase
.from("job_applications")
.select("*")
.order("created_at",{ascending:false})

setApplications(data || [])

}

return(

<div className="flex">

<AdminSidebar/>

<div className="p-10 flex-1">

<h1 className="text-3xl font-bold mb-8">
Job Applications
</h1>

<table className="w-full border">

<thead>

<tr className="bg-gray-100">

<th className="border p-3">Name</th>
<th className="border p-3">Email</th>
<th className="border p-3">Phone</th>

</tr>

</thead>

<tbody>

{applications.map((app,index)=>(

<tr key={index}>

<td className="border p-3">{app.name}</td>
<td className="border p-3">{app.email}</td>
<td className="border p-3">{app.phone}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}