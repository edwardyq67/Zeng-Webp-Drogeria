/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Esto genera archivos estáticos
  images: {
    unoptimized: true,  // Necesario para export estático
  },
  trailingSlash: true,  // Mejor compatibilidad

};

export default nextConfig;