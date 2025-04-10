import React from 'react';
import MapComponent from './MapComponent';
import Navbar from './Navbar';

const Dashboard: React.FC = () => {
  const isAdminOrStaff = true;
  const initialLatitude = -34.6037;
  const initialLongitude = -58.3816;
  const initialZoom = 10;

  // Sample regions data - replace with your actual data
  const regions = [
    { name: "OF BROADWAY", subregion: "Delta del Porno", value: "2.00m", status: "€ Transición" },
    { name: "DINARY", subregion: "Portado de Territorio", value: "1.00m", status: "€ Transición" },
    { name: "SALVAR", subregion: "Cervas", value: "3.00m", status: "€ Transición" },
    { name: "RANDO", subregion: "Segunda Europa", value: "Delta de Formento", status: "" },
    { name: "TURBAN", subregion: "Vuelta", value: "4.00m", status: "€ Transición" },
    // Add more regions as needed
  ];

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-yellow-50 to-orange-50 font-arial">
      <Navbar isAdminOrStaff={isAdminOrStaff} />

      <div className="flex flex-grow p-6">
        <div className="flex flex-col w-full max-w-7xl mx-auto space-y-6 lg:space-y-0 lg:space-x-6 lg:flex-row">
          {/* Map Area */}
          <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
                Regional Overview Map
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition">
                  View All
                </button>
                <button className="px-3 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-600 hover:bg-yellow-200 transition">
                  Export
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

            {/* Regions List */}
            <div className="mt-6 space-y-3">
              {regions.map((region, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg hover:shadow-sm transition">
                  <div>
                    <h3 className="font-medium text-orange-800">{region.name}</h3>
                    <p className="text-xs text-orange-600">{region.subregion}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-yellow-600">{region.value}</p>
                    {region.status && (
                      <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-yellow-100 text-yellow-700">
                        {region.status}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Panel */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-6 border border-orange-100">
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-4">
              Regional Statistics
            </h2>
            
            {/* Stats Cards */}
            <div className="space-y-4">
              <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-sm font-medium text-yellow-800">Total Production</h3>
                <p className="text-2xl font-bold text-yellow-600">24.5M kg</p>
                <p className="text-xs text-yellow-500 mt-1">↑ 12% from last season</p>
              </div>
              
              <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-sm font-medium text-orange-800">Active Orchards</h3>
                <p className="text-2xl font-bold text-orange-600">142</p>
                <p className="text-xs text-orange-500 mt-1">3 new this month</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                <h3 className="text-sm font-medium text-green-800">Healthy Trees</h3>
                <p className="text-2xl font-bold text-green-600">92%</p>
                <p className="text-xs text-green-500 mt-1">2% improvement</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-4 border-t border-orange-100">
              <h3 className="text-sm font-semibold text-orange-700 mb-2">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-2">
                <button className="p-2 bg-yellow-100 rounded-md text-yellow-700 text-sm font-medium hover:bg-yellow-200 transition">
                  Add Region
                </button>
                <button className="p-2 bg-orange-100 rounded-md text-orange-700 text-sm font-medium hover:bg-orange-200 transition">
                  Generate Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;