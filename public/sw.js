/* ===================================================
   OHQHS Main Site Service Worker  v1.0
   Scope: /  (excludes /admin — handled by admin-sw.js)
   =================================================== */

const CACHE_NAME   = "ohqhs-main-v1";
const ADMIN_SCOPE  = "/admin";

// Assets to pre-cache on install
const PRECACHE_URLS = [
  "/",
  "/about",
  "/services",
  "/contact",
  "/domiciliary-care",
  "/manifest.json",
  "/offline.html",
];

// ── Install ──────────────────────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch((err) => {
        console.warn("[SW] Pre-cache failed for some URLs", err);
      });
    })
  );
  self.skipWaiting();
});

// ── Activate ─────────────────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key.startsWith("ohqhs-main-"))
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// ── Fetch ─────────────────────────────────────────────
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Don't intercept admin routes — let admin SW handle those
  if (url.pathname.startsWith(ADMIN_SCOPE)) return;

  // Don't intercept non-GET or cross-origin
  if (event.request.method !== "GET") return;
  if (url.origin !== self.location.origin) return;

  // API routes: network-only
  if (url.pathname.startsWith("/api/")) {
    event.respondWith(fetch(event.request));
    return;
  }

  // Next.js internal routes: network-only
  if (url.pathname.startsWith("/_next/")) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) =>
        cache.match(event.request).then((cached) => {
          const fetchPromise = fetch(event.request).then((res) => {
            if (res && res.status === 200) cache.put(event.request, res.clone());
            return res;
          });
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // Pages & assets: Stale-While-Revalidate
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(event.request).then((cached) => {
        const fetchPromise = fetch(event.request)
          .then((res) => {
            if (res && res.status === 200) cache.put(event.request, res.clone());
            return res;
          })
          .catch(() => {
            // Offline fallback for navigation requests
            if (event.request.mode === "navigate") {
              return cache.match("/offline.html") || cache.match("/");
            }
          });
        return cached || fetchPromise;
      })
    )
  );
});

// ── Push Notifications (future use) ──────────────────
self.addEventListener("push", (event) => {
  if (!event.data) return;
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || "OHQHS", {
      body:    data.body  || "You have a new notification.",
      icon:    "/icons/icon-192.png",
      badge:   "/icons/icon-72.png",
      data:    { url: data.url || "/" },
    })
  );
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
