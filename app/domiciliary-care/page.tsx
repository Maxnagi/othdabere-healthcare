import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import CTA from "@/components/CTA"

export default function DomiciliaryCare(){

return(

<>
<Navbar/>

{/* HERO */}

<section className="bg-[#F6F9FC] py-20">

<div className="max-w-7xl mx-auto px-6 text-center">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-4">
Domiciliary Care Services
</h1>

<p className="text-gray-600 max-w-2xl mx-auto">
Othdabere High Quality Healthcare Services provides professional
domiciliary care that enables individuals to receive high-quality
support within the comfort of their own homes.
</p>

</div>

</section>

{/* WHAT IS DOMICILIARY CARE */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div>

<h2 className="text-3xl font-bold text-[#1F3C6D] mb-6">
What is Domiciliary Care?
</h2>

<p className="text-gray-600 mb-4">
Domiciliary care, also known as home care, is professional
support provided to individuals in their own homes to help
them maintain independence and quality of life.
</p>

<p className="text-gray-600 mb-4">
This type of care allows individuals to continue living in
familiar surroundings while receiving assistance with daily
activities and personal care.
</p>

<p className="text-gray-600">
Our carers provide personalised support tailored to each
individual's needs.
</p>

</div>

<div>

<img
src="/images/homecare1.jpg"
className="rounded-lg shadow"
/>

</div>

</div>

</section>

{/* WHO OUR CARE IS FOR */}

<section className="bg-[#F6F9FC] py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center text-[#1F3C6D] mb-12">
Who Our Care Supports
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="p-6 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">
Elderly Individuals
</h3>
<p>
Helping older adults maintain independence and
receive assistance with daily living.
</p>
</div>

<div className="p-6 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">
People with Disabilities
</h3>
<p>
Providing personalised support for individuals
living with physical or learning disabilities.
</p>
</div>

<div className="p-6 shadow rounded-lg">
<h3 className="font-bold text-xl mb-3">
Recovery After Illness
</h3>
<p>
Supporting individuals recovering from hospital
stays or medical treatment.
</p>
</div>

</div>

</div>

</section>

{/* SERVICES PROVIDED */}

<section className="py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center text-[#1F3C6D] mb-12">
Services Included in Domiciliary Care
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div>
<h3 className="font-semibold text-lg mb-2">
Personal Care
</h3>
<p>
Bathing, dressing, grooming and personal hygiene
support delivered with dignity.
</p>
</div>

<div>
<h3 className="font-semibold text-lg mb-2">
Medication Support
</h3>
<p>
Helping clients manage medications and collect
prescriptions safely.
</p>
</div>

<div>
<h3 className="font-semibold text-lg mb-2">
Household Support
</h3>
<p>
Cleaning, shopping, laundry and preparing meals.
</p>
</div>

<div>
<h3 className="font-semibold text-lg mb-2">
Companionship
</h3>
<p>
Providing emotional support and social interaction
to improve wellbeing.
</p>
</div>

<div>
<h3 className="font-semibold text-lg mb-2">
Mobility Assistance
</h3>
<p>
Helping individuals move safely within their homes
and communities.
</p>
</div>

<div>
<h3 className="font-semibold text-lg mb-2">
Specialised Care
</h3>
<p>
Support for dementia, disabilities and long-term
health conditions.
</p>
</div>

</div>

</div>

</section>

{/* BENEFITS */}

<section className="bg-[#F6F9FC] py-20">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-3xl font-bold text-center text-[#1F3C6D] mb-12">
Benefits of Home Care
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div>
<h3 className="font-semibold text-xl mb-2">
Independence
</h3>
<p>
Individuals remain in their own homes while
receiving professional support.
</p>
</div>

<div>
<h3 className="font-semibold text-xl mb-2">
Comfort
</h3>
<p>
Receiving care in familiar surroundings improves
emotional wellbeing.
</p>
</div>

<div>
<h3 className="font-semibold text-xl mb-2">
Personalised Care
</h3>
<p>
Care plans are tailored to meet individual needs
and preferences.
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