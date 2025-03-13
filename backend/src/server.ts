// backend/src/server.ts
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import http from 'http';
import { Server as WebSocketServer } from 'ws';
import dotenv from 'dotenv';

dotenv.config(); // Loads environment variables from .env file

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

// Middleware setup
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'supersecret',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Example route for testing
app.get('/', (req, res) => {
  res.send('Hello from the Citrus Argentina backend!');
});

// WebSocket for real-time updates
wss.on('connection', (ws) => {
  console.log('New WebSocket connection.');
  // Send a message every 5 seconds as an example
  const interval = setInterval(() => {
    ws.send(JSON.stringify({ type: 'update', data: 'Live orchard sensor update' }));
  }, 5000);

  ws.on('close', () => clearInterval(interval));
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});