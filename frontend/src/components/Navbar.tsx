import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  isAdminOrStaff: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAdminOrStaff }) => {
  return (
    <nav className="bg-white border-b-2 border-transparent bg-gradient-to-r from-orange-100 to-yellow-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Wrap logo in NavLink to make it clickable */}
        <NavLink 
          to="/dashboard" 
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <div className="flex items-center">
            <div className="h-5 w-5 text-yellow-500">
              🍋
            </div>
            <div className="h-5 w-5 text-orange-500">
              🍊
            </div>
            <div className="ml-2 text-xl font-semibold font-arial text-gray-800">
              Citrus Argentina
            </div>
          </div>
        </NavLink>

        {/* Rest remains EXACTLY the same */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/dashboard/orchards"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
              }
            >
              Orchards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/pest-detection"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
              }
            >
              Pest Detection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/supply-chain"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
              }
            >
              Supply Chain
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/market-data"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
              }
            >
              Market Data
            </NavLink>
          </li>
          {isAdminOrStaff && (
            <li>
              <NavLink
                to="/dashboard/clients"
                className={({ isActive }) =>
                  isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
                }
              >
                Clients
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;