const express = require('express');
const mongoose = require('mongoose');
const User = require('./Models/User'); // Ensure User.js is correctly defined
const userRoute = require('./Routes/users'); // Ensure paths are correct
const authRoute = require('./Routes/auth'); // Ensure paths are correct
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json());

// Middleware
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

// Log MongoDB URI for debugging
const mongoURI = process.env.MONGODB_URI;
console.log('MongoDB URI:', mongoURI); // Log the MongoDB URI to check if it is correctly loaded

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

app.listen(5000, () => console.log('Server running on port 5000'));

