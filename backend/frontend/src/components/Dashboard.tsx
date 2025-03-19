import React from 'react';
import SeasonalAvailability from './SeasonalAvailability';
import OrchardMonitoring from './OrchardMonitoring';
import CommodityProfile from './CommodityProfile';
import SupplyChainTracker from './SupplyChainTracker';
import EcoCalculator from './EcoCalculator';
import ProductAuthentication from './ProductAuthentication';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#f4f1de] text-gray-900">
            <div className="container mx-auto p-6">
                <h1 className="text-4xl font-bold text-center text-[#588157] mb-8">Citrus Argentina Dashboard</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-[#f2cc8f] p-4 rounded-lg shadow-md">
                        <SeasonalAvailability />
                    </div>
                    <div className="bg-[#f2cc8f] p-4 rounded-lg shadow-md">
                        <OrchardMonitoring />
                    </div>
                    <div className="bg-[#f2cc8f] p-4 rounded-lg shadow-md">
                        <CommodityProfile />
                    </div>
                    <div className="bg-[#f2cc8f] p-4 rounded-lg shadow-md">
                        <SupplyChainTracker />
                    </div>
                    <div className="bg-[#f2cc8f] p-4 rounded-lg shadow-md">
                        <EcoCalculator />
                    </div>
                    <div className="bg-[#f2cc8f] p-4 rounded-lg shadow-md">
                        <ProductAuthentication />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
