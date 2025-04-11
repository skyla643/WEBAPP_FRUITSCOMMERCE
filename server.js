require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Proxy endpoint for INTA API
app.get('/api/regional-yield', async (req, res) => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_INTA_API}/agriculture/citrus`, {
      timeout: parseInt(process.env.REACT_APP_API_TIMEOUT)
    });
    res.json({
      status: 'success',
      data: transformYieldData(response.data),
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch yield data',
      timestamp: new Date().toISOString()
    });
  }
});

// Data transformation example
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

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});