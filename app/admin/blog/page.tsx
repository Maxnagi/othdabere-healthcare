"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Blog(){

const [title,setTitle] = useState("")
const [content,setContent] = useState("")
const [image,setImage] = useState<any>(null)
const [loading,setLoading] = useState(false)

const createPost = async (e:any)=>{
e.preventDefault()

setLoading(true)

let imageUrl = ""

if(image){

const fileName = `${Date.now()}-${image.name}`

const { error } = await supabase.storage
.from("media")
.upload(fileName,image)

if(!error){

const { data } = supabase.storage
.from("media")
.getPublicUrl(fileName)

imageUrl = data.publicUrl

}

}

await supabase
.from("blog_posts")
.insert([
{
title,
content,
image:imageUrl
}
])

setTitle("")
setContent("")
setImage(null)

setLoading(false)

alert("Blog post published")

}

return(

<div className="flex">

<AdminSidebar/>

<div className="p-10 flex-1">

<h1 className="text-3xl font-bold mb-6">
Create Blog Post
</h1>

<form onSubmit={createPost} className="space-y-4">

<input
type="text"
placeholder="Post Title"
value={title}
onChange={(e)=>setTitle(e.target.value)}
className="w-full border p-3 rounded"
/>

<textarea
placeholder="Post Content"
value={content}
onChange={(e)=>setContent(e.target.value)}
className="w-full border p-3 rounded h-40"
/>

<input
type="file"
onChange={(e)=>setImage(e.target.files?.[0])}
/>

<button
className="bg-[#1F3C6D] text-white px-6 py-3 rounded"
>
{loading ? "Publishing..." : "Publish"}
</button>

</form>

</div>

</div>

)

}