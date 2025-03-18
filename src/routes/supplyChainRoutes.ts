import express from "express";

const router = express.Router();

// Example route: Get supply chain data
router.get("/", (req, res) => {
    res.json({ message: "Fetching supply chain data..." });
});

export default router;