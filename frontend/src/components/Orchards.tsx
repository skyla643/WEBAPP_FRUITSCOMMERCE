import React from 'react';
import { WiRaindrop, WiThermometer, WiBarometer, WiSunrise } from 'react-icons/wi';
import { FaLeaf, FaAppleAlt, FaChartLine } from 'react-icons/fa';

const Orchards: React.FC = () => {
  // Mock data - replace with real data from your API
  const orchards = [
    {
      name: "Salta Estate",
      location: "Salta Province",
      status: "Optimal",
      metrics: {
        temperature: 24,
        moisture: 65,
        pressure: 1012,
        sunlight: 8.2,
        fruitQuality: "Excellent",
        yieldEstimate: "24T/ha"
      },
      forecast: [
        { day: "Today", low: 19, high: 28, condition: "Sunny" },
        { day: "Thu", low: 20, high: 29, condition: "Partly Cloudy" },
        { day: "Fri", low: 20, high: 29, condition: "Clear" }
      ]
    },
    {
      name: "Tucumán Valley",
      location: "Tucumán Province",
      status: "Good",
      metrics: {
        temperature: 26,
        moisture: 58,
        pressure: 1010,
        sunlight: 7.5,
        fruitQuality: "Good",
        yieldEstimate: "18T/ha"
      },
      forecast: [
        { day: "Today", low: 20, high: 30, condition: "Clear" },
        { day: "Thu", low: 21, high: 31, condition: "Sunny" },
        { day: "Fri", low: 22, high: 32, condition: "Sunny" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 mb-6">
          Orchard Analytics Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {orchards.map((orchard, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-orange-100">
              {/* Orchard Header */}
              <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-4 border-b border-orange-200">
                <h2 className="text-2xl font-bold text-gray-800">{orchard.name}</h2>
                <p className="text-orange-600">{orchard.location}</p>
                <div className="mt-2 flex items-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    orchard.status === "Optimal" 
                      ? "bg-green-100 text-green-800" 
                      : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {orchard.status} Conditions
                  </span>
                </div>
              </div>

              <div className="p-6">
                {/* Current Conditions */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center text-orange-600">
                      <WiThermometer className="text-2xl mr-2" />
                      <span className="font-medium">Temperature</span>
                    </div>
                    <p className="text-2xl font-bold mt-1">{orchard.metrics.temperature}°C</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-center text-yellow-600">
                      <WiRaindrop className="text-2xl mr-2" />
                      <span className="font-medium">Soil Moisture</span>
                    </div>
                    <p className="text-2xl font-bold mt-1">{orchard.metrics.moisture}%</p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-center text-amber-600">
                      <FaAppleAlt className="text-xl mr-2" />
                      <span className="font-medium">Fruit Quality</span>
                    </div>
                    <p className="text-2xl font-bold mt-1">{orchard.metrics.fruitQuality}</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center text-orange-600">
                      <WiBarometer className="text-2xl mr-2" />
                      <span className="font-medium">Pressure</span>
                    </div>
                    <p className="text-2xl font-bold mt-1">{orchard.metrics.pressure}hPa</p>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-center text-yellow-600">
                      <WiSunrise className="text-2xl mr-2" />
                      <span className="font-medium">Sunlight</span>
                    </div>
                    <p className="text-2xl font-bold mt-1">{orchard.metrics.sunlight} hrs</p>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg">
                    <div className="flex items-center text-amber-600">
                      <FaChartLine className="text-xl mr-2" />
                      <span className="font-medium">Yield Estimate</span>
                    </div>
                    <p className="text-2xl font-bold mt-1">{orchard.metrics.yieldEstimate}</p>
                  </div>
                </div>

                {/* Forecast Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center">
                    <FaLeaf className="text-orange-500 mr-2" />
                    Upcoming Conditions Forecast
                  </h3>
                  <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                    {orchard.forecast.map((day, i) => (
                      <div key={i} className="bg-gradient-to-b from-orange-50 to-yellow-50 rounded-lg p-2 text-center border border-orange-100">
                        <p className="font-medium text-sm">{day.day}</p>
                        <p className="text-xs text-gray-500">{day.condition}</p>
                        <div className="flex justify-center space-x-1 mt-1">
                          <span className="text-blue-500 text-sm">{day.low}°</span>
                          <span className="text-orange-500 text-sm">{day.high}°</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-lg hover:shadow-md transition-all">
                    View Detailed Analytics
                  </button>
                  <button className="px-4 py-2 border border-orange-300 text-orange-600 rounded-lg hover:bg-orange-50 transition-all">
                    Export Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orchards;