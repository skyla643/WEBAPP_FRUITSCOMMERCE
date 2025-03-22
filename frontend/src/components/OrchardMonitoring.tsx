import React from 'react';

const OrchardMonitoring: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <div className="space-y-4">
        {/* North Orchard */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>North Orchard - Valencia Orange</h3>
          <p><strong>Status:</strong> OPTIMAL</p>
          <p><strong>Soil Moisture:</strong> 68%</p>
          <p><strong>Temperature:</strong> 25.3°C</p>
          <p><strong>Irrigation Schedule:</strong> Next: 3/11/2025, 6:01:25 PM</p>
          <p><strong>Water Usage:</strong> 2500 L</p>
        </div>
        {/* South Orchard */}
        <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>South Orchard - Lemon</h3>
          <p><strong>Status:</strong> WARNING</p>
          <p><strong>Soil Moisture:</strong> 62.4%</p>
          <p><strong>Temperature:</strong> 25.6°C</p>
          <p><strong>Irrigation Schedule:</strong> Next: 3/11/2025, 6:01:25 AM</p>
          <p><strong>Water Usage:</strong> 2000 L</p>
        </div>
      </div>
    </div>
  );
};

export default OrchardMonitoring;