import express from 'express';
import session from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import http from 'http';
import { Server as WebSocketServer, WebSocket } from 'ws';
import dotenv from 'dotenv';

import productRoutes from './routes/productRoutes';
app.use('/api/products', productRoutes);


dotenv.config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// ✅ Middleware setup
app.use(bodyParser.json());
app.use(express.json());  // ✅ This is required for JSON body parsing
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
app.use('/api/auth', authRoutes);
app.use('/api/orchard', orchardRoutes);

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