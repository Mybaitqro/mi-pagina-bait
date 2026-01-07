import React, { useState } from 'react';
import { getRecommendation, AIResponse } from '../services/geminiService';

export const AIAssistant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<AIResponse | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;
    setLoading(true);
    const result = await getRecommendation(prompt);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="bg-zinc-950 p-6 md:p-10 rounded-[3rem] md:rounded-[4rem] shadow-3xl text-left border-4 border-bait/20">
      <div className="flex items-center gap-6 mb-10">
        <div className="w-14 h-14 bg-bait rounded-2xl flex items-center justify-center text-black text-2xl shadow-xl animate-pulse">
          <i className="fas fa-robot"></i>
        </div>
        <div>
          <h3 className="text-white text-xl font-black uppercase tracking-tighter italic">Bait Smart Assist</h3>
          <p className="text-bait text-[9px] font-black uppercase tracking-[0.2em]">Consultas en tiempo real</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative mb-6">
        <input 
          type="text" 
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="¿Hay cobertura en Juriquilla?" 
          className="w-full bg-zinc-900 border-2 border-zinc-800 rounded-2xl py-5 px-6 outline-none focus:border-bait text-white font-bold transition-all placeholder:text-zinc-600"
        />
        <button type="submit" disabled={loading} className="absolute right-3 top-3 bottom-3 bg-bait text-black px-5 rounded-xl font-black hover:bg-white transition disabled:opacity-50">
          {loading ? <i className="fas fa-circle-notch animate-spin"></i> : <i className="fas fa-location-arrow"></i>}
        </button>
      </form>

      {response && (
        <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
          <div className="p-6 bg-zinc-900 rounded-2xl border border-bait/10 text-zinc-300 font-medium leading-relaxed">
            {response.text}
          </div>
          
          {response.sources && response.sources.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[10px] font-black text-zinc-500 uppercase w-full mb-1">Fuentes verificadas:</span>
              {response.sources.map((source, i) => (
                <a 
                  key={i} 
                  href={source.uri} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[10px] bg-zinc-800 text-bait px-3 py-1 rounded-full border border-zinc-700 hover:bg-bait hover:text-black transition flex items-center gap-2"
                >
                  <i className="fas fa-external-link-alt"></i> {source.title.substring(0, 20)}...
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};