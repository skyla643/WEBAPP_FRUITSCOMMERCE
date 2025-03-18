import express from "express";

const router = express.Router();

// Example route: Get sustainability practices
router.get("/practices", (req, res) => {
    res.json({ message: "Fetching sustainability practices..." });
});

export default router;