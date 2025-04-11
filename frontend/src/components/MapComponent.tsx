import React, { useRef, useEffect, useState, useCallback } from 'react';
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
// No need for useCallback here as L.icon returns an object and options are static
const citrusIcon = L.icon({
  iconUrl: '/citrus-icon.png', // Ensure this path is correct relative to your public folder
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});


const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Memoized function to fetch orchard data with retry logic
  const fetchOrchardData = useCallback(async (signal: AbortSignal) => {
    const endpoints = [
      `${process.env.REACT_APP_INTA_API}/agriculture/citrus/orchards`,
      `${process.env.REACT_APP_INTA_API}/agriculture/orchards?crop=citrus`
    ];
    const maxRetries = parseInt(process.env.REACT_APP_API_RETRIES || '0', 10);

    for (const endpoint of endpoints) {
      let attempts = 0;
      while (attempts <= maxRetries) {
        try {
          if (signal.aborted) { throw new Error('Fetch aborted'); }

          console.log(`API Request: Attempt ${attempts + 1}/${maxRetries + 1} for ${endpoint}`);
          const response = await fetch(`${endpoint}?region=argentina&lat=${latitude}&lng=${longitude}`, {
            signal,
            headers: { 'Accept': 'application/json' }
          });
          console.log(`API Response Status for ${endpoint}: ${response.status}`);

          if (response.ok) { return await response.json() as OrchardFeatureCollection; }
          if (response.status === 404) {
            console.warn(`Endpoint ${endpoint} returned 404. Not found, will not retry this endpoint.`);
            break;
          }
          console.warn(`Attempt ${attempts + 1} failed for ${endpoint} with status: ${response.status}`);

        } catch (err) {
          if (signal.aborted) { throw new Error('Fetch aborted'); }
          console.warn(`Attempt ${attempts + 1} for ${endpoint} failed with error:`, err);
        }

        attempts++;
        if (attempts <= maxRetries) {
          const delay = 500 * attempts;
          console.log(`Waiting ${delay}ms before retry ${attempts}/${maxRetries}...`);
          await new Promise(resolve => {
              const timeoutId = setTimeout(resolve, delay);
              signal.addEventListener('abort', () => { clearTimeout(timeoutId); resolve(undefined); });
          });
          if (signal.aborted) { throw new Error('Fetch aborted'); }
        }
      }
    }
    console.error('API Error: All API endpoints failed after all retries.');
    throw new Error('Could not connect to agricultural data service after multiple attempts.');

  }, [latitude, longitude]);


  // Memoized function to render map data using Leaflet GeoJSON layer
  // Dependency array is empty now as citrusIcon is defined statically outside
  const renderMapData = useCallback((data: OrchardFeatureCollection) => {
    if (!mapRef.current) {
      console.warn("Attempted to render map data, but map reference is null.");
      return;
    }
    const map = mapRef.current;

    map.eachLayer(layer => {
      if (!(layer instanceof L.TileLayer)) {
        map.removeLayer(layer);
      }
    });

    L.geoJSON(data, {
      style: (feature) => ({
        fillColor: feature?.properties?.productivity
          ? getColor(feature.properties.productivity)
          : '#CCCCCC',
        weight: 1,
        opacity: 1,
        color: 'white',
        fillOpacity: 0.7
      }),
      pointToLayer: (feature, latlng) => {
        // Use the statically defined citrusIcon
        return feature?.properties
          ? L.marker(latlng, { icon: citrusIcon }) // Correctly uses the Icon object
          : L.marker(latlng);
      },
      onEachFeature: (feature, layer) => {
        if (feature?.properties) {
          const popupContent = `
            <div class="p-2">
              <h3 class="font-semibold text-lg mb-1">${feature.properties.name || 'Unnamed Orchard'}</h3>
              <p>Yield: ${feature.properties.yield ?? 'N/A'} T/ha</p>
              <p>Productivity: ${feature.properties.productivity ?? 'N/A'}%</p>
              <p>Variety: ${feature.properties.variety || 'N/A'}</p>
              <p>Age: ${feature.properties.age ?? 'N/A'} years</p>
              <p>Last Updated: ${feature.properties.lastUpdated ? new Date(feature.properties.lastUpdated).toLocaleDateString() : 'N/A'}</p>
            </div>
          `;
          layer.bindPopup(popupContent);
        }
      }
    }).addTo(map);

  }, []); // Empty dependency array is correct here


  // Main effect for map initialization and data loading
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    console.log("Initializing Leaflet map...");
    const map = L.map(mapContainerRef.current, {
      zoomControl: true, dragging: true, scrollWheelZoom: true, touchZoom: true,
      doubleClickZoom: true, boxZoom: true, keyboard: true, inertia: true,
      zoomSnap: 0.5, zoomDelta: 1, tapTolerance: 15, bounceAtZoomLimits: false
    }).setView([latitude, longitude], zoom);
    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
    }).addTo(map);

    const abortController = new AbortController();
    const loadData = async () => {
      try {
        setLoading(true); setError(null);
        console.log("Fetching orchard data...");
        const data = await fetchOrchardData(abortController.signal);
        console.log("Data fetched successfully, rendering map data...");
        renderMapData(data); // Call memoized renderMapData
      } catch (err) {
        if (err instanceof Error && err.name !== 'AbortError') {
          console.error("Failed to load map data:", err);
          setError(err.message);
        } else if (!(err instanceof Error)) {
          console.error("An unexpected error occurred:", err);
          setError('An unknown error occurred while loading data.');
        }
      } finally {
        setLoading(false);
      }
    };

    loadData();

    return () => {
      console.log("Cleaning up MapComponent: Aborting fetch and removing map...");
      abortController.abort();
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  // Dependencies updated: renderMapData's dependency array was empty, so its identity is stable unless code changes
  }, [latitude, longitude, zoom, fetchOrchardData, renderMapData]);

  // JSX for rendering the component
  return (
    <div className="relative h-full w-full">
      <div
        ref={mapContainerRef}
        className="h-full w-full"
        style={{ minHeight: '400px', backgroundColor: '#e0e0e0', touchAction: 'none' }}
      />
      {loading && (
        <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center z-10 pointer-events-none">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500" role="status" aria-label="Loading map data"></div>
        </div>
      )}
      {error && (
        <div className="absolute top-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded shadow-md z-20" role="alert">
          <strong className="font-bold">Error:</strong>
          <span className="block sm:inline ml-2">{error}</span>
          <button
            onClick={() => window.location.reload()}
            className="ml-4 mt-2 sm:mt-0 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default MapComponent;