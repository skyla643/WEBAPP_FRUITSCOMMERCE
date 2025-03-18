import express from "express";
import { getProducts, getProductById, createProduct } from "../controllers/productController";

const router = express.Router();

// Route to get all products
router.get("/", getProducts);

// Route to get a single product by ID
router.get("/:id", getProductById);

// Route to create a new product
router.post("/", createProduct);

export default router;