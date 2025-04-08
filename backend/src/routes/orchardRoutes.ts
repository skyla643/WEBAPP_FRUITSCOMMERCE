import express, { Router } from 'express';
import { getOrchardData } from '../controllers/orchardController';

const router: Router = express.Router();

router.get('/', getOrchardData);

export default router;