require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001; // Explicitly set the port to 3001 for debugging

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// Proxy endpoint for INTA API
app.get('/api/regional-yield', async (req, res) => {
  try {
    // Only make the external API call if environment variables are set
    if (process.env.REACT_APP_INTA_API) {
      const response = await axios.get(`${process.env.REACT_APP_INTA_API}/agriculture/citrus`, {
        timeout: parseInt(process.env.REACT_APP_API_TIMEOUT || '5000')
      });
      res.json({
        status: 'success',
        data: transformYieldData(response.data),
        timestamp: new Date().toISOString()
      });
    } else {
      // Fallback to mock data if INTA API is not configured
      res.json({
        status: 'success',
        data: getMockRegionalYieldData(),
        timestamp: new Date().toISOString()
      });
    }
  } catch (error) {
    console.error('Error fetching regional yield data:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch yield data',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Add orchard geojson endpoint
app.get('/api/orchards/geojson', (req, res) => {
  try {
    // You can replace this with actual API call to your data source
    const mockData = {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-58.3816 + 0.01, -34.6037 + 0.01] // Buenos Aires coordinates
          },
          properties: {
            id: '1',
            name: 'Valencia Orchard',
            yield: 22,
            productivity: 85,
            variety: 'Valencia Orange',
            age: 5,
            lastUpdated: new Date().toISOString()
          }
        },
        {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [-58.3816 - 0.01, -34.6037 - 0.01]
          },
          properties: {
            id: '2',
            name: 'Lemon Grove',
            yield: 18,
            productivity: 72,
            variety: 'Eureka Lemon',
            age: 3,
            lastUpdated: new Date().toISOString()
          }
        }
      ]
    };
    res.json(mockData);
  } catch (error) {
    console.error('Error serving orchard data:', error.message);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch orchard data',
      timestamp: new Date().toISOString()
    });
  }
});

// Data transformation function
function transformYieldData(apiData) {
  return apiData.map(region => ({
    id: region.codigo,
    region: region.nombre,
    yield: `${region.rendimiento}T/ha`,
    delta: `${region.variacion > 0 ? '+' : ''}${region.variacion}%`,
    color: region.variacion > 0 ? 'text-green-500' : 'text-orange-500',
    coordinates: [region.longitud, region.latitud]
  }));
}

// Mock data function
function getMockRegionalYieldData() {
  return [
    {
      id: '1',
      region: "TUCUMÁN",
      yield: "24T/ha",
      delta: "+12%",
      color: "text-green-500",
      coordinates: [-65.2, -26.8]
    },
    {
      id: '2',
      region: "SALTA",
      yield: "18T/ha",
      delta: "+8%",
      color: "text-green-500",
      coordinates: [-65.4, -24.8]
    },
    {
      id: '3',
      region: "CORRIENTES",
      yield: "15T/ha",
      delta: "-3%",
      color: "text-orange-500",
      coordinates: [-58.8, -27.5]
    }
  ];
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});