import React from 'react';
import { NavLink } from 'react-router-dom';

interface NavbarProps {
  isAdminOrStaff: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAdminOrStaff }) => {
  return (
    <nav className="bg-white border-b-2 border-transparent bg-gradient-to-r from-orange-100 to-yellow-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-3"> {/* Reduced vertical padding */}
        <div className="flex items-center">
          <div className="h-5 w-5 text-yellow-500"> {/* Slightly smaller emojis */}
            🍋
          </div>
          <div className="h-5 w-5 text-orange-500"> {/* Slightly smaller emojis */}
            🍊
          </div>
          <div className="ml-2 text-xl font-semibold font-arial text-gray-800">Citrus Argentina</div> {/* Darker, slightly smaller logo text */}
        </div>
        <ul className="flex space-x-6"> {/* Reduced horizontal spacing between links */}
          <li>
            <NavLink
              to="/orchards"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400' /* Less prominent underline */
              }
            >
              Orchards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pest-detection"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
              }
            >
              Pest Detection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/supply-chain"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
              }
            >
              Supply Chain
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/market-data"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
              }
            >
              Market Data
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clients"
              className={({ isActive }) =>
                isActive ? 'text-orange-500 font-semibold' : 'text-gray-600 hover:text-orange-400'
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