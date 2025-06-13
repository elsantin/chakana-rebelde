// src/sanity/schema.ts

import { type SchemaTypeDefinition } from "sanity";
import fotoreportaje from "./schemas/fotoreportaje";

// Este archivo actúa como el índice central de todos tus tipos de contenido.
// Cuando crees un nuevo tipo de esquema (ej. 'autor', 'categoria'),
// deberás importarlo aquí y agregarlo al array 'types'.

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Aquí listamos todos los esquemas que queremos que Sanity conozca.
    fotoreportaje,
  ],
};
