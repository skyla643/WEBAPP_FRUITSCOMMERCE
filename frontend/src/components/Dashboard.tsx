import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      {/* Shipment 1 */}
      <div className="p-4 mb-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
        <p>
          <strong>Status:</strong>{' '}
          <span style={{ color: '#FFD700' }}>In Transit</span>
        </p>
        <p><strong>Location:</strong> Salta Packaging Facility</p>
        <p><strong>Quantity:</strong> 2500 units</p>
        <p><strong>Estimated Arrival:</strong> 3/11/2025, 6:59:03 PM</p>
      </div>
      {/* Shipment 2 */}
      <div className="p-4 mb-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
        <p>
          <strong>Status:</strong>{' '}
          <span style={{ color: '#FFD700' }}>Delivered</span>
        </p>
        <p><strong>Location:</strong> Buenos Aires Port</p>
        <p><strong>Quantity:</strong> 1800 units</p>
        <p><strong>Estimated Arrival:</strong> 3/9/2025, 6:59:03 PM</p>
      </div>
    </div>
  );
};

export default Dashboard;