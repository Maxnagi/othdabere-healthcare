"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Admin(){

const router = useRouter()

useEffect(()=>{
checkUser()
},[])

async function checkUser(){

const { data } = await supabase.auth.getUser()

if(!data.user){
router.push("/login")
}

}

const logout = async ()=>{

await supabase.auth.signOut()
router.push("/login")

}

return(

<div className="flex">

<AdminSidebar/>

<div className="p-10 flex-1">

<div className="flex justify-between mb-10">

<h1 className="text-3xl font-bold">
Admin Dashboard
</h1>

<button
onClick={logout}
className="bg-red-500 text-white px-4 py-2 rounded"
>
Logout
</button>

</div>

<div className="grid md:grid-cols-4 gap-6">

<Link href="/admin/contacts">
<div className="p-6 shadow rounded hover:shadow-lg cursor-pointer transition">
<h2 className="text-xl font-bold">Contacts</h2>
<p>View contact messages</p>
</div>
</Link>

<Link href="/admin/referrals">
<div className="p-6 shadow rounded hover:shadow-lg cursor-pointer transition">
<h2 className="text-xl font-bold">Referrals</h2>
<p>Manage referrals</p>
</div>
</Link>

<Link href="/admin/careers">
<div className="p-6 shadow rounded hover:shadow-lg cursor-pointer transition">
<h2 className="text-xl font-bold">Careers</h2>
<p>Job applications</p>
</div>
</Link>

<Link href="/admin/blog">
<div className="p-6 shadow rounded hover:shadow-lg cursor-pointer transition">
<h2 className="text-xl font-bold">Blog</h2>
<p>Create blog posts</p>
</div>
</Link>

</div>

</div>

</div>

)

}