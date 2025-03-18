import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import http from 'http';
import { Server as WebSocketServer, WebSocket } from 'ws';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';
import orchardRoutes from './routes/orchardRoutes';

dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// ✅ Middleware setup
app.use(bodyParser.json());
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'supersecret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// ✅ Add API Routes
app.use('/api/products', (req: Request, res: Response, next: NextFunction) => productRoutes(req, res, next));
app.use('/api/auth', (req: Request, res: Response, next: NextFunction) => authRoutes(req, res, next));
app.use('/api/orchard', (req: Request, res: Response, next: NextFunction) => orchardRoutes(req, res, next));

// ✅ WebSocket for real-time updates
wss.on('connection', (ws: WebSocket) => {
  console.log('New WebSocket connection.');
  const interval = setInterval(() => {
    ws.send(JSON.stringify({ type: 'update', data: 'Live orchard sensor update' }));
  }, 5000);
  ws.on('close', () => clearInterval(interval));
});

// ✅ Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});