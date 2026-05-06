const router = require("express").Router();
const Task = require("../models/Task");

// GET all tasks
router.get("/", async(req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// ADD task
router.post("/", async(req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
});

module.exports = router;