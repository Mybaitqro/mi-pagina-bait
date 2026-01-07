
import React from 'react';
import { PHONES, PAYJOY_LOGO_URL } from '../constants';
import { Phone } from '../types';

interface Props {
  onAdd: (p: Phone) => void;
}

export const PhoneSection: React.FC<Props> = ({ onAdd }) => {
  return (
    <section id="tienda" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 italic">Smartphone Store</h2>
          
          <div className="flex flex-col items-center gap-8 mt-6">
            {/* Badge de PayJoy */}
            <div className="bg-bait/10 inline-flex items-center gap-4 px-8 py-4 rounded-full border-2 border-bait shadow-sm">
              <i className="fas fa-id-card text-black text-2xl"></i>
              <span className="font-black text-lg uppercase tracking-widest">Crédito PayJoy solo con tu INE</span>
            </div>
            
            {/* Logo de PayJoy para confianza - TAMAÑO IGUALADO AL HEADER */}
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-2">Aliado oficial de financiamiento:</span>
              <img 
                src={PAYJOY_LOGO_URL} 
                alt="PayJoy Logo" 
                className="h-[80px] md:h-[116px] w-auto object-contain transform hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
          
          <p className="mt-10 text-gray-500 font-bold italic underline decoration-bait decoration-4 text-xl">
            ¡Estrena hoy y paga poco a poco en tu sucursal más cercana!
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PHONES.map(phone => (
            <div key={phone.id} className="group flex flex-col bg-gray-50 rounded-[3rem] p-8 border-2 border-transparent hover:border-bait transition-all duration-500 shadow-sm hover:shadow-2xl">
              <div className="h-64 flex items-center justify-center mb-8 relative">
                <div className="absolute top-0 right-0 bg-black text-bait text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  PayJoy Listo
                </div>
                <img src={phone.image} alt={phone.model} className="max-h-full group-hover:scale-110 transition duration-500" />
              </div>
              
              <div className="flex-1">
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">{phone.brand}</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">{phone.model}</h3>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {phone.specs?.map((s, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-[10px] font-black uppercase border">{s}</span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-400 uppercase">Precio Contado</span>
                    <p className="text-4xl font-black">${phone.price.toLocaleString()}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[9px] font-black text-bait bg-black px-2 py-0.5 rounded uppercase">Mensualidades</span>
                    <span className="text-xs font-bold text-gray-500 italic">desde $250/sem*</span>
                  </div>
                </div>
                
                <button 
                  onClick={() => onAdd(phone)} 
                  className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-bait hover:text-black transition-all shadow-xl flex items-center justify-center gap-3"
                >
                  <i className="fas fa-shopping-cart"></i>
                  Apartar Equipo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
