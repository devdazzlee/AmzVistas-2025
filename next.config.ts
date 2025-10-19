// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // don't fail the build on ESLint errors
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! DANGER !!
    // Allow production builds even if you have TS errors.
    // Make sure you're running `tsc --noEmit` separately if you still want type-checks.
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'three'],
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  },
};

export default nextConfig;
