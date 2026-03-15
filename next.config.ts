import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Explicitly define no auto-redirects so no route can accidentally intercept "/"
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  },
};

export default nextConfig;
