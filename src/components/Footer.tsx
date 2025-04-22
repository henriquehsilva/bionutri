import React from 'react';
import { Leaf, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-10 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex justify-center items-center mb-6">
          <Leaf className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold">Biomassa Ultra Proteica Vegana</h2>
        </div>
        
        <div className="text-center mb-8">
          <p className="text-green-200 mb-2">
            Uma receita desenvolvida para quem busca nutrição de alta qualidade com ingredientes naturais.
          </p>
          <p className="flex items-center justify-center text-green-200">
            Feito com <Heart className="w-4 h-4 mx-1 text-red-400" /> para a comunidade vegana
          </p>
        </div>
        
        <div className="text-center text-green-300 text-sm">
          <p>© 2025 Nutrição Vegana Avançada</p>
          <p className="mt-1">Compartilhe esta receita com quem precisa de mais proteína na dieta vegana!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;