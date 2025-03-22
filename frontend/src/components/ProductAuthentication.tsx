import React from 'react';

const ProductAuthentication: React.FC = () => {
  return (
    <div className="p-6 bg-white">
      <div className="p-4 rounded shadow border-2" style={{ borderColor: '#FFA500' }}>
        <p><strong>Product:</strong> Grapefruit JC &amp; NFC</p>
        <p><strong>Authentication:</strong> Premium Authentication Enabled</p>
        <p>
          <strong>Security Features:</strong> Dynamic Haptic Response, Real-time Verification
        </p>
        <p>
          <strong>Instructions:</strong> Place your finger on the sensor and hold for verification.
        </p>
      </div>
    </div>
  );
};

export default ProductAuthentication;