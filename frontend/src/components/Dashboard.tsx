import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MapComponent from './MapComponent';
import Navbar from './Navbar';
import { FaLeaf, FaChartLine, FaDownload, FaMapMarkedAlt, FaSyncAlt } from 'react-icons/fa';
import Spinner from './Spinner';

interface RegionData {
  region: string;
  yield: string;
  delta: string;
  color: string;
}

interface FertilizerZone {
  zone: string;
  rate: string;
  area: string;
  color: string;
}

interface HealthStatus {
  label: string;
  value: string;
  color: string;
}

const Dashboard: React.FC = () => {
  const isAdminOrStaff = true;
  const location = useLocation();
  const navigate = useNavigate();
  const initialLatitude = -34.6037;
  const initialLongitude = -58.3816;
  const initialZoom = 10;

  // State for live data
  const [regionalData, setRegionalData] = useState<RegionData[]>([]);
  const [fertilizerData, setFertilizerData] = useState<{
    standardRate: string;
    zones: number;
    zonesData: FertilizerZone[];
    totalNeeded: string;
  } | null>(null);
  const [healthStatus, setHealthStatus] = useState<HealthStatus[]>([]);
  const [loading, setLoading] = useState({
    map: true,
    regions: true,
    fertilizer: true,
    health: true
  });
  const [error, setError] = useState({
    map: '',
    regions: '',
    fertilizer: ''
  });
  const [isLive, setIsLive] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("TUCUMÁN");

  const isDashboardHome = location.pathname === '/dashboard';

  // Mock data fallback
  const mockYieldData: RegionData[] = [
    { region: "TUCUMÁN", yield: "24T/ha", delta: "+12%", color: "text-green-500" },
    { region: "SALTA", yield: "18T/ha", delta: "+8%", color: "text-green-500" },
    { region: "JUJUY", yield: "15T/ha", delta: "-3%", color: "text-orange-500" }
  ];

  const mockFertilizerData = {
    standardRate: "95 kg/ha",
    zones: 3,
    zonesData: [
      { zone: "Very High", rate: "70 kg/ha", area: "0.6 ha", color: "bg-green-400" },
      { zone: "High", rate: "85 kg/ha", area: "7.5 ha", color: "bg-yellow-400" },
      { zone: "Low", rate: "110 kg/ha", area: "8.4 ha", color: "bg-orange-400" }
    ],
    totalNeeded: "41,891kg"
  };

  const mockHealthStatus: HealthStatus[] = [
    { label: "Disease-Free", value: "92%", color: "bg-green-400" },
    { label: "Pest Incidence", value: "5%", color: "bg-yellow-400" },
    { label: "Water Stress", value: "3%", color: "bg-orange-400" }
  ];

  // API health check
  useEffect(() => {
    const checkApi = async () => {
      try {
        await fetch('/api/health');
        setIsLive(true);
      } catch {
        setIsLive(false);
      }
    };
    checkApi();
    const interval = setInterval(checkApi, 5000);
    return () => clearInterval(interval);
  }, []);

  // Fetch data functions
  const fetchRegionalYield = async () => {
    try {
      const response = await fetch('/api/regional-yield');
      const data = await response.json();
      setRegionalData(data);
    } catch (err) {
      setError(prev => ({ ...prev, regions: 'Failed to load yield data' }));
      setRegionalData(mockYieldData);
    } finally {
      setLoading(prev => ({ ...prev, regions: false }));
    }
  };

  const fetchFertilizerData = async () => {
    try {
      const response = await fetch(`/api/fertilizer?lat=${initialLatitude}&lng=${initialLongitude}`);
      const data = await response.json();
      setFertilizerData(data);
    } catch (err) {
      setError(prev => ({ ...prev, fertilizer: 'Failed to load fertilizer data' }));
      setFertilizerData(mockFertilizerData);
    } finally {
      setLoading(prev => ({ ...prev, fertilizer: false }));
    }
  };

  const fetchHealthStatus = async () => {
    try {
      const response = await fetch('/api/health-status');
      const data = await response.json();
      setHealthStatus(data);
    } catch (err) {
      setHealthStatus(mockHealthStatus);
    } finally {
      setLoading(prev => ({ ...prev, health: false }));
    }
  };

  // Initial data load
  useEffect(() => {
    if (isDashboardHome) {
      fetchRegionalYield();
      fetchFertilizerData();
      fetchHealthStatus();
    }
  }, [isDashboardHome]);

  // Data refresh function
  const refreshData = () => {
    setLoading({
      map: true,
      regions: true,
      fertilizer: true,
      health: true
    });
    fetchRegionalYield();
    fetchFertilizerData();
    fetchHealthStatus();
  };

  // Region selection handler
  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    // You would add logic here to update the map view based on region
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 bg-fixed font-arial overflow-auto">
      {/* Live Status Indicator */}
      <div className={`fixed top-4 right-4 z-50 px-3 py-1 rounded-full text-sm font-bold 
        ${isLive ? 'bg-red-500 animate-pulse text-white' : 'bg-gray-500 text-white'}`}>
        {isLive ? 'LIVE' : 'OFFLINE'}
      </div>

      <Navbar isAdminOrStaff={isAdminOrStaff} />

      {isDashboardHome ? (
        <div className="flex-grow p-6 overflow-auto">
          <div className="flex flex-col w-full max-w-7xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6 lg:flex-row">
            {/* Left Column */}
            <div className="w-full lg:w-2/3 space-y-6">
              {/* Map Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 relative">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                    <FaMapMarkedAlt className="inline mr-2" /> Regional Overview Map
                  </h2>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => navigate('/dashboard/orchards')}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition flex items-center"
                    >
                      <FaChartLine className="mr-1" /> View All
                    </button>
                    <button 
                      onClick={refreshData}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition flex items-center"
                    >
                      <FaSyncAlt className="mr-1" /> Refresh
                    </button>
                  </div>
                </div>
                
                <div className="rounded-xl overflow-hidden border border-orange-200" style={{ height: '400px' }}>
                  <MapComponent
                    latitude={initialLatitude}
                    longitude={initialLongitude}
                    zoom={initialZoom}
                    onRegionSelect={handleRegionSelect}
                  />
                  {loading.map && (
                    <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
                      <Spinner className="text-orange-500" />
                    </div>
                  )}
                </div>
              </div>

              {/* Fertilizer Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 relative">
                {/* ... (keep existing fertilizer card content) ... */}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-1/3 space-y-6">
              {/* ... (keep existing right column content) ... */}
            </div>
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
};

export default Dashboard;