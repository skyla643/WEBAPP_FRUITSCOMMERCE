import React from 'react';
import { GiLemon } from 'react-icons/gi';

// Create a wrapper so that TypeScript recognizes it as a valid JSX element.
const LemonIcon: React.FC<React.SVGProps<SVGSVGElement>> = GiLemon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const LoadingScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-50 to-orange-100 text-orange-600">
      <div className="text-center space-y-4 animate-pulse">
        <LemonIcon className="text-5xl mx-auto animate-spin-slow" />
        <p className="text-xl font-semibold">Loading Citrus Goodness...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;