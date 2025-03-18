import { Request, Response } from "express";

// Get all products
export const getProducts = (req: Request, res: Response) => {
    res.json({ message: "Fetching all products..." });
};

// Get a single product by ID
export const getProductById = (req: Request, res: Response) => {
    res.json({ message: `Fetching product with ID ${req.params.id}...` });
};

// Create a new product
export const createProduct = (req: Request, res: Response) => {
    res.json({ message: "Creating a new product...", data: req.body });
};