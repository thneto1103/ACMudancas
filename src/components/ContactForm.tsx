import React, { useRef, useState } from 'react';
import WhatsAppButton from './WhatsAppButton';
import { useToast } from '@/hooks/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xldbplok', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.status === 200) {
        toast({
          title: "Formulário enviado!",
          description: "Entraremos em contato em breve.",
        });
        form.reset();
      } else {
        toast({
          title: "Erro ao enviar formulário",
          description: "Tente novamente mais tarde.",
        });
      }
    } catch (err) {
      console.error('Network or unexpected error:', err);
      toast({
        title: "Erro de conexão",
        description: "Verifique sua internet e tente novamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="bg-ac-white py-20">
      <div className="container mx-auto">
        <h2 className="text-center text-ac-black mb-12">Entre em Contato</h2>

        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-red focus:border-transparent"
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
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-red focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Mensagem / Solicitação de orçamento
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ac-red focus:border-transparent"
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
