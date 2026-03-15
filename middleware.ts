import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Only protect /admin/* routes — all public pages are freely accessible
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow everything outside /admin
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next()
  }

  // For admin routes, let the page-level auth check (supabase.auth.getUser)
  // handle redirection to /login — we don't block here server-side
  // because we rely on client-side Supabase auth.
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Only run middleware on admin routes — skip _next, api, static assets
    "/admin/:path*",
  ],
}
