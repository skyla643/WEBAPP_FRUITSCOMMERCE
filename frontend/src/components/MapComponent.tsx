import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Geometry, FeatureCollection } from 'geojson';

// Define interfaces for props and data structures
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

// Helper function to determine marker/feature color based on productivity
function getColor(productivity: number): string {
  return productivity > 80 ? '#4CAF50' :
         productivity > 50 ? '#FFC107' :
                             '#FF9800';
}

// Define the custom icon for citrus orchards directly
const citrusIcon = L.icon({
  iconUrl: '/citrus-icon.png', // Ensure this path is correct relative to your public folder
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

  // Initialize the map when component mounts
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      // Create map instance
      mapRef.current = L.map(mapContainerRef.current).setView([latitude, longitude], zoom);

      // Add tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Fetch orchard data
      fetchOrchardData();

      // Set loading to false after map initialization
      setLoading(false);
    }

    // Cleanup function
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, zoom]);

  // Update map view when coordinates change
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], zoom);
    }
  }, [latitude, longitude, zoom]);

  // Add orchard data to map when available
  useEffect(() => {
    if (mapRef.current && orchardData) {
      addOrchardsToMap(orchardData);
    }
  }, [orchardData]);

  // Fetch orchard data from API or use mock data
  const fetchOrchardData = async () => {
    try {
      // In a real app, you would fetch data from your API
      // const response = await fetch('api/orchards/geojson');
      // const data = await response.json();
      
      // For now, using mock data
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
              lastUpdated: '2023-04-05'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [longitude - 0.01, latitude - 0.01]
            },
            properties: {
              id: '2',
              name: 'Lemon Grove',
              yield: 18,
              productivity: 65,
              variety: 'Eureka Lemon',
              age: 3,
              lastUpdated: '2023-04-02'
            }
          }
        ]
      };

      setOrchardData(mockData);
    } catch (err) {
      console.error('Error fetching orchard data:', err);
      setError('Failed to load orchard data');
    }
  };

  // Add orchards to the map as markers
  const addOrchardsToMap = (data: OrchardFeatureCollection) => {
    if (!mapRef.current) return;

    // Clear existing layers if needed
    // mapRef.current.eachLayer(layer => {
    //   if (layer instanceof L.Marker || layer instanceof L.GeoJSON) {
    //     mapRef.current?.removeLayer(layer);
    //   }
    // });

    // Add GeoJSON layer
    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: citrusIcon });
      },
      onEachFeature: (feature, layer) => {
        if (feature.properties) {
          const props = feature.properties;
          layer.bindPopup(`
            <div class="popup-content">
              <h3>${props.name}</h3>
              <p>Variety: ${props.variety}</p>
              <p>Yield: ${props.yield} tons/ha</p>
              <p>Productivity: ${props.productivity}%</p>
              <p>Age: ${props.age} years</p>
              <p class="text-xs text-gray-500">Last updated: ${props.lastUpdated}</p>
            </div>
          `);
        }
      },
      style: (feature) => {
        return {
          color: feature?.properties ? getColor(feature.properties.productivity) : '#FF9800'
        };
      }
    }).addTo(mapRef.current);
  };

  return (
    <div className="relative w-full h-full">
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
        style={{ minHeight: '100%' }}
      ></div>
    </div>
  );
};

export default MapComponent;