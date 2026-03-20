/* =====================================================
   OHQHS Main Service Worker  v1.0
   Scope: /   (admin is handled by admin-sw.js)
   ===================================================== */

const CACHE = "ohqhs-v1";

const PRECACHE = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/domiciliary-care",
  "/offline.html",
];

// ── Install ──────────────────────────────────────────
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      c.addAll(PRECACHE).catch(() => {}) // non-fatal if some fail
    )
  );
  self.skipWaiting();
});

// ── Activate — clean old caches ─────────────────────
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE && k.startsWith("ohqhs-")).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch ────────────────────────────────────────────
self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);

  // Let admin SW handle admin routes
  if (url.pathname.startsWith("/admin")) return;
  // Only handle same-origin GET
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  // Network-only for API routes
  if (url.pathname.startsWith("/api/")) return;

  // Stale-while-revalidate for everything else
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(e.request).then((cached) => {
        const network = fetch(e.request)
          .then((res) => {
            if (res && res.status === 200) cache.put(e.request, res.clone());
            return res;
          })
          .catch(() =>
            e.request.mode === "navigate"
              ? cache.match("/offline.html")
              : undefined
          );
        return cached || network;
      })
    )
  );
});
