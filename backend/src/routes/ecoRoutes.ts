// backend/src/routes/ecoRoutes.ts
import express, { Router } from 'express';
import { getEcoData } from '../controllers/ecoController'; // Must match file name exactly

const router: Router = express.Router();

router.get('/', getEcoData);

export default router;