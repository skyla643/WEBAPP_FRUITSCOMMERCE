import React from 'react';

interface Shipment {
  id: number;
  status: string;
  currentLocation: string;
  quantity: number;
  arrival: string;
}

const shipments: Shipment[] = [
  {
    id: 1,
    status: 'In Transit',
    currentLocation: 'Salta Packaging Facility',
    quantity: 2500,
    arrival: '3/11/2025, 6:59:03 PM',
  },
  {
    id: 2,
    status: 'Delivered',
    currentLocation: 'Buenos Aires Port',
    quantity: 1800,
    arrival: '3/9/2025, 6:59:03 PM',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="p-6" style={{ backgroundColor: 'white' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#556B2F' }}>
        Dashboard
      </h2>
      {shipments.map((shipment) => (
        <div
          key={shipment.id}
          className="p-4 mb-4 rounded shadow"
          style={{ border: '2px solid #FFA500' }}
        >
          <p>
            <strong>Status:</strong>{' '}
            <span style={{ color: '#FFD700' }}>{shipment.status}</span>
          </p>
          <p>
            <strong>Location:</strong> {shipment.currentLocation}
          </p>
          <p>
            <strong>Quantity:</strong> {shipment.quantity} units
          </p>
          <p>
            <strong>Estimated Arrival:</strong> {shipment.arrival}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;