/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'awsp-world-backend-production.up.railway.app',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
