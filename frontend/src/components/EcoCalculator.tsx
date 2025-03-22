import React from 'react';

const EcoCalculator: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
        <p><strong>Electricity Usage:</strong> 0.4 kWh</p>
        <p><strong>Renewable Energy:</strong> 22%</p>
        <p><strong>Irrigation Volume:</strong> 1.6 m³</p>
        <p><strong>Rainwater Harvested:</strong> 0.5 m³</p>
        <p><strong>Carbon Footprint:</strong> 0.00 tons CO₂e</p>
        <p>
          <strong>Recommendations:</strong> Increase renewable energy usage and optimize water harvesting.
        </p>
      </div>
    </div>
  );
};

export default EcoCalculator;