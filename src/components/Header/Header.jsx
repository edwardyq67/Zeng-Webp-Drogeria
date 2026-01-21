// components/Header/Header.jsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, Mail, Building2 } from 'lucide-react';
import data from '@/lib/json/data.json';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { contacto } = data;

  const menuItems = [
    { name: 'INICIO', href: '#Inicio' },
    { name: 'NOSOTROS', href: '#Nosotros' },
    { name: 'MARCAS', href: '#Marcas' },
    { name: 'CONTACTO', href: '#Contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      {/* Navegación principal */}
      <div className="transition-all duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo con transparencia condicional */}
            <Link href="/" className="flex items-center">
              <div className={`p-2 rounded-lg mr-3 transition-all duration-300 ${
                isScrolled 
                  ? 'bg-primary/10' 
                  : 'bg-white/20 backdrop-blur-sm'
              }`}>
                <div className="relative h-8 w-8">
                  <Image
                    src={contacto.logo}
                    alt="ZENG Logo"
                    fill
                    className="object-contain"
                    sizes="32px"
                    priority
                  />
                </div>
              </div>
              <div>
                <h1 className={`text-lg md:text-xl lg:text-2xl font-bold transition-all duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  Inversiones Bienestar
                </h1>
                <p className={`text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-white/90'
                }`}>
                  ZENG S.A.C.
                </p>
              </div>
            </Link>

            {/* Menú Desktop */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-medium transition-all duration-300 relative group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-primary-600' : 'bg-white'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* Botón menú móvil */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        {isMenuOpen && (
          <div className={`lg:hidden animate-in fade-in slide-in-from-top-5 duration-300 ${
            isScrolled 
              ? 'bg-white border-t border-gray-200' 
              : 'bg-white border-t border-gray-200'
          }`}>
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`py-3 px-4 rounded-lg font-medium transition-colors ${
                      isScrolled
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}

              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}