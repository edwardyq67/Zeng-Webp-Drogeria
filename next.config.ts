const nextConfig = {
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Agrega estas líneas TEMPORALMENTE:
  output: 'export',  // Para generar archivos estáticos
  distDir: 'out',    // Para que Cloudflare encuentre los archivos
};