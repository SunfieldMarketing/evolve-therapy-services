import type { NextConfig } from "next";
import path from "path";

// Fix for Windows junction-point path corruption when running locally.
// When the workspace is a junction/symlink, Next.js resolves through it and
// concatenates the symlink target onto the working directory, creating a
// broken double-path like C:\...\D:\... for the .next directory.
// We pin the absolute path only in local dev; Vercel/CI use their own paths.
const isVercel = Boolean(process.env.VERCEL);
const projectRoot = "C:\\Users\\TEGAC\\.gemini\\antigravity\\scratch\\evolve-therapy-services";

const nextConfig: NextConfig = {
  ...(isVercel ? {} : {
    distDir: path.join(projectRoot, ".next"),
    outputFileTracingRoot: projectRoot,
  }),
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'evolvetherapyservices.com' },
    ],
  },
};

export default nextConfig;
