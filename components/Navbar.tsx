import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-5">

        <div className="flex items-center gap-2">
          <img src="/logo.png" className="h-10"/>
          <span className="font-bold text-[#1F3C6D]">
            Othdabere H.Q. Healthcare Services Ltd
          </span>
        </div>

        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/domiciliary-care">Care</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>

      </div>
    </nav>
  )
}