const express = require("express");
const router = express.Router();
const User = require("../models/User");

// SIGNUP
router.post("/signup", async(req, res) => {
    const user = new User(req.body);
    const saved = await user.save();
    res.json(saved);
});

// LOGIN
router.post("/login", async(req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });

    if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json(user);
});

module.exports = router;