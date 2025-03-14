// backend/src/routes/orchardRoutes.ts
import express from 'express';
import { getOrchardData } from '../controllers/orchardController';

const router = express.Router();

// GET /api/orchard returns dummy orchard sensor data
router.get('/', getOrchardData);

export default router;