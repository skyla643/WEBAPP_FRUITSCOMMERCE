import React, { useRef, useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoJsonObject, Feature, Geometry, FeatureCollection } from 'geojson';

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
}

type OrchardFeature = Feature<Geometry, OrchardProperties>;
type OrchardFeatureCollection = FeatureCollection<Geometry, OrchardProperties>;

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Custom citrus orchard icon
  const citrusIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2909/2909495.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current).setView([latitude, longitude], zoom);
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adjust view slightly
    map.panBy([0, -mapContainerRef.current.clientHeight * 0.1]);

    // Load live citrus orchard data from INTA API
    const loadOrchardData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_INTA_API}/orchards/geojson?region=citrus`);
        
        if (!response.ok) throw new Error('Failed to fetch orchard data');
        
        const data: OrchardFeatureCollection = await response.json();

        // Create productivity color scale
        const getColor = (productivity: number) => {
          return productivity > 80 ? '#4CAF50' :
                 productivity > 50 ? '#FFC107' : '#FF9800';
        };

        // Add GeoJSON layer with custom styling
        L.geoJSON(data, {
          pointToLayer: (feature, latlng) => {
            return L.marker(latlng, { icon: citrusIcon });
          },
          style: (feature) => ({
            fillColor: getColor(feature.properties.productivity),
            weight: 1,
            opacity: 1,
            color: 'white',
            fillOpacity: 0.7
          }),
          onEachFeature: (feature, layer) => {
            const popupContent = `
              <div class="p-2">
                <h3 class="font-bold">${feature.properties.name}</h3>
                <p>Variety: ${feature.properties.variety}</p>
                <p>Yield: <strong>${feature.properties.yield}T/ha</strong></p>
                <p>Productivity: <span style="color:${getColor(feature.properties.productivity)}">
                  ${feature.properties.productivity}%
                </span></p>
                <p>Age: ${feature.properties.age} years</p>
              </div>
            `;
            layer.bindPopup(popupContent);
          }
        }).addTo(map);

        // Add legend
        const legend = new L.Control({ position: 'bottomright' });
        
        legend.onAdd = () => {
          const div = L.DomUtil.create('div', 'bg-white p-3 text-sm shadow-lg');
          div.innerHTML = `
            <h4 class="font-bold mb-2">Productivity</h4>
            <div class="flex items-center mb-1">
              <i style="display: inline-block; width: 16px; height: 16px; margin-right: 8px; background-color: #4CAF50;"></i> >80%
            </div>
            <div class="flex items-center mb-1">
              <i style="display: inline-block; width: 16px; height: 16px; margin-right: 8px; background-color: #FFC107;"></i> 50-80%
            </div>
            <div class="flex items-center">
              <i style="display: inline-block; width: 16px; height: 16px; margin-right: 8px; background-color: #FF9800;"></i> <50%
            </div>
          `;
          return div;
        };

        legend.addTo(map);

      } catch (err) {
        console.error('Error loading map data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load map data');
      } finally {
        setLoading(false);
      }
    };

    loadOrchardData();

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, zoom]);

  return (
    <div className="relative h-full w-full">
      {/* Map container */}
      <div 
        ref={mapContainerRef} 
        className="h-full w-full"
        style={{ minHeight: '400px' }}
      />

      {/* Loading/error states */}
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}

      {error && (
        <div className="absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong>Error:</strong> {error}
          <button 
            onClick={() => window.location.reload()} 
            className="ml-2 text-blue-600 underline"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;