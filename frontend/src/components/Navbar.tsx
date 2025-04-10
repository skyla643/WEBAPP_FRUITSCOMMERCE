// frontend/src/components/Navbar.tsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink for active class styling

interface NavbarProps {
  isAdminOrStaff: boolean; // Prop to control "Clients" visibility
}

const Navbar: React.FC<NavbarProps> = ({ isAdminOrStaff }) => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Citrus Argentina</div> {/* Your Logo/Title */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/dashboard/orchards" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}>
              Orchards
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/pest-detection" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}>
              Pest Detection
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/supply-chain" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}>
              Supply Chain
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/market-data" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}>
              Market Data
            </NavLink>
          </li>
          {isAdminOrStaff && (
            <li>
              <NavLink to="/dashboard/clients" className={({ isActive }) => isActive ? 'text-yellow-400' : ''}>
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
