import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, Pill, Stethoscope, Home, Heart, Syringe, ClipboardCheck, Truck } from 'lucide-react';

const Services = () => {

    const services = [
        {
            id: 1,
            icon: <Pill className="w-8 h-8 text-primary" />,
            title: "Generic Medicine",
            description: "High-quality generic medications at affordable prices for all your healthcare needs.",
            link: "#",
            wide: true,
            compact: false
        },
        {
            id: 2,
            icon: <Stethoscope className="w-8 h-8 text-primary" />,
            title: "Doctor Consultation",
            description: "Professional medical consultations and prescription services with certified doctors.",
            link: "#",
            wide: false,
            compact: true
        },
        {
            id: 3,
            icon: <Heart className="w-8 h-8 text-primary" />,
            title: "Health Check Programs",
            description: "Comprehensive health screening and preventive care programs tailored to your specific needs.",
            link: "#",
            wide: false,
            compact: false
        },
        {
            id: 4,
            icon: <Home className="w-8 h-8 text-primary" />,
            title: "Home Delivery Service",
            description: "Convenient and reliable delivery of medications right to your doorstep.",
            link: "#",
            wide: false,
            compact: false
        },
        {
            id: 5,
            icon: <Syringe className="w-8 h-8 text-primary" />,
            title: "Vaccination Services",
            description: "Complete vaccination programs for all ages with professional medical supervision.",
            link: "#",
            wide: false,
            compact: false
        },
        {
            id: 6,
            icon: <ClipboardCheck className="w-8 h-8 text-primary" />,
            title: "Chronic Disease Management",
            description: "Specialized care and monitoring for patients with chronic health conditions.",
            link: "#",
            wide: false,
            compact: false
        },
        {
            id: 7,
            icon: <Truck className="w-8 h-8 text-primary" />,
            title: "Emergency Delivery",
            description: "24/7 emergency medication delivery for urgent healthcare needs.",
            link: "#",
            wide: false,
            compact: false
        }
    ];

    // Para móviles: mostrar solo 4 servicios
    const mobileServices = services.slice(0, 4);
    // Para desktop: mostrar todos los servicios
    const desktopServices = services;

    return (
        <section className="py-8 md:py-12 lg:py-16">
            <div className="container mx-auto px-4">
                {/* Encabezado */}
                <div className="flex flex-col gap-3 text-center mx-auto items-center scrollanimation animate-zoom-in max-w-2xl">
                    <div className="flex flex-row gap-2 items-center">
                        <img
                            src="https://html.rometheme.net/pharmed/image/cuida_medicine-outline.png"
                            className="w-10 h-10 object-contain"
                            alt="Medicine icon"
                        />
                        <h6 className="text-primary m-0 font-semibold">Services</h6>
                    </div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        Empowering Wellness Delivering Care
                    </h3>
                    <p className="text-gray-600">
                        Providing personalized, compassionate healthcare that focuses on improving overall well-being.
                    </p>
                </div>

                {/* Contenido principal */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mt-8 md:mt-12">

                    {/* Columna izquierda - Imagen con información de contacto */}
                    <div className="lg:col-span-5">
                        <div className="flex flex-col gap-3 h-full">
                            <div className="relative overflow-hidden rounded-3xl h-full min-h-[400px] md:min-h-[500px]">
                                <img
                                    src="https://html.rometheme.net/pharmed/image/img31.jpg"
                                    alt="Pharmacy service"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/70 to-transparent"></div>

                                {/* Contenido sobre la imagen */}
                                <div className="absolute bottom-0 left-0 text-white p-4 md:p-6 lg:p-8">
                                    <div className="flex flex-col gap-4 md:gap-6">
                                        <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                                            We are Professional Pharmacy and Medical Service
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna derecha - Tarjetas de servicios */}
                    <div className="lg:col-span-7">

                        {/* Versión móvil (sin scroll) */}
                        <div className="md:hidden">
                            <div className="flex flex-col gap-4 md:gap-6">
                                {mobileServices.map((service) => (
                                    <ServiceCard key={service.id} service={service} />
                                ))}
                            </div>
                        </div>

                        {/* Versión desktop (con scroll) */}
                        <div className="hidden md:block">
                            <div className="h-[500px] md:h-[600px] lg:h-[700px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-gray-100 hover:scrollbar-thumb-primary/50">
                                <div className="flex flex-col gap-4 md:gap-6 pb-4">
                                    {/* Primera fila especial */}
                                    {desktopServices.length >= 2 && (
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                                            <div className="lg:col-span-2">
                                                <ServiceCard service={desktopServices[0]} />
                                            </div>
                                            <div className="lg:col-span-1">
                                                <ServiceCard service={desktopServices[1]} layout="compact" />
                                            </div>
                                        </div>
                                    )}

                                    {/* Resto de servicios */}
                                    {desktopServices.slice(2).map((service) => (
                                        <ServiceCard key={service.id} service={service} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Componente de tarjeta reutilizable
const ServiceCard = ({ service }) => {
    if (service.compact) {
        return (
            <div className="flex flex-col py-6 px-6 bg-blue-50 rounded-2xl md:rounded-3xl h-full border border-blue-100 hover:shadow-lg transition-shadow duration-300 justify-between">
                <div className="flex justify-center">
                    <div className="w-16 h-16 flex items-center justify-center">
                        {service.icon}
                    </div>
                </div>
                <div className="flex flex-col gap-3 items-center text-center">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 m-0">{service.title}</h4>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 py-6 px-6 bg-blue-50 rounded-2xl md:rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="icon-box w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                    {service.icon}
                </div>
                <div className="flex flex-col gap-3 flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-gray-900 m-0">{service.title}</h4>
                    {service.description && (
                        <p className="text-gray-600 text-sm md:text-base">
                            {service.description}
                        </p>
                    )}
                    <a href={service.link} className="text-primary font-semibold hover:underline inline-flex items-center gap-1 group mt-2">
                        Read More
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;