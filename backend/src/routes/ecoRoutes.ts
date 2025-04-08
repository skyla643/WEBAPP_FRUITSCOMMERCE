import express, { Router } from 'express';
import { getEcoData } from '../controllers/ecoController';

const router: Router = express.Router();

router.get('/', getEcoData);

export default router;