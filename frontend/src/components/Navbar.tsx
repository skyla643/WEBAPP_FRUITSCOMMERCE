// frontend/src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  isAdminOrStaff: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAdminOrStaff }) => {
  return (
    <nav className="bg-green-700 text-white py-4 shadow-md">  {/* Changed bg color, added shadow */}
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Citrus Argentina</div>
        <ul className="flex space-x-8">  {/* Increased spacing */}
          <li>
            <NavLink
              to="/dashboard/orchards"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-green-200'
              }
            >
              Orchards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/pest-detection"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-green-200'
              }
            >
              Pest Detection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/supply-chain"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-green-200'
              }
            >
              Supply Chain
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/market-data"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300 font-semibold' : 'hover:text-green-200'
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
                  isActive ? 'text-yellow-300 font-semibold' : 'hover:text-green-200'
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