import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetcher } from '../api/apiClient';

type Product = {
  id: string;
  name: string;
  seasonalData: string;
};

const SeasonalAvailability: React.FC = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/api/products');
      if (!response.ok) throw new Error('Failed to fetch data');
      return response.json();
    }
  });

  if (isLoading) return <div>Loading seasonal data...</div>;
  if (error) return <div>Error loading seasonal data.</div>;

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Seasonal Fruit Availability</h2>
      {data?.map((product) => (
        <div key={product.id} className="border p-2 mb-2">
          <strong>{product.name}</strong> – {product.seasonalData}
        </div>
      ))}
    </div>
  );
};

export default SeasonalAvailability;