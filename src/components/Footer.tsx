
import React from 'react';
import Logo from './Logo';
import { Facebook, Instagram, Twitter, Phone, Mail, Home, Info, List, Phone as Contact } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'Sobre', href: '#sobre', icon: Info },
    { name: 'Serviços', href: '#servicos', icon: List },
    { name: 'Contato', href: '#contato', icon: Contact },
  ];
  
  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/share/1Fweev1mso/', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/acfretesemudancasrj?igsh=NW51a3FyYnF6Z3Zy', icon: Instagram },
    //{ name: 'Twitter', href: '#', icon: Twitter },
  ];

  return (
    <footer className="bg-ac-black text-ac-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and info */}
          <div className="flex flex-col items-center md:items-start">
            <Logo color="#FFFFFF" size="medium" />
            <div className="mt-4 space-y-3">
              <p className="flex items-center gap-2">
                <Phone size={16} /> (21) 96965-9919
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} /> Acfretesmudanças@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Mail size={0}/> CNPJ: 32.219.677/0001-31
              </p>
              <p className="flex items-center gap-2">
                <Mail size={0}/> AC TRANSPORTES -AUTO SOCORRO, FRETES E MUDANÇAS RJ LTDA
              </p>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-center md:text-left">Links Rápidos</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-4">
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <React.Fragment key={link.name}>
                    <a 
                      href={link.href} 
                      className="hover:text-ac-red transition-colors inline-flex items-center gap-1 py-1"
                    >
                      <Icon size={16} /> {link.name}
                    </a>
                    {index < quickLinks.length - 1 && (
                      <span className="hidden md:inline">•</span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          
          {/* Social links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.name}
                    href={social.href}
                    className="bg-ac-white/10 hover:bg-ac-red transition-colors p-2 rounded-full"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="border-t border-ac-white/20 mt-8 pt-6 text-center">
          <p>© {year} AC Fretes e Mudanças RJ. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
