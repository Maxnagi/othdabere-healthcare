/* =====================================================
   OHQHS Main Service Worker  v2.0
   Scope: /   (admin is handled by admin-sw.js)

   STRATEGY:
   - HTML pages   → Network-first (always fresh, cache only for offline)
   - Static assets → Stale-while-revalidate (fast, background refresh)
   ===================================================== */

const CACHE = "ohqhs-v2"; // ← bump this on every deploy to bust stale caches

const PRECACHE = [
  "/offline.html",
];

// ── Install ──────────────────────────────────────────
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      c.addAll(PRECACHE).catch(() => {})
    )
  );
  self.skipWaiting();
});

// ── Activate — wipe ALL old ohqhs caches ────────────
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k.startsWith("ohqhs-") && k !== CACHE)
          .map((k) => caches.delete(k))
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

  // ── HTML navigation → Network-first ─────────────
  // Always fetch fresh HTML from the server.
  // Only fall back to offline page if the network fails.
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() =>
          caches.match(e.request).then(
            (cached) => cached || caches.match("/offline.html")
          )
        )
    );
    return;
  }

  // ── Static assets (JS, CSS, images) → Stale-while-revalidate ──
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(e.request).then((cached) => {
        const network = fetch(e.request)
          .then((res) => {
            if (res && res.status === 200) cache.put(e.request, res.clone());
            return res;
          })
          .catch(() => undefined);
        return cached || network;
      })
    )
  );
});
