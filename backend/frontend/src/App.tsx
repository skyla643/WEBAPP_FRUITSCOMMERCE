import React, { useEffect, useState } from "react";
import { fetchProducts, fetchEcoPractices, fetchSupplyChainData } from "./apiClient";

function App() {
  const [products, setProducts] = useState([]);
  const [ecoPractices, setEcoPractices] = useState([]);
  const [supplyChain, setSupplyChain] = useState([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
    fetchEcoPractices().then(setEcoPractices);
    fetchSupplyChainData().then(setSupplyChain);
  }, []);

  return (
    <div>
      <h1>Citrus Argentina Web App</h1>

      <h2>Products</h2>
      <pre>{JSON.stringify(products, null, 2)}</pre>

      <h2>Eco Practices</h2>
      <pre>{JSON.stringify(ecoPractices, null, 2)}</pre>

      <h2>Supply Chain</h2>
      <pre>{JSON.stringify(supplyChain, null, 2)}</pre>
    </div>
  );
}

export default App;