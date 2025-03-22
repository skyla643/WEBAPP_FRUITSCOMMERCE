import React from 'react';

interface Product {
  id: number;
  name: string;
  type: string;
  availability: string;
  harvest: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Grapefruit Juice',
    type: 'JC & NFC',
    availability: '60% Available',
    harvest: 'September-November',
  },
  {
    id: 2,
    name: 'Lemon Juice',
    type: 'JC & NFC',
    availability: '85% Available',
    harvest: 'September-November',
  },
  {
    id: 3,
    name: 'Orange Juice',
    type: 'JC & NFC',
    availability: '90% Available',
    harvest: 'September-November',
  },
];

const CommodityProfile: React.FC = () => {
  return (
    <div className="p-6" style={{ backgroundColor: 'white' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#556B2F' }}>
        Commodity Profile
      </h2>
      {products.map((product) => (
        <div
          key={product.id}
          className="p-4 mb-4 rounded shadow"
          style={{ border: '2px solid #FFA500' }}
        >
          <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
            {product.name}
          </h3>
          <p>
            <strong>Type:</strong> {product.type}
          </p>
          <p>
            <strong>Availability:</strong> {product.availability}
          </p>
          <p>
            <strong>Harvest:</strong> {product.harvest}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommodityProfile;