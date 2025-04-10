import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current || !mapContainerRef.current) return;

    const map = L.map(mapRef.current).setView([latitude, longitude], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    map.panBy([0, -mapContainerRef.current.clientHeight * 0.1]);

    // Cleanup function
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [latitude, longitude, zoom]); // Removed mapRef from dependencies

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default MapComponent;