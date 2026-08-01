import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/blog/iptv-login-watch-world-cup-guide",
        destination: "/blog/live-sports-streaming-setup-guide",
        permanent: true
      },
      {
        source: "/blog/world-cup-streaming-setup-guide-2026",
        destination: "/blog/live-sports-streaming-setup-guide",
        permanent: true
      },
      {
        source: "/blog/category/smart-tv-setup",
        destination: "/blog/category/smart-tv-and-apps",
        permanent: true
      },
      {
        source: "/blog/category/device-comparison",
        destination: "/blog/category/streaming-devices",
        permanent: true
      },
      {
        source: "/blog/category/provider-comparison",
        destination: "/blog/category/buyer-guides",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
