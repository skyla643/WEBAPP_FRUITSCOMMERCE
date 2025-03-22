import React from 'react';

const SeasonalAvailability: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Grapefruit */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Grapefruit</h3>
          <p><strong>Availability:</strong> 60% Available</p>
          <p><strong>Harvest:</strong> Sept-Nov</p>
        </div>
        {/* Lemon */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Lemon</h3>
          <p><strong>Availability:</strong> 85% Available</p>
          <p><strong>Harvest:</strong> Sept-Nov</p>
        </div>
        {/* Orange */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Orange</h3>
          <p><strong>Availability:</strong> 90% Available</p>
          <p><strong>Harvest:</strong> Sept-Nov</p>
        </div>
        {/* Strawberry Puree */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Strawberry Puree</h3>
          <p><strong>Availability:</strong> 90% Available</p>
          <p><strong>Harvest:</strong> Sept-Nov</p>
        </div>
        {/* Raspberry Puree */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>Raspberry Puree</h3>
          <p><strong>Availability:</strong> 85% Available</p>
          <p><strong>Harvest:</strong> Sept-Nov</p>
        </div>
      </div>
    </div>
  );
};

export default SeasonalAvailability;