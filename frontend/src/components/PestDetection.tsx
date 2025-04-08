import React from 'react';
import PestCard from './PestCard';

interface PestAlert {
  pestName: string;
  location: string;
  severity: 'low' | 'moderate' | 'high';
  lastDetected: string;
}

const PestDetection: React.FC = () => {
  const pestAlerts: PestAlert[] = [
    {
      pestName: 'Citrus Leafminer',
      location: 'Tucumán Valley',
      severity: 'high',
      lastDetected: 'April 7, 2025',
    },
    {
      pestName: 'Aphids',
      location: 'Salta Estate',
      severity: 'moderate',
      lastDetected: 'April 6, 2025',
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Pest Detection Alerts</h2>
      {pestAlerts.map((alert, index) => (
        <PestCard key={index} {...alert} />
      ))}
    </div>
  );
};

export default PestDetection;