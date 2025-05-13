
import React from 'react';
import { Truck } from 'lucide-react';

interface LogoProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'full' | 'icon';
}

const Logo: React.FC<LogoProps> = ({ color = '#FF0000', size = 'medium', variant = 'full' }) => {
  const sizeClasses = {
    small: 'text-lg',
    medium: 'text-2xl',
    large: 'text-4xl',
  };
  
  const iconSize = {
    small: 16,
    medium: 24,
    large: 32,
  };

  if (variant === 'icon') {
    return (
      <div className="inline-flex items-center justify-center">
        <Truck size={iconSize[size]} color={color} className="animate-fade-in" />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 font-bold ${sizeClasses[size]}`} style={{ color }}>
      <Truck size={iconSize[size]} color={color} className="animate-fade-in" />
      <span className="animate-fade-in font-extrabold">AC Mudanças</span>
    </div>
  );
};

export default Logo;
