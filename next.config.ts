import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    viewTransition: true,
  },
  devIndicators: false,
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}

export default nextConfig
