import React from 'react';
import SeasonalAvailability from './SeasonalAvailability';
import OrchardMonitoring from './OrchardMonitoring';
import CommodityProfile from './CommodityProfile';
import SupplyChainTracker from './SupplyChainTracker';
import EcoCalculator from './EcoCalculator';
import ProductAuthentication from './ProductAuthentication';

const Dashboard = () => {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold text-green-700">Citrus Argentina Dashboard</h1>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <SeasonalAvailability />
          <OrchardMonitoring />
          <CommodityProfile />
          <SupplyChainTracker />
          <EcoCalculator />
          <ProductAuthentication />
        </div>
      </div>
    );
  };
  
  export default Dashboard;