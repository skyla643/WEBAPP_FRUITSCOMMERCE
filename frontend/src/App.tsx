import React from 'react';
import './App.css';

// Import your custom UI components
import CommodityProfile from './components/CommodityProfile';
import Dashboard from './components/Dashboard';
import EcoCalculator from './components/EcoCalculator';
import OrchardMonitoring from './components/OrchardMonitoring';
import ProductAuthentication from './components/ProductAuthentication';
import SeasonalAvailability from './components/SeasonalAvailability';
import SupplyChainTracker from './components/SupplyChainTracker';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Citrus Argentina</h1>
          <ul className="flex space-x-4">
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#commodity">Commodity Profile</a></li>
            <li><a href="#eco">Eco Calculator</a></li>
            <li><a href="#orchard">Orchard Monitoring</a></li>
            <li><a href="#auth">Product Authentication</a></li>
            <li><a href="#seasonal">Seasonal Availability</a></li>
            <li><a href="#supply">Supply Chain</a></li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-blue-600 text-white p-8 text-center">
        <h2 className="text-4xl font-extrabold">Beta UI/UX Showcase</h2>
        <p className="mt-4 text-lg">A preview of our work-in-progress user interface and experience</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-8 space-y-12">
        <section id="dashboard">
          <h3 className="text-3xl font-bold mb-4">Dashboard</h3>
          <Dashboard />
        </section>

        <section id="commodity">
          <h3 className="text-3xl font-bold mb-4">Commodity Profile</h3>
          <CommodityProfile />
        </section>

        <section id="eco">
          <h3 className="text-3xl font-bold mb-4">Eco Calculator</h3>
          <EcoCalculator />
        </section>

        <section id="orchard">
          <h3 className="text-3xl font-bold mb-4">Orchard Monitoring</h3>
          <OrchardMonitoring />
        </section>

        <section id="auth">
          <h3 className="text-3xl font-bold mb-4">Product Authentication</h3>
          <ProductAuthentication />
        </section>

        <section id="seasonal">
          <h3 className="text-3xl font-bold mb-4">Seasonal Availability</h3>
          <SeasonalAvailability />
        </section>

        <section id="supply">
          <h3 className="text-3xl font-bold mb-4">Supply Chain Tracker</h3>
          <SupplyChainTracker />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2025 Citrus Argentina. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;