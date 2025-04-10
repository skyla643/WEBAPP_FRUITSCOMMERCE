import React from 'react';
import MapComponent from './MapComponent';
import Navbar from './Navbar';
import { FaLeaf, FaChartLine, FaDownload, FaMapMarkedAlt } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const isAdminOrStaff = true;
  const initialLatitude = -34.6037;
  const initialLongitude = -58.3816;
  const initialZoom = 10;

  // Sample data
  const regions = [
    { name: "OF BROADWAY", subregion: "Delta del Porno", value: "2.00m", status: "€ Transición" },
    { name: "DINARY", subregion: "Portado de Territorio", value: "1.00m", status: "€ Transición" },
    { name: "SALVAR", subregion: "Cervas", value: "3.00m", status: "€ Transición" },
    { name: "RANDO", subregion: "Segunda Europa", value: "Delta de Formento", status: "" },
    { name: "TURBAN", subregion: "Vuelta", value: "4.00m", status: "€ Transición" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 bg-fixed font-arial">
      <Navbar isAdminOrStaff={isAdminOrStaff} />

      <div className="flex flex-grow p-6">
        <div className="flex flex-col w-full max-w-7xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6 lg:flex-row">
          {/* Map Area (Left Column - 2/3 width) */}
          <div className="w-full lg:w-2/3 space-y-6">
            {/* Map Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                  <FaMapMarkedAlt className="inline mr-2" /> Regional Overview Map
                </h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition flex items-center">
                    <FaChartLine className="mr-1" /> View All
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition flex items-center">
                    <FaDownload className="mr-1" /> Export
                  </button>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden border border-orange-200" style={{ height: '400px' }}>
                <MapComponent
                  latitude={initialLatitude}
                  longitude={initialLongitude}
                  zoom={initialZoom}
                />
              </div>
            </div>

            {/* VRA-Inspired Fertilizer Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
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
                  <p className="text-lg font-bold text-orange-600">100 kg/ha</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="text-sm text-orange-700">Productivity Zones</p>
                  <p className="text-lg font-bold text-yellow-600">3 Levels</p>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { zone: "Very High", rate: "70 kg/ha", area: "0.6 ha", color: "bg-green-400" },
                  { zone: "High", rate: "85 kg/ha", area: "7.5 ha", color: "bg-yellow-400" },
                  { zone: "Low", rate: "110 kg/ha", area: "8.4 ha", color: "bg-orange-400" }
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
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
                  <span className="font-bold">Total needed:</span> 41,891kg
                  <span className="block text-xs">Without VRA: 68,110kg more</span>
                </p>
              </div>
            </div>
          </div>

          {/* Statistics Panel (Right Column - 1/3 width) */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Toggleable View */}
            <div className="flex border-b border-orange-100">
              <button className="flex-1 px-4 py-2 font-medium text-orange-500 border-b-2 border-orange-500 text-center">
                Summary
              </button>
              <button className="flex-1 px-4 py-2 text-gray-500 hover:text-orange-400 text-center">
                Detailed
              </button>
            </div>

            {/* Education-Inspired Stats Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
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
                  {[
                    { label: "Disease-Free", value: "92%", color: "bg-green-400" },
                    { label: "Pest Incidence", value: "5%", color: "bg-yellow-400" },
                    { label: "Water Stress", value: "3%", color: "bg-orange-400" }
                  ].map((item, idx) => (
                    <div key={idx} className="mb-2">
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

            {/* Top Producers Table */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100">
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
                  {[
                    { region: "OF BROADWAY", yield: "24T/ha", delta: "+12%", color: "text-green-500" },
                    { region: "SALVAR", yield: "18T/ha", delta: "+8%", color: "text-green-500" },
                    { region: "TURBAN", yield: "15T/ha", delta: "-3%", color: "text-orange-500" }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 hover:bg-orange-50">
                      <td className="py-2 font-medium">{row.region}</td>
                      <td className="py-2 text-right">{row.yield}</td>
                      <td className={`py-2 text-right ${row.color}`}>{row.delta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;