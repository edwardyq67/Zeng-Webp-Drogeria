import React, { useEffect, useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

function TerminosCondiciones({ showTermsModal, onClose }) {
  const [isClient, setIsClient] = useState(false);

  // Efecto para detectar si estamos en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Efecto para cerrar con Escape y bloquear scroll
  useEffect(() => {
    if (!showTermsModal || !onClose) return;

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
  }, [showTermsModal, onClose]);

  const handleCloseTermsModal = () => {
    if (onClose) {
      onClose();
    }
  };

  // Si no se debe mostrar el modal, retorna null
  // Importante: Retorna null solo en el cliente
  if (!showTermsModal || !isClient) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={handleCloseTermsModal}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del Modal */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 sticky top-0">
          <h2 className="text-xl font-bold text-gray-800">
            Términos y Condiciones
          </h2>
          <button
            onClick={handleCloseTermsModal}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Contenido del Modal */}
        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="space-y-4 text-gray-700">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-center mb-2">TÉRMINOS Y CONDICIONES</h3>
              <p className="text-center text-sm text-gray-600 mb-4">Servicios de Instalación y Mantenimiento</p>
            </div>

            <ol className="space-y-6 list-decimal pl-5">
              <li className="pl-2">
                <span className="font-medium">ZENG</span>, en adelante LA EMPRESA garantizará los servicios de instalación y mantenimiento correctivo, que realice, así como los productos adquiridos, comprados y/o vendidos, por LA EMPRESA, en conformidad con las condiciones generales que pasan a expresarse y que se dan a conocer a EL CLIENTE, por medio de la presente cotización; en los siguientes términos.
              </li>

              <li className="pl-2">
                Si al momento de efectuar el servicio EL CLIENTE no se encuentra en la dirección acordada, o por cualquier motivo no permiten el ingreso, los técnicos esperarán 15 minutos. Pasado este periodo de tiempo, el técnico procederá a retirarse dando por finalizada la atención. Para reprogramar el servicio EL CLIENTE deberá pagar la suma de 25.00 soles.
              </li>

              <li className="pl-2">
                Si EL CLIENTE decide anular el servicio de mantenimiento posterior a la llegada del técnico al lugar de prestación de servicio deberá realizar el pago de 25.00 soles por concepto de movilización a la visita, el cual será descontada del valor del servicio.
              </li>

              <li className="pl-2">
                EL CLIENTE deberá proporcionar el espacio despejado donde ser realizará el mantenimiento o la instalación. En caso de que EL CLIENTE haya solicitado una visita técnica previa, el mismo deberá acondicionar el espacio según lo acordado.
              </li>

              <li className="pl-2">
                <p className="mb-2">La garantía de instalación tendrá una vigencia de 1 año, contados desde la fecha de recepción conforme de la instalación por parte de EL CLIENTE -en caso de no existir tal recepción, el plazo se contará desde la fecha del encargo y pago del servicio-, y cubrirá hasta el monto efectivamente pagado por EL CLIENTE por concepto de instalación adquirida.</p>

                <p className="font-medium mt-3 mb-1">Esta garantía no cubre:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Si EL CLIENTE hace mal uso del producto.</li>
                  <li>Si EL CLIENTE traslada el producto de donde fue instalado por el técnico de LA EMPRESA.</li>
                  <li>Si, habiendo requerido de un mantenimiento preventivo, este no fue realizado</li>
                  <li>La garantía tampoco cubre deficiencias ocasionadas por tensiones, descargas, distorsiones, interrupciones del circuito de alimentación eléctrica, rayos, deficiencias en la instalación eléctrica, línea telefónica, conexiones indebidas, accidentes, caídas, impactos, insectos, animales, arena, polvo, pelusas, exposición a condiciones ambientales no apropiadas, robo, corrosión, inundación, sismos, incendios o desastres naturales.</li>
                </ul>

                <p className="font-medium mt-3 mb-1">Así mismo, la garantía no tendrá validez si:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>EL CLIENTE manipula el equipo, objeto de instalación o mantenimiento sin contar con la presencia del técnico de LA EMPRESA.</li>
                </ul>
              </li>

              <li className="pl-2">
                <p className="mb-2">En caso EL CLIENTE no esté presente durante el servicio, El mismo podrá dejar un TERCERO el cual deberá acreditar ser mayor de edad.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Toda reprogramación deberá ser como máximo a un día útil de la fecha del servicio (24 hrs previas) escribiendo al WhatsApp 912909920.</li>
                </ul>
              </li>

              <li className="pl-2">
                <p className="mb-2">EL CLIENTE deberá tomar en cuenta los siguientes puntos para preparar el espacio donde se realizará el SERVICIO:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Por seguridad de EL CLIENTE. Deberán mantener alejados de la zona de trabajo a niños y mascotas.</li>
                  <li>Si EL SERVICIO requiere de perforaciones, EL CLIENTE proveerá los planos del ambiente de no contar con los mismos, la realización de EL SERVICIO quedará bajo la responsabilidad de EL CLIENTE.</li>
                  <li>EL CLIENTE deberá facilitar al técnico de ZENG energía eléctrica. Si EL SERVICIO a realizar involucra trabajos en altura, EL CLIENTE deberá proporcionar escaleras o estructuras que permitan llegar al punto de instalación, salvo que la cotización incluya los referidos elementos.</li>
                  <li>El técnico de ZENG solo realizara EL SERVICIO, y los trabajos que este conlleve, por el que fue contratado la empresa, los mismos que se encuentran detallados en la cotización. De haber trabajos adicionales, éstos deberán ser realizados previamente por un tercero de la elección de EL CLIENTE.</li>
                </ul>
              </li>

              <li className="pl-2">
                Si EL CLIENTE realiza una coordinación adicional que no se encuentre en la cotización, con el técnico de ZENG quedará sin efecto la garantía de este por LA EMPRESA.
              </li>

              <li className="pl-2">
                Si el técnico de ZENG detecta piezas faltantes o dañadas durante el servicio, coordinará con LA EMPRESA para el envío de estas y se reprogramará EL SERVICIO sin costo.
              </li>

              <li className="pl-2">
                Al finalizar EL SERVICIO, se le solicitará a EL CLIENTE confirmar el término de obra en donde podrá indicar su conformidad u observaciones en EL SERVICIO.
              </li>

              <li className="pl-2">
                Respecto al mantenimiento preventivo, el mismo no tiene garantía, ya que, nuestro servicio tiene como objeto realizar limpieza en componentes de los equipos; por lo que no se reemplaza ninguna pieza manteniendo su integridad el equipo.
              </li>
            </ol>

            <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-medium text-sm text-gray-800 mb-1">
                    Aceptación de Términos
                  </h5>
                  <p className="text-xs text-gray-600">
                    Al marcar la casilla de aceptación, EL CLIENTE declara haber leído, comprendido y aceptado íntegramente los términos y condiciones aquí establecidos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer del Modal */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <span className="font-medium">ZENG</span> - Todos los derechos reservados
            </div>
            <button
              onClick={handleCloseTermsModal}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TerminosCondiciones;