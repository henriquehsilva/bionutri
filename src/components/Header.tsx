import React from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-600 text-white py-16 px-4 md:px-8 rounded-b-3xl shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-center mb-4">
          <Leaf className="w-8 h-8 mr-2" />
          <h1 className="text-3xl md:text-4xl font-bold text-center leading-tight">
            Biomassa Ultra Proteica Vegana
          </h1>
          <Leaf className="w-8 h-8 ml-2" />
        </div>
        
        <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
          31g de Proteína por 100g
        </h2>
        
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl max-w-3xl mx-auto">
          <p className="text-lg text-center leading-relaxed">
            Uma mistura funcional e versátil, desenvolvida para quem busca alto consumo de proteína vegetal com praticidade e saúde. Ideal para atletas veganos, dietas hiperproteicas e pessoas que precisam controlar o sódio.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;