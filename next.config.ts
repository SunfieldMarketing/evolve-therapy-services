import type { NextConfig } from "next";
import path from "path";

const projectRoot = "C:\\Users\\TEGAC\\.gemini\\antigravity\\scratch\\evolve-therapy-services";

const nextConfig: NextConfig = {
  distDir: path.join(projectRoot, ".next"),
  outputFileTracingRoot: projectRoot,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'evolvetherapyservices.com' },
    ],
  },
};

export default nextConfig;
