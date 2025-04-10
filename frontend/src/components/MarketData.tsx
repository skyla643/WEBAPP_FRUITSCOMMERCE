import React from 'react';
import { FaTruck, FaWarehouse, FaChartLine, FaCalendarAlt, FaBoxOpen } from 'react-icons/fa';

interface SupplyItem {
  id: string;
  orchard: string;
  product: string;
  status: 'harvesting' | 'packaging' | 'in-transit' | 'delivered';
  quantity: number;
  destination: string;
  estimatedArrival: string;
  pricePerUnit: number;
  quality: 'premium' | 'standard' | 'processing';
}

const SupplyChain: React.FC = () => {
  // Mock data - replace with real API data
  const supplyItems: SupplyItem[] = [
    {
      id: 'CT-28472',
      orchard: 'Salta Estate',
      product: 'Valencia Oranges',
      status: 'packaging',
      quantity: 1250,
      destination: 'Miami Distribution',
      estimatedArrival: '2025-04-15',
      pricePerUnit: 0.85,
      quality: 'premium'
    },
    {
      id: 'CT-28473',
      orchard: 'Tucumán Valley',
      product: 'Eureka Lemons',
      status: 'in-transit',
      quantity: 850,
      destination: 'New York Terminal',
      estimatedArrival: '2025-04-12',
      pricePerUnit: 1.20,
      quality: 'premium'
    },
    {
      id: 'CT-28474',
      orchard: 'Mendoza Grove',
      product: 'Meyer Lemons',
      status: 'harvesting',
      quantity: 620,
      destination: 'Los Angeles Port',
      estimatedArrival: '2025-04-18',
      pricePerUnit: 1.45,
      quality: 'premium'
    },
    {
      id: 'CT-28475',
      orchard: 'Corrientes Farm',
      product: 'Tangerines',
      status: 'delivered',
      quantity: 980,
      destination: 'Chicago Market',
      estimatedArrival: '2025-04-05',
      pricePerUnit: 0.95,
      quality: 'standard'
    }
  ];

  const statusColors = {
    harvesting: 'bg-yellow-100 text-yellow-800',
    packaging: 'bg-blue-100 text-blue-800',
    'in-transit': 'bg-orange-100 text-orange-800',
    delivered: 'bg-green-100 text-green-800'
  };

  const qualityColors = {
    premium: 'bg-purple-100 text-purple-800',
    standard: 'bg-green-100 text-green-800',
    processing: 'bg-gray-100 text-gray-800'
  };

  // Calculate totals
  const totalInTransit = supplyItems.filter(item => item.status === 'in-transit')
                                   .reduce((sum, item) => sum + item.quantity, 0);
  const premiumPercentage = Math.round((supplyItems.filter(item => item.quality === 'premium').length / supplyItems.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            <FaTruck className="inline mr-3" />
            Citrus Supply Chain
          </h1>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-white rounded-full text-sm font-medium shadow-sm">
              <FaCalendarAlt className="inline mr-1" />
              Season: {new Date().getFullYear()} Harvest
            </span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Shipments</h3>
            <p className="text-3xl font-bold text-orange-600">{supplyItems.length}</p>
            <p className="text-sm text-gray-500 mt-2">Across all orchards</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">In Transit</h3>
            <p className="text-3xl font-bold text-blue-600">{totalInTransit} crates</p>
            <p className="text-sm text-gray-500 mt-2">Currently moving</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Premium Quality</h3>
            <p className="text-3xl font-bold text-purple-600">{premiumPercentage}%</p>
            <p className="text-sm text-gray-500 mt-2">Of total production</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Seasonal Peak</h3>
            <p className="text-3xl font-bold text-green-600">April</p>
            <p className="text-sm text-gray-500 mt-2">Current harvest month</p>
          </div>
        </div>

        {/* Supply Chain Progress */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <FaChartLine className="text-orange-500 mr-2" />
            Supply Chain Status
          </h2>
          
          <div className="flex justify-between mb-6 px-4">
            {['Harvesting', 'Packaging', 'In Transit', 'Delivered'].map((stage, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center ${
                  index === 0 ? 'bg-yellow-100 text-yellow-600' :
                  index === 1 ? 'bg-blue-100 text-blue-600' :
                  index === 2 ? 'bg-orange-100 text-orange-600' : 'bg-green-100 text-green-600'
                }`}>
                  {index === 0 ? <FaBoxOpen /> : 
                   index === 1 ? <FaWarehouse /> : 
                   index === 2 ? <FaTruck /> : '✓'}
                </div>
                <p className="mt-2 text-sm font-medium">{stage}</p>
                <p className="text-xs text-gray-500">
                  {supplyItems.filter(item => 
                    index === 0 ? item.status === 'harvesting' :
                    index === 1 ? item.status === 'packaging' :
                    index === 2 ? item.status === 'in-transit' : item.status === 'delivered'
                  ).length} items
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Items Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold flex items-center">
              <FaBoxOpen className="mr-2 text-orange-500" />
              Current Shipments
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orchard</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destination</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Arrival</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quality</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {supplyItems.map((item) => (
                  <tr key={item.id} className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{item.orchard}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[item.status]}`}>
                        {item.status.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.quantity.toLocaleString()} crates</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.destination}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {new Date(item.estimatedArrival).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${qualityColors[item.quality]}`}>
                        {item.quality}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Insights */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaChartLine className="text-orange-500 mr-2" />
              Seasonal Availability
            </h2>
            <div className="h-64 bg-gradient-to-b from-orange-50 to-yellow-50 rounded-lg flex items-center justify-center">
              {/* Placeholder for chart - would show monthly production forecasts */}
              <p className="text-gray-500">Seasonal production chart would display here</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Priority Allocations</h2>
            <div className="space-y-4">
              {supplyItems
                .filter(item => item.quality === 'premium')
                .sort((a, b) => b.quantity - a.quantity)
                .slice(0, 3)
                .map((item) => (
                  <div key={item.id} className="border-l-4 border-orange-400 pl-4 py-2">
                    <h3 className="font-medium">{item.orchard}</h3>
                    <p className="text-sm text-gray-600">
                      {item.quantity.toLocaleString()} crates of {item.product}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      To {item.destination} by {new Date(item.estimatedArrival).toLocaleDateString()}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;