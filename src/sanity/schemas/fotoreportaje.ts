// src/sanity/schemas/fotoreportaje.ts

import { defineField, defineType } from "sanity";

// Aquí definimos el "molde" para tu contenido de fotorreportaje.
// Cada objeto 'fotoreportaje' en Sanity seguirá esta estructura.
export default defineType({
  name: "fotoreportaje", // El nombre técnico del tipo de documento (en minúsculas)
  title: "Fotoreportaje", // El nombre legible para humanos que aparecerá en el Studio
  type: "document", // Indica que este es un documento de nivel superior en Sanity

  // Estos son los campos que compondrán cada documento de fotorreportaje.
  fields: [
    defineField({
      name: "titulo",
      title: "Título",
      type: "string",
      description: "El título principal del fotorreportaje.",
      validation: (Rule) => Rule.required().error("Un título es obligatorio."),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      description:
        'La parte de la URL para este fotorreportaje. Haz clic en "Generate" para crearlo a partir del título.',
      options: {
        source: "titulo", // Genera el slug automáticamente a partir del campo 'titulo'
        maxLength: 96,
      },
      validation: (Rule) =>
        Rule.required().error("El slug es fundamental para la navegación."),
    }),
    defineField({
      name: "imagenPrincipal",
      title: "Imagen Principal",
      type: "image",
      description: "La imagen destacada para esta entrada.",
      options: {
        hotspot: true, // Habilita el "hotspot" para que puedas recortar y enfocar la imagen de forma inteligente.
      },
      validation: (Rule) =>
        Rule.required().error("Una imagen es esencial para un fotorreportaje."),
    }),
    // --- CAMPO AÑADIDO ---
    // COMENTARIO_ESTRATÉGICO (GYAN):
    // Añadimos este campo 'chapter' para poder categorizar las fotos.
    // Esto es lo que nuestra función `getPhotosByChapter` buscará para filtrar.
    // Empezamos con un campo de texto simple. Más adelante, podríamos convertirlo
    // en una lista desplegable para asegurar consistencia.
    defineField({
      name: "chapter",
      title: "Capítulo",
      type: "string",
      description:
        "Asigna un capítulo a esta foto (ej: 'capitulo-1', 'introduccion').",
    }),
    defineField({
      name: "descripcion",
      title: "Descripción / Texto",
      type: "text",
      description: "El texto o cuerpo del artículo que acompaña a la imagen.",
    }),
  ],

  // Esto personaliza cómo se mostrarán las entradas en la lista del Studio.
  preview: {
    select: {
      title: "titulo",
      media: "imagenPrincipal",
      // Mostramos el capítulo en la vista previa para una fácil identificación.
      subtitle: "chapter",
    },
    prepare(selection) {
      return { ...selection };
    },
  },
});
