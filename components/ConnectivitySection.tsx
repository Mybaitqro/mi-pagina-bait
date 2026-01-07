import React from 'react';
import { CONNECTIVITY_PRODUCTS } from '../constants';
import { Product } from '../types';

interface Props {
  onAdd: (p: Product) => void;
}

export const ConnectivitySection: React.FC<Props> = ({ onAdd }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
      {CONNECTIVITY_PRODUCTS.map(p => (
        <div key={p.id} className="bg-gray-50 rounded-[3rem] p-10 flex flex-col sm:flex-row gap-8 items-center border-2 border-transparent hover:border-bait transition-all group">
          <div className="w-32 h-32 bg-bait rounded-3xl flex items-center justify-center text-5xl text-black shadow-lg group-hover:bg-black group-hover:text-bait transition">
            <i className={`fas ${p.type === 'ESIM' ? 'fa-qrcode' : 'fa-sim-card'}`}></i>
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-3xl font-black uppercase tracking-tighter mb-2">{p.name}</h3>
            <p className="text-gray-500 font-medium italic mb-6">{p.description}</p>
            <div className="flex items-center justify-center sm:justify-start gap-8">
              <span className="text-4xl font-black">${p.price}</span>
              <button onClick={() => onAdd(p)} className="bg-black text-bait px-8 py-3 rounded-2xl font-black uppercase text-sm hover:scale-110 transition shadow-xl">Añadir</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};