import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';

const CallToAction = () => {
  const especialidades = [
    {
      nombre: "ANTI-INFECCIOSOS",
      url: "https://docs.google.com/spreadsheets/d/1XJZZofQMgQ01PejSBHfAkPSFhokHeWCqhBL46qEHtQw/edit?usp=drive_link"
    },
    {
      nombre: "ANTICOAGULANTE",
      url: "https://docs.google.com/spreadsheets/d/1NLGERinf7JYUTlapHod1U5usEUnr8vcTFvESkR320nQ/edit?usp=drive_link"
    },
    {
      nombre: "CARDIOMETABÓLICA",
      url: "https://docs.google.com/spreadsheets/d/1likAa_yYdOxhotkoj0ZWKduaex2X0Q8M2JWohbUdyjg/edit?usp=drive_link"
    },
    {
      nombre: "DERMATOLOGÍA",
      url: "https://docs.google.com/spreadsheets/d/1nozxCIVkJvDFsP117JCmzCsOS9wm7yvoXIASClczNXw/edit?usp=drive_link"
    },
    {
      nombre: "DOLOR",
      url: "https://docs.google.com/spreadsheets/d/129qbLu3pP6O-6MMEqqJXRgjluPWdvTTKzupj_EW8vc8/edit?usp=drive_link"
    },
    {
      nombre: "ENDOCRINOLOGÍA",
      url: "https://docs.google.com/spreadsheets/d/1XdYpTQzxcnE6ul3Tu6Fn0jvlk0GGL4UzDLuWYk47oMc/edit?usp=drive_link"
    },
    {
      nombre: "ESPECIALIDADES",
      url: "https://docs.google.com/spreadsheets/d/1GALyKxEHV1n8nksJcHmDXu2USCLjmE-HXlCZJ9S4_l4/edit?usp=drive_link"
    },
    {
      nombre: "GASTROENTEROLÓGICA",
      url: "https://docs.google.com/spreadsheets/d/13p1wN0JWlVTEbCWWBhb96DojqHwkkZhoQZ01BnmKKew/edit?usp=drive_link"
    },
    {
      nombre: "GINECOLÓGICA",
      url: "https://docs.google.com/spreadsheets/d/1vCuJSH8IGC5MfYOrltHs7PeVuwMGEN7emrzUEOUwx4o/edit?usp=drive_link"
    },
    {
      nombre: "NEUROLÓGICA",
      url: "https://docs.google.com/spreadsheets/d/1MV7j35DOYyZpuemU38-gzJttAFg1KUfSAq21CxftvmI/edit?usp=drive_link"
    },
    {
      nombre: "OSTEOARTICULAR",
      url: "https://docs.google.com/spreadsheets/d/1GprZ8al3zHlDdu1h5rPO-P3oF40X4SKJP0CmIzT0FSk/edit?usp=drive_link"
    },
    {
      nombre: "RESPIRATORIA",
      url: "https://docs.google.com/spreadsheets/d/10E0mBvsPR0KDhv90f-LT-zQHdNChSzEZM_dUyISCX5E/edit?usp=drive_link"
    }
  ];

  return (
    <section 
      className="relative py-8 md:py-12 lg:py-16 px-4 overflow-hidden mx-auto rounded-3xl md:rounded-4xl my-12"
      style={{ 
        backgroundImage: 'url("/Imagenes/calidad2.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        maxWidth: '1770px',
        width: '100%',
        margin: '0 auto'
      }}
    >
      
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
              {especialidades.map((especialidad, index) => (
                <a
                  key={index}
                  href={especialidad.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-white text-xs md:text-sm font-medium">
                      {especialidad.nombre}
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <p className="text-white/80 text-center text-sm md:text-base mt-4">
              Más de {especialidades.length} especialidades médicas disponibles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;