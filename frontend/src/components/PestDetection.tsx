import React from 'react';
import { FaBug, FaExclamationTriangle, FaChartLine, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

interface PestAlert {
  pestName: string;
  location: string;
  severity: 'low' | 'moderate' | 'high';
  lastDetected: string;
  affectedArea: string;
  recommendedAction: string;
}

const PestDetection: React.FC = () => {
  const pestAlerts: PestAlert[] = [
    {
      pestName: 'Citrus Leafminer',
      location: 'Tucumán Valley',
      severity: 'high',
      lastDetected: 'April 7, 2025',
      affectedArea: '12.5 acres',
      recommendedAction: 'Apply spinosad-based insecticide'
    },
    {
      pestName: 'Aphids',
      location: 'Salta Estate',
      severity: 'moderate',
      lastDetected: 'April 6, 2025',
      affectedArea: '8.2 acres',
      recommendedAction: 'Introduce ladybugs as natural predators'
    },
    {
      pestName: 'Citrus Canker',
      location: 'Mendoza Grove',
      severity: 'high',
      lastDetected: 'April 5, 2025',
      affectedArea: '5.7 acres',
      recommendedAction: 'Prune infected branches and apply copper spray'
    }
  ];

  const severityColors = {
    low: 'bg-green-100 text-green-800',
    moderate: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
            <FaBug className="inline mr-3" />
            Pest Detection Alerts
          </h1>
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 bg-white rounded-full text-sm font-medium shadow-sm">
              <FaCalendarAlt className="inline mr-1" />
              Last updated: {new Date().toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Active Pest Alerts</h3>
            <p className="text-3xl font-bold text-orange-600">{pestAlerts.length}</p>
            <p className="text-sm text-gray-500 mt-2">Across all orchards</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">High Severity</h3>
            <p className="text-3xl font-bold text-yellow-600">
              {pestAlerts.filter(a => a.severity === 'high').length}
            </p>
            <p className="text-sm text-gray-500 mt-2">Require immediate action</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-400">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Affected Area</h3>
            <p className="text-3xl font-bold text-green-600">26.4 acres</p>
            <p className="text-sm text-gray-500 mt-2">Total impacted area</p>
          </div>
        </div>

        {/* Pest Alerts */}
        <div className="space-y-6">
          {pestAlerts.map((alert, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`p-4 border-b ${severityColors[alert.severity]}`}>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold flex items-center">
                    <FaExclamationTriangle className="mr-2" />
                    {alert.pestName}
                  </h2>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${severityColors[alert.severity]}`}>
                    {alert.severity.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Location</h3>
                    <p className="flex items-center text-lg font-medium">
                      <FaMapMarkerAlt className="text-orange-500 mr-2" />
                      {alert.location}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">{alert.affectedArea} affected</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Last Detected</h3>
                    <p className="text-lg font-medium">{alert.lastDetected}</p>
                    <p className="text-sm text-gray-600 mt-1">3 sightings this month</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Recommended Action</h3>
                    <p className="text-lg font-medium text-green-600">{alert.recommendedAction}</p>
                    <button className="mt-2 text-sm text-orange-600 hover:underline">
                      View treatment details →
                    </button>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-medium text-gray-500 mb-3 flex items-center">
                    <FaChartLine className="mr-2 text-orange-500" />
                    Activity Timeline
                  </h3>
                  <div className="flex space-x-4 overflow-x-auto pb-2">
                    {['Mar 28', 'Apr 2', 'Apr 5', 'Apr 7'].map((date, i) => (
                      <div key={i} className="flex-shrink-0">
                        <div className={`h-2 w-8 rounded-full ${
                          i === 3 ? 'bg-red-400' : 'bg-orange-200'
                        }`}></div>
                        <p className="text-xs text-center mt-1 text-gray-500">{date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Pest Prevention Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="#" className="p-4 border border-orange-200 rounded-lg hover:bg-orange-50 transition">
              <h3 className="font-medium text-orange-600">Seasonal Pest Forecast</h3>
              <p className="text-sm text-gray-600">View expected pest activity for coming months</p>
            </a>
            <a href="#" className="p-4 border border-orange-200 rounded-lg hover:bg-orange-50 transition">
              <h3 className="font-medium text-orange-600">Organic Treatment Guide</h3>
              <p className="text-sm text-gray-600">Eco-friendly solutions for common pests</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestDetection;