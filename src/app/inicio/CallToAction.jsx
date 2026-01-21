import React from 'react';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="relative py-8 md:py-12 lg:py-16 px-4 bg-fixed bg-cover bg-center overflow-hidden mx-auto rounded-3xl md:rounded-4xl my-12"
      style={{ 
        backgroundImage: 'url(/Imagenes/img3Principal.jpeg)',
        maxWidth: '1770px'
      }}>
      
      {/* Overlay oscuro para mejorar legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-900/70 to-primary-900/60 rounded-3xl md:rounded-4xl"></div>
      
      <div className="relative z-10 py-8 md:py-12 lg:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            
            {/* Columna izquierda - Texto */}
            <div className="mb-3">
              <div className="flex flex-col text-white gap-3 md:gap-4 scrollanimation animate-zoom-in">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Catálogo Corporativo 2026
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  Descubra nuestra amplia gama de productos farmacéuticos y dispositivos médicos 
                  para instituciones de salud. Calidad garantizada y cumplimiento normativo DIGEMID.
                </p>
              </div>
            </div>

            {/* Columna derecha - Botón */}
            <div className="mb-3 flex justify-center lg:justify-end">
              <div className="w-max">
                <a 
                  href="http://tsgroups.org/pdf%20zeng/Revista%20ZENG.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-white text-primary hover:bg-primary hover:text-white border-2 border-white rounded-full flex flex-row items-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
                >
                  <span className="text-base md:text-lg">Ver Catálogo Completo</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Sección de especialidades */}
          <div className="mt-8 md:mt-12 pt-6 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
              {[
                "RESPIRATORIOS",
                "CARDIOMETABÓLICA",
                "NEUROLÓGICA",
                "DERMATOLÓGICA",
                "GASTROENTEROLOGÍA",
                "ENDOCRINOLOGÍA"
              ].map((especialidad, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <span className="text-white text-xs md:text-sm font-medium">
                    {especialidad}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-white/80 text-center text-sm md:text-base mt-4">
              Más de 50 especialidades médicas disponibles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;