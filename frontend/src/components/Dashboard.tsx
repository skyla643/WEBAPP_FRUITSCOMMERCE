import React from 'react';
import SeasonalAvailability from './SeasonalAvailability';
import OrchardMonitoring from './OrchardMonitoring';
import CommodityProfile from './CommodityProfile';
import SupplyChainTracker from './SupplyChainTracker';
import EcoCalculator from './EcoCalculator';
import ProductAuthentication from './ProductAuthentication';

const Dashboard: React.FC = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Citrus Argentina Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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