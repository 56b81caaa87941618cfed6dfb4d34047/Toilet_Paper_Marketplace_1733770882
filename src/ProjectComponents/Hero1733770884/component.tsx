import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col items-center h-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Your One-Stop Shop for All Things TP</h1>
          <p className="text-xl mb-6">Browse, compare, and buy toilet paper from various brands and suppliers, all in one convenient marketplace.</p>
        </div>
        <div className="w-full max-w-2xl">
          <img src={`https://raw.githubusercontent.com/56b81caaa87941618cfed6dfb4d34047/Toilet_Paper_Marketplace_1733770882/${window.MI_PROJECT_GIT_REF || 'main'}/src/assets/images/bda83122efbe4571b3d88f726f79c9b0.jpeg`} alt="Hero" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>
    </div>
  );
};

export { Hero as component }