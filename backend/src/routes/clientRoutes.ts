import express, { Router } from 'express';
import { getClients, addClient } from '../controllers/clientController';

const router: Router = express.Router();

router.get('/', getClients);
router.post('/', addClient);

export default router;