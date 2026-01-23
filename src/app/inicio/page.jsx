"use client";

import React, { useState, useEffect } from 'react';
import { Play, MapPin, Phone, MessageCircle, MessageSquare, Eye, Target } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Marca from './Marca';
import CallToAction from './CallToAction';
import Servicios from './Servicios';
import Contacto from './Contacto';
import marcasData from '@/lib/json/marcas.json';
import contactoData from '@/lib/json/data.json';
import { FaWhatsapp, FaUser, FaUserTie } from 'react-icons/fa';

function HomePage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Usamos los partners desde el JSON
    const partners = marcasData.partners;
    const contacto = contactoData.contacto;

    useEffect(() => {
        // Trigger animations on mount
        setIsVisible(true);

        // Scroll animations
        const handleScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');
            elements.forEach((el) => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.85) {
                    el.classList.add('animated');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen grid gap-8 md:gap-20 bg-background font-sans overflow-hidden">
            {/* Sección Hero */}
            <section id='Inicio' className="relative overflow-hidden animate-fade-in">
                {/* Imagen de fondo */}
                <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh] animate-blurred-fade-in">
                    <img
                        src="/Imagenes/calidad1.webp"
                        alt="Hero background"
                        className="w-full h-full object-cover object-top"
                    />

                    {/* Overlay oscuro para mejorar contraste */}
                    <div className="absolute inset-0 bg-black/50"></div>

                    {/* Overlay para transición suave al contenido */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
                </div>

                {/* Contenido superpuesto */}
                <div className="relative z-10 -mt-20 md:-mt-32 lg:-mt-40 px-4">
                    <div className="mx-auto">
                        <div className="flex flex-col xl:flex-row gap-6 animate-slide-up-fade">
                            {/* Columna izquierda */}
                            <div className="w-full xl:w-7/12">
                                <div className="bg-white shadow-lg md:shadow-2xl p-4 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-gray-100 lg:-translate-x-8 animate-slide-in-left">
                                    <div className="flex flex-col gap-4 md:gap-4">

                                        {/* Encabezado */}
                                        <div className="flex items-center gap-2 justify-center lg:justify-start animate-pulse-fade-in">
                                            <h6 className="text-primary font-semibold text-sm sm:text-base md:text-lg overflow-hidden text-ellipsis max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg ">
                                                CONSTRUYENDO SOLUCIONES PARA TU BIENESTAR
                                            </h6>
                                        </div>

                                        {/* Título */}
                                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left whitespace-nowrap animate-bounce-fade-in">
                                            INVERSIONES BIENESTAR ZENG SAC
                                        </h1>

                                        {/* Carrusel de partners */}
                                        <div className="mt-6 md:mt-8 px-2 animate-slide-in-bottom">
                                            <Swiper
                                                modules={[Autoplay, Pagination]}
                                                spaceBetween={10}
                                                slidesPerView={2}
                                                autoplay={{
                                                    delay: 3000,
                                                    disableOnInteraction: false,
                                                }}
                                                breakpoints={{
                                                    640: { slidesPerView: 3, spaceBetween: 15 },
                                                    768: { slidesPerView: 4, spaceBetween: 20 },
                                                    1024: { slidesPerView: 5, spaceBetween: 25 },
                                                }}
                                                className="w-full"
                                            >
                                                {partners.map((partner, index) => (
                                                    <SwiperSlide key={partner.id}>
                                                        <div
                                                            className="flex items-center justify-center h-16 md:h-20 animate-on-scroll"
                                                            style={{ animationDelay: `${index * 0.1}s` }}
                                                        >
                                                            <div className="w-28 h-12 md:w-32 md:h-16">
                                                                <img
                                                                    src={partner.logo}
                                                                    alt={`Partner ${partner.id}`}
                                                                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 animate-pop"
                                                                />
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full xl:w-5/12 mt-4 xl:mt-0 animate-slide-in-right">
                                <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-4 md:gap-5 px-2">
                                    {/* Botón de video */}
                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="cursor-pointer relative group w-14 h-14 md:w-16 md:h-16 animate-pulse"
                                        aria-label="Play video"
                                    >
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping"></div>
                                            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
                                            <div className="absolute inset-2 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg animate-heartbeat">
                                                <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Texto descriptivo */}
                                    <p className="text-black uppercase text-sm md:text-base lg:text-lg leading-relaxed max-w-lg animate-fade-in-up">
                                        Distribución eficiente, disponibilidad asegurada
                                    </p>

                                    {/* Información de contacto */}
                                    <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4 animate-fade-in-down">
                                        <div className="flex items-center gap-2 animate-slide-in-left">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-float">
                                                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <span className="text-gray-700 text-sm md:text-base">
                                                {contacto.direccion}
                                            </span>
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                            <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-float">
                                                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                                </div>
                                                <a
                                                    href={contacto.WhatsApp1}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-700 text-sm md:text-base hover:text-primary transition-colors animate-horizontal-bounce"
                                                >
                                                    {contacto.telefono1}
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-2 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 animate-float">
                                                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                                </div>
                                                <a
                                                    href={contacto.WhatsApp2}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-700 text-sm md:text-base hover:text-primary transition-colors animate-horizontal-bounce"
                                                >
                                                    {contacto.telefono2}
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal del video */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-zoom-in">
                    <div className="relative w-full max-w-4xl">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute -top-10 md:-top-12 right-0 text-white hover:text-primary transition-colors animate-pulse"
                            aria-label="Close video"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 flex items-center justify-center animate-rotate-360">
                                <span className="text-xl md:text-2xl">×</span>
                            </div>
                        </button>
                        <div className="relative pt-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full rounded-lg animate-fade-in"
                                src="https://www.youtube.com/embed/FK2RaJ1EfA8?autoplay=1"
                                title="Medical Products Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Sección Quiénes Somos */}
            <section id='Nosotros' className="px-4 animate-fade-in-up">
                <div className="max-w-6xl mx-auto">

                    {/* Encabezado */}
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-slide-up-fade">
                        <div className="inline-flex items-center justify-center w-40 h-40 bg-primary/10 rounded-full mb-4 animate-rotate-360">
                            <img
                                src="/p1/P1.png"
                                className="w-40 h-40 object-contain"
                                alt="Icono farmacéutico"
                            />
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug md:leading-tight text-center animate-bounce-fade-in">
                            Quiénes Somos
                        </h2>
                        <div className="h-px w-16 bg-primary mx-auto mb-6 animate-expand-horizontally"></div>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light animate-fade-in">
                            Somos una empresa especializada en la comercialización de productos farmacéuticos,
                            sanitarios y dispositivos médicos. Nuestra operación se sustenta en una política de
                            calidad rigurosa, comprometida con la eficacia de nuestros productos y la satisfacción
                            de las expectativas de nuestros clientes.
                        </p>
                    </div>

                    {/* Contenido en dos columnas */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">

                        {/* Columna izquierda - Visión y Misión */}
                        <div className="space-y-8">
                            {/* Tarjeta Visión */}
                            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-in-left animate-on-scroll">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center animate-float">
                                        <Eye className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in-right">Nuestra Visión</h3>
                                        <p className="text-gray-600 leading-relaxed animate-fade-in">
                                            Ser reconocidos como una empresa líder en el rubro farmacéutico,
                                            destacándonos por nuestra solidez profesional y compromiso con la calidad.
                                            Aspiramos a posicionarnos entre las principales empresas del sector a nivel
                                            nacional, contribuyendo a mejorar la calidad de vida de las personas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta Misión */}
                            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-slide-in-left animate-on-scroll"
                                style={{ animationDelay: '0.2s' }}>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center animate-float">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3 animate-fade-in-right">Nuestra Misión</h3>
                                        <p className="text-gray-600 leading-relaxed animate-fade-in">
                                            Comercializar productos farmacéuticos, sanitarios y dispositivos médicos
                                            respaldados por políticas de calidad estrictas. Nos comprometemos con el
                                            mejoramiento continuo y el cumplimiento de la normativa vigente establecida
                                            por la DIGEMID, garantizando suministros eficientes y confiables.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Columna derecha - Imagen y WhatsApp */}
                        <div className="relative">
                            {/* Imagen principal */}
                            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-8 animate-slide-in-right animate-on-scroll">
                                <img
                                    src="/Imagenes/calidad2.webp"
                                    alt="Entorno farmacéutico profesional"
                                    className="w-full h-full object-cover animate-blurred-fade-in"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Tarjeta de contacto WhatsApp */}
                            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg -mt-16 mx-4 relative z-10 animate-slide-up-fade animate-on-scroll">
                                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                                    {/* Texto informativo */}
                                    <div className="text-center sm:text-left animate-fade-in-left">
                                        <h3 className="font-semibold text-gray-800 mb-1">Contáctanos por WhatsApp</h3>
                                        <p className="text-sm text-gray-600">Atención inmediata y personalizada</p>
                                    </div>

                                    {/* Botones de WhatsApp */}
                                    <div className="flex flex-col xs:flex-row gap-3">
                                        <a
                                            href={contacto.WhatsApp1}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-[1.02] min-w-[180px] animate-bounce-fade-in group"
                                            style={{ animationDelay: '0.1s' }}
                                        >
                                            <div className="relative">
                                                <Phone className="w-5 h-5 animate-wobble" />
                                                <FaUser className="w-3 h-3 text-white absolute -bottom-1 -right-1" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm font-medium">Elvis Ayala</div>
                                                <div className="text-xs opacity-90 group-hover:opacity-100 transition-opacity">Gerente Comercial</div>
                                            </div>
                                        </a>

                                        <a
                                            href={contacto.WhatsApp2}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-teal-600 to-cyan-700 text-white rounded-lg hover:from-teal-700 hover:to-cyan-800 transition-all duration-300 hover:scale-[1.02] min-w-[180px] animate-bounce-fade-in group"
                                            style={{ animationDelay: '0.2s' }}
                                        >
                                            <div className="relative">
                                                <Phone className="w-5 h-5 animate-wobble" />
                                                <FaUserTie className="w-3 h-3 text-white absolute -bottom-1 -right-1" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-sm font-medium">Nebrasvska Rojas</div>
                                                <div className="text-xs opacity-90 group-hover:opacity-100 transition-opacity">Asesora Técnica</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Secciones adicionales con animaciones */}
            <div className="animate-fade-in-up">
                <CallToAction />
            </div>

            <div className="animate-slide-up-fade">
                <Servicios />
            </div>
            <div className="animate-fade-in">
                <Contacto />
            </div>

            {/* CSS adicional para scroll animations */}
            <style jsx>{`
                .animate-on-scroll {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
                }
                
                .animate-on-scroll.animated {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                @media (prefers-reduced-motion: reduce) {
                    .animate-on-scroll {
                        transition: none;
                        opacity: 1;
                        transform: none;
                    }
                }
            `}</style>
        </main>
    );
}

export default HomePage;