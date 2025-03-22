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
      <header className="App-header">
        <h1>Beta UI/UX Showcase</h1>
      </header>
      <main>
        <section>
          <h2>Dashboard</h2>
          <Dashboard />
        </section>
        <section>
          <h2>Commodity Profile</h2>
          <CommodityProfile />
        </section>
        <section>
          <h2>Eco Calculator</h2>
          <EcoCalculator />
        </section>
        <section>
          <h2>Orchard Monitoring</h2>
          <OrchardMonitoring />
        </section>
        <section>
          <h2>Product Authentication</h2>
          <ProductAuthentication />
        </section>
        <section>
          <h2>Seasonal Availability</h2>
          <SeasonalAvailability />
        </section>
        <section>
          <h2>Supply Chain Tracker</h2>
          <SupplyChainTracker />
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Your Company Name</p>
      </footer>
    </div>
  );
}

export default App;