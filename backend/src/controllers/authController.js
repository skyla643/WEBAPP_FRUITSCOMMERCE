"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
// Dummy in-memory storage for users
const users = [];
const registerUser = (req, res) => {
    const { username, password } = req.body;
    const newUser = { id: Date.now(), username, password };
    users.push(newUser);
    res.status(201).json({ message: 'User registered', user: newUser });
};
exports.registerUser = registerUser;
const loginUser = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.json({ message: 'Login successful', user });
    }
    else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};
exports.loginUser = loginUser;
