// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Orchards from './components/Orchards';
import PestDetection from './components/PestDetection';
import SupplyChain from './components/SupplyChain';
import MarketData from './components/MarketData';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Show login screen at the root */}
        <Route path="/" element={<Login />} />
        {/* Dashboard after login */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Other routes */}
        <Route path="/orchards" element={<Orchards />} />
        <Route path="/pest-detection" element={<PestDetection />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/market-data" element={<MarketData />} />
        {/* Fallback */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;