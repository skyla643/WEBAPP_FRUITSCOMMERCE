// components/LoadingScreen.tsx
import React from 'react';
import { FaLemon } from 'react-icons/fa';
import { FaLemon as LemonIcon } from 'react-icons/fa';

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-50 to-orange-100 text-orange-600">
      <div className="text-center space-y-4 animate-pulse">
        <FaLemon className="text-5xl mx-auto animate-spin-slow" />
        <p className="text-xl font-semibold">Loading Citrus Goodness...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
