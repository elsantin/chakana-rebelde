// sanity.config.ts

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
// COMENTARIO_ESTRATÉGICO (GYAN):
// La herramienta Vision ahora se importa desde su propio paquete.
// Hemos cambiado "sanity/vision" por "@sanity/vision" para que apunte al lugar correcto.
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schema";

export default defineConfig({
  basePath: "/studio", // La URL donde vivirá tu studio
  projectId: "iawu5ctn",
  dataset: "production",
  schema,
  plugins: [structureTool(), visionTool()],
});
