import React from 'react';

interface Ingredient {
  name: string;
  amount: string;
  details?: string;
}

const ingredients: Ingredient[] = [
  { name: 'Proteína de ervilha em pó', amount: '400g' },
  { name: 'PVT em pó', amount: '200g', details: 'proteína isolada de soja' },
  { name: 'Grão-de-bico cozido', amount: '200g' },
  { name: 'Sementes de chia hidratadas', amount: '100g' },
  { name: 'Sementes de girassol trituradas', amount: '50g' },
  { name: 'Azeite extravirgem', amount: '2 colheres de sopa', details: '~26g' },
  { name: 'Suco de limão', amount: '1 unidade' },
  { name: 'Temperos naturais', amount: 'a gosto', details: 'cúrcuma, pimenta, alho em pó' },
];

const Ingredients: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-stone-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-800 text-center">
          Ingredientes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ingredients.map((ingredient, index) => (
            <div 
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 transition-transform hover:scale-102"
            >
              <div className="bg-green-100 text-green-800 font-semibold py-2 px-3 rounded-lg mr-4 min-w-20 text-center">
                {ingredient.amount}
              </div>
              <div>
                <h3 className="font-medium text-gray-800">{ingredient.name}</h3>
                {ingredient.details && (
                  <p className="text-sm text-gray-600">{ingredient.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;