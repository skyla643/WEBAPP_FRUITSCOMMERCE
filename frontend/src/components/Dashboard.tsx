// frontend/src/components/Dashboard.tsx
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -34.397, // Default center (e.g., Australia) - Change this!
  lng: 150.644
};

const Dashboard: React.FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map',
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
  });

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Map Area */}
      <div className="w-2/3 bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2">Regional Overview Map</h2>
        <div className="h-full rounded-lg border-gray-300 border">
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={8}
            >
              { /* Child components, such as markers, go here */ }
            </GoogleMap>
          ) : (
            <div>Loading Map...</div>
          )}
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