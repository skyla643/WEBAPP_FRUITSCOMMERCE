import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaChartLine, FaTruck, FaDollarSign, FaUsers } from 'react-icons/fa';

const AboutUsPreview: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
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
                Argentina's Citrus<br />Revolution
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

      {/* Rest of your content... */}
    </div>
  );
};

export default AboutUsPreview;