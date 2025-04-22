import React from 'react';

interface Idea {
  title: string;
  description: string;
}

const ideas: Idea[] = [
  {
    title: 'Patê Proteico',
    description: 'Espalhe em torradas, pães ou wraps para um lanche rápido e nutritivo.'
  },
  {
    title: 'Base para Hambúrgueres',
    description: 'Misture com aveia, tempere a gosto e forme hambúrgueres ricos em proteína.'
  },
  {
    title: 'Almôndegas Veganas',
    description: 'Faça bolinhas, passe em farinha de aveia e asse para criar deliciosas almôndegas.'
  },
  {
    title: 'Recheio para Wraps',
    description: 'Combine com vegetais frescos em um wrap para uma refeição completa e balanceada.'
  },
  {
    title: 'Acompanhamento de Saladas',
    description: 'Adicione pequenas porções à sua salada para aumentar o teor proteico.'
  },
  {
    title: 'Bowl Proteico',
    description: 'Use como base para bowls com vegetais, grãos e molhos para uma refeição completa.'
  }
];

const ConsumptionIdeas: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-stone-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-800 text-center">
          Sugestões de Consumo
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-400"></div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-green-700">{idea.title}</h3>
                <p className="text-gray-700">{idea.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 bg-amber-50 p-6 rounded-lg shadow-sm text-center">
          <p className="text-amber-800 font-medium">
            Experimente diferentes combinações e descubra suas preferidas!
          </p>
          <p className="text-gray-700 mt-2">
            A versatilidade desta biomassa permite infinitas possibilidades culinárias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsumptionIdeas;