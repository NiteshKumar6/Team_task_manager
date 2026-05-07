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

// UPDATE task
router.put("/:id", async(req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true }
        );

        res.json(updatedTask);

    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE task
router.delete("/:id", async(req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.json({ message: "Task deleted" });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;