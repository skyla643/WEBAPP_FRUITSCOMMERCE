// frontend/src/components/MapComponent.tsx
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return; // Ensure ref is attached

    // Initialize the map
    const map = L.map(mapRef.current).setView([-34.397, 150.644], 8); // Set initial view

    // Add OpenStreetMap tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Clean up the map instance when the component unmounts
    return () => map.remove();
  }, []);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
  );
};

export default MapComponent;
