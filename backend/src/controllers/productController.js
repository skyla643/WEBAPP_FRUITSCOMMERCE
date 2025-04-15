"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const getProducts = (req, res) => {
    const products = [
        { id: 1, name: 'Grapefruit JC & NFC', description: 'Fresh grapefruit juice' },
        { id: 2, name: 'Lemon NFC', description: 'Fresh lemon juice' },
    ];
    res.json(products);
};
exports.getProducts = getProducts;
