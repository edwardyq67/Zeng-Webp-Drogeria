// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: 'standalone',  // ← Esto genera una build standalone
};

module.exports = nextConfig;