import { Request, Response } from 'express';

export const getEcoData = (req: Request, res: Response) => {
  // Basic placeholder data; customize as needed
  const ecoData = {
    electricityUsage: 0.4, // kWh
    renewablePercentage: 22, // %
    waterUsage: 1.6, // m³
    rainwaterHarvested: 0.5, // m³
    carbonFootprint: '0.00 tons CO2e',
    recommendations: 'Consider increasing renewable energy usage.',
  };
  res.json(ecoData);
};
