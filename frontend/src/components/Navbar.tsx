import React from 'react';
import { NavLink } from 'react-router-dom';
import { LemonIcon, OrangeIcon } from '@heroicons/react/outline'; // Correct import path

interface NavbarProps {
  isAdminOrStaff: boolean; // Define isAdminOrStaff prop
}

const Navbar: React.FC<NavbarProps> = ({ isAdminOrStaff }) => { // Use NavbarProps
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <LemonIcon className="h-6 w-6 mr-2 text-yellow-500" />
          <OrangeIcon className="h-6 w-6 mr-2 text-orange-500" />
          <div className="text-2xl font-bold font-arial">Citrus Argentina</div>
        </div>
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'hover:text-orange-200'
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'hover:text-orange-200'
              }
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'hover:text-orange-200'
              }
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold underline' : 'hover:text-orange-200'
              }
            >
              Logout
            </NavLink>
          </li>
          {isAdminOrStaff && (
            <li>
              <NavLink
                to="/clients"
                className={({ isActive }) =>
                  isActive ? 'text-orange-500 font-semibold underline' : 'hover:text-orange-200'
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