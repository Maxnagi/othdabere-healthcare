"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabaseClient"
import { useRouter } from "next/navigation"

export default function Login(){

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = async (e:any)=>{
e.preventDefault()

const { error } = await supabase.auth.signInWithPassword({
email,
password
})

if(error){
alert(error.message)
}else{
router.push("/admin")
}

}

return(

<div className="min-h-screen flex items-center justify-center bg-gray-100">

<form
onSubmit={handleLogin}
className="bg-white p-8 rounded shadow w-96 space-y-4"
>

<h1 className="text-2xl font-bold text-center">
Admin Login
</h1>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
className="w-full border p-3 rounded"
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
className="w-full border p-3 rounded"
/>

<button
type="submit"
className="w-full bg-[#1F3C6D] text-white p-3 rounded"
>
Login
</button>

</form>

</div>

)

}