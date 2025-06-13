// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // COMENTARIO_ESTRATÉGICO (GYAN):
  // Esta sección es donde le damos "permiso" a Next.js para
  // cargar imágenes desde dominios externos. Por seguridad,
  // Next.js no permite esto por defecto. Al añadir cdn.sanity.io,
  // le decimos que es una fuente segura y de confianza para nuestras imágenes.
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**", // Permite cualquier ruta dentro de ese dominio.
      },
    ],
  },
};

export default nextConfig;
