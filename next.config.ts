/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',  // <-- COMENTA o ELIMINA esta línea
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;