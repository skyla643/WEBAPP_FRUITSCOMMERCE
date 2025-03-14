// backend/src/controllers/productController.ts
import { Request, Response } from 'express';

export const getProducts = (req: Request, res: Response) => {
  const products = [
    { id: 1, name: 'Grapefruit JC & NFC', description: 'Fresh grapefruit juice' },
    { id: 2, name: 'Lemon NFC', description: 'Fresh lemon juice' },
  ];
  res.json(products);
};