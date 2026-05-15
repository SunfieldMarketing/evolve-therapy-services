import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'evolvetherapyservices.com' },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/tina-build/index.html',
      },
      {
        source: '/admin/:path*',
        destination: '/tina-build/index.html',
      },
    ];
  },
};

export default nextConfig;
