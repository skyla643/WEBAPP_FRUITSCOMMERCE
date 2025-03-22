import React from 'react';

interface FruitAvailability {
  id: number;
  fruit: string;
  availability: string;
  harvest: string;
}

const availabilityData: FruitAvailability[] = [
  { id: 1, fruit: 'Grapefruit', availability: '60% Available', harvest: 'Sept-Nov' },
  { id: 2, fruit: 'Lemon', availability: '85% Available', harvest: 'Sept-Nov' },
  { id: 3, fruit: 'Orange', availability: '90% Available', harvest: 'Sept-Nov' },
  { id: 4, fruit: 'Strawberry Puree', availability: '90% Available', harvest: 'Sept-Nov' },
  { id: 5, fruit: 'Raspberry Puree', availability: '85% Available', harvest: 'Sept-Nov' },
];

const SeasonalAvailability: React.FC = () => {
  return (
    <div className="p-6" style={{ backgroundColor: 'white' }}>
      <h2 className="text-3xl font-bold mb-4" style={{ color: '#556B2F' }}>
        Seasonal Fruit Availability
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {availabilityData.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded shadow"
            style={{ border: '2px solid #FFA500' }}
          >
            <h3 className="text-2xl font-bold" style={{ color: '#FFD700' }}>
              {item.fruit}
            </h3>
            <p>
              <strong>Availability:</strong> {item.availability}
            </p>
            <p>
              <strong>Harvest:</strong> {item.harvest}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalAvailability;