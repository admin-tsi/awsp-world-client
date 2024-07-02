/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'awsp-world-backend-production.up.railway.app',
      'res.cloudinary.com',
    ],
  },
};

module.exports = nextConfig;
