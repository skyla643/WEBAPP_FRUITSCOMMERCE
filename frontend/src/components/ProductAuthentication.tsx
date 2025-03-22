import React from 'react';

const ProductAuthentication: React.FC = () => {
  return (
    <div className="p-6" style={{ backgroundColor: 'white' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#556B2F' }}>
        Product Authentication
      </h2>
      <div
        className="p-4 rounded shadow"
        style={{ border: '2px solid #FFA500' }}
      >
        <p>
          <strong>Product:</strong> Grapefruit JC & NFC
        </p>
        <p>
          <strong>Authentication:</strong> Premium Authentication Enabled
        </p>
        <p>
          <strong>Security Features:</strong> Dynamic Haptic Response, Real-time
          Verification
        </p>
        <p>
          <strong>Instructions:</strong> Place your finger on the sensor and hold
          for verification.
        </p>
      </div>
    </div>
  );
};

export default ProductAuthentication;