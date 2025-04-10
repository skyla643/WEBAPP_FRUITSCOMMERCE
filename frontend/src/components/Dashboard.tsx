import React from 'react';
import MapComponent from './MapComponent';
import Navbar from './Navbar';

const Dashboard: React.FC = () => {
  const isAdminOrStaff = true; // Replace with your actual auth logic

  return (
    <div className="flex flex-col h-screen bg-[#FFF5E0] font-arial">
      <Navbar isAdminOrStaff={isAdminOrStaff} />

      <div className="flex flex-grow p-8">
        {/* Map Area */}
        <div className="w-2/3 bg-white shadow-lg rounded-2xl p-6 mr-8 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-[#8BC34A]">Regional Overview Map</h2>
          <div className="h-full rounded-xl border border-gray-200">
            <MapComponent latitude={0} longitude={0} zoom={0} /> {/* Ensure latitude, longitude, zoom are handled within MapComponent if needed */}
          </div>
        </div>

        {/* Statistics Panel */}
        <div className="w-1/3 bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6 text-[#8BC34A]">Regional Statistics</h2>
          {/* Statistics will go here */}
          <p className="text-gray-600 italic text-center mt-4">Loading Statistics...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;