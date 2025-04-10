import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  ChartBarIcon,
  TruckIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from '@heroicons/react/outline';

interface NavbarProps {
  isAdminOrStaff: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAdminOrStaff }) => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <div className="h-6 w-6 mr-2 text-yellow-500">
            🍋
          </div>
          <div className="h-6 w-6 mr-2 text-orange-500">
            🍊
          </div>
          <div className="text-2xl font-bold font-arial">Citrus Argentina</div>
        </div>
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              <HomeIcon className="h-5 w-5 mr-2" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              <ChartBarIcon className="h-5 w-5 mr-2" />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              <TruckIcon className="h-5 w-5 mr-2" />
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
              }
            >
              <CurrencyDollarIcon className="h-5 w-5 mr-2" />
              Logout
            </NavLink>
          </li>
          {isAdminOrStaff && (
            <li>
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  isActive ? 'text-orange-500 font-semibold underline' : 'text-gray-700 hover:text-orange-200'
                }
              >
                <UsersIcon className="h-5 w-5 mr-2" />
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