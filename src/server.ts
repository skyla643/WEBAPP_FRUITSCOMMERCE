import express from 'express';
import dotenv from 'dotenv';
import productRoutes from "./routes/productRoutes";
import ecoRoutes from "./routes/ecoRoutes";
import supplyChainRoutes from "./routes/supplyChainRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use("/api/products", productRoutes);
app.use("/api/eco", ecoRoutes);
app.use("/api/supply-chain", supplyChainRoutes);
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});