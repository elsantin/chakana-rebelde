// src/lib/utils.ts

// Importamos la plantilla que acabamos de definir.
import type { Fotoreportaje } from "@/types";

/**
 * Filtra un array de fotorreportajes por un capítulo específico.
 * @param photos - El array de todos los fotorreportajes.
 * @param chapter - El capítulo por el cual filtrar.
 * @returns Un array filtrado de fotorreportajes.
 */
export function getPhotosByChapter(
  photos: Fotoreportaje[],
  chapter?: string
): Fotoreportaje[] {
  // Si no se proporciona un capítulo, devolvemos todas las fotos sin filtrar.
  if (!chapter) {
    return photos;
  }

  // Devolvemos solo las fotos que pertenecen al capítulo especificado.
  return photos.filter((photo) => photo.chapter === chapter);
}
