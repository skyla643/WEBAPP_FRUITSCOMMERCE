import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChartBarIcon, TruckIcon, CurrencyDollarIcon, UsersIcon } from '@heroicons/react/24/outline'; // Example icons

interface NavbarProps {
  isAdminOrStaff: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isAdminOrStaff }) => {
  return (
    <nav className="bg-[#FF9800] text-white shadow-md h-16 flex items-center"> {/* Orange, height, center vertically */}
      <div className="container mx-auto flex items-center justify-between px-6">
        <div className="text-2xl font-bold font-arial">Citrus Argentina</div> {/* Font Arial */}
        <ul className="flex space-x-8">
          <li>
            <NavLink
              to="/dashboard/orchards"
              className={({ isActive }) =>
                isActive ? 'text-[#FFD700] font-semibold underline' : 'hover:text-orange-200 flex items-center'
              }
            >
              <HomeIcon className="h-5 w-5 mr-2" /> {/* Icon */}
              Orchards
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/pest-detection"
              className={({ isActive }) =>
                isActive ? 'text-[#FFD700] font-semibold underline' : 'hover:text-orange-200 flex items-center'
              }
            >
              <ChartBarIcon className="h-5 w-5 mr-2" /> {/* Icon */}
              Pest Detection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/supply-chain"
              className={({ isActive }) =>
                isActive ? 'text-[#FFD700] font-semibold underline' : 'hover:text-orange-200 flex items-center'
              }
            >
              <TruckIcon className="h-5 w-5 mr-2" /> {/* Icon */}
              Supply Chain
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/market-data"
              className={({ isActive }) =>
                isActive ? 'text-[#FFD700] font-semibold underline' : 'hover:text-orange-200 flex items-center'
                }
                >
                <CurrencyDollarIcon className="h-5 w-5 mr-2" /> {/* Icon */}
                Market Data
              </NavLink>
            </li>
            {isAdminOrStaff && (
              <li>
                <NavLink
                  to="/dashboard/clients"
                  className={({ isActive }) =>
                    isActive ? 'text-[#FFD700] font-semibold underline' : 'hover:text-orange-200 flex items-center'
                  }
                >
                  <UsersIcon className="h-5 w-5 mr-2" /> {/* Icon */}
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