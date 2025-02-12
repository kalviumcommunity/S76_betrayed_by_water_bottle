// Import required modules
require("dotenv").config(); // Load environment variables from .env
const express = require("express");
const mongoose = require("mongoose");
const {connectDatabase,getConnection}=require('./database')
const app = express();

// Middleware to parse JSON
app.use(express.json());
connectDatabase()
// Define a simple home route
app.get("/", async (req, res) => {
//   const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Disconnected";
  res.send(`Database connection status: ${getConnection()}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
