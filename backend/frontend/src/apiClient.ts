import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
const API_URL = "http://localhost:3000/api";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/products`);
  return response.json();
};

export const fetchEcoPractices = async () => {
  const response = await fetch(`${API_URL}/eco/practices`);
  return response.json();
};

export const fetchSupplyChainData = async () => {
  const response = await fetch(`${API_URL}/supply-chain`);
  return response.json();
};