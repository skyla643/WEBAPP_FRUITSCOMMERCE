import React from 'react';

interface SupplyChain {
  id: number;
  stage: string;
  details: string;
}

const supplyChainData: SupplyChain[] = [
  { id: 1, stage: 'Harvesting', details: 'Fruits harvested from Citrus Valley Estate' },
  { id: 2, stage: 'Processing', details: 'Fresh fruits processed within 24 hours' },
  { id: 3, stage: 'Packaging', details: 'Packaged at Salta Packaging Facility' },
  { id: 4, stage: 'Shipping', details: 'Shipped to Buenos Aires Port' },
];

const SupplyChainTracker: React.FC = () => {
  return (
    <div className="p-6" style={{ backgroundColor: 'white' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#556B2F' }}>
        Supply Chain Tracker
      </h2>
      <div
        className="p-4 rounded shadow"
        style={{ border: '2px solid #FFA500' }}
      >
        {supplyChainData.map((item) => (
          <div key={item.id} className="mb-4">
            <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
              {item.stage}
            </h3>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplyChainTracker;