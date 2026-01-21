import React from 'react'
import Image from 'next/image'
import blogData from '@/lib/json/blog.json'

function Blog() {
  const { img, title, description, visión, misión } = blogData

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header con imagen y capa de sombra */}
      <div className="relative h-64 md:h-80 lg:h-96 shadow-2xl shadow-primary-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10" />
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {title}
            </h1>
            <div className="h-1 w-24 md:w-32 bg-primary-400 mx-auto rounded-full shadow-lg" />
          </div>
        </div>
        
        {/* Efecto de sombra en la parte inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent z-10" />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 max-w-4xl">
        {/* Descripción */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">
            Sobre Nosotros
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-default-700 leading-relaxed">
              {description}
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Misión */}
          <section className="bg-primary-50 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="h-10 w-1 bg-primary-600 mr-3 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-primary-800">
                Nuestra Misión
              </h3>
            </div>
            <p className="text-default-700 leading-relaxed">
              {misión}
            </p>
          </section>

          {/* Visión */}
          <section className="bg-primary-100 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="h-10 w-1 bg-primary-700 mr-3 rounded-full" />
              <h3 className="text-xl md:text-2xl font-bold text-primary-900">
                Nuestra Visión
              </h3>
            </div>
            <p className="text-default-700 leading-relaxed">
              {visión}
            </p>
          </section>
        </div>

        {/* Línea decorativa */}
        <div className="mt-16 pt-8 border-t border-primary-200">
          <div className="text-center">
            <p className="text-primary-600 font-semibold">
              Comprometidos con la excelencia y el bienestar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog