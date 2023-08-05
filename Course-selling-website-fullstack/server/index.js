const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const adminRouter = require("./routes/adminRoutes");
const userRouter = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

app.use("/admin",adminRouter);
app.use("/user",userRouter);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/course-app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Suppress strictQuery warning
mongoose.set("strictQuery", false);
const db = mongoose.connection;

// Check for connection error
db.on("error", console.error.bind(console, "connection error:"));

// Log success message on successful connection
db.once("open", function () {
  console.log("Connected to MongoDB");
});

app.use(express.json());


const port = 3000;
app.listen(port, () => {
  console.log("Server is listening on port "+port);
});
