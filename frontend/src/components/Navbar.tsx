import React from 'react';
import { NavLink } from 'react-router-dom'; // Removed unused NavLinkProps
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
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM12 13c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zM11 16h2v2h-2z"/>
            </svg>
          </div>
          <div className="h-6 w-6 mr-2 text-orange-500">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2zm-9-2h4v-2h-4v2zm0-4h4V9h-4v6zm-4-4h2V5H6v8zM17 5h-2v10h2V5z"/>
            </svg>
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