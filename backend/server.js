require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();

// Enable CORS for requests from frontend (port 3000)
app.use(cors({ origin: "http://localhost:3000" }));

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve uploaded images

// Import Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const menuRoutes = require("./routes/menuRoutes");
app.use("/api/menu", menuRoutes);

const userRoutes = require("./routes/userRoutes"); // Add this line
app.use("/api/users", userRoutes); // Mount user routes

const orderRoutes = require("./routes/orderRoutes"); // Add this line
app.use("/api/orders", orderRoutes); // Mount order routes

// Define a simple test route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));