import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ConnectivitySection } from './components/ConnectivitySection';
import { PlanSection } from './components/PlanSection';
import { PhoneSection } from './components/PhoneSection';
import { DistributorSection } from './components/DistributorSection';
import { LocationSection } from './components/LocationSection';
import { AIAssistant } from './components/AIAssistant';
import { Footer } from './components/Footer';
import { CartItem, Product, Plan, Phone } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product | Plan | Phone) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const total = cart.reduce((acc, curr) => acc + (curr.product.price * curr.quantity), 0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar cartCount={cart.reduce((a, b) => a + b.quantity, 0)} onOpenCart={() => setIsCartOpen(true)} />
      
      <main>
        <Hero />
        
        <div id="conectividad" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center mb-12">
            <h2 className="text-4xl font-black uppercase tracking-tighter">SIMs & eSIMs</h2>
            <p className="text-gray-500 font-bold italic">Cambia tu número a Bait por solo $100</p>
          </div>
          <ConnectivitySection onAdd={addToCart} />
        </div>

        <PlanSection onAdd={addToCart} />

        <DistributorSection />

        <PhoneSection onAdd={addToCart} />

        <LocationSection />

        <div className="py-24 bg-gray-50" id="ayuda">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-black mb-8 uppercase tracking-tighter">Asistente Virtual Bait</h2>
            <AIAssistant />
          </div>
        </div>
      </main>

      <Footer />

      {/* Floating WhatsApp */}
      <a 
        href="https://wa.me/524420000000" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-8 left-8 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl hover:scale-110 transition z-50 animate-bounce"
      >
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          <div className="relative w-full max-w-md bg-white h-full p-8 flex flex-col shadow-2xl border-l">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-black uppercase tracking-tighter">Mi Carrito</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-2xl hover:text-bait transition"><i className="fas fa-times"></i></button>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-20 text-gray-300">
                  <i className="fas fa-shopping-basket text-6xl mb-4"></i>
                  <p className="font-bold uppercase tracking-widest">Carrito vacío</p>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center mb-6 pb-6 border-b">
                    <div className="flex-1">
                      <p className="font-black uppercase text-sm">{item.product.name}</p>
                      <p className="text-xs font-bold text-gray-400">Cantidad: {item.quantity}</p>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-red-500 text-xs font-bold mt-2 hover:underline">Eliminar</button>
                    </div>
                    <p className="font-black text-xl">${(item.product.price * item.quantity).toLocaleString()}</p>
                  </div>
                ))
              )}
            </div>

            <div className="pt-8 border-t">
              <div className="flex justify-between items-center mb-8">
                <span className="font-black text-xl uppercase text-gray-400">Total</span>
                <span className="font-black text-5xl text-black">${total.toLocaleString()}</span>
              </div>
              <button className="w-full bg-black text-[#FFD500] py-6 rounded-2xl font-black text-xl uppercase tracking-widest hover:bg-bait hover:text-black transition shadow-xl">
                Pagar Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;