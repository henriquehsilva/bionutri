import React from 'react';

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: 'Hidrate a chia',
    description: 'Misture as sementes de chia com água na proporção de 1:3 e deixe hidratar por 15 minutos até formar um gel.'
  },
  {
    title: 'Processe os ingredientes',
    description: 'No processador, coloque todos os ingredientes e bata até formar uma pasta homogênea. Isso pode levar alguns minutos.'
  },
  {
    title: 'Ajuste a textura',
    description: 'Se necessário, adicione água ou azeite para ajustar a consistência conforme sua preferência.'
  },
  {
    title: 'Armazene adequadamente',
    description: 'Divida a biomassa em porções e armazene em potes herméticos. Mantém-se fresca por até 5 dias na geladeira ou 3 meses no congelador.'
  }
];

const Preparation: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-800 text-center">
          Modo de Preparo
        </h2>
        
        <div className="relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative mb-8 pl-16 md:pl-20">
              {/* Step number circle */}
              <div className="absolute left-0 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold z-10">
                {index + 1}
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="font-bold text-xl mb-2 text-green-700">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Preparation;