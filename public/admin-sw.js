/* ===================================================
   OHQHS Admin Dashboard Service Worker  v1.0
   Scope: /admin  (registered only on admin pages)
   Strategy: Network-first (admin needs fresh data)
   =================================================== */

const ADMIN_CACHE = "ohqhs-admin-v1";

const ADMIN_PRECACHE = [
  "/admin",
  "/admin-manifest.json",
  "/admin-offline.html",
];

// ── Install ──────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(ADMIN_CACHE).then((cache) =>
      cache.addAll(ADMIN_PRECACHE).catch((err) =>
        console.warn("[Admin SW] Pre-cache partial fail", err)
      )
    )
  );
  self.skipWaiting();
});

// ── Activate ─────────────────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== ADMIN_CACHE && k.startsWith("ohqhs-admin-"))
          .map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch — Network First ─────────────────────────────
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET") return;
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(event.request)
      .then((res) => {
        // Cache successful responses for offline fallback
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(ADMIN_CACHE).then((cache) => cache.put(event.request, clone));
        }
        return res;
      })
      .catch(() =>
        caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === "navigate") {
            return caches.match("/admin-offline.html");
          }
        })
      )
  );
});
