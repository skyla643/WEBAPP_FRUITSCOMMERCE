"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orchardController_1 = require("../controllers/orchardController");
const router = express_1.default.Router();
router.get('/', orchardController_1.getOrchardData);
exports.default = router;
