// src/components/Orchards.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { WiRaindrop, WiThermometer } from 'react-icons/wi';

// Cast the icons to React functional components to satisfy TypeScript
const RaindropIcon = WiRaindrop as React.FC<React.SVGProps<SVGSVGElement>>;
const ThermometerIcon = WiThermometer as React.FC<React.SVGProps<SVGSVGElement>>;

const Orchards: React.FC = () => {
  return (
    <div className="min-h-screen bg-lightGray flex flex-col">
      {/* Top Bar */}
      <header className="bg-earthGreen text-white py-2 px-8 flex items-center justify-between shadow-custom-light">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-heading">Citrus Argentina</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm sm:text-base">Welcome, test1234</span>
          <button className="bg-transparent hover:bg-accentOrange transition-colors duration-300 text-white px-3 py-1 rounded">
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-white shadow-custom-light px-8">
        <ul className="flex space-x-4 py-2">
          <li>
            <Link to="/dashboard" className="hover:text-accentOrange">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/orchards" className="hover:text-accentOrange">
              Orchards
            </Link>
          </li>
          <li>
            <Link to="/pest-detection" className="hover:text-accentOrange">
              Pest Detection
            </Link>
          </li>
          <li>
            <Link to="/supply-chain" className="hover:text-accentOrange">
              Supply Chain
            </Link>
          </li>
          <li>
            <Link to="/market-data" className="hover:text-accentOrange">
              Market Data
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <div className="grid grid-cols-1 gap-6">
          {/* Salta Estate Card */}
          <div className="bg-white rounded-lg shadow-custom-light p-6">
            <h2 className="text-xl font-heading text-darkBlue mb-1">Salta Estate</h2>
            <p className="text-darkBlue mb-4">Salta Province</p>
            <div className="text-gray-700 space-y-1">
              <p className="flex items-center">
                <RaindropIcon className="text-accentOrange mr-2 text-xl" />
                <strong className="mr-1">Soil Moisture:</strong> 65%
              </p>
              <p className="flex items-center">
                <ThermometerIcon className="text-accentOrange mr-2 text-xl" />
                <strong className="mr-1">Temperature:</strong> 24°C
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
            <div className="text-gray-700 space-y-1">
              <p className="flex items-center">
                <RaindropIcon className="text-accentOrange mr-2 text-xl" />
                <strong className="mr-1">Soil Moisture:</strong> 58%
              </p>
              <p className="flex items-center">
                <ThermometerIcon className="text-accentOrange mr-2 text-xl" />
                <strong className="mr-1">Temperature:</strong> 26°C
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