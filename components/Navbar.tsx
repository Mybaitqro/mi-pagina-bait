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
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-lg' : 'bg-white py-5 shadow-sm'
    } px-6 flex justify-between items-center`}>
      <div className="flex items-center gap-12">
        <a href="#" className="hover:scale-105 transition-transform">
          <img src={LOGO_URL} alt="Bait" className="h-9 w-auto" />
        </a>
        <div className="hidden lg:flex gap-10 font-black text-[11px] uppercase tracking-[0.1em] text-gray-400">
          <a href="#conectividad" className="hover:text-black hover:border-b-2 border-bait transition-all h-6">SIMs</a>
          <a href="#planes" className="hover:text-black hover:border-b-2 border-bait transition-all h-6">Planes</a>
          <a href="#tienda" className="hover:text-black hover:border-b-2 border-bait transition-all h-6">Equipos</a>
          <a href="#distribuidores" className="hover:text-black hover:border-b-2 border-bait transition-all h-6">Ser Socio</a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://mibait.com/recargas" target="_blank" className="hidden sm:block bg-bait text-black px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-black hover:text-white transition shadow-sm">Recargas</a>
        <button onClick={onOpenCart} className="relative p-2.5 bg-gray-50 rounded-full hover:bg-bait transition-all group">
          <i className="fas fa-shopping-bag text-xl text-black"></i>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-bait text-[9px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-in zoom-in duration-300">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};