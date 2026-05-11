const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
<<<<<<< HEAD

app.get("/", (req, res) => {
    res.send("Backend is running");
});
=======
>>>>>>> f8df8b8 (task features added)

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.use("/api/tasks", require("./routes/tasks"));
<<<<<<< HEAD
app.use("/api/auth", require("./routes/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
=======

app.listen(5000, () => {
    console.log("Server running on port 5000");
>>>>>>> f8df8b8 (task features added)
});