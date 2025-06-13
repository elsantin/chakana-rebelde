// src/sanity/client.ts - Configuración optimizada

import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "iawu5ctn",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-06-13",
  useCdn: process.env.NODE_ENV === "production", // CDN en producción, directo en desarrollo
  perspective: "published", // Solo contenido publicado
});
