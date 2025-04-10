import React from 'react';
import { FaChartLine, FaDollarSign, FaPercentage, FaBoxOpen, FaArrowUp, FaArrowDown } from 'react-icons/fa';

interface MarketItem {
  id: string;
  orchard: string;
  product: string;
  currentPrice: number;
  priceChange: number;
  demand: 'high' | 'medium' | 'low';
  inventory: number;
  peakSeason: boolean;
  marketTrend: number[];
}

const MarketData: React.FC = () => {
  // Mock data - replace with real API data
  const marketData: MarketItem[] = [
    {
      id: 'CT-MD-28472',
      orchard: 'Salta Estate',
      product: 'Valencia Oranges',
      currentPrice: 0.92,
      priceChange: 7.4,
      demand: 'high',
      inventory: 1250,
      peakSeason: true,
      marketTrend: [65, 72, 80, 75, 82, 90, 92]
    },
    {
      id: 'CT-MD-28473',
      orchard: 'Tucumán Valley',
      product: 'Eureka Lemons',
      currentPrice: 1.35,
      priceChange: -2.1,
      demand: 'medium',
      inventory: 850,
      peakSeason: false,
      marketTrend: [120, 115, 125, 130, 128, 135, 132]
    },
    {
      id: 'CT-MD-28474',
      orchard: 'Mendoza Grove',
      product: 'Meyer Lemons',
      currentPrice: 1.60,
      priceChange: 12.3,
      demand: 'high',
      inventory: 620,
      peakSeason: true,
      marketTrend: [110, 115, 125, 140, 150, 155, 160]
    },
    {
      id: 'CT-MD-28475',
      orchard: 'Corrientes Farm',
      product: 'Tangerines',
      currentPrice: 1.05,
      priceChange: 3.2,
      demand: 'low',
      inventory: 980,
      peakSeason: false,
      marketTrend: [85, 90, 95, 100, 98, 102, 105]
    }
  ];

  const demandColors = {
    high: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    low: 'bg-red-100 text-red-800'
  };

  // Calculate market averages
  const averagePrice = marketData.reduce((sum, item) => sum + item.currentPrice, 0) / marketData.length;
  const peakSeasonItems = marketData.filter(item => item.peakSeason).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            <FaChartLine className="inline mr-3" />
            Citrus Market Intelligence
          </h1>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-white rounded-full text-sm font-medium shadow-sm">
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Market Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Avg. Price</h3>
            <p className="text-3xl font-bold text-green-600 flex items-center">
              <FaDollarSign className="mr-1" />
              {averagePrice.toFixed(2)}
            </p>
            <p className="text-sm text-gray-500 mt-2">Per crate across all varieties</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">In Peak Season</h3>
            <p className="text-3xl font-bold text-orange-600">{peakSeasonItems}</p>
            <p className="text-sm text-gray-500 mt-2">Products currently at peak</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">High Demand</h3>
            <p className="text-3xl font-bold text-blue-600">
              {marketData.filter(item => item.demand === 'high').length}
            </p>
            <p className="text-sm text-gray-500 mt-2">Varieties in high demand</p>
          </div>
        </div>

        {/* Market Trends */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <FaPercentage className="text-orange-500 mr-2" />
            Weekly Price Trends
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {marketData.map((item) => (
              <div key={item.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold">{item.product}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${demandColors[item.demand]}`}>
                    {item.demand} demand
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{item.orchard}</p>
                
                <div className="flex items-end justify-between mb-3">
                  <span className="text-2xl font-bold">${item.currentPrice.toFixed(2)}</span>
                  <span className={`flex items-center ${item.priceChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {item.priceChange > 0 ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                    {Math.abs(item.priceChange)}%
                  </span>
                </div>
                
                <div className="h-24 bg-gradient-to-b from-orange-50 to-yellow-50 rounded-lg p-2">
                  {/* Mini trend chart - would be replaced with actual chart library */}
                  <div className="flex items-end h-full space-x-1">
                    {item.marketTrend.map((value, index) => (
                      <div 
                        key={index}
                        className="flex-1 bg-orange-400 rounded-t-sm"
                        style={{ height: `${(value / Math.max(...item.marketTrend)) * 80}%` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Market Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold flex items-center">
              <FaBoxOpen className="mr-2 text-orange-500" />
              Orchard Market Positions
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orchard</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Demand</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Inventory</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Season</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {marketData.map((item) => (
                  <tr key={item.id} className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap font-medium">{item.orchard}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap font-bold">${item.currentPrice.toFixed(2)}</td>
                    <td className={`px-6 py-4 whitespace-nowrap ${item.priceChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.priceChange > 0 ? '+' : ''}{item.priceChange}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${demandColors[item.demand]}`}>
                        {item.demand}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{item.inventory.toLocaleString()} crates</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {item.peakSeason ? (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                          Peak Season
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          Off Season
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Market Comparison */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Monthly Performance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, index) => {
              const randomValue = 20 + Math.floor(Math.random() * 60);
              return (
                <div key={month} className="text-center">
                  <div className="h-32 bg-gradient-to-b from-orange-50 to-yellow-50 rounded-lg flex flex-col justify-end p-2">
                    <div 
                      className="bg-orange-400 rounded-t-sm w-full"
                      style={{ height: `${randomValue}%` }}
                    ></div>
                  </div>
                  <p className="mt-2 font-medium">{month}</p>
                  <p className="text-sm text-gray-600">{randomValue}%</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketData;