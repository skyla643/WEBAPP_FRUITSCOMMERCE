import React from 'react';
import MapComponent from './MapComponent';
import Navbar from './Navbar';

const Dashboard: React.FC = () => {
  const isAdminOrStaff = true; // Replace with your actual auth logic
  // REPLACE THESE WITH THE ACTUAL LATITUDE, LONGITUDE, AND ZOOM FOR YOUR REGION
  const initialLatitude = -34.6037;    // Example: Latitude for Buenos Aires
  const initialLongitude = -58.3816;   // Example: Longitude for Buenos Aires
  const initialZoom = 10;             // Example: A moderate zoom level

  return (
    <div className="flex flex-col h-screen bg-white font-arial"> {/* Changed background to white */}
      <Navbar isAdminOrStaff={isAdminOrStaff} />

      <div className="flex flex-grow p-8 justify-center"> {/* Added justify-center to potentially center content */}
        <div className="flex w-full max-w-screen-lg space-x-8"> {/* Added a max-width to contain content */}
          {/* Map Area */}
          <div className="w-2/3 bg-white shadow-md rounded-lg p-6 border border-gray-100"> {/* Updated shadow and rounded corners */}
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Regional Overview Map</h2> {/* Changed heading color to orange */}
            <div className="rounded-md border border-gray-200" style={{ height: 'calc(100% - 40px)' }}>
              {/* Adjusted height to account for the h2 margin */}
              <MapComponent
                latitude={initialLatitude}
                longitude={initialLongitude}
                zoom={initialZoom}
              />
            </div>
          </div>

          {/* Statistics Panel */}
          <div className="w-1/3 bg-white shadow-md rounded-lg p-6 border border-gray-100"> {/* Updated shadow and rounded corners */}
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">Regional Statistics</h2> {/* Changed heading color to orange */}
            {/* Statistics will go here */}
            <p className="text-gray-600 italic text-center mt-4">Loading Statistics...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;