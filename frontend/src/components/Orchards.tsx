// src/components/Orchards.tsx
import React from 'react';
import { WiRaindrop, WiThermometer } from 'react-icons/wi';

const Orchards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Salta Estate Card */}
      <div className="bg-white rounded-lg shadow-custom-light p-6">
        <h2 className="text-xl font-heading text-darkBlue mb-1">Salta Estate</h2>
        <p className="text-darkBlue mb-4">Salta Province</p>
        <div className="text-gray-700 space-y-1">
          {/* ... rest of your orchards content ... */}
        </div>
      </div>
      {/* ... other cards ... */}
    </div>
  );
};

export default Orchards;