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

const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const citrusIcon = L.icon({
    iconUrl: '/citrus-icon.png', // Use local asset
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const fetchOrchardData = useCallback(async (signal: AbortSignal) => {
    try {
      const endpoints = [
        `${process.env.REACT_APP_INTA_API}/agriculture/citrus/orchards`,
        `${process.env.REACT_APP_INTA_API}/agriculture/orchards?crop=citrus`
      ];

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(`${endpoint}?region=argentina&lat=${latitude}&lng=${longitude}`, {
            signal,
            headers: { 'Accept': 'application/json' }
          });

          if (response.ok) {
            return await response.json();
          }
        } catch (e) {
          continue;
        }
      }
      throw new Error('All API endpoints failed');
    } catch (err) {
      console.error('API Error:', err);
      throw new Error('Could not connect to agricultural data service');
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Initialize map with proper touch options
    const map = L.map(mapContainerRef.current, {
      zoomControl: true,
      dragging: true,
      scrollWheelZoom: true,
      touchZoom: true,
      tapTolerance: 15,
      bounceAtZoomLimits: false,
      doubleClickZoom: true,
      boxZoom: true,
      keyboard: true,
      inertia: true,
      zoomSnap: 0.5,
      zoomDelta: 1
    }).setView([latitude, longitude], zoom);
    
    mapRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const data = await fetchOrchardData(new AbortController().signal);
        renderMapData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, [latitude, longitude, zoom, fetchOrchardData]);

  const renderMapData = (data: OrchardFeatureCollection) => {
    if (!mapRef.current) return;

    // Clear existing layers
    mapRef.current.eachLayer(layer => {
      if (!(layer instanceof L.TileLayer)) {
        mapRef.current?.removeLayer(layer);
      }
    });

    // Add new data with proper null checks
    L.geoJSON(data, {
      pointToLayer: (feature, latlng) => {
        return feature?.properties 
          ? L.marker(latlng, { icon: citrusIcon })
          : L.marker(latlng);
      },
      style: (feature) => ({
        fillColor: feature?.properties?.productivity 
          ? getColor(feature.properties.productivity)
          : '#CCCCCC',
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
      }),
      onEachFeature: (feature, layer) => {
        if (!feature?.properties) return;
        
        layer.bindPopup(`
          <div class="p-2">
            <h3>${feature.properties.name}</h3>
            <p>Yield: ${feature.properties.yield}T/ha</p>
            <p>Productivity: ${feature.properties.productivity}%</p>
            <p>Last Updated: ${feature.properties.lastUpdated}</p>
          </div>
        `);
      }
    }).addTo(mapRef.current);
  };

  return (
    <div className="relative h-full w-full">
      <div 
        ref={mapContainerRef} 
        className="h-full w-full"
        style={{ 
          minHeight: '400px',
          touchAction: 'none' // Added for mobile touch handling
        }}
      />
      {loading && (
        <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"/>
        </div>
      )}
      {error && (
        <div className="absolute top-4 right-4 bg-red-100 p-3 rounded z-20">
          {error}
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

function getColor(productivity: number) {
  return productivity > 80 ? '#4CAF50' :
         productivity > 50 ? '#FFC107' : '#FF9800';
}

export default MapComponent;