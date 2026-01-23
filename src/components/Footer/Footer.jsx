'use client'
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Shield } from 'lucide-react';
import contactoData from '@/lib/json/data.json';
import TerminosCondiciones from '../../app/inicio/components/modal/TerminosCondiciones';
import PoliticaPrivacidad from '../../app/inicio/components/modal/PoliticaPrivasidad';
import { FaWhatsapp, FaUser, FaUserTie } from 'react-icons/fa';

function Footer() {
    const contacto = contactoData.contacto;
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);
    const [showWhatsAppOptions, setShowWhatsAppOptions] = useState(false);

    // Datos para enlaces rápidos
    const quickLinks = [
        { name: 'Inicio', href: '#Inicio' },
        { name: 'Quiénes Somos', href: '#Nosotros' },
        { name: 'Servicios', href: '#Servicios' },
        { name: 'Marcas', href: '#Marcas' },
        { name: 'Contacto', href: '#Contacto' },
    ]

    const servicios = [
        'Almacenamiento (BPA)',
        'Distribución y Transporte (BPDyT)',
        'Manejo de Productos Refrigeradoss',
    ]

    return (
        <>
            <footer className="bg-gray-900 text-white pt-12 pb-8 relative">
                <div className="max-w-7xl mx-auto px-4">

                    {/* Sección principal del footer */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                        {/* Columna 1: Logo y descripción */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src={contacto.logo}
                                    alt="Logo"
                                    className="h-12 w-auto"
                                />
                                <div>
                                    <h3 className="text-xl font-bold">INVERSIONES BIENESTAR ZENG SAC</h3>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Distribuidor mayorista de productos farmacéuticos y dispositivos médicos.
                                Calidad garantizada y servicio confiable para el sector salud peruano.
                            </p>
                        </div>

                        {/* Columna 2: Enlaces rápidos */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                                Enlaces Rápidos
                            </h3>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors hover:pl-2 duration-300 block"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Columna 3: Servicios */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Shield className="w-5 h-5" />
                                Nuestros Servicios
                            </h3>
                            <ul className="space-y-2">
                                {servicios.map((servicio, index) => (
                                    <li key={index} className="text-gray-400 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        {servicio}
                                    </li>
                                ))}
                            </ul>
                            
                            {/* Logo libro de reclamaciones con modal */}
                            <div className="mt-6">
                                <a
                                    href='/reclamaciones'
                                    className="hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
                                    aria-label="Libro de reclamaciones"
                                >
                                    <img 
                                        src="/libroReclamaciones/libroreclamaciones.avif" 
                                        alt="Libro de Reclamaciones" 
                                        className="h-16 w-auto object-contain cursor-pointer"
                                    />
                                </a>
                                <p className="text-xs text-gray-500 mt-1">Libro de Reclamaciones</p>
                            </div>
                        </div>

                        {/* Columna 4: Contacto */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <MapPin className="w-5 h-5" />
                                Contacto
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <p className="text-gray-400 text-sm">{contacto.direccion}</p>
                                </div>

                                <div className="space-y-2">
                                    <a
                                        href={contacto.WhatsApp1}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <FaWhatsapp className="w-5 h-5" />
                                        <span>{contacto.telefono1}</span>
                                    </a>
                                    <a
                                        href={contacto.WhatsApp2}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <FaWhatsapp className="w-5 h-5" />
                                        <span>{contacto.telefono2}</span>
                                    </a>
                                </div>

                                <a
                                    href={`mailto:${contacto.email}`}
                                    className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                    title={`Enviar email a ${contacto.email}`}
                                >
                                    <Mail className="w-5 h-5" />
                                    <span className="truncate max-w-[180px]">{contacto.email}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Footer inferior */}
                    <div className="border-t border-gray-800 pt-8 mt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="text-center md:text-left">
                                <p className="text-gray-400 text-sm">
                                    © {new Date().getFullYear()} Inversiones Bienestar Zeng SAC. Todos los derechos reservados.
                                </p>
                                <p className="text-gray-500 text-xs mt-1">
                                    Distribuidor mayorista autorizado por DIGEMID
                                </p>
                            </div>

                            <div className="flex gap-6 mt-4 md:mt-0">
                                <button
                                    onClick={() => setShowPrivacyModal(true)}
                                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1"
                                >
                                    Política de Privacidad
                                </button>
                                <button
                                    onClick={() => setShowTermsModal(true)}
                                    className="text-gray-400 hover:text-white text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded px-2 py-1"
                                >
                                    Términos y Condiciones
                                </button>
                                <a
                                    href="https://www.google.com/maps/place/Jr.+María+José+de+Arce+261,+Lima+15087"
                                    target="_blank"
                                    rel="noopener noreferrer" 
                                    className="text-gray-400 hover:text-white text-sm transition-colors"
                                >
                                    Mapa del Sitio
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Sticker flotante de WhatsApp */}
                <div className="fixed bottom-6 right-6 z-40">
                    {/* Botón principal de WhatsApp */}
                    <button
                        onClick={() => setShowWhatsAppOptions(!showWhatsAppOptions)}
                        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
                        aria-label="Contactar por WhatsApp"
                    >
                        <FaWhatsapp className="w-7 h-7" />
                    </button>

                    {/* Opciones de WhatsApp que aparecen al hacer clic */}
                    {showWhatsAppOptions && (
                        <div className="absolute bottom-16 right-0 mb-2 space-y-2 animate-fade-in">
                            {/* Opción WhatsApp 1 - Asesor Elvis Ayala */}
                            <a
                                href={contacto.WhatsApp1}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-gray-800 p-3 rounded-lg shadow-lg flex items-center gap-3 hover:bg-gray-100 transition-colors min-w-[200px] animate-slide-in-right"
                            >
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="relative">
                                        <FaUser className="w-4 h-4 text-blue-600" />
                                        <FaWhatsapp className="w-3 h-3 text-green-500 absolute -bottom-1 -right-1" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm">Elvis Ayala</p>
                                    <p className="text-xs text-gray-600 truncate">Gerente Comercial</p>
                                </div>
                            </a>

                            {/* Opción WhatsApp 2 - Asesor Nebrasvska Rojas */}
                            <a
                                href={contacto.WhatsApp2}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-gray-800 p-3 rounded-lg shadow-lg flex items-center gap-3 hover:bg-gray-100 transition-colors min-w-[200px] animate-slide-in-right"
                                style={{ animationDelay: '0.1s' }}
                            >
                                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <div className="relative">
                                        <FaUserTie className="w-4 h-4 text-purple-600" />
                                        <FaWhatsapp className="w-3 h-3 text-green-500 absolute -bottom-1 -right-1" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="font-medium text-sm">Nebrasvska Rojas</p>
                                    <p className="text-xs text-gray-600 truncate">Asesora Técnica</p>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </footer>

            {/* Modales */}
            <TerminosCondiciones
                showTermsModal={showTermsModal}
                onClose={() => setShowTermsModal(false)}
            />

            <PoliticaPrivacidad
                showPrivacyModal={showPrivacyModal}
                onClose={() => setShowPrivacyModal(false)}
            />
        </>
    )
}

export default Footer;