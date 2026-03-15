import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Middleware ONLY runs on /admin/* (see matcher below).
// All public routes are completely untouched by this file.
export function middleware(request: NextRequest) {
  // Pass everything through — page-level auth handles admin access checks.
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"],
}
