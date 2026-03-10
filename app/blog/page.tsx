import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Blog(){

return(

<>
<Navbar/>

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-10">
Healthcare Insights
</h1>

<div className="grid md:grid-cols-3 gap-10">

<div className="shadow rounded-lg p-6">

<img
src="/images/blog1.jpg"
className="rounded mb-4"
/>

<h3 className="font-bold text-lg">
Benefits of Domiciliary Care
</h3>

<p className="text-gray-600 mt-2">
Why home care is becoming the preferred option
for many families.
</p>

</div>

<div className="shadow rounded-lg p-6">

<img
src="/images/blog2.jpg"
className="rounded mb-4"
/>

<h3 className="font-bold text-lg">
Supporting Elderly Independence
</h3>

<p className="text-gray-600 mt-2">
Helping older adults maintain independence
within their homes.
</p>

</div>

<div className="shadow rounded-lg p-6">

<img
src="/images/blog3.jpg"
className="rounded mb-4"
/>

<h3 className="font-bold text-lg">
Choosing the Right Care Provider
</h3>

<p className="text-gray-600 mt-2">
Important things families should consider
when selecting care services.
</p>

</div>

</div>

</div>

</section>

<Footer/>

</>

)

}