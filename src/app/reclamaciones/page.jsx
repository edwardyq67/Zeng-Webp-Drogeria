'use client'
import React, { useState } from 'react';
import {
  FaUser,
  FaIdCard,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaClipboardList,
  FaPaperPlane,
  FaSpinner,
  FaCheck,
  FaExclamationCircle,
  FaBuilding,
  FaHome,
  FaShieldAlt,
  FaRegCheckCircle,
  FaStore,
  FaFileInvoice,
  FaMoneyBillWave,
  FaInfoCircle,
  FaArrowLeft,
  FaQuestionCircle,
  FaHeadset,
  FaClock
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function ReclamacionesPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [ticketNumber, setTicketNumber] = useState('');
  const [descripcionLength, setDescripcionLength] = useState(0);
  const [tipoDocumento, setTipoDocumento] = useState('dni');

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (isSubmitting) return;
  
  setIsSubmitting(true);
  setSubmitStatus(null);
  setTicketNumber('');

  try {
    const formData = new FormData(e.target);
    
    const descripcion = formData.get('descripcion');
    if (descripcion.length > 1000) {
      setIsSubmitting(false);
      return;
    }

    // Convertir FormData a objeto JSON
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Enviar como JSON
    const response = await fetch('/api/reclamos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setTicketNumber(result.codigoReclamo);
        e.target.reset();
        setDescripcionLength(0);
      } else {
        setSubmitStatus('error');
     
      }
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    console.error('Error:', error);
    setSubmitStatus('error');
  
  } finally {
    setIsSubmitting(false);
  }
};
  const tiposDocumento = [
    { value: 'dni', label: 'DNI' },
    { value: 'ruc', label: 'RUC' },
    { value: 'ce', label: 'Carnet de Extranjería' },
    { value: 'pasaporte', label: 'Pasaporte' }
  ];

  const departamentos = [
    { value: '', label: 'Selecciona departamento' },
    { value: 'lima', label: 'Lima' },
    { value: 'arequipa', label: 'Arequipa' },
    { value: 'cuzco', label: 'Cuzco' },
    { value: 'piura', label: 'Piura' },
    { value: 'lambayeque', label: 'Lambayeque' },
    { value: 'la libertad', label: 'La Libertad' },
    { value: 'junin', label: 'Junín' },
    { value: 'ancash', label: 'Áncash' },
    { value: 'ica', label: 'Ica' },
    { value: 'tacna', label: 'Tacna' },
    { value: 'otros', label: 'Otros' }
  ];

  const tiposReclamo = [
    { value: 'reclamo', label: 'Reclamo' },
    { value: 'queja', label: 'Queja' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-default-50 to-default-100">
      <header className="bg-black h-20 text-primary-foreground shadow-lg">
      </header>

      <main className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-default-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-info/10 rounded-lg">
                <FaHeadset className="text-info text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-default-900">¿Necesitas ayuda?</h3>
            </div>
            <p className="text-default-600 text-sm mb-3">
              Nuestro equipo está listo para asistirte en el proceso de reclamo.
            </p>
            <p className="font-semibold text-default-900">logistica@inversionesbienestarzerg.com</p>
            <p className="text-default-600 text-sm">Tel: 938 325 277 / 951 473 340</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-default-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-success/10 rounded-lg">
                <FaClock className="text-success text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-default-900">Tiempo de respuesta</h3>
            </div>
            <p className="text-default-600 text-sm mb-3">
              Atenderemos tu reclamo en un plazo máximo de 15 días hábiles.
            </p>
            <p className="font-semibold text-default-900">Rápido y eficiente</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-default-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-warning/10 rounded-lg">
                <FaShieldAlt className="text-warning text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-default-900">Tus datos protegidos</h3>
            </div>
            <p className="text-default-600 text-sm mb-3">
              Cumplimos con la Ley de Protección de Datos Personales.
            </p>
            <p className="font-semibold text-default-900">Seguridad garantizada</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-default-200">
              {submitStatus === 'success' && (
                <div className="bg-success-foreground/10 border-b-2 border-success">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <FaCheck className="text-3xl text-success mt-1 flex-shrink-0" />
                      <div className="flex-grow">
                        <h4 className="text-lg font-bold text-success mb-2">¡Reclamo registrado exitosamente!</h4>
                        {ticketNumber && (
                          <div className="mb-3 p-4 bg-white rounded-lg border border-success/20">
                            <p className="text-success-600 font-medium mb-1">Código de seguimiento:</p>
                            <p className="text-2xl font-bold text-success tracking-wider">{ticketNumber}</p>
                            <p className="text-sm text-success-600 mt-2">
                              Guarda este código para consultar el estado de tu reclamo
                            </p>
                          </div>
                        )}
                        <p className="text-success-600">
                          Se ha enviado una copia de tu reclamo al correo electrónico proporcionado.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-destructive-foreground/10 border-b-2 border-destructive">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <FaExclamationCircle className="text-3xl text-destructive mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-bold text-destructive mb-2">Error al registrar el reclamo</h4>
                        <p className="text-destructive-600">
                          Por favor, verifica los datos ingresados e intente nuevamente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="p-6 border-b border-default-200">
                <div className="mb-6 p-6 bg-info-foreground/5 rounded-xl border border-info/20">
                  <h3 className="text-xl font-bold text-default-900 mb-4 flex items-center gap-2">
                    <FaStore className="text-info" />
                    Datos de la empresa
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-default-700">Razón social del proveedor:</p>
                      <p className="text-lg font-bold text-default-900">Inversiones Bienestar ZENG S.A.C</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-default-700">R.U.C.:</p>
                      <p className="text-lg font-bold text-default-900">Por confirmar</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm font-semibold text-default-700">Dirección del Establecimiento:</p>
                      <p className="text-default-900">San Miguel, Lima</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-default-900 border-b-2 border-primary pb-3 flex items-center gap-3">
                      <FaUser className="text-primary text-2xl" />
                      Información del Consumidor Reclamante
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                          <FaIdCard className="text-default-500" />
                          Tipo de Documento *
                        </label>
                        <select
                          name="tipoDocumento"
                          required
                          value={tipoDocumento}
                          onChange={(e) => setTipoDocumento(e.target.value)}
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
                        >
                          {tiposDocumento.map((tipo) => (
                            <option key={tipo.value} value={tipo.value}>
                              {tipo.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                          <FaIdCard className="text-default-500" />
                          Número de Documento *
                        </label>
                        <input
                          type="text"
                          name="numeroDocumento"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder={tipoDocumento === 'ruc' ? 'Ingrese su RUC' : 'Ingrese su documento'}
                          maxLength={tipoDocumento === 'ruc' ? '11' : '12'}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                          <FaUser className="text-default-500" />
                          Nombres *
                        </label>
                        <input
                          type="text"
                          name="nombres"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="Ingresa tus nombres completos"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                          <FaUser className="text-default-500" />
                          Apellidos *
                        </label>
                        <input
                          type="text"
                          name="apellidos"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="Ingresa tus apellidos completos"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                          <FaPhone className="text-default-500" />
                          Teléfono / Celular *
                        </label>
                        <input
                          type="tel"
                          name="telefono"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="Ingresa tu número de contacto"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                          <FaEnvelope className="text-default-500" />
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="ejemplo@correo.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                          <FaHome className="text-default-500" />
                          Dirección Completa *
                        </label>
                        <input
                          type="text"
                          name="direccion"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="Calle, número, urbanización, referencia"
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                            <FaBuilding className="text-default-500" />
                            Departamento *
                          </label>
                          <select
                            name="departamento"
                            required
                            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
                          >
                            {departamentos.map((depto) => (
                              <option key={depto.value} value={depto.value}>
                                {depto.label}
                              </option>
                            ))}
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                            <FaBuilding className="text-default-500" />
                            Provincia *
                          </label>
                          <input
                            type="text"
                            name="provincia"
                            required
                            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                            placeholder="Ingresa provincia"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-semibold text-default-700 mb-2 flex items-center gap-1">
                            <FaBuilding className="text-default-500" />
                            Distrito *
                          </label>
                          <input
                            type="text"
                            name="distrito"
                            required
                            className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                            placeholder="Ingresa distrito"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-default-900 border-b-2 border-primary pb-3 flex items-center gap-3">
                      <FaMoneyBillWave className="text-primary text-2xl" />
                      Identificación del Bien Contratado
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2">
                          Bien o Servicio *
                        </label>
                        <input
                          type="text"
                          name="bienServicio"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                          placeholder="Ej: Medicamentos, Productos farmacéuticos, etc."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2">
                          Monto reclamado (S/) *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-default-500 font-bold">S/</span>
                          <input
                            type="number"
                            name="montoReclamado"
                            required
                            step="0.01"
                            min="0"
                            className="w-full pl-10 pr-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-default-700 mb-2">
                          Descripción del bien o servicio *
                        </label>
                        <textarea
                          name="descripcionBien"
                          rows="3"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                          placeholder="Describa el bien o servicio adquirido..."
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-default-900 border-b-2 border-primary pb-3 flex items-center gap-3">
                      <FaClipboardList className="text-primary text-2xl" />
                      Detalle de su reclamo
                    </h3>
                    
                    <div className="bg-info-foreground/5 p-4 rounded-lg mb-4">
                      <p className="text-sm text-info mb-2 font-semibold flex items-center gap-2">
                        <FaInfoCircle />
                        Definiciones según el Código del Consumidor:
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div className="bg-white p-3 rounded border border-input">
                          <p className="font-semibold text-destructive">Reclamo:</p>
                          <p className="text-default-700">Cuando el consumidor no está conforme con los bienes adquiridos o servicios prestados.</p>
                        </div>
                        <div className="bg-white p-3 rounded border border-input">
                          <p className="font-semibold text-destructive">Queja:</p>
                          <p className="text-default-700">Cuando el consumidor expresa su malestar respecto de algún tema que no tenga que ver directamente con el giro del negocio.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2">
                          Tipo *
                        </label>
                        <select
                          name="tipoReclamo"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition bg-white"
                        >
                          <option value="">Seleccione tipo</option>
                          {tiposReclamo.map((tipo) => (
                            <option key={tipo.value} value={tipo.value}>
                              {tipo.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-default-700 mb-2">
                          Fecha del hecho reclamado *
                        </label>
                        <input
                          type="date"
                          name="fechaHecho"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-default-700 mb-2">
                          Descripción detallada del reclamo/queja *
                        </label>
                        <textarea
                          name="descripcion"
                          rows="6"
                          required
                          maxLength="1000"
                          onChange={(e) => setDescripcionLength(e.target.value.length)}
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                          placeholder="Describa detalladamente los hechos..."
                        />
                        <div className="flex justify-between mt-2">
                          <p className="text-xs text-default-500">
                            Incluya todos los detalles relevantes.
                          </p>
                          <p className={`text-sm ${descripcionLength > 900 ? 'text-destructive' : 'text-default-500'}`}>
                            {descripcionLength}/1000 caracteres
                          </p>
                        </div>
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-default-700 mb-2">
                          Pedido o solución esperada *
                        </label>
                        <textarea
                          name="pedido"
                          rows="3"
                          required
                          className="w-full px-4 py-3 border-2 border-input rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition resize-none"
                          placeholder="Especifique claramente qué solución espera recibir..."
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 bg-muted p-6 rounded-xl">
                    <h4 className="text-lg font-bold text-default-900 mb-3">
                      <FaFileAlt className="inline mr-2" />
                      Información Importante
                    </h4>
                    
                    <div className="space-y-3 text-sm text-default-700">
                      <p className="flex items-start gap-2">
                        <FaRegCheckCircle className="text-success mt-1 flex-shrink-0" />
                        <span>La respuesta será enviada al correo electrónico consignado en el presente formulario.</span>
                      </p>
                      
                      <p className="flex items-start gap-2">
                        <FaRegCheckCircle className="text-success mt-1 flex-shrink-0" />
                        <span>Con el envío del formulario, valida la información consignada.</span>
                      </p>
                      
                      <p className="flex items-start gap-2">
                        <FaRegCheckCircle className="text-success mt-1 flex-shrink-0" />
                        <span>La decisión será notificada al correo electrónico proporcionado.</span>
                      </p>
                      
                      <p className="flex items-start gap-2">
                        <FaRegCheckCircle className="text-success mt-1 flex-shrink-0" />
                        <span>Se generará un código único para su seguimiento.</span>
                      </p>
                      
                      <p className="flex items-start gap-2">
                        <FaRegCheckCircle className="text-success mt-1 flex-shrink-0" />
                        <span>Este establecimiento cuenta con un Libro de Reclamaciones conforme a la Ley.</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-6 bg-primary-foreground/5 rounded-xl border-2 border-primary/20">
                    <input
                      type="checkbox"
                      id="declaracion"
                      name="declaracion"
                      required
                      className="mt-1 h-5 w-5 text-primary focus:ring-primary border-default-400 rounded"
                    />
                    <div>
                      <label htmlFor="declaracion" className="text-default-900 font-semibold flex items-center gap-2 mb-2">
                        <FaShieldAlt className="text-primary" />
                        DECLARACIÓN Y CONSENTIMIENTO *
                      </label>
                      <p className="text-sm text-default-700">
                        <strong>Declaro que los datos consignados son correctos y fiel expresión de la verdad.</strong> 
                        Autorizo expresamente a Inversiones Bienestar ZENG S.A.C al tratamiento de mis datos personales para los fines relacionados 
                        con la atención de mi reclamo o queja, conforme a la Ley de Protección de Datos Personales (Ley N° 29733).
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`flex-1 py-4 px-6 font-bold rounded-xl transition duration-300 flex items-center justify-center gap-3 text-lg ${
                        isSubmitting 
                          ? 'bg-primary/70 cursor-not-allowed' 
                          : 'bg-primary hover:bg-primary-600 text-primary-foreground shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <FaSpinner className="animate-spin" />
                          Registrando reclamo...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane />
                          Registrar en Libro de Reclamaciones
                        </>
                      )}
                    </button>
                    
                    <button
                      type="reset"
                      className="flex-1 py-4 px-6 font-bold bg-default-100 text-default-800 rounded-xl hover:bg-default-200 transition shadow hover:shadow-lg"
                      onClick={() => {
                        setSubmitStatus(null);
                        setTicketNumber('');
                        setDescripcionLength(0);
                        setTipoDocumento('dni');
                      }}
                    >
                      Limpiar Formulario
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-default-200">
                <h3 className="text-xl font-bold text-default-900 mb-4 flex items-center gap-2">
                  <FaShieldAlt className="text-primary" />
                  Tus derechos como consumidor
                </h3>
                <div className="space-y-4">
                  <div className="p-3 bg-success/5 rounded-lg border border-success/20">
                    <p className="font-semibold text-success mb-1">Derecho a la información</p>
                    <p className="text-sm text-default-600">
                      Recibir información veraz sobre productos y servicios.
                    </p>
                  </div>
                  <div className="p-3 bg-info/5 rounded-lg border border-info/20">
                    <p className="font-semibold text-info mb-1">Derecho a reclamar</p>
                    <p className="text-sm text-default-600">
                      Presentar reclamos por productos o servicios defectuosos.
                    </p>
                  </div>
                  <div className="p-3 bg-warning/5 rounded-lg border border-warning/20">
                    <p className="font-semibold text-warning mb-1">Derecho a la protección</p>
                    <p className="text-sm text-default-600">
                      Ser protegido contra prácticas comerciales abusivas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-default-200">
                <h3 className="text-xl font-bold text-default-900 mb-4 flex items-center gap-2">
                  <FaClock className="text-primary" />
                  Proceso de atención
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-semibold text-default-900">Registro</p>
                      <p className="text-sm text-default-600">Completa el formulario con tus datos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-semibold text-default-900">Recepción</p>
                      <p className="text-sm text-default-600">Recibirás un código de seguimiento</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-semibold text-default-900">Evaluación</p>
                      <p className="text-sm text-default-600">Analizaremos tu caso en 5 días hábiles</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-semibold text-default-900">Respuesta</p>
                      <p className="text-sm text-default-600">Te enviaremos una respuesta en 15 días</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <FaHeadset />
                  ¿Necesitas ayuda inmediata?
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold mb-1">Teléfonos de atención</p>
                    <p className="text-sm">Elvis Alaya: 938 325 277</p>
                    <p className="text-sm">Nebraska Rojas: 951 473 340</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Horario de atención</p>
                    <p className="text-sm">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-sm">Sábados: 8:00 AM - 1:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Correo electrónico</p>
                    <p className="text-sm break-all">logistica@inversionesbienestarzerg.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}