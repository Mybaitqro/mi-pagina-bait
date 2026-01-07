
import React;
import { LOGO_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-20 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
        <div className="col-span-1 md:col-span-1">
          {/* Aumentamos h-10 a h-20 en el footer */}
          <img src={LOGO_URL} alt="Bait" className="h-20 mb-8 brightness-0 invert" />
          <p className="text-zinc-500 font-bold text-sm italic">Distribuidor Autorizado Querétaro. Conectando a México con la red de Walmart.</p>
        </div>
        <div>
          <h4 className="text-bait font-black uppercase tracking-widest text-xs mb-8">Navegación</h4>
          <ul className="space-y-4 font-bold text-sm text-zinc-400 uppercase tracking-tighter">
            <li><a href="#conectividad" className="hover:text-bait transition">SIMs & eSIMs</a></li>
            <li><a href="#planes" className="hover:text-bait transition">Planes</a></li>
            <li><a href="#tienda" className="hover:text-bait transition">Equipos</a></li>
            <li><a href="#distribuidores" className="hover:text-bait transition">Distribuidores</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-bait font-black uppercase tracking-widest text-xs mb-8">Horario</h4>
          <p className="text-zinc-400 font-bold text-sm uppercase">Lunes a Sábado <br/> 09:00 AM - 08:00 PM</p>
        </div>
        <div>
          <h4 className="text-bait font-black uppercase tracking-widest text-xs mb-8">Redes Sociales</h4>
          <div className="flex gap-6 text-2xl">
            <a href="#" className="hover:text-bait transition"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-bait transition"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-bait transition"><i className="fab fa-tiktok"></i></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-zinc-900 mt-20 pt-10 text-center text-[10px] font-black text-zinc-600 uppercase tracking-[0.3em]">
        &copy; 2024 Bait Querétaro - Todos los derechos reservados
      </div>
    </footer>
  );
};