import React from 'react';
import { Calculator, Leaf } from 'lucide-react';

const UsageGuide: React.FC = () => {
  return (
    <section className="py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-green-800 text-center">
          Como Utilizar na Sua Dieta
        </h2>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-green-700 text-white p-6 flex flex-col justify-center items-center">
              <Calculator className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-center">Cálculo Prático</h3>
              <p className="text-center text-green-100">
                Simplifique o alcance da sua meta proteica diária
              </p>
            </div>
            
            <div className="md:w-2/3 p-6">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Esta biomassa foi criada para facilitar o alcance de metas proteicas na dieta vegana. Com <strong>31g de proteína por 100g</strong>, você pode:
              </p>
              
              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <p className="text-green-800 font-medium">
                  Para uma pessoa de 115kg, com meta de 2g de proteína por kg (230g/dia):
                </p>
                <div className="flex items-center mt-3">
                  <div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
                    =
                  </div>
                  <p className="ml-3 text-gray-700">
                    Consumo de aproximadamente <strong>750g</strong> dessa biomassa para atingir o objetivo.
                  </p>
                </div>
              </div>
              
              <div className="bg-amber-50 p-4 rounded-lg mb-6">
                <p className="font-medium text-amber-800">
                  Dica de proporção:
                </p>
                <p className="text-gray-700 mt-1">
                  Para cada 100g de biomassa, você obtém 31g de proteína, tornando fácil calcular a quantidade necessária para suas metas diárias.
                </p>
              </div>

              {/* Sugestão de Uso Diário */}
              <div className="bg-emerald-50 p-4 rounded-lg flex">
                <Leaf className="w-8 h-8 text-emerald-600 mr-3" />
                <div>
                  <p className="font-medium text-emerald-800 mb-2">
                    🚀 Sugestão de Uso Diário:
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>750g de biomassa = Proteína resolvida.</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Adicione:</span>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>2 porções de vegetais (ex: brócolis, espinafre, cenoura)</li>
                    <li>1 fruta (ex: laranja ou kiwi)</li>
                    <li>Um punhado pequeno de castanhas</li>
                    <li>Suplementação (<strong>B12</strong> e/ou <strong>ômega-3</strong>)</li>
                  </ul>
                  <p className="text-gray-700 mt-3">
                    Assim você cobre tudo de forma saudável e prática.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsageGuide;
