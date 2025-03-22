import React from 'react';

const SupplyChainTracker: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
        <div className="mb-4">
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Harvesting</h3>
          <p>Fruits harvested from Citrus Valley Estate</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Processing</h3>
          <p>Fresh fruits processed within 24 hours</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Packaging</h3>
          <p>Packaged at Salta Packaging Facility</p>
        </div>
        <div className="mb-4">
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Shipping</h3>
          <p>Shipped to Buenos Aires Port</p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainTracker;