import React, { useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formspreeURL = 'https://formspree.io/f/xldbplok';

  const formDataToSend = new FormData();
  formDataToSend.append('name', formData.name);
  formDataToSend.append('email', formData.email);
  formDataToSend.append('message', formData.message);

  try {
    const response = await fetch(formspreeURL, {
      method: 'POST',
      body: formDataToSend,
    });

    if (response.ok) {
      toast({
        title: "Formulário enviado!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    } else {
      toast({
        title: "Erro ao enviar formulário",
        description: "Tente novamente mais tarde.",
      });
    }
  } catch (error) {
    toast({
      title: "Erro de conexão",
      description: "Verifique sua conexão e tente novamente.",
    });
  }

  setIsSubmitting(false);
};


  return (
    <section id="contato" className="bg-ac-white py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-ac-black mb-12">Entre em Contato</h2>
        
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-red focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-red focus:border-transparent"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensagem / Solicitação de orçamento
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-red focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full button button-primary rounded-md font-bold text-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Ou entre em contato diretamente pelo WhatsApp</p>
            <WhatsAppButton phoneNumber="+5521969659919" className="mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
