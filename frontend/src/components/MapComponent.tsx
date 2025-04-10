// frontend/src/components/MapComponent.tsx (Explicit Dimensions)
import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent: React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Explicitly set dimensions (adjust as needed)
    mapRef.current.style.width = '400px';
    mapRef.current.style.height = '300px';

    const map = L.map(mapRef.current).setView([-34.397, 150.644], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
  );
};

export default MapComponent;