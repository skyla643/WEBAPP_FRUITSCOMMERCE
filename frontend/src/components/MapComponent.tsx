import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapComponentProps { // Define props interface
  latitude: number;
  longitude: number;
  zoom: number;
}

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, zoom }) => { // Use MapComponentProps
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null); // Ref for the map container

  useEffect(() => {
    if (!mapRef.current || !mapContainerRef.current) return;

    const map = L.map(mapRef.current).setView([latitude, longitude], zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adjust the map position to avoid overlapping the title
    map.panBy([0, -mapContainerRef.current.clientHeight * 0.1]);

  }, [latitude, longitude, zoom, mapRef]);

  return (
    <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }}> {/* Apply ref to the container div */}
      <div ref={mapRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default MapComponent;