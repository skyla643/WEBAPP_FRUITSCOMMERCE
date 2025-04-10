import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
        {/* ... (keep existing hero content) ... */}
      </motion.div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="py-16 bg-white sm:py-24"
      >
        {/* ... (keep existing features content) ... */}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-gradient-to-br from-orange-100 to-yellow-100"
      >
        {/* ... (keep existing stats content) ... */}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="bg-white py-16 sm:py-24"
      >
        {/* ... (keep existing CTA content) ... */}
      </motion.div>
    </div>
  );
};

export default AboutUsPreview;