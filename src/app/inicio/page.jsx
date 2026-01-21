"use client";

import React, { useState } from 'react';
import { Play, MapPin, Phone } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Marca from './Marca';
import CallToAction from './CallToAction';
import Services from './Services';
import Contacto from './Contacto';
import marcasData from '@/lib/json/marcas.json';

function HomePage() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Usamos los partners desde el JSON
    const partners = marcasData.partners;

    return (
        <main className="min-h-screen grid gap-8 md:gap-20 bg-background font-sans">
            {/* Sección Hero */}
            <section id='Inicio' className="relative overflow-hidden">
                {/* Imagen de fondo */}
                <div className="relative h-[70vh] md:h-[80vh] lg:h-[90vh]">
                    <img
                        src="/Imagenes/img1Principal.jpeg"
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
                        <div className="flex flex-col xl:flex-row gap-6">
                            {/* Columna izquierda */}
                            <div className="w-full xl:w-7/12">
                                <div className="bg-white shadow-lg md:shadow-2xl p-4 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl border border-gray-100 lg:-translate-x-8">
                                    <div className="flex flex-col gap-4 md:gap-4">

                                        {/* Encabezado */}
                                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                                            <h6 className="text-primary font-semibold text-sm sm:text-base md:text-lg overflow-hidden text-ellipsis max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                                                CONSTRUYENDO SOLUCIONES PARA TU BIENESTAR
                                            </h6>
                                        </div>

                                        {/* Título */}
                                        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left whitespace-nowrap">
                                            INVERSIONES BIENESTAR ZENG SAC
                                        </h1>

                                        {/* Carrusel de partners */}
                                        <div className="mt-6 md:mt-8 px-2">
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
                                                {partners.map((partner) => (
                                                    <SwiperSlide key={partner.id}>
                                                        <div className="flex items-center justify-center h-16 md:h-20">
                                                            <div className="w-28 h-12 md:w-32 md:h-16">
                                                                <img
                                                                    src={partner.logo}
                                                                    alt={`Partner ${partner.id}`}
                                                                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
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

                            <div className="w-full xl:w-5/12 mt-4 xl:mt-0">  {/* Cambiado lg por xl */}
                                <div className="flex flex-col items-center xl:items-start text-center xl:text-left gap-4 md:gap-5 px-2">
                                    {/* Botón de video */}
                                    <button
                                        onClick={() => setIsVideoOpen(true)}
                                        className="relative group w-14 h-14 md:w-16 md:h-16"
                                        aria-label="Play video"
                                    >
                                        <div className="relative w-full h-full">
                                            <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-ping"></div>
                                            <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-pulse"></div>
                                            <div className="absolute inset-2 rounded-full bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <Play className="w-4 h-4 md:w-5 md:h-5 text-white ml-0.5" />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Texto descriptivo */}
                                    <p className="text-black text-sm md:text-base lg:text-lg leading-relaxed max-w-lg">
                                        CATÁLOGO CORPORATIVO DE PRODUCTOS
                                        FARMACÉUTICOS Y DISPOSITIVOS MÉDICOS
                                    </p>

                                    {/* Información de contacto */}
                                    <div className="flex flex-col items-center lg:items-start gap-3 md:gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <span className="text-gray-700 text-sm md:text-base">
                                                Calle María José de Arce 261 -San Miguel, Lima
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <span className="text-gray-700 text-sm md:text-base">
                                                +51 928 325 277
                                            </span>
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <div className="relative w-full max-w-4xl">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute -top-10 md:-top-12 right-0 text-white hover:text-primary transition-colors"
                            aria-label="Close video"
                        >
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 flex items-center justify-center">
                                <span className="text-xl md:text-2xl">×</span>
                            </div>
                        </button>
                        <div className="relative pt-[56.25%]">
                            <iframe
                                className="absolute inset-0 w-full h-full rounded-lg"
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
            <section id='Nosotros' className="pb-12 md:pb-16 lg:pb-20 px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Encabezado */}
                    <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                        <div className="inline-flex items-center justify-center w-40 h-40 bg-primary/10 rounded-full mb-4">
                            <img
                                src="/p1/P1.png"
                                className="w-40 h-40 object-contain"
                                alt="Icono farmacéutico"
                            />
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug md:leading-tight text-center">
                            Quiénes Somos
                        </h2>
                        <div className="h-px w-16 bg-primary mx-auto mb-6"></div>
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
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
                            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center">
                                        <i className="fas fa-eye text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Nuestra Visión</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Ser reconocidos como una empresa líder en el rubro farmacéutico,
                                            destacándonos por nuestra solidez profesional y compromiso con la calidad.
                                            Aspiramos a posicionarnos entre las principales empresas del sector a nivel
                                            nacional, contribuyendo a mejorar la calidad de vida de las personas.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Tarjeta Misión */}
                            <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center">
                                        <i className="fas fa-bullseye text-primary text-lg"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Nuestra Misión</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Comercializar productos farmacéuticos, sanitarios y dispositivos médicos
                                            respaldados por políticas de calidad estrictas. Nos comprometemos con el
                                            mejoramiento continuo y el cumplimiento de la normativa vigente establecida
                                            por la DIGEMID, garantizando suministros eficientes y confiables.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Columna derecha - Imagen y Reseñas */}
                        <div className="relative">

                            {/* Imagen principal */}
                            <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden mb-6">
                                <img
                                    src="/Imagenes/img2Principal.jpeg"
                                    alt="Entorno farmacéutico profesional"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>

                            {/* Tarjeta de reseñas */}
                            <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm -mt-10 mx-4 relative z-10">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="flex -space-x-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                                    <img
                                                        src={`https://html.rometheme.net/pharmed/image/image-600x600-2${i}.jpg`}
                                                        className="w-full h-full object-cover"
                                                        alt={`Cliente ${i}`}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div>
                                            <div className="flex gap-1 mb-1">
                                                {[...Array(4)].map((_, i) => (
                                                    <i key={i} className="fas fa-star text-yellow-400 text-sm"></i>
                                                ))}
                                                <i className="fas fa-star text-gray-300 text-sm"></i>
                                            </div>
                                            <p className="text-sm text-gray-600">1.5k+ Reseñas</p>
                                        </div>
                                    </div>

                                    <button className="px-5 py-2.5 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-300 text-sm font-medium flex items-center gap-2">
                                        <span>Conocer Más</span>
                                        <i className="fas fa-arrow-right text-xs"></i>
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <CallToAction />
            <Marca />
            <Contacto />
        </main>
    );
}

export default HomePage;