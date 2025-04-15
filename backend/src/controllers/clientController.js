"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addClient = exports.getClients = void 0;
let clients = [];
const getClients = (req, res) => {
    res.json(clients);
};
exports.getClients = getClients;
const addClient = (req, res) => {
    const { name, company, email, phone } = req.body;
    const newClient = {
        id: Date.now(),
        name,
        company,
        email,
        phone,
    };
    clients.push(newClient);
    res.status(201).json({ message: 'Client added', client: newClient });
};
exports.addClient = addClient;
