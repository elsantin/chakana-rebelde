// src/types/index.ts

// Importamos el tipo específico para imágenes desde las herramientas de Sanity.
import type { Image } from "sanity";

// Esta es la "plantilla" o "plano" que describe cómo es un objeto de Fotorreportaje
// cuando lo recibimos desde Sanity.
export interface Fotoreportaje {
  // Las propiedades con `?` son opcionales, lo que hace nuestro código más flexible.
  _id: string;
  titulo?: string;
  slug?: { current: string };
  // CORRECCIÓN: Hemos reemplazado 'any' con el tipo 'Image' oficial de Sanity.
  // Esto hace nuestro código más seguro y predecible.
  imagenPrincipal?: Image;
  descripcion?: string;
  chapter?: string;
}
