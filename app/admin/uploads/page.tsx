"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import AdminSidebar from "@/components/admin/AdminSidebar"

export default function Uploads(){

const [file,setFile] = useState<any>(null)
const [imageUrl,setImageUrl] = useState("")

const uploadImage = async (e:any)=>{
e.preventDefault()

if(!file) return

const fileName = `${Date.now()}-${file.name}`

const { data,error } = await supabase.storage
.from("media")
.upload(fileName,file)

if(error){
alert("Upload failed")
return
}

const { data:publicUrl } = supabase.storage
.from("media")
.getPublicUrl(fileName)

setImageUrl(publicUrl.publicUrl)

alert("Image uploaded successfully")

}

return(

<div className="flex">

<AdminSidebar/>

<div className="p-10 flex-1">

<h1 className="text-3xl font-bold mb-10">
Media Library
</h1>

<form onSubmit={uploadImage} className="space-y-4">

<input
type="file"
onChange={(e)=>setFile(e.target.files?.[0])}
/>

<button
type="submit"
className="bg-[#1F3C6D] text-white px-6 py-3 rounded"
>
Upload Image
</button>

</form>

{imageUrl && (

<div className="mt-10">

<p className="mb-3 font-semibold">
Uploaded Image:
</p>

<img
src={imageUrl}
className="w-64 rounded shadow"
/>

<p className="mt-4 text-sm text-gray-600">
Copy this URL for blog posts or pages:
</p>

<input
value={imageUrl}
readOnly
className="w-full border p-2 mt-2"
/>

</div>

)}

</div>

</div>

)

}