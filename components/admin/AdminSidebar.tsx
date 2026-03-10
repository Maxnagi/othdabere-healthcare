"use client"

import Link from "next/link"

export default function AdminSidebar(){

return(

<div className="w-64 h-screen bg-[#1F3C6D] text-white p-6">

<h2 className="text-xl font-bold mb-10">
Admin Panel
</h2>

<div className="space-y-4">

<Link href="/admin">Dashboard</Link>

<Link href="/admin/contacts">
Contact Messages
</Link>

<Link href="/admin/referrals">
Referrals
</Link>

<Link href="/admin/careers">
Job Applications
</Link>

<Link href="/admin/blog">
Blog Posts
</Link>

<Link href="/admin/uploads">
Image Uploads
</Link>

<Link href="/admin/uploads">
Media Library
</Link>

</div>

</div>

)

}