import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Othdabere H.Q. Healthcare Services Ltd | Professional Domiciliary Care",
  description: "Professional domiciliary care services across the UK and Ghana. Compassionate, personalised home care delivered by trained professionals.",
  icons: { icon: "/logo.png" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
