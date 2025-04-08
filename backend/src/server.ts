import express, { Request, Response, NextFunction } from 'express';
import session, { SessionOptions } from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import http from 'http';
import { Server as WebSocketServer, WebSocket } from 'ws';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';
import orchardRoutes from './routes/orchardRoutes';
import supplyChainRoutes from './routes/supplyChainRoutes';
import ecoRoutes from './routes/ecoRoutes';
import clientRoutes from './routes/clientRoutes';

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// ===== Middleware Setup =====
app.use(bodyParser.json());
app.use(express.json());

// Define session options explicitly
const sessionOptions: SessionOptions = {
  secret: process.env.SESSION_SECRET || 'supersecret',
  resave: false,
  saveUninitialized: false,
};

// Cast the middleware as express.RequestHandler
app.use(session(sessionOptions) as express.RequestHandler);
app.use(passport.initialize() as express.RequestHandler);
app.use(passport.session() as express.RequestHandler);

// ===== Routes =====
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orchard', orchardRoutes);
app.use('/api/supply-chain', supplyChainRoutes);
app.use('/api/eco', ecoRoutes);
app.use('/api/clients', clientRoutes);

// ===== WebSocket for Real-Time Updates =====
wss.on('connection', (ws: WebSocket) => {
  console.log('New WebSocket connection.');
  const interval = setInterval(() => {
    ws.send(JSON.stringify({ type: 'update', data: 'Live orchard sensor update' }));
  }, 5000);
  ws.on('close', () => clearInterval(interval));
});

// ===== Start the Server =====
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});