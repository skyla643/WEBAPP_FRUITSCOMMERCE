// backend/src/routes/blockchainRoutes.ts
import express, { Router } from 'express';
import { verifyProduct } from '../controllers/blockchainController';

const router: Router = express.Router();

router.get('/verify/:productId', verifyProduct);

export default router;
