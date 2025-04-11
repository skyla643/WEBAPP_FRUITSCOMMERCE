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

  const getColor = useCallback((productivity?: number) => {
    if (productivity === undefined) return '#CCCCCC';
    return productivity > 80 ? '#4CAF50' :
           productivity > 50 ? '#FFC107' : '#FF9800';
  }, []);

  const renderMapData = useCallback((data: OrchardFeatureCollection) => {
    if (!mapRef.current) return;

    // Clear existing layers
    mapRef.current.eachLayer(layer => {
      if (layer instanceof L.TileLayer) return;
      mapRef.current?.removeLayer(layer);
    });

    // Add GeoJSON layer
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
        const popupContent = `...`; // Your popup HTML
        layer.bindPopup(popupContent);
      }
    }).addTo(mapRef.current);

    // Add legend
    const legend = new L.Control({ position: 'bottomright' });
    legend.onAdd = () => {
      const div = L.DomUtil.create('div', 'bg-white p-3 text-sm shadow-lg');
      div.innerHTML = `...`; // Your legend HTML
      return div;
    };
    legend.addTo(mapRef.current);
  }, [citrusIcon, getColor]);

  const loadOrchardData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${process.env.REACT_APP_INTA_API}/orchards/geojson?region=citrus`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) throw new Error('API returned invalid response');
      
      const data: OrchardFeatureCollection = await response.json();
      renderMapData(data);
      
    } catch (err) {
      console.error('Error loading map data:', err);
      setError('Live data unavailable - showing demonstration data');
      // Load mock data
      renderMapData({
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
              coordinates: [longitude, latitude]
            }
          }
        ]
      });
    } finally {
      setLoading(false);
    }
  }, [renderMapData, latitude, longitude]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map
    const map = L.map(mapContainerRef.current, {
      zoomControl: true,
      dragging: true,
      touchZoom: true,
      scrollWheelZoom: true
    }).setView([latitude, longitude], zoom);
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    loadOrchardData();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [latitude, longitude, zoom, loadOrchardData]);

  return (
    <div className="relative h-full w-full">
      <div 
        ref={mapContainerRef} 
        className="h-full w-full z-0"
        style={{ minHeight: '400px' }}
      />
      {loading && <div className="...">Loading...</div>}
      {error && (
        <div className="...">
          {error}
          <button onClick={loadOrchardData}>Retry</button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;