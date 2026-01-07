
import React from 'react';
import { PHONES, PAYJOY_LOGO_URL } from '../constants';
import { Phone } from '../types';

interface Props {
  onAdd: (p: Phone) => void;
}

export const PhoneSection: React.FC<Props> = ({ onAdd }) => {
  return (
    <section id="tienda" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* CABECERA ESTILO IMAGEN DE REFERENCIA */}
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-12 italic text-zinc-900">
            Smartphone Store
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full max-w-5xl">
            {/* Lado Izquierdo: El Badge de Crédito */}
            <div className="flex-1 flex justify-center md:justify-end">
              <div className="bg-white border-2 border-bait rounded-full px-8 py-5 flex items-center gap-4 shadow-sm">
                <i className="fas fa-id-card text-black text-2xl"></i>
                <span className="font-black text-lg uppercase tracking-widest text-black">
                  Crédito PayJoy solo con tu INE
                </span>
              </div>
            </div>
            
            {/* Lado Derecho: El Logo de PayJoy (Tamaño 116px igual que Bait) */}
            <div className="flex-1 flex justify-center md:justify-start">
              <img 
                src={PAYJOY_LOGO_URL} 
                alt="PayJoy Logo" 
                className="h-[90px] md:h-[116px] w-auto object-contain" 
              />
            </div>
          </div>
          
          {/* Texto pequeño inferior */}
          <div className="mt-8">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.5em]">
              Aliado oficial de financiamiento:
            </span>
          </div>
          
          <p className="mt-12 text-gray-500 font-bold italic underline decoration-bait decoration-4 text-xl text-center">
            ¡Estrena hoy y paga poco a poco en tu sucursal más cercana!
          </p>
        </div>

        {/* CUADRÍCULA DE TELÉFONOS */}
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
