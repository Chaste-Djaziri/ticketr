import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { hostname: "coordinated-dachshund-896.convex.cloud", protocol: "https" },
      { hostname: "valuable-puma-422.convex.cloud", protocol: "https" },
      { hostname: "outgoing-civet-695.convex.cloud", protocol: "https" },
    ],
  },
};

export default nextConfig;
