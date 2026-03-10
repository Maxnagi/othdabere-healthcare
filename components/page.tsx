import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs"
import CareProcess from "@/components/CareProcess"
import Stats from "@/components/Stats"
import Testimonials from "@/components/Testimonials"
import Gallery from "@/components/Gallery"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <CareProcess />
      <Stats />
      <Testimonials />
      <Gallery />
      <CTA />
      <Footer />
    </>
  )
}
