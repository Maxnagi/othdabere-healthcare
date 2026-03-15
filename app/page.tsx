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
import AuthCleaner from "@/components/AuthCleaner"

export default function Home() {
  return (
    <>
      {/* Clears any stale Supabase auth tokens/PKCE verifiers that
          could cause automatic redirects away from this page */}
      <AuthCleaner />
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
