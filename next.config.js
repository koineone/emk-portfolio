/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable ESLint during builds for faster deployment
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Disable TypeScript checking during builds for faster deployment
    ignoreBuildErrors: true,
  },
  experimental: {
    mdxRs: true,
  },
};

module.exports = nextConfig;
