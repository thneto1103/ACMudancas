import React from 'react';
import deliverMan from './imgs/DeliverMan.jpeg'; // ✅ Import image properly

const AboutUs: React.FC = () => {
  return (
    <section id="sobre" className="bg-ac-white py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-ac-black mb-12">Sobre Nós</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src={deliverMan} 
              alt="Equipe AC Mudanças em ação" 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <p className="text-gray-800 mb-4">
              A AC Fretes e Mudanças é uma empresa especializada em transporte, fretes e mudanças residenciais e comerciais, com foco total na satisfação do cliente. Atuamos com agilidade, responsabilidade e atenção aos detalhes, oferecendo um atendimento exclusivo e humanizado.
            </p>
            
            <p className="text-gray-800 mb-4">
              Aqui, gostamos do que fazemos — e isso faz toda a diferença. Cada cliente é único, e cada mudança é tratada com o cuidado que merece. Temos compromisso com a integridade dos seus bens, garantindo que tudo chegue ao destino em segurança.
            </p>
            
            <p className="text-gray-800 mb-4">
              Nosso diferencial está no atendimento rápido e personalizado, com profissionais preparados e apaixonados pelo que fazem. Seja uma entrega simples ou uma grande mudança, estamos prontos para oferecer a melhor experiência.
            </p>
            
            <div className="mt-6">
              <a 
                href="#servicos" 
                className="button button-primary rounded-full"
              >
                Conheça Nossos Serviços
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
