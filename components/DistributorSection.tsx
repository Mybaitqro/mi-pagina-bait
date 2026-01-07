import React, { useState } from 'react';

export const DistributorSection: React.FC = () => {
  const [sent, setSent] = useState(false);
  
  return (
    <section id="distribuidores" className="py-24 bg-bait text-black px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-6xl lg:text-8xl font-black italic tracking-tighter leading-[0.85] mb-8 uppercase">
            GANA DINERO <br/> CON NOSOTROS
          </h2>
          <p className="text-xl font-bold mb-10 italic">
            Conviértete en distribuidor autorizado Bait y gana comisiones por activaciones y recargas.
          </p>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 font-black uppercase tracking-tighter text-xl">
              <i className="fas fa-check-circle text-black text-2xl"></i> Altas Comisiones
            </li>
            <li className="flex items-center gap-4 font-black uppercase tracking-tighter text-xl">
              <i className="fas fa-check-circle text-black text-2xl"></i> Material Publicitario
            </li>
            <li className="flex items-center gap-4 font-black uppercase tracking-tighter text-xl">
              <i className="fas fa-check-circle text-black text-2xl"></i> Soporte 24/7
            </li>
          </ul>
        </div>
        <div className="bg-white p-12 rounded-[4rem] shadow-3xl">
          {sent ? (
            <div className="text-center py-20">
              <i className="fas fa-rocket text-6xl text-bait mb-6 animate-bounce"></i>
              <h3 className="text-3xl font-black uppercase italic tracking-tighter">¡LISTO!</h3>
              <p className="font-bold text-gray-500 mt-4">Un asesor de Bait Querétaro te llamará hoy mismo.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-6">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 italic">Solicitar Información</h3>
              <input required type="text" placeholder="Nombre completo" className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-bait outline-none font-bold" />
              <input required type="tel" placeholder="Número de WhatsApp" className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-bait outline-none font-bold" />
              <input required type="text" placeholder="Ciudad / Municipio" className="w-full p-6 bg-gray-50 rounded-2xl border-2 border-transparent focus:border-bait outline-none font-bold" />
              <button type="submit" className="w-full bg-black text-bait py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-105 transition shadow-2xl">
                Enviar Solicitud
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};