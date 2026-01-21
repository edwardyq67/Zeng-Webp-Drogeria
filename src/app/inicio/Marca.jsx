"use client";

import React, { useState } from 'react';
import { FileText, Search, X } from 'lucide-react';
import marcasData from '@/lib/json/marcas.json';

function Marca() {
    const [searchTerm, setSearchTerm] = useState('');
    const partners = marcasData.partners;

    // Función para obtener el nombre legible de la marca
    const getBrandName = (logoPath) => {
        const fileName = logoPath.split('/').pop().split('.')[0];
        // Decodificar %20 a espacios y reemplazar guiones bajos
        return decodeURIComponent(fileName).replace(/_/g, ' ');
    };

    // Filtrar partners por término de búsqueda
    const filteredPartners = partners.filter(partner => {
        const brandName = getBrandName(partner.logo).toLowerCase();
        return brandName.includes(searchTerm.toLowerCase());
    });

    return (
        <section id='Marcas' className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-600 text-white py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                            Marcas y Proveedores
                        </h1>
                        <p className="text-lg md:text-xl text-white/90 mb-8">
                            Trabajamos con las mejores marcas farmacéuticas y proveedores médicos
                        </p>

                        {/* Barra de búsqueda */}
                        <div className="relative max-w-2xl mx-auto">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Buscar marca o proveedor..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-12 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                                />
                                {searchTerm && (
                                    <button
                                        onClick={() => setSearchTerm('')}
                                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contador y estadísticas */}
            <div className="container mx-auto px-4 -mt-8 mb-12">
                <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary">{partners.length}</div>
                            <div className="text-gray-600 mt-2">Marcas Totales</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary">
                                {partners.filter(p => p.pdfs && p.pdfs.length > 0).length}
                            </div>
                            <div className="text-gray-600 mt-2">Con Catálogos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary">
                                {partners.reduce((acc, p) => acc + (p.pdfs?.length || 0), 0)}
                            </div>
                            <div className="text-gray-600 mt-2">Catálogos Disponibles</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Grid de marcas */}
            <div className="container mx-auto px-4 pb-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
                    {filteredPartners.map((partner) => {
                        const brandName = getBrandName(partner.logo);
                        
                        return (
                            <div
                                key={partner.id}
                                className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border ${partner.pdfs && partner.pdfs.length > 0
                                        ? 'border-primary/20 hover:border-primary/40'
                                        : 'border-gray-200'
                                    }`}
                            >
                                {/* Logo */}
                                <div className="p-6 flex items-center justify-center h-40">
                                    <img
                                        src={partner.logo}
                                        alt={`Logo ${brandName}`}
                                        className="max-h-24 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://via.placeholder.com/150x75?text=Logo+No+Disponible";
                                        }}
                                    />
                                </div>

                                {/* Footer con botones PDF */}
                                <div className="px-4 pb-4">
                                    <h3 className="text-center text-sm font-medium text-gray-700 mb-3 truncate">
                                        {brandName}
                                    </h3>

                                    {partner.pdfs && partner.pdfs.length > 0 ? (
                                        <div className="space-y-2">
                                            {/* Mostrar máximo 2 botones principales */}
                                            {partner.pdfs.slice(0, 2).map((pdf, index) => (
                                                <a
                                                    key={index}
                                                    href={pdf}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full bg-primary text-white hover:bg-primary-600 border border-primary rounded-lg flex flex-row items-center justify-center gap-2 px-3 py-2 text-sm font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
                                                >
                                                    <FileText className="w-4 h-4" />
                                                    <span>
                                                        {partner.pdfs.length === 1 ? 'Ver Catálogo' : `Catálogo ${index + 1}`}
                                                    </span>
                                                </a>
                                            ))}

                                            {/* Si hay más de 2 PDFs, mostrar iconos adicionales */}
                                            {partner.pdfs.length > 2 && (
                                                <div className="flex flex-wrap items-center justify-center gap-1 pt-1">
                                                    <span className="text-xs text-gray-500 mr-1">Más:</span>
                                                    {partner.pdfs.slice(2).map((pdf, index) => (
                                                        <a
                                                            key={index + 2}
                                                            href={pdf}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-primary hover:text-primary-600 transition-colors"
                                                            title={`Catálogo ${index + 3}`}
                                                        >
                                                            <FileText className="w-4 h-4" />
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="text-center py-2">
                                            <span className="text-gray-400 text-sm">Sin catálogo digital</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mensaje si no hay resultados */}
                {filteredPartners.length === 0 && (
                    <div className="text-center py-12">
                        <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron marcas</h3>
                        <p className="text-gray-600">Intenta con otro término de búsqueda</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Marca;