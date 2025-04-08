import React from 'react';
import { MdBugReport } from 'react-icons/md';
import { FaExclamationTriangle } from 'react-icons/fa';

interface PestCardProps {
  pestName: string;
  location: string;
  severity: 'low' | 'moderate' | 'high';
  lastDetected: string;
}

const severityColor = {
  low: 'bg-green-100 text-green-700',
  moderate: 'bg-yellow-100 text-yellow-700',
  high: 'bg-red-100 text-red-700',
};

const PestCard: React.FC<PestCardProps> = ({ pestName, location, severity, lastDetected }) => {
  return (
    <div className="bg-white p-4 shadow rounded mb-4 flex items-start gap-4">
      <MdBugReport className="text-3xl text-accentOrange" />
      <div className="flex-1">
        <h3 className="text-xl font-bold">{pestName}</h3>
        <p className="text-sm text-gray-600">📍 {location}</p>
        <p className="text-sm text-gray-500">🗓️ Last detected: {lastDetected}</p>
      </div>
      <span
        className={`px-3 py-1 rounded text-sm font-semibold flex items-center gap-1 ${severityColor[severity]}`}
      >
        <FaExclamationTriangle />
        {severity.toUpperCase()}
      </span>
    </div>
  );
};

export default PestCard;