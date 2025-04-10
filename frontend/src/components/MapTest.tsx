// frontend/src/components/MapTest.tsx
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px', // Or whatever size you want for testing
  height: '400px'
};

const center = {
  lat: -34.397,
  lng: 150.644
};

const MapTest: React.FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-test', // Use a different ID
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  });

  if (loadError) {
    return <div>Error loading Google Maps</div>;
  }

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
        />
      ) : (
        <div>Loading Map...</div>
      )}
    </div>
  );
};

export default MapTest;
