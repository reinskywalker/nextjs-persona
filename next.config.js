/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/nextjs-persona',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
