import React, { useEffect, useState } from 'react';
import { LOGO_URL } from '../constants';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-black text-bait text-[10px] font-black uppercase tracking-[0.3em] py-2 text-center">
        ⚡️ Portabilidad a Bait: Conserva tu número y recibe 20GB de regalo ⚡️
      </div>
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md py-3 shadow-lg' : 'bg-white py-6 shadow-sm'
      } px-6 flex justify-between items-center`}>
        <div className="flex items-center gap-16">
          <a href="#" className="hover:scale-105 transition-transform flex-shrink-0">
            {/* Logo mantenido en 116px de altura */}
            <img src={LOGO_URL} alt="Bait" className="h-[116px] w-auto object-contain" />
          </a>
          {/* Tamaño de fuente aumentado a 16px (text-base) y espaciado gap-12 */}
          <div className="hidden lg:flex gap-12 font-black text-base uppercase tracking-widest text-gray-500">
            <a href="#conectividad" className="hover:text-black hover:border-b-4 border-bait transition-all pb-1">SIMs</a>
            <a href="#planes" className="hover:text-black hover:border-b-4 border-bait transition-all pb-1">Planes</a>
            <a href="#tienda" className="hover:text-black hover:border-b-4 border-bait transition-all pb-1">Equipos</a>
            <a href="#distribuidores" className="hover:text-black hover:border-b-4 border-bait transition-all pb-1">Ser Socio</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <a href="https://mibait.com/recargas" target="_blank" className="hidden sm:block bg-bait text-black px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition shadow-md">Recargas</a>
          <button onClick={onOpenCart} className="relative p-3 bg-gray-50 rounded-full hover:bg-bait transition-all group">
            <i className="fas fa-shopping-bag text-2xl text-black"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-bait text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in duration-300">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};