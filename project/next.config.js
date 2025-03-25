/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,
  images: {
    domains: ['api.dicebear.com'],
    unoptimized: true
  }
};

module.exports = nextConfig;