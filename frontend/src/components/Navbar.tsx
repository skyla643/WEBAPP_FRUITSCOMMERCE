import React from 'react';
import { NavLink } from 'react-router-dom';
// You might not be using these Heroicons anymore based on your description
// import {
//   HomeIcon, ChartBarIcon, TruckIcon, CurrencyDollarIcon, UsersIcon
// } from '@heroicons/react/outline';

interface NavbarProps {
  isAdminOrStaff: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAdminOrStaff }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="h-6 w-6 text-yellow-500">
            🍋
          </div>
          <div className="h-6 w-6 text-orange-500">
            🍊
          </div>
          <div className="ml-2 text-2xl font-bold font-arial">Citrus Argentina</div>
        </div>
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/orchards"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              Orchards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pest-detection"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              Pest Detection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/supply-chain"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              Supply Chain
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/market-data"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              Market Data
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              Clients
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;