// src/app/page.tsx - Nuevo diseño moderno y elegante para Chakana Rebelde

import { client } from "@/sanity/client";
import Image from "next/image";
import Link from "next/link";

const query = `{
  "project": *[_type == "creativeProject" && title == "Chakana Rebelde"][0]{
    _id,
    title,
    photoReportageDetails,
    _updatedAt
  },
  "photos": *[_type == "photoItem" && defined(image.asset->url)] | order(_createdAt){
    _id,
    title,
    "imageUrl": image.asset->url,
    caption,
    chapter
  }
}`;

interface PhotoItem {
  _id: string;
  title?: string;
  imageUrl: string;
  caption?: string;
  chapter?: string;
}

interface ProjectData {
  project: {
    _id: string;
    title: string;
    photoReportageDetails?: {
      totalPhotos: number;
      narrativeStyle: string;
    };
    _updatedAt: string;
  } | null;
  photos: PhotoItem[];
}

export default async function HomePage() {
  try {
    const data: ProjectData = await client.fetch(
      query,
      {},
      {
        cache: "no-store",
      }
    );

    const { project, photos } = data;

    // Filtro para mostrar todas las fotos
    const displayPhotos = photos.filter(
      (photo) => photo.imageUrl && photo.imageUrl.trim() !== ""
    );

    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600">
                Chakana Rebelde
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
                Un viaje visual a través de la esencia ancestral, capturado en
                imágenes que hablan sin palabras.
              </p>

              {project && (
                <div className="inline-flex items-center gap-4 bg-black/30 backdrop-blur-sm border border-amber-500/20 rounded-full px-6 py-3 mb-12">
                  <span className="w-3 h-3 rounded-full bg-amber-500 animate-pulse"></span>
                  <span className="text-amber-200 font-medium">
                    Última actualización:{" "}
                    {new Date(project._updatedAt).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="#galeria"
                  className="px-8 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full font-medium hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-amber-500/20"
                >
                  Explorar Galería
                </Link>
                <Link
                  href="#acerca"
                  className="px-8 py-4 bg-transparent border border-amber-500/30 rounded-full font-medium hover:bg-amber-500/10 transition-all duration-300"
                >
                  Acerca del Proyecto
                </Link>
              </div>
            </div>
          </div>

          {/* Efecto visual de fondo */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-15 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Sección de Estadísticas */}
        <div id="acerca" className="py-20 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                La Esencia del Proyecto
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Cada imagen cuenta una historia única, conectada con la energía
                ancestral de nuestra tierra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-amber-500/30 transition-all duration-300">
                <div className="text-5xl font-bold text-amber-400 mb-4">
                  {displayPhotos.length}
                </div>
                <h3 className="text-xl font-semibold mb-2">Fotografías</h3>
                <p className="text-gray-400">
                  Momentos capturados en el tiempo
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-amber-500/30 transition-all duration-300">
                <div className="text-5xl font-bold text-amber-400 mb-4">
                  {project?.photoReportageDetails?.narrativeStyle || "Visual"}
                </div>
                <h3 className="text-xl font-semibold mb-2">Estilo</h3>
                <p className="text-gray-400">Narrativa fotográfica</p>
              </div>

              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-center hover:border-amber-500/30 transition-all duration-300">
                <div className="text-5xl font-bold text-amber-400 mb-4">
                  Ancestral
                </div>
                <h3 className="text-xl font-semibold mb-2">Energía</h3>
                <p className="text-gray-400">Conectada con lo sagrado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Galería Principal */}
        <div id="galeria" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Galería Visual
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Explora cada imagen cuidadosamente seleccionada para este
                fotorreportaje único.
              </p>
            </div>

            {displayPhotos.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayPhotos.map((photo, index) => (
                  <div
                    key={photo._id}
                    className="group relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300"
                  >
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={photo.imageUrl}
                        alt={photo.title || `Foto ${index + 1}`}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading={index < 8 ? "eager" : "lazy"}
                        unoptimized
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <div>
                        <h3 className="font-bold text-white mb-1">
                          {photo.title || `Imagen ${index + 1}`}
                        </h3>
                        {photo.caption && (
                          <p className="text-sm text-gray-300 line-clamp-2">
                            {photo.caption}
                          </p>
                        )}
                        <p className="text-xs text-amber-400 mt-2">
                          {index + 1} de {displayPhotos.length}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">📸</div>
                <h3 className="text-2xl font-bold mb-2">
                  Galería en Construcción
                </h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  Las imágenes del fotorreportaje estarán disponibles
                  próximamente.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-yellow-400 mb-4">
                Chakana Rebelde
              </h3>
              <p className="text-gray-400 mb-6">
                Un fotorreportaje que conecta con la esencia ancestral.
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Behance
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Contacto
                </a>
              </div>
              <p className="text-gray-500 text-sm mt-8">
                © {new Date().getFullYear()} Chakana Rebelde. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </main>
    );
  } catch (error) {
    console.error("Error al cargar los datos:", error);
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-6xl mb-4">⚠️</div>
          <h1 className="text-3xl font-bold mb-4">
            Error al cargar el contenido
          </h1>
          <p className="text-gray-400 max-w-md mx-auto">
            No pudimos conectar con la base de datos. Por favor, intenta
            recargar la página.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-3 bg-amber-600 rounded-full font-medium hover:bg-amber-500 transition-colors"
          >
            Recargar Página
          </button>
        </div>
      </main>
    );
  }
}
