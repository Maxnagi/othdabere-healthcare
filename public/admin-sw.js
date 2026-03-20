/* =====================================================
   OHQHS Admin Service Worker  v1.0
   Scope: /admin  — network-first (always fresh data)
   ===================================================== */

const CACHE = "ohqhs-admin-v1";

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) =>
      c.addAll(["/admin", "/admin-offline.html"]).catch(() => {})
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE && k.startsWith("ohqhs-admin-")).map((k) => caches.delete(k))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;

  // Network-first: try live, fall back to cache
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        if (res && res.status === 200) {
          caches.open(CACHE).then((c) => c.put(e.request, res.clone()));
        }
        return res;
      })
      .catch(() =>
        caches.match(e.request).then(
          (cached) =>
            cached ||
            (e.request.mode === "navigate"
              ? caches.match("/admin-offline.html")
              : undefined)
        )
      )
  );
});
