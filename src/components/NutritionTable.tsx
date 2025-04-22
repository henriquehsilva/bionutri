import React from 'react';

interface NutrientInfo {
  name: string;
  value: string;
  highlight?: boolean;
}

const nutrients: NutrientInfo[] = [
  { name: 'Proteína', value: '31g', highlight: true },
  { name: 'Valor Energético', value: '290 kcal' },
  { name: 'Carboidratos', value: '18g' },
  { name: 'Gorduras Totais', value: '12g' },
  { name: 'Gorduras Saturadas', value: '1.5g' },
  { name: 'Gorduras Insaturadas', value: '10.5g' },
  { name: 'Fibras', value: '8g' },
  { name: 'Sódio', value: '15mg' },
];

const NutritionTable: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-stone-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-800 text-center">
          Tabela Nutricional
        </h2>
        <p className="text-center text-gray-600 mb-6">Valores por porção de 100g</p>
        
        <div className="bg-white p-6 rounded-xl shadow-md max-w-lg mx-auto">
          <div className="grid grid-cols-1 divide-y">
            {nutrients.map((nutrient, index) => (
              <div 
                key={index} 
                className={`py-3 flex justify-between items-center ${
                  nutrient.highlight ? 'bg-green-50 -mx-6 px-6 rounded-lg' : ''
                }`}
              >
                <span className={`font-medium ${nutrient.highlight ? 'text-green-800' : 'text-gray-700'}`}>
                  {nutrient.name}
                </span>
                <span className={`font-semibold ${nutrient.highlight ? 'text-green-700 text-xl' : 'text-gray-800'}`}>
                  {nutrient.value}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 bg-green-50 rounded-lg p-4">
            <h3 className="font-medium text-green-800 mb-2">Destaques:</h3>
            <ul className="text-gray-700 space-y-1">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Baixo teor de sódio
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Rico em fibras
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Rico em gorduras boas (ômega-3 e 6)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionTable;