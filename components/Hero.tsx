import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-bait py-20 lg:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-block bg-black text-bait px-4 py-1 rounded-full font-black text-xs uppercase tracking-[0.3em] mb-6">
            Querétaro Conectado
          </span>
          <h1 className="text-6xl lg:text-9xl font-black italic text-black leading-[0.85] tracking-tighter mb-8">
            INTERNET <br/> PARA <br/> TODOS
          </h1>
          <p className="text-xl font-bold text-black/80 mb-12 max-w-md mx-auto lg:mx-0">
            Únete a la red más grande de México con paquetes desde $30 pesos. Sin contratos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#conectividad" className="bg-black text-white px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
              Comprar SIM
            </a>
            <a href="#distribuidores" className="bg-white text-black px-12 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Ser Socio
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="bg-zinc-950 rounded-[4rem] aspect-square flex items-center justify-center p-12 shadow-3xl transform rotate-3 animate-float border-8 border-white/20">
             <div className="text-center">
                <i className="fas fa-bolt text-bait text-9xl mb-6"></i>
                <h3 className="text-white text-5xl font-black italic">4.5G LTE</h3>
             </div>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl -rotate-6">
             <p className="font-black text-black text-3xl">$100 MXN</p>
             <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Costo de activación</p>
          </div>
        </div>
      </div>
    </section>
  );
};