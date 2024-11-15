import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.freshivores.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'freshivores.com',
        pathname: '/**',
      }
    ],
  }
};

export default nextConfig;
