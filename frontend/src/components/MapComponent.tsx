import React, { useRef, useEffect, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Feature, Geometry, FeatureCollection } from 'geojson';

interface MapComponentProps {
  latitude: number;
  longitude: number;
  zoom: number;
  refreshInterval?: number; // in milliseconds
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

const MapComponent: React.FC<MapComponentProps> = ({ 
  latitude, 
  longitude, 
  zoom,
  refreshInterval = 300000 // 5 minutes by default
}) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [dataVersion, setDataVersion] = useState(0); // Force re-renders

  // Custom citrus orchard icon
  const citrusIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2909/2909495.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });

  const fetchOrchardData = useCallback(async (signal: AbortSignal) => {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 
        parseInt(process.env.REACT_APP_API_TIMEOUT || '8000'));

      const response = await fetch(
        `${process.env.REACT_APP_INTA_API}/orchards/geojson?region=citrus&lat=${latitude}&lng=${longitude}`,
        {
          signal: controller.signal,
          headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache'
          }
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`API responded with status ${response.status}`);
      }

      const data: OrchardFeatureCollection = await response.json();
      const updateTime = new Date().toLocaleTimeString();
      
      return {
        data,
        updateTime
      };
    } catch (err) {
      throw new Error(`Failed to fetch data: ${err instanceof Error ? err.message : String(err)}`);
    }
  }, [latitude, longitude]);

  const renderMapData = useCallback((data: OrchardFeatureCollection) => {
    if (!mapRef.current) return;

    // Clear previous layers except base tile layer
    mapRef.current.eachLayer(layer => {
      if (!(layer instanceof L.TileLayer)) {
        mapRef.current?.removeLayer(layer);
      }
    });

    // Create productivity color scale
    const getColor = (productivity: number) => {
      return productivity > 80 ? '#4CAF50' :
             productivity > 50 ? '#FFC107' : '#FF9800';
    };

    // Add new data layer
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
            <p>Yield: <strong>${feature.properties.yield}T/ha</strong></p>
            <p>Productivity: <span style="color:${getColor(feature.properties.productivity)}">
              ${feature.properties.productivity}%
            </span></p>
            <p>Updated: ${feature.properties.lastUpdated || 'Unknown'}</p>
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
          <i style="background:#4CAF50" class="w-4 h-4 mr-2"></i> >80%
        </div>
        <div class="flex items-center mb-1">
          <i style="background:#FFC107" class="w-4 h-4 mr-2"></i> 50-80%
        </div>
        <div class="flex items-center">
          <i style="background:#FF9800" class="w-4 h-4 mr-2"></i> <50%
        </div>
        ${lastUpdated ? `<p class="mt-2 text-xs">Updated: ${lastUpdated}</p>` : ''}
      `;
      return div;
    };
    legend.addTo(mapRef.current);
  }, [citrusIcon, lastUpdated]);

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const result = await fetchOrchardData(new AbortController().signal);
      renderMapData(result.data);
      setLastUpdated(result.updateTime);
      setDataVersion(v => v + 1); // Force refresh
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
      console.error('Data loading error:', err);
    } finally {
      setLoading(false);
    }
  }, [fetchOrchardData, renderMapData]);

  // Initial load and refresh interval
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

    loadData();

    // Set up refresh interval
    const intervalId = setInterval(loadData, refreshInterval);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [latitude, longitude, zoom, loadData, refreshInterval]);

  return (
    <div className="relative h-full w-full">
      <div 
        ref={mapContainerRef} 
        className="h-full w-full z-0"
        style={{ 
          minHeight: '400px',
          touchAction: 'none' // Better mobile touch handling
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
            onClick={loadData}
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