import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['next-project-image-upload-testing.s3.us-east-1.amazonaws.com'],
    unoptimized: true // Add this for static export
  },
  output: 'export' // Explicitly set export mode
};

export default nextConfig;
