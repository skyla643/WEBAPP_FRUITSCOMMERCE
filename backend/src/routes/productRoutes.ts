import express, { Router } from 'express';
import { getProducts } from '../controllers/productController';

const router: Router = express.Router();

router.get('/', getProducts);

export default router;