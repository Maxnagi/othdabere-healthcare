import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Referral(){

return(

<>
<Navbar/>

<section className="py-20">

<div className="max-w-4xl mx-auto px-6">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-6">
Care Referral
</h1>

<p className="mb-10">
If you would like to refer someone who may benefit from our care
services, please complete the form below.
</p>

<form className="space-y-4">

<input
type="text"
placeholder="Referrer's Name"
className="w-full border p-3 rounded"
/>

<input
type="email"
placeholder="Referrer's Email"
className="w-full border p-3 rounded"
/>

<input
type="text"
placeholder="Person needing care"
className="w-full border p-3 rounded"
/>

<textarea
placeholder="Care requirements"
className="w-full border p-3 rounded"
/>

<button className="bg-[#6DBE45] text-white px-6 py-3 rounded">
Submit Referral
</button>

</form>

</div>

</section>

<Footer/>

</>

)

}