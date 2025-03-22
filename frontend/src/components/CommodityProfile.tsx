import React from 'react';

const CommodityProfile: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Grapefruit Juice */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Grapefruit Juice</h3>
          <p><strong>Type:</strong> JC &amp; NFC</p>
          <p><strong>Availability:</strong> 60% Available</p>
          <p><strong>Harvest:</strong> September-November</p>
        </div>
        {/* Lemon Juice */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Lemon Juice</h3>
          <p><strong>Type:</strong> JC &amp; NFC</p>
          <p><strong>Availability:</strong> 85% Available</p>
          <p><strong>Harvest:</strong> September-November</p>
        </div>
        {/* Orange Juice */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Orange Juice</h3>
          <p><strong>Type:</strong> JC &amp; NFC</p>
          <p><strong>Availability:</strong> 90% Available</p>
          <p><strong>Harvest:</strong> September-November</p>
        </div>
      </div>
    </div>
  );
};

export default CommodityProfile;