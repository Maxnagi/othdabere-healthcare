import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function BlogPage(){

const { data:posts } = await supabase
.from("blog_posts")
.select("*")
.order("created_at",{ascending:false})

return(

<>
<Navbar/>

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-10">
Healthcare Blog
</h1>

<div className="grid md:grid-cols-3 gap-10">

{posts?.map((post:any)=>(

<div key={post.id} className="shadow rounded-lg overflow-hidden">

{post.image && (
<img
src={post.image}
className="w-full h-48 object-cover"
/>
)}

<div className="p-6">

<h2 className="text-xl font-bold mb-2">
{post.title}
</h2>

<p className="text-gray-600">
{post.content}
</p>

</div>

</div>

))}

</div>

</div>

</section>

<Footer/>

</>

)

}