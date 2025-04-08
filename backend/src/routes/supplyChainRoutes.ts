import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Supply chain route works!' });
});

export default router;