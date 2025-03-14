// backend/src/controllers/orchardController.ts
import { Request, Response } from 'express';

export const getOrchardData = (req: Request, res: Response) => {
  // Dummy orchard sensor data
  const orchards = [
    {
      id: 1,
      name: 'North Orchard',
      crop: 'Valencia Orange',
      soilMoisture: 68.0,
      temperature: 25.3,
      irrigationSchedule: 'Next: 3/11/2025, 6:01:25 PM',
      waterUsage: '2500L',
    },
    {
      id: 2,
      name: 'South Orchard',
      crop: 'Lemon',
      soilMoisture: 62.4,
      temperature: 25.6,
      irrigationSchedule: 'Next: 3/11/2025, 6:01:25 AM',
      waterUsage: '2000L',
    },
  ];

  res.json(orchards);
};