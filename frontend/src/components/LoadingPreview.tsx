import React from 'react';
import { FaLemon } from 'react-icons/fa';

const LoadingPreview: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
      <div className="text-center space-y-4 animate-pulse">
        <FaLemon className="text-6xl text-orange-500 animate-spin-slow mx-auto" />
        <p className="text-xl font-bold text-orange-600">Previewing Citrus Animation...</p>
      </div>
    </div>
  );
};

export default LoadingPreview;
