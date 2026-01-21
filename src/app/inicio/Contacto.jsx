import React from 'react'

function Contacto() {
  return (
    <section id='Contacto' className="py-12 md:py-16 lg:py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Encabezado */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Contáctenos
          </h2>
          <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
            Estamos aquí para atender sus consultas y necesidades. 
            Complete el formulario y nos pondremos en contacto a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Columna izquierda - Formulario */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm">
              <form className="space-y-6">
                
                {/* Nombre y Apellido */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                    placeholder="Ingrese su nombre completo"
                    required
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                    placeholder="Ingrese su número telefónico"
                  />
                </div>

                {/* Empresa */}
                <div>
                  <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa / Institución
                  </label>
                  <input
                    type="text"
                    id="empresa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                    placeholder="Nombre de su empresa o institución"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200"
                    placeholder="correo@ejemplo.com"
                    required
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors duration-200 resize-none"
                    placeholder="Escriba su mensaje aquí..."
                    required
                  />
                </div>

                {/* Botón Enviar */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary-600 transition-colors duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    <span>Enviar Mensaje</span>
                    <i className="fas fa-paper-plane text-sm"></i>
                  </button>
                </div>

              </form>
            </div>

            {/* Información de contacto adicional */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Teléfono</p>
                    <p className="font-medium text-gray-900">+51 123 456 789</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-medium text-gray-900">info@empresa.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className="lg:col-span-1">
            <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden">
              <img
                src="/Imagenes/img2Principal.jpeg"
                alt="Contacto - Entorno farmacéutico profesional"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay con texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
                <div className="p-6 md:p-8 text-white">
                  <div className="max-w-md">
                    <h3 className="text-xl md:text-2xl font-light mb-3">
                      Nuestro Compromiso
                    </h3>
                    <p className="text-white/90 font-light leading-relaxed">
                      Trabajamos con los más altos estándares de calidad y profesionalismo. 
                      Su consulta será atendida por especialistas en el sector farmacéutico.
                    </p>
                    
                    {/* Información adicional en la imagen */}
                    <div className="mt-6 pt-6 border-t border-white/20">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <i className="fas fa-clock text-sm"></i>
                          <span className="text-sm font-light">Lun-Vie: 8am-6pm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <i className="fas fa-map-marker-alt text-sm"></i>
                          <span className="text-sm font-light">Lima, Perú</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contacto