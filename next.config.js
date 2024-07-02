/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'awsp-world-backend-staging.up.railway.app',
        pathname: '/uploads/**',
      },
    ],
  },
};

module.exports = nextConfig;
