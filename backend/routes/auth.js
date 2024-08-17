// backend/routes/auth.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user instance
        const newUser = new User({ firstName, lastName, email, password });

        // Hash the user's password before saving to the database
        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        // Save the new user to the database
        await newUser.save();

        // Generate a JWT token for the new user
        const token = jwt.sign({ id: newUser._id }, 'yourSecretKey', { expiresIn: '1h' });

        // Return the token and user data
        res.json({ token, user: { id: newUser._id, firstName, lastName, email } });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare the provided password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate a JWT token for the logged-in user
        const token = jwt.sign({ id: user._id }, 'yourSecretKey', { expiresIn: '1h' });

        // Return the token and user data
        res.json({ token, user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email } });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
