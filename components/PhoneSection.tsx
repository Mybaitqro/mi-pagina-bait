import React from 'react';
import { PHONES } from '../constants';
import { Phone } from '../types';

interface Props {
  onAdd: (p: Phone) => void;
}

export const PhoneSection: React.FC<Props> = ({ onAdd }) => {
  return (
    <section id="tienda" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">Smartphone Store</h2>
          <div className="bg-bait/10 inline-flex items-center gap-4 px-6 py-2 rounded-full border border-bait">
             <i className="fas fa-id-card text-black"></i>
             <span className="font-black text-xs uppercase tracking-widest">Crédito PayJoy solo con INE</span>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PHONES.map(phone => (
            <div key={phone.id} className="group flex flex-col bg-gray-50 rounded-[3rem] p-8 border-2 border-transparent hover:border-bait transition shadow-sm">
              <div className="h-64 flex items-center justify-center mb-8">
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
                <p className="text-4xl font-black mb-8">${phone.price.toLocaleString()}</p>
                <button onClick={() => onAdd(phone)} className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-bait hover:text-black transition shadow-xl">
                  Comprar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};