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
        {/* Default route shows the Login screen */}
        <Route path="/login" element={<Login />} />
        {/* Routes for each section */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orchards" element={<Orchards />} />
        <Route path="/pest-detection" element={<PestDetection />} />
        <Route path="/supply-chain" element={<SupplyChain />} />
        <Route path="/market-data" element={<MarketData />} />
        {/* Fallback route (if you want to default to Dashboard for unrecognized routes, change this as needed) */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;