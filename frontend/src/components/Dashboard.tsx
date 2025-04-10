// frontend/src/components/Dashboard.tsx (Updated)
import React from 'react';
import MapComponent from './MapComponent';
import Navbar from './Navbar'; // Import the Navbar

const Dashboard: React.FC = () => {
  // Replace this with your actual logic to determine if the user is an admin or staff
  const isAdminOrStaff = true; // For now, let's assume they are

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Navbar isAdminOrStaff={isAdminOrStaff} /> {/* Include the Navbar */}

      <div className="flex flex-grow">
        {/* Map Area */}
        <div className="w-2/3 bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Regional Overview Map</h2>
          <div className="h-full rounded-lg border-gray-300 border">
            <MapComponent />
          </div>
        </div>

        {/* Statistics Panel */}
        <div className="w-1/3 bg-white shadow-md rounded-lg p-4 ml-4">
          <h2 className="text-xl font-semibold mb-2">Regional Statistics</h2>
          {/* Statistics will go here */}
          <p className="text-gray-500 italic text-center mt-1/2">Loading Statistics...</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;