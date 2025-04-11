import React, { useRef, useEffect, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Feature, Geometry, FeatureCollection } from 'geojson';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface OrchardProperties {
  id?: string;
  name?: string;
  yield?: number;
  productivity?: number;
  variety?: string;
  age?: number;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type OrchardFeature = Feature<Geometry, OrchardProperties>;
type OrchardFeatureCollection = FeatureCollection<Geometry, OrchardProperties>;

// Mock data fallback
const mockOrchardData: OrchardFeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Demo Orchard",
        yield: 20,
        productivity: 75,
        variety: "Valencia",
        age: 5
      },
      geometry: {
        type: "Point",
        coordinates: [-58.3816, -34.6037] // [lng, lat]
      }
    }
  ]
};

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

  const getColor = useCallback((productivity?: number) => {
    if (productivity === undefined) return '#CCCCCC';
    return productivity > 80 ? '#4CAF50' :
           productivity > 50 ? '#FFC107' : '#FF9800';
  }, []);

  const loadOrchardData = useCallback(async () => {
    if (!mapRef.current) return;

    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_INTA_API}/orchards/geojson?region=citrus`, {
        headers: {
          'Accept': 'application/json'
        }
      });
      
      // Check for HTML response
      const text = await response.text();
      if (text.startsWith('<!DOCTYPE') || !response.ok) {
        throw new Error('API returned invalid response');
      }

      const data: OrchardFeatureCollection = JSON.parse(text);
      renderMapData(data);
      
    } catch (err) {
      console.error('Using mock data due to error:', err);
      setError('Live data unavailable - showing demonstration data');
      renderMapData(mockOrchardData);
    } finally {
      setLoading(false);
    }
  }, [getColor]);

  const renderMapData = useCallback((data: OrchardFeatureCollection) => {
    if (!mapRef.current) return;

    // Clear existing layers
    mapRef.current.eachLayer(layer => {
      if (layer instanceof L.TileLayer) return;
      mapRef.current?.removeLayer(layer);
    });

    // Add GeoJSON layer with custom styling
    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        if (!feature?.properties) return L.marker(latlng);
        return L.marker(latlng, { icon: citrusIcon });
      },
      style: (feature) => {
        if (!feature?.properties) return {};
        return {
          fillColor: getColor(feature.properties.productivity),
          weight: 1,
          opacity: 1,
          color: 'white',
          fillOpacity: 0.7
        };
      },
      onEachFeature: (feature, layer) => {
        if (!feature?.properties) return;
        
        const popupContent = `
          <div class="p-2">
            <h3 class="font-bold">${feature.properties.name || 'Unknown'}</h3>
            <p>Variety: ${feature.properties.variety || 'Unknown'}</p>
            <p>Yield: <strong>${feature.properties.yield || 'N/A'}T/ha</strong></p>
            <p>Productivity: <span style="color:${getColor(feature.properties.productivity)}">
              ${feature.properties.productivity || 'N/A'}%
            </span></p>
            <p>Age: ${feature.properties.age || 'N/A'} years</p>
          </div>
        `;
        layer.bindPopup(popupContent);
      }
    }).addTo(mapRef.current);

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
    legend.addTo(mapRef.current);
  }, [citrusIcon, getColor]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current, {
      zoomControl: true,
      dragging: true,
      scrollWheelZoom: true,
      doubleClickZoom: true
    }).setView([latitude, longitude], zoom);
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    loadOrchardData();

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, zoom, loadOrchardData]);

  return (
    <div className="relative h-full w-full">
      <div 
        ref={mapContainerRef} 
        className="h-full w-full z-0 cursor-grab active:cursor-grabbing"
        style={{ 
          minHeight: '400px',
          touchAction: 'none'
        }}
      />
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      )}
      {error && (
        <div className="absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded z-20">
          <strong>Error:</strong> {error}
          <button 
            onClick={loadOrchardData} 
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