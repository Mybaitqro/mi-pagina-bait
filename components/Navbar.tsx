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
        scrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-xl' : 'bg-white py-8 shadow-sm'
      } px-10 flex justify-between items-center`}>
        <div className="flex items-center gap-24">
          <a href="#" className="hover:scale-105 transition-transform flex-shrink-0">
            {/* Logo en 116px de altura */}
            <img src={LOGO_URL} alt="Bait" className="h-[116px] w-auto object-contain" />
          </a>
          
          {/* Tamaño de fuente aumentado a 2xl (24px) y espacio entre ellos a gap-16 */}
          <div className="hidden lg:flex gap-16 font-black text-2xl uppercase tracking-[0.15em] text-gray-400">
            <a href="#conectividad" className="hover:text-black hover:border-b-[6px] border-bait transition-all pb-2">SIMs</a>
            <a href="#planes" className="hover:text-black hover:border-b-[6px] border-bait transition-all pb-2">Planes</a>
            <a href="#tienda" className="hover:text-black hover:border-b-[6px] border-bait transition-all pb-2">Equipos</a>
            <a href="#distribuidores" className="hover:text-black hover:border-b-[6px] border-bait transition-all pb-2">Ser Socio</a>
          </div>
        </div>

        <div className="flex items-center gap-8">
          <a href="https://mibait.com/recargas" target="_blank" className="hidden sm:block bg-bait text-black px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition shadow-xl transform hover:-translate-y-1">
            Recargas
          </a>
          <button onClick={onOpenCart} className="relative p-4 bg-gray-50 rounded-full hover:bg-bait transition-all group shadow-md">
            <i className="fas fa-shopping-bag text-3xl text-black"></i>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-bait text-[12px] font-black w-7 h-7 rounded-full flex items-center justify-center border-2 border-white animate-bounce shadow-lg">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};