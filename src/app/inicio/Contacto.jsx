import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, XCircle } from 'lucide-react';
import contactoData from '@/lib/json/data.json';
import TerminosCondiciones from './components/modal/TerminosCondiciones';
import PoliticaPrivacidad from './components/modal/PoliticaPrivasidad';

function Contacto() {
  const contacto = contactoData.contacto;
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: null,
    message: ''
  });

  // Configuración de react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  // Función para enviar el formulario
  const onSubmit = async (data) => {
    if (!isTermsAccepted || !isPrivacyAccepted) {
   
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: '' });

    try {
      // Enviar a tu API route de Next.js
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: data.nombre,
          email: data.email,
          mensaje: data.mensaje,
          telefono: data.telefono,
          empresa: data.empresa
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Error al enviar');
      }

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: '¡Mensaje enviado! Nos pondremos en contacto pronto.'
        });
        reset();
        setIsTermsAccepted(false);
        setIsPrivacyAccepted(false);
      } else {
        setSubmitStatus({
          success: false,
          message: result.error || 'Error al enviar el mensaje'
        });
      }
    } catch (error) {
      console.error('❌ Error:', error);
      setSubmitStatus({
        success: false,
        message: 'Error de conexión. Intente nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isAllAccepted = isTermsAccepted && isPrivacyAccepted;

  return (
    <>
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
                {/* Mensaje de estado */}
                {submitStatus.message && (
                  <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${submitStatus.success
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                    {submitStatus.success ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                      {...register('nombre', {
                        required: 'El nombre es requerido',
                        minLength: {
                          value: 3,
                          message: 'Mínimo 3 caracteres'
                        }
                      })}
                    />
                    {errors.nombre && (
                      <p className="mt-1 text-sm text-red-600">{errors.nombre.message}</p>
                    )}
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
                      {...register('telefono', {
                        pattern: {
                          value: /^[0-9+\-\s()]*$/,
                          message: 'Formato de teléfono inválido'
                        }
                      })}
                    />
                    {errors.telefono && (
                      <p className="mt-1 text-sm text-red-600">{errors.telefono.message}</p>
                    )}
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
                      {...register('empresa')}
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
                      {...register('email', {
                        required: 'El email es requerido',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
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
                      {...register('mensaje', {
                        required: 'El mensaje es requerido',
                        minLength: {
                          value: 10,
                          message: 'Mínimo 10 caracteres'
                        }
                      })}
                    />
                    {errors.mensaje && (
                      <p className="mt-1 text-sm text-red-600">{errors.mensaje.message}</p>
                    )}
                  </div>

                  {/* Checkbox de Términos y Condiciones */}
                  <div className="pt-2">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="flex items-center h-5 mt-0.5">
                        <input
                          id="terminos"
                          type="checkbox"
                          checked={isTermsAccepted}
                          onChange={(e) => setIsTermsAccepted(e.target.checked)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="terminos" className="text-sm text-gray-700 cursor-pointer">
                          He leído y acepto los{' '}
                          <button
                            type="button"
                            onClick={() => setShowTermsModal(true)}
                            className="text-primary hover:text-primary-600 font-medium underline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1 rounded px-1"
                          >
                            Términos y Condiciones
                          </button>
                          {' '}de ZENG para el uso de mis datos personales.
                        </label>
                      </div>
                    </div>

                    {/* Checkbox de Política de Privacidad */}
                    <div className="flex items-start space-x-3">
                      <div className="flex items-center h-5 mt-0.5">
                        <input
                          id="privacidad"
                          type="checkbox"
                          checked={isPrivacyAccepted}
                          onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary/20"
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <label htmlFor="privacidad" className="text-sm text-gray-700 cursor-pointer">
                          He leído y acepto la{' '}
                          <button
                            type="button"
                            onClick={() => setShowPrivacyModal(true)}
                            className="text-primary hover:text-primary-600 font-medium underline focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-1 rounded px-1"
                          >
                            Política de Privacidad
                          </button>
                          {' '}de TS GROUP.
                        </label>
                      </div>
                    </div>

                    {/* Mensaje de error si no están aceptados */}
                    {(!isTermsAccepted || !isPrivacyAccepted) && (
                      <p className="text-red-500 text-xs mt-2">
                        * Debe aceptar tanto los términos y condiciones como la política de privacidad para continuar
                      </p>
                    )}
                  </div>

                  {/* Botón Enviar */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!isAllAccepted || isSubmitting}
                      className={`w-full py-3 px-6 rounded-lg transition-colors duration-300 font-medium flex items-center justify-center gap-2 ${isAllAccepted && !isSubmitting
                        ? 'bg-primary text-white hover:bg-primary-600 cursor-pointer transform hover:scale-[1.02] transition-transform'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar Mensaje</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Información de contacto adicional */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* WhatsApp 1 */}
                <a
                  href={contacto.WhatsApp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-4 rounded-lg hover:bg-green-50 hover:border-green-200 hover:shadow-sm transition-all duration-300 border border-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">WhatsApp 1</p>
                      <p className="font-medium text-gray-900">{contacto.telefono1}</p>
                    </div>
                  </div>
                </a>

                {/* WhatsApp 2 */}
                <a
                  href={contacto.WhatsApp2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-4 rounded-lg hover:bg-green-50 hover:border-green-200 hover:shadow-sm transition-all duration-300 border border-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">WhatsApp 2</p>
                      <p className="font-medium text-gray-900">{contacto.telefono2}</p>
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${contacto.email}`}
                  className="bg-gray-50 p-4 rounded-lg hover:bg-blue-50 hover:border-blue-200 hover:shadow-sm transition-all duration-300 border border-transparent group"
                  title={`Enviar email a ${contacto.email}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="font-medium text-gray-900 truncate" title={contacto.email}>
                        {contacto.email}
                      </p>
                    </div>
                  </div>
                </a>

                {/* Dirección */}
                <a
                  href="https://www.google.com/maps/place/Jr.+María+José+de+Arce+261,+Lima+15087"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-50 p-4 rounded-lg hover:bg-purple-50 hover:border-purple-200 hover:shadow-sm transition-all duration-300 border border-transparent"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Dirección</p>
                      <p className="font-medium text-gray-900 text-sm">San Miguel, Lima</p>
                      <p className="text-xs text-gray-500 mt-0.5">Lima 15087</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Columna derecha - Imagen */}
            <div className="lg:col-span-1">
              <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-xl overflow-hidden">
                <img
                  src="/Imagenes/calidad2.webp"
                  alt="Contacto - Entorno farmacéutico profesional"
                  className="w-full h-full object-cover"
                />

                {/* Overlay con texto */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 md:p-8 text-white">
                    <div className="max-w-md">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={contacto.logo}
                          alt="Logo"
                          className="w-12 h-12 object-contain"
                        />
                        <h3 className="text-xl md:text-2xl font-light">
                          Nuestro Compromiso
                        </h3>
                      </div>
                      <p className="text-white/90 font-light leading-relaxed mb-6">
                        Trabajamos con los más altos estándares de calidad y profesionalismo.
                        Su consulta será atendida por especialistas en el sector farmacéutico.
                      </p>

                      {/* Información adicional en la imagen */}
                      <div className="mt-6 pt-6 border-t border-white/20">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs text-white/70">Horario de Atención</p>
                            <p className="text-sm font-light">Lun-Vie: 8am-6pm / Sab: medio día</p>
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

      {/* Modal de Términos y Condiciones */}
      <TerminosCondiciones
        showTermsModal={showTermsModal}
        onClose={() => setShowTermsModal(false)}
      />

      {/* Modal de Política de Privacidad */}
      <PoliticaPrivacidad
        showPrivacyModal={showPrivacyModal}
        onClose={() => setShowPrivacyModal(false)}
      />
    </>
  )
}

export default Contacto;