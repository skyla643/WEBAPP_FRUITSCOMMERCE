// frontend/src/components/SeasonalAvailability.tsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../api/apiClient';

const SeasonalAvailability: React.FC = () => {
  const { data, isLoading, error } = useQuery(['products'], () =>
    fetcher('http://localhost:3000/api/products')
  );

  if (isLoading) return <div>Loading seasonal data...</div>;
  if (error) return <div>Error loading seasonal data.</div>;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Seasonal Fruit Availability</h2>
      {data && data.map((product: any) => (
        <div key={product.id} className="border p-2 mb-2">
          <strong>{product.name}</strong> – {product.seasonalData}
        </div>
      ))}
    </div>
  );
};

export default SeasonalAvailability;