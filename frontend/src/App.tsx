import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Orchards from './components/Orchards';
import PestDetection from './components/PestDetection';
import SupplyChain from './components/SupplyChain';
import MarketData from './components/MarketData';
import ClientManager from './components/ClientManager';
import AboutUsPreview from './components/AboutUsPreview';

const App: React.FC = () => {
  return (
    <Router>
      <div className="parent-container">
        <Routes>
          <Route path="/" element={<AboutUsPreview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="orchards" replace />} />
            <Route path="orchards" element={<Orchards />} />
            <Route path="pest-detection" element={<PestDetection />} />
            <Route path="supply-chain" element={<SupplyChain />} />
            <Route path="market-data" element={<MarketData />} />
            <Route path="clients" element={<ClientManager />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;