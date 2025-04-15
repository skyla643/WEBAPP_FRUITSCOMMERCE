import React, { useState, useEffect, useCallback, memo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import MapComponent from './MapComponent';
import Navbar from './Navbar';
import { FaLeaf, FaChartLine, FaMapMarkedAlt, FaSyncAlt } from 'react-icons/fa';
import Spinner from './Spinner';

// Interfaces
interface RegionData {
  id: string;
  region: string;
  yield: string;
  delta: string;
  color: string;
  coordinates?: [number, number];
}

interface FertilizerZone {
  id: string;
  zone: string;
  rate: string;
  area: string;
  color: string;
}

interface HealthStatus {
  id: string;
  label: string;
  value: string;
  color: string;
}

interface DashboardState {
  regionalData: RegionData[];
  fertilizerData: {
    standardRate: string;
    zones: number;
    zonesData: FertilizerZone[];
    totalNeeded: string;
  } | null;
  healthStatus: HealthStatus[];
  loading: {
    map: boolean;
    regions: boolean;
    fertilizer: boolean;
    health: boolean;
  };
  error: {
    map: string;
    regions: string;
    fertilizer: string;
  };
  isLive: boolean;
  selectedRegion: string;
}

// Mock Data
const MOCK_YIELD_DATA: RegionData[] = [
  {
    id: '1',
    region: "TUCUMÁN",
    yield: "24T/ha",
    delta: "+12%",
    color: "text-green-500",
    coordinates: [-65.2, -26.8]
  },
  {
    id: '2',
    region: "SALTA",
    yield: "18T/ha",
    delta: "+8%",
    color: "text-green-500",
    coordinates: [-65.4, -24.8]
  },
  {
    id: '3',
    region: "JUJUY",
    yield: "15T/ha",
    delta: "-3%",
    color: "text-orange-500",
    coordinates: [-65.3, -23.7]
  }
];

const MOCK_FERTILIZER_DATA = {
  standardRate: "95 kg/ha",
  zones: 3,
  zonesData: [
    {
      id: '1',
      zone: "Very High",
      rate: "70 kg/ha",
      area: "0.6 ha",
      color: "bg-green-400"
    },
    {
      id: '2',
      zone: "High",
      rate: "85 kg/ha",
      area: "7.5 ha",
      color: "bg-yellow-400"
    },
    {
      id: '3',
      zone: "Low",
      rate: "110 kg/ha",
      area: "8.4 ha",
      color: "bg-orange-400"
    }
  ],
  totalNeeded: "41,891kg"
};

const MOCK_HEALTH_STATUS: HealthStatus[] = [
  {
    id: '1',
    label: "Disease-Free",
    value: "92%",
    color: "bg-green-400"
  },
  {
    id: '2',
    label: "Pest Incidence",
    value: "5%",
    color: "bg-yellow-400"
  },
  {
    id: '3',
    label: "Water Stress",
    value: "3%",
    color: "bg-orange-400"
  }
];

// API Tester Component
const ApiTester: React.FC = () => {
  const [results, setResults] = useState<Record<string, string>>({});
  
  useEffect(() => {
    const testEndpoints = async () => {
      const endpoints = [
        '/api/health',
        '/api/orchards/geojson',
        '/api/regional-yield'
      ];
      
      const testResults: Record<string, string> = {};
      
      for (const endpoint of endpoints) {
        try {
          // Use the base URL from environment variables
          const apiUrl = process.env.REACT_APP_API_BASE_URL + endpoint;
            
          console.log(`Testing endpoint: ${apiUrl}`);
          const response = await fetch(apiUrl);
          const status = response.ok ? 'OK' : `Error: ${response.status}`;
          testResults[endpoint] = status;
        } catch (err) {
          testResults[endpoint] = `Failed: ${err instanceof Error ? err.message : String(err)}`;
        }
      }
      
      setResults(testResults);
    };
    
    testEndpoints();
  }, []);
  
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded shadow-lg z-50">
      <h3 className="font-bold mb-2">API Connection Test</h3>
      <ul className="text-sm">
        {Object.entries(results).map(([endpoint, status]) => (
          <li key={endpoint} className="mb-1">
            <span className="font-medium">{endpoint}:</span>{' '}
            <span className={status === 'OK' ? 'text-green-500' : 'text-red-500'}>
              {status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Components
const FertilizerCard: React.FC<{
  data: DashboardState['fertilizerData'];
  loading: boolean;
  error: string;
}> = ({ data, loading, error }) => {
  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          <FaLeaf className="inline mr-2" /> Fertilizer Optimization
        </h2>
        <button className="px-3 py-1 text-sm rounded-md bg-gradient-to-r from-orange-400 to-yellow-400 text-white hover:shadow-md hover:shadow-orange-200 transition">
          Export VRA Map →
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-yellow-50 rounded-lg">
          <p className="text-sm text-yellow-700">Standard Rate</p>
          <p className="text-lg font-bold text-orange-600">{data.standardRate}</p>
        </div>
        <div className="p-3 bg-orange-50 rounded-lg">
          <p className="text-sm text-orange-700">Productivity Zones</p>
          <p className="text-lg font-bold text-yellow-600">{data.zones} Levels</p>
        </div>
      </div>

      <div className="space-y-3">
        {data.zonesData.map((item, idx) => (
          <div key={item.id} className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
            <div className="flex justify-between mb-1">
              <span className="font-medium text-orange-800">{item.zone}</span>
              <span className="font-bold">{item.rate}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>{item.area}</span>
              <span className="font-semibold text-orange-600">Saved 15%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full mt-2">
              <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${70 + idx * 15}%` }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400">
        <p className="text-sm text-blue-800">
          <span className="font-bold">Total needed:</span> {data.totalNeeded}
          <span className="block text-xs">Without VRA: 68,110kg more</span>
        </p>
      </div>
    </div>
  );
};

const StatsToggle: React.FC = memo(() => (
  <div className="flex border-b border-orange-100">
    <button className="flex-1 px-4 py-2 font-medium text-orange-500 border-b-2 border-orange-500 text-center">
      Summary
    </button>
    <button className="flex-1 px-4 py-2 text-gray-500 hover:text-orange-400 text-center">
      Detailed
    </button>
  </div>
));

const OrchardDistributionCard: React.FC<{
  healthStatus: HealthStatus[];
  loading: boolean;
}> = memo(({ healthStatus, loading }) => {
  if (loading) return <Spinner />;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 relative">
      <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent mb-4">
        Orchard Distribution
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-3 bg-purple-50 rounded-lg">
          <p className="text-sm text-purple-700">By Age</p>
          <p className="text-lg font-bold text-purple-600">3 Groups</p>
        </div>
        <div className="p-3 bg-pink-50 rounded-lg">
          <p className="text-sm text-pink-700">By Size</p>
          <p className="text-lg font-bold text-pink-600">5 Tiers</p>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-orange-700 mb-2">Top Varieties</h3>
          <div className="space-y-2">
            {["Valencia Orange", "Eureka Lemon", "Meyer Lemon"].map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="text-gray-600">{item}</span>
                <span className="font-medium">{15 - idx * 5}%</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-green-700 mb-2">Health Status</h3>
          {healthStatus.map((item) => (
            <div key={item.id} className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <span>{item.label}</span>
                <span>{item.value}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full">
                <div className={`h-1.5 rounded-full ${item.color}`} style={{ width: item.value }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

const TopProducersTable: React.FC<{
  data: RegionData[];
  loading: boolean;
  error: string;
}> = memo(({ data, loading, error }) => {
  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 relative">
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Top Producing Regions
        </h2>
        <button className="text-xs text-orange-500 hover:text-orange-700">
          View All →
        </button>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2">Region</th>
            <th className="pb-2 text-right">Yield</th>
            <th className="pb-2 text-right">Δ</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-gray-100 hover:bg-orange-50">
              <td className="py-2 font-medium">{row.region}</td>
              <td className="py-2 text-right">{row.yield}</td>
              <td className={`py-2 text-right ${row.color}`}>{row.delta}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

const MapCard: React.FC<{
  loading: boolean;
  onRegionSelect: (region: string) => void;
  onRefresh: () => void;
}> = memo(({ loading, onRegionSelect, onRefresh }) => {
  const navigate = useNavigate();
  const MAP_CONFIG = {
    initialLatitude: -34.6037,
    initialLongitude: -58.3816,
    initialZoom: 10
  };

  const handleViewAll = () => {
    navigate('/dashboard/orchards');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
          <FaMapMarkedAlt className="inline mr-2" /> Regional Overview Map
        </h2>
        <div className="flex space-x-2">
          <button 
            onClick={handleViewAll}
            className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition flex items-center"
          >
            <FaChartLine className="mr-1" /> View All
          </button>
          <button 
            onClick={onRefresh}
            className="px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition flex items-center"
          >
            <FaSyncAlt className="mr-1" /> Refresh
          </button>
        </div>
      </div>
      
      <div className="rounded-xl overflow-hidden border border-orange-200" style={{ height: '400px' }}>
        <MapComponent
          latitude={MAP_CONFIG.initialLatitude}
          longitude={MAP_CONFIG.initialLongitude}
          zoom={MAP_CONFIG.initialZoom}
          onRegionSelect={onRegionSelect}
        />
        {loading && (
          <div className="absolute inset-0 bg-white bg-opacity-70 flex items-center justify-center">
            <Spinner className="text-orange-500" />
          </div>
        )}
      </div>
    </div>
  );
});

const LiveStatusIndicator: React.FC<{ isLive: boolean }> = memo(({ isLive }) => (
  <div className={`fixed top-4 right-4 z-50 px-3 py-1 rounded-full text-sm font-bold 
    ${isLive ? 'bg-red-500 animate-pulse text-white' : 'bg-gray-500 text-white'}`}>
    {isLive ? 'LIVE' : 'OFFLINE'}
  </div>
));

// Main Dashboard Component
const Dashboard: React.FC = () => {
  const MAP_CONFIG = {
    initialLatitude: -34.6037,
    initialLongitude: -58.3816,
    initialZoom: 10,
    refreshInterval: 30000 // 30 seconds
  };

  const [state, setState] = useState<DashboardState>({
    regionalData: [],
    fertilizerData: null,
    healthStatus: [],
    loading: {
      map: true,
      regions: true,
      fertilizer: true,
      health: true
    },
    error: {
      map: '',
      regions: '',
      fertilizer: ''
    },
    isLive: false,
    selectedRegion: "TUCUMÁN"
  });

  const { 
    regionalData, 
    fertilizerData, 
    healthStatus, 
    loading, 
    error, 
    isLive 
  } = state;

  const location = useLocation();
  const isDashboardHome = location.pathname === '/dashboard';

  // Updated API health check function
  const checkApiHealth = useCallback(async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL + '/api/health';
        
      console.log("Checking API health at:", apiUrl);
      const response = await fetch(apiUrl);
      
      if (!response.ok) throw new Error('API unavailable');
      
      const data = await response.json();
      console.log("API health response:", data);
      setState(prev => ({ ...prev, isLive: true }));
    } catch (err) {
      console.error("API health check failed:", err);
      setState(prev => ({ ...prev, isLive: false }));
    }
  }, []);

  // Updated fetch data function
  const fetchData = useCallback(async <T,>(endpoint: string, mockData: T): Promise<T> => {
    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL + endpoint;
        
      console.log(`Fetching data from: ${apiUrl}`);
      const response = await fetch(apiUrl);
      
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      
      const json = await response.json();
      console.log(`Data from ${endpoint}:`, json);
      
      // Handle both direct data and API response format with status
      if (json.status === 'success' && json.data) {
        return json.data;
      }
      
      return json;
    } catch (err) {
      console.error(`Failed to fetch ${endpoint}:`, err);
      return mockData;
    }
  }, []);

  const loadDashboardData = useCallback(async () => {
    setState(prev => ({
      ...prev,
      loading: {
        map: true,
        regions: true,
        fertilizer: true,
        health: true
      }
    }));

    try {
      const [regions, fertilizer, health] = await Promise.all([
        fetchData<RegionData[]>('/api/regional-yield', MOCK_YIELD_DATA),
        fetchData<typeof MOCK_FERTILIZER_DATA>('/api/fertilizer', MOCK_FERTILIZER_DATA),
        fetchData<HealthStatus[]>('/api/health-status', MOCK_HEALTH_STATUS)
      ]);

      setState(prev => ({
        ...prev,
        regionalData: regions,
        fertilizerData: fertilizer,
        healthStatus: health,
        loading: {
          map: false,
          regions: false,
          fertilizer: false,
          health: false
        },
        error: {
          map: '',
          regions: '',
          fertilizer: ''
        }
      }));
    } catch (err) {
      console.error('Dashboard data load failed:', err);
      setState(prev => ({
        ...prev,
        error: {
          map: 'Map data unavailable',
          regions: 'Yield data unavailable',
          fertilizer: 'Fertilizer data unavailable'
        },
        loading: {
          map: false,
          regions: false,
          fertilizer: false,
          health: false
        }
      }));
    }
  }, [fetchData]);

  useEffect(() => {
    const healthCheckInterval = setInterval(checkApiHealth, 5000);
    return () => clearInterval(healthCheckInterval);
  }, [checkApiHealth]);

  useEffect(() => {
    if (isDashboardHome) {
      loadDashboardData();
      const dataRefreshInterval = setInterval(loadDashboardData, MAP_CONFIG.refreshInterval);
      return () => clearInterval(dataRefreshInterval);
    }
  }, [isDashboardHome, loadDashboardData, MAP_CONFIG.refreshInterval]);

  const handleRegionSelect = useCallback((region: string) => {
    setState(prev => ({ ...prev, selectedRegion: region }));
    console.log(`Region selected: ${region}`);
  }, []);

  const handleRefresh = useCallback(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 bg-fixed font-arial overflow-auto">
      <LiveStatusIndicator isLive={isLive} />
      <Navbar isAdminOrStaff={true} />

      {/* Add the API Tester component for debugging */}
      <ApiTester />

      {isDashboardHome ? (
        <div className="flex-grow p-6 overflow-auto">
          <div className="flex flex-col w-full max-w-7xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6 lg:flex-row">
            <div className="w-full lg:w-2/3 space-y-6">
              <MapCard 
                loading={loading.map}
                onRegionSelect={handleRegionSelect}
                onRefresh={handleRefresh}
              />
              <FertilizerCard 
                data={fertilizerData}
                loading={loading.fertilizer}
                error={error.fertilizer}
              />
            </div>

            <div className="w-full lg:w-1/3 space-y-6">
              <StatsToggle />
              <OrchardDistributionCard 
                healthStatus={healthStatus}
                loading={loading.health}
              />
              <TopProducersTable 
                data={regionalData}
                loading={loading.regions}
                error={error.regions}
              />
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