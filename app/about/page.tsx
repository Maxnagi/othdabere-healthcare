import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function About(){

return(

<>
<Navbar/>

<section className="py-20 bg-white">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

<div>

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-6">
About Othdabere Healthcare
</h1>

<p className="text-gray-600 mb-4">
Othdabere High Quality Healthcare Services Ltd is a domiciliary care
agency committed to delivering compassionate and professional
home care services.
</p>

<p className="text-gray-600 mb-4">
Our goal is to empower individuals to maintain their independence,
dignity, and quality of life while receiving support within the
comfort of their homes.
</p>

<p className="text-gray-600">
We work closely with families and communities to provide reliable,
person-centred care that meets each individual's unique needs.
</p>

</div>

<div>
<img src="/images/about.jpg" className="rounded-lg shadow-lg"/>
</div>

</div>

</section>

<section className="bg-[#F6F9FC] py-20">

<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

<div>
<h3 className="font-bold text-xl mb-3 text-[#1F3C6D]">Our Mission</h3>
<p>
To provide personalised high-quality domiciliary care that enables
individuals to live safely and independently in their homes.
</p>
</div>

<div>
<h3 className="font-bold text-xl mb-3 text-[#1F3C6D]">Our Vision</h3>
<p>
To be a trusted provider of compassionate care that improves the
wellbeing and independence of vulnerable individuals.
</p>
</div>

<div>
<h3 className="font-bold text-xl mb-3 text-[#1F3C6D]">Our Values</h3>
<p>
Compassion, dignity, respect, professionalism, and commitment to
excellent care.
</p>
</div>

</div>

</section>

<Footer/>

</>

)

}