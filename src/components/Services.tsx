import React from 'react';
import { ArrowRight } from 'lucide-react';

// ✅ Importing images from local folder
import imgResidencial from './imgs/MudancaResidencial.jpeg';
import imgComercial from './imgs/MudancaComercial.jpeg';
import imgInterestadual from './imgs/MudancaInterestadual.jpeg';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
    <div className="h-48 overflow-hidden">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <div className="p-6">
      <h3 className="text-ac-black font-bold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a 
        href="#contato" 
        className="inline-flex items-center text-ac-red font-medium hover:underline"
      >
        Saiba mais <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  </div>
);

const Services: React.FC = () => {
  const services = [
    {
      title: 'Mudança Residencial',
      description: '"Equipe comprometida e atenciosa, precisei realizar minha mudança, urgente e eles fizeram com profissionalismo e comprometimento." -- Marta',
      imageUrl: imgResidencial,
    },
    {
      title: 'Mudança Comercial',
      description: '"Indico o serviço. Eles chegaram no horário, fizeram o que pedi e realizaram tudo com cuidado e segurança." -- Rodrigo',
      imageUrl: imgComercial,
    },
    {
      title: 'Mudança Interestadual',
      description: '"Quero dar os parabéns pelo trabalho prestado. Muita responsabilidade, atenção e profissionalismo. Em especial Márcio e Damião que chegaram no horário certo e deu tudo certo." -- Marlon',
      imageUrl: imgInterestadual,
    },
  ];

  return (
    <section id="servicos" className="bg-gray-50 py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-ac-black mb-12">Nossos Serviços</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
              imageUrl={service.imageUrl} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
