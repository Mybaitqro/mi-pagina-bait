import React from 'react';
import { LOCATIONS } from '../constants';

export const LocationSection: React.FC = () => {
  return (
    <section id="sucursales" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-16 uppercase tracking-tighter">Visítanos en Querétaro</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {LOCATIONS.map(loc => (
            <div key={loc.id} className="bg-white p-10 rounded-[3rem] border-2 border-transparent hover:border-bait transition shadow-xl flex flex-col">
              <h3 className="text-3xl font-black mb-4 uppercase italic tracking-tighter">{loc.name}</h3>
              <p className="text-gray-500 font-bold mb-6 italic">{loc.address}</p>
              <div className="mt-auto space-y-4 text-xs font-black uppercase tracking-widest text-gray-400">
                <p><i className="fas fa-clock text-bait mr-3"></i> {loc.hours}</p>
                <p><i className="fas fa-phone text-bait mr-3"></i> {loc.phone}</p>
              </div>
              <a 
                href={`https://www.google.com/maps/search/${encodeURIComponent(loc.address)}`} 
                target="_blank" 
                className="mt-10 block text-center bg-black text-bait py-4 rounded-2xl font-black hover:bg-bait hover:text-black transition uppercase tracking-widest shadow-lg"
              >
                Ver Mapa
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};