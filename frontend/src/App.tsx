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
    <div className="App" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      {/* Navigation Bar */}
      <nav 
        className="App-nav" 
        style={{ backgroundColor: '#556B2F', padding: '1rem' }}
      >
        <div 
          className="container" 
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <h2 style={{ color: '#FFD700', margin: 0 }}>Citrus Argentina</h2>
          <ul 
            style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}
          >
            <li style={{ margin: '0 1rem' }}>
              <a href="#dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <a href="#commodity" style={{ color: 'white', textDecoration: 'none' }}>Commodity</a>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <a href="#eco" style={{ color: 'white', textDecoration: 'none' }}>Eco Calculator</a>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <a href="#orchard" style={{ color: 'white', textDecoration: 'none' }}>Orchard</a>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <a href="#auth" style={{ color: 'white', textDecoration: 'none' }}>Authentication</a>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <a href="#seasonal" style={{ color: 'white', textDecoration: 'none' }}>Seasonal</a>
            </li>
            <li style={{ margin: '0 1rem' }}>
              <a href="#supply" style={{ color: 'white', textDecoration: 'none' }}>Supply Chain</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header */}
      <header 
        className="App-header" 
        style={{ backgroundColor: '#556B2F', padding: '2rem', textAlign: 'center' }}
      >
        <h1 style={{ color: '#FFD700', fontSize: '2.5rem' }}>Beta UI/UX Showcase</h1>
        <p style={{ color: 'white' }}>Experience the future of Citrus Argentina's platform</p>
      </header>

      {/* Main Content */}
      <main style={{ padding: '2rem' }}>
        <section id="dashboard">
          <Dashboard />
        </section>
        <section id="commodity" style={{ marginTop: '2rem' }}>
          <CommodityProfile />
        </section>
        <section id="eco" style={{ marginTop: '2rem' }}>
          <EcoCalculator />
        </section>
        <section id="orchard" style={{ marginTop: '2rem' }}>
          <OrchardMonitoring />
        </section>
        <section id="auth" style={{ marginTop: '2rem' }}>
          <ProductAuthentication />
        </section>
        <section id="seasonal" style={{ marginTop: '2rem' }}>
          <SeasonalAvailability />
        </section>
        <section id="supply" style={{ marginTop: '2rem' }}>
          <SupplyChainTracker />
        </section>
      </main>

      {/* Footer */}
      <footer 
        style={{ backgroundColor: '#FFA500', color: 'white', padding: '1rem', textAlign: 'center' }}
      >
        <p>© 2025 Citrus Argentina. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;