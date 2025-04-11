import React, { useRef, useEffect, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Geometry, FeatureCollection } from 'geojson';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface OrchardProperties {
  id: string;
  name: string;
  yield: number;
  productivity: number;
  variety: string;
  age: number;
  lastUpdated: string;
}

type OrchardFeatureCollection = FeatureCollection<Geometry, OrchardProperties>;

function getColor(productivity: number): string {
  return productivity > 80 ? '#4CAF50' :
         productivity > 50 ? '#FFC107' :
                             '#FF9800';
}

const citrusIcon = L.icon({
  iconUrl: '/citrus-icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [orchardData, setOrchardData] = useState<OrchardFeatureCollection | null>(null);

  const fetchOrchardData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/orchards/geojson');
      if (!response.ok) throw new Error(`API Error: ${response.status}`);
      const data = await response.json();
      console.log("API Response:", data);
      setOrchardData(data);
    } catch (err) {
      console.error("Fetch failed:", err);
      // Fallback to mock data if API fails
      const mockData: OrchardFeatureCollection = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [longitude + 0.01, latitude + 0.01]
            },
            properties: {
              id: '1',
              name: 'Valencia Orchard',
              yield: 22,
              productivity: 85,
              variety: 'Valencia Orange',
              age: 5,
              lastUpdated: new Date().toISOString()
            }
          }
        ]
      };
      setOrchardData(mockData);
      setError("Using mock data - API offline");
    } finally {
      setLoading(false);
    }
  }, [latitude, longitude]);

  // Initialize the map when component mounts
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: [latitude, longitude],
        zoom: zoom,
        zoomControl: true,
        dragging: true,
        scrollWheelZoom: true,
        doubleClickZoom: true,
        boxZoom: true,
        keyboard: true
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      fetchOrchardData();
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, zoom, fetchOrchardData]);

  // Update map view when coordinates change
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], zoom);
    }
  }, [latitude, longitude, zoom]);

  // Add orchard data to map when available
  useEffect(() => {
    if (mapRef.current && orchardData) {
      // Clear existing layers
      mapRef.current.eachLayer(layer => {
        if (layer instanceof L.GeoJSON) {
          mapRef.current?.removeLayer(layer);
        }
      });
      
      addOrchardsToMap(orchardData);
    }
  }, [orchardData]);

  const addOrchardsToMap = (data: OrchardFeatureCollection) => {
    if (!mapRef.current) return;

    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: citrusIcon });
      },
      onEachFeature: (feature, layer) => {
        if (feature.properties) {
          const props = feature.properties;
          layer.bindPopup(`
            <div class="popup-content">
              <h3 class="font-bold">${props.name}</h3>
              <p>Variety: ${props.variety}</p>
              <p>Yield: ${props.yield} tons/ha</p>
              <p>Productivity: <span style="color: ${getColor(props.productivity)}">${props.productivity}%</span></p>
              <p>Age: ${props.age} years</p>
              <p class="text-xs text-gray-500">Last updated: ${new Date(props.lastUpdated).toLocaleString()}</p>
            </div>
          `);
        }
      }
    }).addTo(mapRef.current);
  };

  return (
    <div className="relative w-full" style={{ height: "70vh" }}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}
      {error && (
        <div className="absolute top-2 right-2 bg-red-100 text-red-600 px-3 py-1 rounded-md text-sm z-10">
          {error}
        </div>
      )}
      <div 
        ref={mapContainerRef} 
        className="w-full h-full rounded-lg"
        style={{ zIndex: 0 }}
      ></div>
    </div>
  );
};

export default MapComponent;