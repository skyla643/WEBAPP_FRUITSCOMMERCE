// orchardRoutes.ts
import express from 'express';
import { getOrchardData } from '../controllers/orchardController';

const router = express.Router();

router.get('/', getOrchardData);

export default router;