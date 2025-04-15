"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/server.ts
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const body_parser_1 = __importDefault(require("body-parser"));
const http_1 = __importDefault(require("http"));
const ws_1 = require("ws");
const dotenv_1 = __importDefault(require("dotenv"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const orchardRoutes_1 = __importDefault(require("./routes/orchardRoutes"));
const supplyChainRoutes_1 = __importDefault(require("./routes/supplyChainRoutes"));
const ecoRoutes_1 = __importDefault(require("./routes/ecoRoutes"));
const clientRoutes_1 = __importDefault(require("./routes/clientRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const wss = new ws_1.Server({ server });
// Middleware
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
// Session options
const sessionOptions = {
    secret: process.env.SESSION_SECRET || 'supersecret',
    resave: false,
    saveUninitialized: false,
};
// Double-cast to avoid TS type mismatch 
app.use((0, express_session_1.default)(sessionOptions));
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Routes
app.use('/api/auth', authRoutes_1.default);
app.use('/api/products', productRoutes_1.default);
app.use('/api/orchard', orchardRoutes_1.default);
app.use('/api/supply-chain', supplyChainRoutes_1.default);
app.use('/api/eco', ecoRoutes_1.default);
app.use('/api/clients', clientRoutes_1.default);
// WebSocket
wss.on('connection', (ws) => {
    console.log('New WebSocket connection.');
    const interval = setInterval(() => {
        ws.send(JSON.stringify({ type: 'update', data: 'Live orchard sensor update' }));
    }, 5000);
    ws.on('close', () => clearInterval(interval));
});
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
