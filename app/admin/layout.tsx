import type { Metadata, Viewport } from "next";
import AdminPWAInstall from "@/components/admin/AdminPWAInstall";

export const viewport: Viewport = {
  themeColor: "#0B2545",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "OHQHS Admin Dashboard",
  description: "Admin management dashboard for Othdabere High Quality Healthcare Services.",
  manifest: "/admin-manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "OHQHS Admin",
  },
  icons: {
    icon: [
      { url: "/icons/admin-icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/admin-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/admin-icon-152.png", sizes: "152x152", type: "image/png" },
    ],
    shortcut: "/icons/admin-icon-192.png",
  },
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <AdminPWAInstall />
    </>
  );
}
