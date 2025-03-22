import React from 'react';
import './App.css';

// Import components
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
      <header className="App-header" style={{ backgroundColor: '#556B2F' }}>
        <h1 style={{ color: '#FFD700' }}>Beta UI/UX Showcase</h1>
      </header>
      <main>
        <Dashboard />
        <CommodityProfile />
        <EcoCalculator />
        <OrchardMonitoring />
        <ProductAuthentication />
        <SeasonalAvailability />
        <SupplyChainTracker />
      </main>
      <footer style={{ backgroundColor: '#FFA500', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <p>© 2025 Citrus Argentina. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;