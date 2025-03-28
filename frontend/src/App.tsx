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
        {/* Root shows Login */}
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orchards" element={<Orchards />} />
        <Route path="/pest-detection" element={<PestDetection />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/market-data" element={<MarketData />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;