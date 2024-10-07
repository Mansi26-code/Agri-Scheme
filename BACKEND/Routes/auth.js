const express = require('express');
const router = express.Router();
const User = require('../Models/User'); // Import the User model

// Registration route
router.post('/register', async (req, res) => {
    console.log('Register route hit');
    const { username, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        // Create a new user
        const newUser = new User({ username, email, password });
        
        // Save the user to the database
        await newUser.save();

        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).send('Server error');
    }
});

// Login route (for completeness, though registration logic should be included here)
router.post('/login', async (req, res) => {
    console.log('Login route hit');
    // Implement login logic here
    try {
        // Login logic here
        res.status(200).send('User logged in successfully');
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send('Server error');
    }
});

module.exports = router;

