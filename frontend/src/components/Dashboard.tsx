// frontend/src/components/Dashboard.tsx
import React from 'react';
import MapComponent from './MapComponent';
import Navbar from './Navbar';

const Dashboard: React.FC = () => {
  const isAdminOrStaff = true; // Replace with your actual auth logic

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar isAdminOrStaff={isAdminOrStaff} />

      <div className="flex flex-grow">
        {/* Map Area */}
        <div className="w-2/3 bg-white shadow-md rounded-lg p-4 mr-4 mb-4">  {/* Added margin */}
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Regional Overview Map</h2>  {/* Changed text color */}
          <div className="h-full rounded-lg border-gray-300 border">
            <MapComponent />
          </div>
        </div>

        {/* Statistics Panel */}
        <div className="w-1/3 bg-white shadow-md rounded-lg p-4 mb-4">  {/* Added margin */}
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Regional Statistics</h2>  {/* Changed text color */}
          {/* Statistics will go here */}
          <p className="text-gray-500 italic text-center mt-1/2">Loading Statistics...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;