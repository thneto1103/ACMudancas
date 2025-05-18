
import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav
      className={cn(
        'fixed w-full transition-all duration-300 z-50',
        scrolled ? 'bg-ac-white shadow-md py-2' : 'py-4'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#hero">
          <Logo color={scrolled ? '#FF0000' : '#FFFFFF'} />
        </a>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                'font-medium transition-all duration-300 hover:text-ac-red',
                scrolled ? 'text-ac-black' : 'text-ac-white'
              )}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="button button-primary rounded-full"
          >
            Solicite um Orçamento
          </a>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X size={24} color={scrolled ? '#000000' : '#FFFFFF'} />
          ) : (
            <Menu size={24} color={scrolled ? '#000000' : '#FFFFFF'} />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-ac-white shadow-md py-4 animate-fade-in">
          <div className="container mx-auto space-y-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-ac-black font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contato" 
              className="block button button-primary rounded-full w-full text-center"
              onClick={() => setIsOpen(false)}
            >
              Solicite um Orçamento
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
