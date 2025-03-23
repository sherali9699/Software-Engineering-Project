require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Import Routes
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Define a simple test route
app.get('/', (req, res) => {
    res.send('Backend is working!');
});

const menuRoutes = require('./routes/menuRoutes');
app.use('/api/menu', menuRoutes);


const orderRoutes = require('./routes/orderRoutes');
app.use('/api/orders', orderRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
