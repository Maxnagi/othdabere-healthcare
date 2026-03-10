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