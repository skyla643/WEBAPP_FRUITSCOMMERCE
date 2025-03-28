// src/components/Orchards.tsx
import React from 'react';

const Orchards: React.FC = () => {
  return (
    <div className="min-h-screen bg-lightGray">
      <header className="bg-earthGreen text-white py-4 px-8 flex justify-between items-center shadow-custom-light">
        <h1 className="text-2xl font-heading">Orchard Monitoring</h1>
        {/* Optional: include navigation or logout if needed */}
      </header>
      <main className="p-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Salta Estate Card */}
          <div className="bg-white rounded-lg shadow-custom-light p-6">
            <h2 className="text-xl font-heading text-darkBlue mb-1">Salta Estate</h2>
            <p className="text-darkBlue mb-4">Salta Province</p>
            <div>
              <p className="text-gray-700">
                <strong>Soil Moisture:</strong> 65%
              </p>
              <p className="text-gray-700">
                <strong>Temperature:</strong> 24°C
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Last updated: 3/10/2025, 6:59:03 PM
              </p>
            </div>
          </div>
          {/* Tucumán Valley Card */}
          <div className="bg-white rounded-lg shadow-custom-light p-6">
            <h2 className="text-xl font-heading text-darkBlue mb-1">Tucumán Valley</h2>
            <p className="text-darkBlue mb-4">Tucumán Province</p>
            <div>
              <p className="text-gray-700">
                <strong>Soil Moisture:</strong> 58%
              </p>
              <p className="text-gray-700">
                <strong>Temperature:</strong> 26°C
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Last updated: 3/10/2025, 6:59:03 PM
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Orchards;