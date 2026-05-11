const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: String,
<<<<<<< HEAD
    project: String,
=======
>>>>>>> f8df8b8 (task features added)
    assignedTo: String,
    status: { type: String, default: "Pending" },
    dueDate: String
});

module.exports = mongoose.model("Task", taskSchema);