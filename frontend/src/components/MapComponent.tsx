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
const citrusIcon = L.icon({
  iconUrl: '/citrus-icon.png', // Ensure this path is correct relative to your public folder
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});


const MapComponent: React.FC<MapComponentProps> = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState