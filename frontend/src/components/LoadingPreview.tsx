import React from 'react';
import { GiLemon } from 'react-icons/gi';

// Create a wrapper so that TypeScript recognizes it as a valid JSX element.
const LemonIcon: React.FC<React.SVGProps<SVGSVGElement>> = GiLemon as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const LoadingPreview: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-yellow-100 to-orange-200">
      <div className="text-center space-y-4 animate-pulse">
        <LemonIcon className="text-6xl text-orange-500 animate-spin-slow mx-auto" />
        <p className="text-xl font-bold text-orange-600">Previewing Citrus Animation...</p>
      </div>
    </div>
  );
};

export default LoadingPreview;