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
      <head>
        {/*
          SW CACHE RESET — runs before anything else on every page load.
          Unregisters any stale service worker and wipes old caches that
          were serving wrong pages (e.g. Terms of Service at /).
          The new sw.js (v2) re-registers cleanly via PWAInstallPrompt.
        */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            if (!('serviceWorker' in navigator)) return;
            navigator.serviceWorker.getRegistrations().then(function(regs) {
              regs.forEach(function(reg) {
                var scope = reg.scope || '';
                if (!scope.includes('/admin')) reg.unregister();
              });
            });
            if ('caches' in window) {
              caches.keys().then(function(keys) {
                keys.forEach(function(key) {
                  if (key.startsWith('ohqhs-') && key !== 'ohqhs-v2') {
                    caches.delete(key);
                  }
                });
              });
            }
          })();
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
