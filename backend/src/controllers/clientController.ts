import { Request, Response } from 'express';

let clients: any[] = [];

export const getClients = (req: Request, res: Response) => {
  res.json(clients);
};

export const addClient = (req: Request, res: Response) => {
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
