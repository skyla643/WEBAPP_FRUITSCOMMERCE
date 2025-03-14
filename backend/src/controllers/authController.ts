import { Request, Response } from 'express';

// Dummy in-memory storage for users
const users: any[] = [];

export const registerUser = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const newUser = { id: Date.now(), username, password };
  users.push(newUser);
  res.status(201).json({ message: 'User registered', user: newUser });
};

export const loginUser = (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};