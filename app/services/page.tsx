import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

export default function Services(){

return(

<>
<Navbar/>

{/* HERO */}

<section className="bg-[#F6F9FC] py-20">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-4">
Our Care Services
</h1>

<p className="text-gray-600 max-w-2xl mx-auto">
Othdabere High Quality Healthcare Services provides professional
domiciliary care designed to support individuals to live safely,
independently, and comfortably in their homes.
</p>

</div>

</section>

{/* SERVICES GRID */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center text-[#1F3C6D] mb-12">
Our Core Services
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="p-8 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">Personal Care</h3>
<p>
Assistance with bathing, dressing, grooming and
daily hygiene to ensure comfort and dignity.
</p>
</div>

<div className="p-8 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">Medication Support</h3>
<p>
Helping individuals manage medications safely,
including reminders and prescription support.
</p>
</div>

<div className="p-8 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">Meal Preparation</h3>
<p>
Preparing healthy and nutritious meals that
support wellbeing and dietary needs.
</p>
</div>

<div className="p-8 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">Household Support</h3>
<p>
Light housekeeping, laundry, shopping and home
organisation to maintain a safe environment.
</p>
</div>

<div className="p-8 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">Companionship</h3>
<p>
Providing emotional support, conversation and
assistance with community activities.
</p>
</div>

<div className="p-8 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">Specialised Care</h3>
<p>
Support for individuals with disabilities,
dementia, mobility issues and post-hospital care.
</p>
</div>

</div>

</div>

</section>

{/* DETAILED CARE SERVICES */}

<section className="bg-[#F6F9FC] py-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div>

<h2 className="text-3xl font-bold text-[#1F3C6D] mb-6">
Domiciliary Care Support
</h2>

<p className="text-gray-600 mb-4">
Our domiciliary care services allow individuals to
receive professional support within the comfort
of their homes while maintaining independence.
</p>

<p className="text-gray-600 mb-4">
Care plans are personalised to meet the specific
needs of each client, ensuring dignity,
safety and wellbeing.
</p>

<p className="text-gray-600">
Our carers work closely with families to ensure
the highest quality care is delivered.
</p>

</div>

<div>

<img
src="/images/homecare2.jpg"
className="rounded-lg shadow"
/>

</div>

</div>

</section>

{/* WHY CHOOSE US */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center text-[#1F3C6D] mb-12">
Why Choose Our Care Services
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="text-center">
<h3 className="font-semibold text-xl mb-3">
Experienced Care Team
</h3>
<p>
Our trained carers provide compassionate and
professional care services.
</p>
</div>

<div className="text-center">
<h3 className="font-semibold text-xl mb-3">
Personalised Care Plans
</h3>
<p>
Every individual receives a care plan tailored
to their specific needs.
</p>
</div>

<div className="text-center">
<h3 className="font-semibold text-xl mb-3">
Reliable Support
</h3>
<p>
We are committed to providing dependable care
for families and communities.
</p>
</div>

</div>

</div>

</section>

<CTA/>

<Footer/>

</>

)

}