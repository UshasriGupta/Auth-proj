const authRoutes = require("./routes/authRoutes");
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Authentication Server is Running...");
});

const PORT = process.env.PORT || 5000;
connectDB();
app.use("/api/auth",authRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});