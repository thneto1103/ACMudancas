import React from 'react';
import truckLogo from './imgs/TruckLogo.jpeg'; // ✅ Correct import

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex items-center bg-ac-red"
    >
      <div className="absolute inset-0 bg-ac-white opacity-10"></div>
      <div className="container mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-ac-white animate-slide-up">
            <h1 className="font-extrabold mb-4 leading-tight">
              A Melhor Empresa de Fretes e Mudanças do Rio de Janeiro
            </h1>
            <p className="text-lg md:text-xl mb-6 font-light opacity-90">
              Segurança e agilidade no transporte de seus bens
            </p>
            <a 
              href="#contato" 
              className="button button-primary bg-ac-white text-ac-red hover:bg-ac-white/90 rounded-full text-base md:text-lg font-bold"
            >
              Solicite um Orçamento
            </a>
          </div>
          <div className="hidden md:block">
            <div className="rounded-lg overflow-hidden shadow-2xl animate-fade-in">
              <img 
                src={truckLogo}
                alt="AC Mudanças - Veículo de Mudanças" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
