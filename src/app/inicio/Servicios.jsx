import React from 'react'

function Servicios() {
  const serviciosAsesorias = [
    {
      id: 1,
      titulo: "Buenas Prácticas de Almacenamiento (BPA)",
      descripcion: "Acompañamos el proceso, verificamos las áreas y/o distribución en plano. Puntos observables en referencia a lo mencionado en el manual, el mejor recorrido desde la recepción hasta la salida final del producto para la optimización del proceso. Almacenamiento de acuerdo a la naturaleza del producto (controlado / no controlado), alcances para mitigar observaciones.",
      caracteristicas: [
        "Revisión de procedimientos, formatos y registros",
        "Alineación a las Buenas Prácticas Documentarias",
        "Optimización del flujo de productos",
        "Evaluación de áreas de almacenamiento"
      ],
      icono: "📦"
    },
    {
      id: 2,
      titulo: "Buenas Prácticas de Distribución y Transporte (BPDyT)",
      descripcion: "Soporte adecuado inspeccionando las unidades de transporte, que se debe cumplir y/o mejorar para obtener la certificación.",
      caracteristicas: [
        "Procedimientos, formatos, registros alineados a las Buenas Prácticas Documentarias",
        "Capacitación en manejo y llenado de hoja de ruta",
        "Inspección de unidades de transporte",
        "Asesoría para certificación"
      ],
      icono: "🚚"
    },
    {
      id: 3,
      titulo: "Manejo de Productos Refrigerados",
      descripcion: "Uso de herramientas que aseguran mantener temperaturas de 2° a 8° C embalaje unitarios, unidades refrigeradas, seguimiento y recomendaciones para un correcto desempeño de la cadena de frío.",
      caracteristicas: [
        "Procedimientos, formatos, registros alineados a las Buenas Prácticas Documentarias",
        "Seguimiento de cadena de frío",
        "Recomendaciones para mantener temperaturas óptimas",
        "Uso de herramientas especializadas"
      ],
      icono: "❄️"
    }
  ]

  const serviciosOperativos = [
    {
      id: 1,
      titulo: "Almacenamiento Especializado",
      tipos: [
        {
          nombre: "Temperatura Ambiente",
          rango: "15° a 30° C",
          icono: "🌡️",
          color: "from-blue-50 to-blue-100"
        },
        {
          nombre: "Temperatura Controlada",
          rango: "15° a 25° C",
          icono: "🎯",
          color: "from-green-50 to-green-100"
        },
        {
          nombre: "Productos Refrigerados",
          rango: "2° a 8° C",
          icono: "🧊",
          color: "from-cyan-50 to-cyan-100"
        }
      ]
    },
    {
      id: 2,
      titulo: "Transporte de Productos Farmacéuticos",
      descripcion: "Servicio especializado en el transporte seguro de productos farmacéuticos, garantizando las condiciones óptimas durante todo el trayecto.",
      icono: "🚛",
      caracteristicas: [
        "Vehículos equipados con sistemas de monitoreo",
        "Control de temperatura en tiempo real",
        "Personal capacitado en manejo de productos",
        "Seguimiento GPS y trazabilidad"
      ]
    }
  ]

  return (
    <section id='Servicios'>
      <div className="min-h-screen bg-gradient-to-b from-background to-gray-50">

        {/* Sección de Asesorías y Capacitaciones */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Asesorías / Capacitaciones
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in">
                Servicios especializados para optimizar sus procesos y cumplir con los más altos estándares de calidad
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {serviciosAsesorias.map((servicio, index) => (
                <div
                  key={servicio.id}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden animate-slide-up-fade"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col justify-between h-full">
                    <div className="p-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl">{servicio.icono}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300">
                        {servicio.titulo}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {servicio.descripcion}
                      </p>

                      <ul className="space-y-3">
                        {servicio.caracteristicas.map((caracteristica, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary mr-3 mt-1">✓</span>
                            <span className="text-gray-700">{caracteristica}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="px-8 pb-6">
                      <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                        <a href="#Contacto">
                          Más información
                        </a>

                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Servicios Operativos */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Servicios Operativos
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Infraestructura especializada para el manejo seguro de productos farmacéuticos
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Almacenamiento */}
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-in-left">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🏪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Almacenamiento de productos
                  </h3>
                </div>

                <div className="space-y-6">
                  {serviciosOperativos[0].tipos.map((tipo, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-xl bg-gradient-to-r ${tipo.color} border border-gray-200 hover:border-primary-200 transition-all duration-300 group`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-2xl mr-4">{tipo.icono}</span>
                          <h4 className="text-xl font-semibold text-gray-900">
                            {tipo.nombre}
                          </h4>
                        </div>
                        <div className="px-4 py-1 bg-white rounded-full text-primary font-bold shadow-sm">
                          {tipo.rango}
                        </div>
                      </div>
                      <p className="text-gray-600">
                        Condiciones controladas para garantizar la calidad y estabilidad de los productos
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transporte */}
              <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-in-right">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">{serviciosOperativos[1].icono}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {serviciosOperativos[1].titulo}
                  </h3>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {serviciosOperativos[1].descripcion}
                </p>

                <div className="space-y-4">
                  {serviciosOperativos[1].caracteristicas.map((caracteristica, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-100 transition-colors duration-300 shadow-sm">
                        <span className="text-primary">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">{caracteristica}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>

  )
}

export default Servicios