import React, { useEffect } from 'react';
import Header from './components/Header';
import Ingredients from './components/Ingredients';
import Preparation from './components/Preparation';
import NutritionTable from './components/NutritionTable';
import UsageGuide from './components/UsageGuide';
import ConsumptionIdeas from './components/ConsumptionIdeas';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Biomassa Ultra Proteica Vegana | 31g de Proteína por 100g';
    
    // Add smooth scroll behavior for the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Ingredients />
        <Preparation />
        <NutritionTable />
        <UsageGuide />
        <ConsumptionIdeas />
      </main>
      <Footer />
    </div>
  );
}

export default App;