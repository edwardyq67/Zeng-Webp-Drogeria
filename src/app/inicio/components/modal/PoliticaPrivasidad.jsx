import React, { useEffect, useState } from 'react';
import { X, Shield, Lock, Mail, MapPin, AlertCircle, Check } from 'lucide-react';

function PoliticaPrivacidad({ showPrivacyModal, onClose }) {
  const [isClient, setIsClient] = useState(false);

  // Efecto para detectar si estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efecto para cerrar con Escape y bloquear scroll
  useEffect(() => {
    if (!showPrivacyModal || !onClose) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [showPrivacyModal, onClose]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    }
  };

  // Si no se debe mostrar el modal, retorna null
  // Importante: Retorna null solo en el cliente
  if (!showPrivacyModal || !isClient) {
    return null;
  }

  // Fecha dinámica
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={handleCloseModal}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Modal */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-bold text-gray-800">
              Política de Privacidad
            </h2>
          </div>
          <button
            onClick={handleCloseModal}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Contenido del Modal */}
        <div className="p-6 overflow-y-auto max-h-[70vh] bg-gray-50">
          <div className="max-w-4xl mx-auto">
            {/* Tarjeta principal */}
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              {/* Encabezado */}
              <div className="border-b border-gray-200 pb-6 mb-8">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Política de Privacidad
                </h1>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <p className="text-gray-600 italic">
                    Última actualización: {formattedDate}
                  </p>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-medium rounded-full">
                      TS GROUP
                    </span>
                  </div>
                </div>
              </div>

              {/* Introducción */}
              <div className="mb-8 p-5 bg-blue-50 rounded-xl border border-blue-100">
                <p className="text-gray-700 leading-relaxed">
                  En <strong className="text-blue-700">TS GROUP</strong>, nos comprometemos a proteger su privacidad y garantizar la seguridad de su información personal. Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos sus datos personales.
                </p>
              </div>

              {/* Sección 1 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    1. Información que Recopilamos
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Podemos recopilar los siguientes tipos de información:
                </p>
                <ul className="space-y-3 ml-5">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Información de identificación personal:</strong> nombre, dirección de correo electrónico, número de teléfono, dirección postal.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Información técnica:</strong> dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia en el sitio.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700">
                      <strong className="text-gray-900">Información de comunicación:</strong> preferencias de contacto, historial de comunicaciones con nuestro equipo.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Sección 2 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    2. Cómo Utilizamos Su Información
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Utilizamos la información recopilada para:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 ml-5">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Proporcionar y mejorar nuestros servicios</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Responder a sus consultas y solicitudes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Enviar comunicaciones sobre nuestros servicios</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Personalizar su experiencia en nuestro sitio web</span>
                  </li>
                  <li className="flex items-start md:col-span-2">
                    <Check className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cumplir con obligaciones legales y regulatorias</span>
                  </li>
                </ul>
              </div>

              {/* Sección 3 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    3. Compartir Información
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  No vendemos ni alquilamos su información personal a terceros. Podemos compartir su información en las siguientes circunstancias:
                </p>
                <div className="bg-red-50 border border-red-100 rounded-lg p-4 mb-5">
                  <div className="flex items-start">
                    <AlertCircle className="text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong className="text-red-700">Importante:</strong> Su información es confidencial y solo se comparte bajo estrictas circunstancias.
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 ml-5">
                  <li className="flex items-start">
                    <span className="text-gray-700">
                      Con proveedores de servicios que nos ayudan a operar nuestro negocio
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">
                      Cuando sea requerido por ley o para proteger nuestros derechos legales
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gray-700">
                      En caso de fusión, adquisición o venta de activos de la empresa
                    </span>
                  </li>
                </ul>
              </div>

              {/* Sección 4 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    4. Seguridad de la Información
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
                <div className="bg-green-50 border border-green-100 rounded-lg p-4 mt-4">
                  <div className="flex items-start">
                    <Lock className="text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">
                      <strong className="text-green-700">Nuestro compromiso:</strong> Utilizamos tecnologías de última generación para proteger sus datos. Sin embargo, ningún método de transmisión por Internet o almacenamiento electrónico es 100% seguro.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sección 5 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    5. Cookies y Tecnologías Similares
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700">
                  Nuestro sitio web utiliza cookies y tecnologías similares para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar algunas funcionalidades del sitio.
                </p>
              </div>

              {/* Sección 6 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    6. Sus Derechos
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Usted tiene derecho a:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Acceso</h3>
                    <p className="text-gray-700 text-sm">Acceder a la información personal que tenemos sobre usted</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Corrección</h3>
                    <p className="text-gray-700 text-sm">Solicitar la corrección de información inexacta</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Eliminación</h3>
                    <p className="text-gray-700 text-sm">Solicitar la eliminación de su información personal</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-900 mb-2">Portabilidad</h3>
                    <p className="text-gray-700 text-sm">Solicitar la portabilidad de sus datos</p>
                  </div>
                </div>
              </div>

              {/* Sección 7 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    7. Retención de Datos
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700">
                  Conservamos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera o permita un período de retención más largo.
                </p>
              </div>

              {/* Sección 8 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    8. Enlaces a Sitios de Terceros
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700">
                  Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Le recomendamos revisar las políticas de privacidad de cualquier sitio que visite.
                </p>
              </div>

              {/* Sección 9 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    9. Cambios a Esta Política
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700">
                  Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web. Le recomendamos revisar esta página periódicamente.
                </p>
              </div>

              {/* Sección 10 */}
              <div className="mb-8 scrollanimation animate-fade-in">
                <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 relative">
                  <span className="relative">
                    10. Contacto
                    <span className="absolute left-0 bottom-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></span>
                  </span>
                </h2>
                <p className="text-gray-700 mb-4">
                  Si tiene preguntas o inquietudes sobre esta Política de Privacidad o sobre cómo manejamos su información personal, puede contactarnos:
                </p>
                <div className="bg-gray-50 rounded-lg p-5">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="text-primary mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Correo electrónico</p>
                        <a className="text-primary-600 hover:text-primary-800 transition-colors">
                          contacto@inversionesbienestarzeng.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-primary mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Calle María José de Arce 261, San Miguel</p>
                        <p className="text-gray-700">Lima, Perú</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Descargo final */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-5">
                  <div className="flex items-start">
                    <AlertCircle className="text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Aviso Legal</h4>
                      <p className="text-gray-700 text-sm">
                        Esta Política de Privacidad está diseñada para cumplir con las regulaciones peruanas de protección de datos personales (Ley N° 29733). Para solicitudes específicas sobre sus datos personales, contacte directamente a nuestro Oficial de Protección de Datos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer del Modal */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <span className="font-medium">TS GROUP</span> - Todos los derechos reservados
            </div>
            <button
              onClick={handleCloseModal}
              className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-600 transition-colors text-sm font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoliticaPrivacidad;