import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Explicitly allow home and all public pages — never intercept them
  const { pathname } = request.nextUrl

  // Never intercept the home page or any public route
  if (
    pathname === "/" ||
    pathname.startsWith("/about") ||
    pathname.startsWith("/services") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/gallery") ||
    pathname.startsWith("/counseling") ||
    pathname.startsWith("/blog") ||
    pathname.startsWith("/careers") ||
    pathname.startsWith("/faqs") ||
    pathname.startsWith("/domiciliary-care") ||
    pathname.startsWith("/referral") ||
    pathname.startsWith("/accessibility") ||
    pathname.startsWith("/privacy-policy") ||
    pathname.startsWith("/terms-of-service") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  // Only admin routes reach here — let page-level auth handle them
  return NextResponse.next()
}

export const config = {
  // Only run middleware on admin routes — keeps all public routes completely untouched
  matcher: ["/admin/:path*"],
}
