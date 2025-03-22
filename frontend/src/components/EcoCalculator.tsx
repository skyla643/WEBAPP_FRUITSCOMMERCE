import React, { useState } from 'react';

const EcoCalculator: React.FC = () => {
  // Dummy values for now
  const [electricityUsage] = useState(0.4); // in kWh
  const [renewablePercentage] = useState(22); // in %
  const [irrigationVolume] = useState(1.6); // in m³
  const [rainHarvested] = useState(0.5); // in m³

  return (
    <div className="p-6" style={{ backgroundColor: 'white' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#556B2F' }}>
        Eco-Friendly Farming Calculator
      </h2>
      <div
        className="p-4 rounded shadow"
        style={{ border: '2px solid #FFA500' }}
      >
        <p>
          <strong>Electricity Usage:</strong> {electricityUsage} kWh
        </p>
        <p>
          <strong>Renewable Energy:</strong> {renewablePercentage}%
        </p>
        <p>
          <strong>Irrigation Volume:</strong> {irrigationVolume} m³
        </p>
        <p>
          <strong>Rainwater Harvested:</strong> {rainHarvested} m³
        </p>
        <p>
          <strong>Carbon Footprint:</strong> 0.00 tons CO₂e
        </p>
        <p>
          <strong>Recommendations:</strong> Increase renewable energy usage
          and optimize water harvesting.
        </p>
      </div>
    </div>
  );
};

export default EcoCalculator;