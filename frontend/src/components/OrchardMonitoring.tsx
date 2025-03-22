import React from 'react';

interface Orchard {
  id: number;
  name: string;
  soilMoisture: number;
  temperature: number;
  irrigationSchedule: string;
  waterUsage: number;
  status: string;
}

const orchards: Orchard[] = [
  {
    id: 1,
    name: 'North Orchard - Valencia Orange',
    soilMoisture: 68.0,
    temperature: 25.3,
    irrigationSchedule: 'Next: 3/11/2025, 6:01:25 PM',
    waterUsage: 2500,
    status: 'OPTIMAL',
  },
  {
    id: 2,
    name: 'South Orchard - Lemon',
    soilMoisture: 62.4,
    temperature: 25.6,
    irrigationSchedule: 'Next: 3/11/2025, 6:01:25 AM',
    waterUsage: 2000,
    status: 'WARNING',
  },
];

const OrchardMonitoring: React.FC = () => {
  return (
    <div className="p-6" style={{ backgroundColor: 'white' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#556B2F' }}>
        Orchard Monitoring Dashboard
      </h2>
      {orchards.map((orchard) => (
        <div
          key={orchard.id}
          className="p-4 mb-4 rounded shadow"
          style={{ border: '2px solid #FFA500' }}
        >
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
            {orchard.name}
          </h3>
          <p>
            <strong>Status:</strong> {orchard.status}
          </p>
          <p>
            <strong>Soil Moisture:</strong> {orchard.soilMoisture}%
          </p>
          <p>
            <strong>Temperature:</strong> {orchard.temperature}°C
          </p>
          <p>
            <strong>Irrigation Schedule:</strong> {orchard.irrigationSchedule}
          </p>
          <p>
            <strong>Water Usage:</strong> {orchard.waterUsage} L
          </p>
        </div>
      ))}
    </div>
  );
};

export default OrchardMonitoring;