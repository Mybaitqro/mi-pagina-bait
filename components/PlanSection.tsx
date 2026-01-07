import React from 'react';
import { PLANS } from '../constants';
import { Plan } from '../types';

interface Props {
  onAdd: (p: Plan) => void;
}

export const PlanSection: React.FC<Props> = ({ onAdd }) => {
  return (
    <section id="planes" className="py-24 bg-zinc-950 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">Paquetes Bait</h2>
          <p className="text-zinc-500 font-bold italic">Elige la vigencia y datos que necesites.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map(plan => (
            <div key={plan.id} className={`relative bg-zinc-900 p-10 rounded-[3rem] border-2 ${plan.isPopular ? 'border-bait' : 'border-zinc-800'} transition-transform hover:scale-105`}>
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-bait text-black px-6 py-1 rounded-full font-black text-xs uppercase tracking-widest">
                  MÁS VENDIDO
                </div>
              )}
              <h3 className="text-zinc-500 font-black uppercase text-sm mb-6 tracking-widest">{plan.name}</h3>
              <div className="flex items-end gap-2 mb-8">
                <span className="text-6xl font-black text-bait">${plan.price}</span>
                <span className="text-zinc-500 font-bold mb-2">/ {plan.validity}</span>
              </div>
              <div className="bg-zinc-800 rounded-2xl p-6 mb-8 text-center">
                <p className="text-4xl font-black text-white">{plan.data}</p>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Incluidos</p>
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-bold text-zinc-400">
                    <i className="fas fa-check text-bait"></i> {f}
                  </li>
                ))}
              </ul>
              <button onClick={() => onAdd(plan)} className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest transition ${plan.isPopular ? 'bg-bait text-black' : 'bg-white text-black hover:bg-bait'}`}>
                Comprar Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};