"use client"

import { useEffect } from "react"

/**
 * Runs once on the home page (client-side) and clears any stale Supabase
 * auth tokens/PKCE verifiers that could cause automatic redirects away
 * from the public homepage. Safe to use — only removes auth-related keys,
 * never affects page content or user data.
 */
export default function AuthCleaner() {
  useEffect(() => {
    try {
      // Remove Supabase PKCE code verifier (causes redirect after OAuth/magic link)
      const keysToRemove: string[] = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && (
          key.includes("supabase") ||
          key.includes("sb-") ||
          key.includes("pkce") ||
          key.includes("code_verifier") ||
          key.includes("auth-token-code-verifier")
        )) {
          keysToRemove.push(key)
        }
      }
      keysToRemove.forEach(key => localStorage.removeItem(key))

      // Also clear any Supabase hash fragments from the URL
      // (e.g. #access_token=... left by OAuth/magic link flows)
      if (typeof window !== "undefined" && window.location.hash && (
        window.location.hash.includes("access_token") ||
        window.location.hash.includes("refresh_token") ||
        window.location.hash.includes("error_description")
      )) {
        window.history.replaceState(null, "", window.location.pathname)
      }
    } catch {
      // localStorage may be blocked in some environments — safe to ignore
    }
  }, [])

  return null
}
