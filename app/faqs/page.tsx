"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function FAQs(){

const [open,setOpen] = useState<number | null>(null)

const faqs = [

{
question:"What is domiciliary care?",
answer:"Domiciliary care is professional care provided in a person's home to help them maintain independence and quality of life."
},

{
question:"Who can receive home care services?",
answer:"Our services support elderly individuals, people with disabilities, and individuals recovering from illness or surgery."
},

{
question:"How often can care be provided?",
answer:"Care can range from a few hours per week to daily visits or full-time support."
},

{
question:"How do I arrange care services?",
answer:"You can contact our team through our website or phone number to discuss your care needs."
}

]

return(

<>
<Navbar/>

<section className="py-20">

<div className="max-w-4xl mx-auto px-6">

<h1 className="text-4xl font-bold text-[#1F3C6D] mb-10 text-center">
Frequently Asked Questions
</h1>

{faqs.map((faq,index)=>(
<div key={index} className="border-b py-4">

<button
onClick={()=>setOpen(open===index?null:index)}
className="w-full text-left font-semibold"
>

{faq.question}

</button>

{open===index && (
<p className="mt-3 text-gray-600">
{faq.answer}
</p>
)}

</div>
))}

</div>

</section>

<Footer/>
</>

)

}