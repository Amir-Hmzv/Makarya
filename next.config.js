/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    domains: ["www.fcbarcelona.com"],
  },
};

module.exports = nextConfig;
