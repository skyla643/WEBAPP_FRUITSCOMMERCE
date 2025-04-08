// src/components/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-lightGray">
      <header className="bg-earthGreen text-white py-4 px-8 flex justify-between items-center shadow-custom-light">
        <h1 className="text-2xl font-heading">Citrus Argentina</h1>
        <nav>
          <ul className="flex space-x-4">
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
            <li><Link to="/clients">Clients</Link></li>
          </ul>
        </nav>
      </header>
      <main className="p-8">
        <h2 className="text-xl font-heading text-darkBlue mb-4">
          Welcome, test1234
        </h2>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-custom-light p-4">
            <h3 className="text-lg font-bold mb-2">Orchard Monitoring</h3>
            <p>Salta Estate — Soil Moisture: 65%, Temperature: 24°C</p>
          </div>
          <div className="bg-white rounded-lg shadow-custom-light p-4">
            <h3 className="text-lg font-bold mb-2">Supply Chain</h3>
            <p>Shipment #1: In Transit, 2500 units, ETA 3/11/2025</p>
          </div>
          {/* Add additional cards as needed */}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;