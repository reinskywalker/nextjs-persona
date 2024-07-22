/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/persona',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
