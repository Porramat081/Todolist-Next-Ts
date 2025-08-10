import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // Dangerously allow production builds with ESLint errors
  },
};

export default nextConfig;
