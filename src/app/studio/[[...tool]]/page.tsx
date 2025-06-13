// src/app/studio/[[...tool]]/page.tsx

"use client";

// COMENTARIO_ESTRATÉGICO (GYAN):
// Este es el componente CLAVE que faltaba o estaba mal configurado.
// Su única responsabilidad es renderizar la aplicación completa de Sanity Studio.
// "use client" es fundamental porque el Studio es una aplicación interactiva.

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  // El componente <NextStudio> toma la configuración de tu archivo sanity.config.ts
  // y la usa para construir y mostrar la interfaz completa del CMS.
  return <NextStudio config={config} />;
}
