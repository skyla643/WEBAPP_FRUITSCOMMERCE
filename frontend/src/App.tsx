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
      {/* Navigation */}
      <nav style={{ backgroundColor: '#556B2F', padding: '1rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ color: '#FFD700', fontSize: '1.75rem', fontWeight: 'bold' }}>Citrus Argentina</h1>
          <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><a href="#dashboard" style={{ color: '#FFD700', textDecoration: 'none' }}>Dashboard</a></li>
            <li><a href="#commodity" style={{ color: '#FFD700', textDecoration: 'none' }}>Commodity</a></li>
            <li><a href="#eco" style={{ color: '#FFD700', textDecoration: 'none' }}>Eco Calculator</a></li>
            <li><a href="#orchard" style={{ color: '#FFD700', textDecoration: 'none' }}>Orchard</a></li>
            <li><a href="#auth" style={{ color: '#FFD700', textDecoration: 'none' }}>Authentication</a></li>
            <li><a href="#seasonal" style={{ color: '#FFD700', textDecoration: 'none' }}>Seasonal</a></li>
            <li><a href="#supply" style={{ color: '#FFD700', textDecoration: 'none' }}>Supply Chain</a></li>
          </ul>
        </div>
      </nav>

      {/* Header with gradient */}
      <header 
        className="App-header" 
        style={{ 
          background: 'linear-gradient(135deg, #556B2F, #FFD700)', 
          padding: '2rem',
          textAlign: 'center'
        }}
      >
        <h1 style={{ fontSize: '2.5rem', margin: 0 }}>Beta UI/UX Showcase</h1>
      </header>

      {/* Main content */}
      <main style={{ padding: '2rem', backgroundColor: 'white' }}>
        <section id="dashboard" style={{ marginBottom: '2rem' }}>
          <Dashboard />
        </section>
        <section id="commodity" style={{ marginBottom: '2rem' }}>
          <CommodityProfile />
        </section>
        <section id="eco" style={{ marginBottom: '2rem' }}>
          <EcoCalculator />
        </section>
        <section id="orchard" style={{ marginBottom: '2rem' }}>
          <OrchardMonitoring />
        </section>
        <section id="auth" style={{ marginBottom: '2rem' }}>
          <ProductAuthentication />
        </section>
        <section id="seasonal" style={{ marginBottom: '2rem' }}>
          <SeasonalAvailability />
        </section>
        <section id="supply" style={{ marginBottom: '2rem' }}>
          <SupplyChainTracker />
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#FFA500', color: 'white', padding: '1rem', textAlign: 'center' }}>
        <p>© 2025 Citrus Argentina. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;