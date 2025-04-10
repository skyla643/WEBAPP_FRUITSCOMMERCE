import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaChartLine, FaTruck, FaDollarSign, FaUsers, FaFemale, FaGlobeAmericas, FaHandsHelping } from 'react-icons/fa';

const AboutUsPreview: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Placeholder (Matches Screenshot Reference) */}
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <span className="text-2xl font-bold text-orange-500">Squeeze</span>
          <div className="hidden md:flex space-x-6">
            <Link to="/shop" className="text-gray-700 hover:text-orange-500">Shop</Link>
            <Link to="/about" className="font-medium text-orange-500">About Us</Link>
            <Link to="/discounts" className="text-gray-700 hover:text-orange-500">Discounts</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500">Contact Us</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-700 hover:text-orange-500">My Cart</Link>
          <Link to="/register" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">Register</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-gradient-to-b from-yellow-50 to-orange-50 pb-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-32">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 sm:text-6xl lg:text-7xl">
                Argentina's Citrus Revolution
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-xl text-orange-800">
                Vibrant, sustainable citrus production powered by cutting-edge technology
              </p>
              <div className="mt-10">
                <Link
                  to="/login"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500"
                >
                  Join Our Network <FaArrowRight className="ml-3 -mr-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 sm:text-4xl">
              About Citrus Argentina
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Empowering Sustainable Citrus Farming Through Innovation
            </p>
          </div>

          <div className="mt-16 grid gap-16 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {/* Who We Are */}
            <div className="bg-orange-50 rounded-xl p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-orange-100 rounded-full p-4 text-orange-500">
                  <FaFemale className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-900">A Women-Led Force for Change</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Certified <span className="font-semibold">U.S. Organic</span> and <span className="font-semibold">WMBE</span> (Women-Owned Minority Business Enterprise), we champion diversity in agriculture.
              </p>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-orange-500">•</span>
                  <span className="ml-2 text-gray-600">Inspiring women and minority groups in agribusiness</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-orange-500">•</span>
                  <span className="ml-2 text-gray-600">Providing resources and mentorship</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 text-orange-500">•</span>
                  <span className="ml-2 text-gray-600">Advocating for equitable technology access</span>
                </li>
              </ul>
            </div>

            {/* What We Offer */}
            <div className="bg-yellow-50 rounded-xl p-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-100 rounded-full p-4 text-yellow-500">
                  <FaGlobeAmericas className="h-6 w-6" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-900">What We Offer</h3>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <FaLeaf className="mr-2 text-green-500" /> For Farmers
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• AI-Powered Insights: Pest detection & yield optimization</li>
                  <li>• Supply Chain Tools with blockchain transparency</li>
                  <li>• Organic Certification Support</li>
                </ul>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 flex items-center">
                  <FaChartLine className="mr-2 text-blue-500" /> For Buyers & Partners
                </h4>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>• Premium Organic Citrus from vetted farms</li>
                  <li>• Real-Time Market Data analytics</li>
                  <li>• Diverse Supplier Network prioritizing minorities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 sm:text-4xl">
              Our Impact
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: <FaUsers className="h-8 w-8" />, stat: "1,200+ Farms", desc: "empowered with smart technology" },
              { icon: <FaDollarSign className="h-8 w-8" />, stat: "30% Increase", desc: "in profits for partner growers" },
              { icon: <FaHandsHelping className="h-8 w-8" />, stat: "500+ Women", desc: "trained in agtech and business" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">{item.stat}</h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500"
            >
              Join the Movement <FaArrowRight className="ml-3 -mr-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPreview;