"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// backend/src/routes/ecoRoutes.ts
const express_1 = __importDefault(require("express"));
const ecoController_1 = require("../controllers/ecoController"); // Must match file name exactly
const router = express_1.default.Router();
router.get('/', ecoController_1.getEcoData);
exports.default = router;
