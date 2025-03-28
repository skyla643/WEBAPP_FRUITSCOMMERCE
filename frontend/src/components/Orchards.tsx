// src/components/Orchards.tsx
import React from 'react';

const Orchards: React.FC = () => {
  return (
    <div className="min-h-screen bg-lightGray p-8">
      <header className="bg-earthGreen text-white py-4 px-8 flex justify-between items-center shadow-custom-light">
        <h1 className="text-2xl font-heading">Orchard Monitoring</h1>
      </header>
      <main className="p-8 bg-white rounded-lg shadow-custom-light mt-4">
        <p>Mock orchard monitoring data goes here.</p>
      </main>
    </div>
  );
};

export default Orchards;