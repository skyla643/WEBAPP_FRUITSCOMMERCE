// frontend/src/components/Dashboard.tsx
import React from 'react';
import MapComponent from './MapComponent';

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Map Area */}
      <div className="w-2/3 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Regional Overview Map</h2>
        <div className="h-full rounded-lg border-gray-300 border">
          <MapComponent /> {/* Render the MapComponent */}
        </div>
      </div>

      {/* Statistics Panel */}
      <div className="w-1/3 bg-white shadow-md rounded-lg p-4 ml-4">
        <h2 className="text-xl font-semibold mb-2">Regional Statistics</h2>
        {/* Statistics will go here */}
        <p className="text-gray-500 italic text-center mt-1/2">Loading Statistics...</p>
      </div>
    </div>
  );
};

export default Dashboard;