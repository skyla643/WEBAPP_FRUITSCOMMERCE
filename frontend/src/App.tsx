// frontend/src/App.tsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Orchards from './components/Orchards';
import PestDetection from './components/PestDetection';
import SupplyChain from './components/SupplyChain';
import MarketData from './components/MarketData';
import ClientManager from './components/ClientManager';
import LoadingScreen from './components/LoadingScreen';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orchards" element={<Orchards />} />
        <Route path="/pest-detection" element={<PestDetection />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/market-data" element={<MarketData />} />
        <Route path="/clients" element={<ClientManager />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;