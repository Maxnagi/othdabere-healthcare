"use client"

import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Referrals(){

const [referrals,setReferrals] = useState<any[]>([])

useEffect(()=>{
fetchReferrals()
},[])

async function fetchReferrals(){

const { data } = await supabase
.from("referrals")
.select("*")
.order("created_at",{ascending:false})

setReferrals(data || [])

}

return(

<div className="flex">

<AdminSidebar/>

<div className="p-10 flex-1">

<h1 className="text-3xl font-bold mb-6">
Referrals
</h1>

<table className="w-full border">

<thead>

<tr className="bg-gray-100">

<th className="border p-3">Referrer</th>
<th className="border p-3">Email</th>
<th className="border p-3">Person Needing Care</th>

</tr>

</thead>

<tbody>

{referrals.map((r,index)=>(

<tr key={index}>

<td className="border p-3">{r.referrer_name}</td>
<td className="border p-3">{r.email}</td>
<td className="border p-3">{r.person_needing_care}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}