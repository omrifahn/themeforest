/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['scontent-lhr8-1.xx.fbcdn.net'],
  },
};

module.exports = nextConfig;
